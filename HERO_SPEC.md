# Carbon Labs — Hero Redesign Spec (Staggered Product Reveal)

> Claude Code 작업용 스펙. 기존 `HeroSection.tsx`를 이 스펙대로 **교체**한다.
> 핵심: 사람 사진 페이드인이 아니라, **실제 제품 바이알 3개가 겹쳐서(fanned) 하나씩 순차적으로 등장**하는 시네마틱 히어로.

---

## 0. 먼저: 이미지 에셋 저장 (수동 1회)

사용자가 보낸 3개의 제품 바이알 PNG(투명 배경)를 아래 경로/이름으로 저장한다:

```
public/products/glutathione.png   ← GLUTATHIONE 1500MG
public/products/igf-1-lr3.png     ← IGF-1 LR3 1MG
public/products/glp-3rt.png       ← GLP-3RT 10MG
```

- 전부 **배경 투명 PNG**, 세로형 바이알, 동일한 조명/촬영각.
- 파일이 없을 경우 컴포넌트는 `onError`로 `https://placehold.co/480x720/0a0a0a/ffffff?text=Carbon+Labs` placeholder를 띄운다(레이아웃 안 깨지게).

---

## 1. 디자인 목표

- **톤**: 프리미엄 제약/연구 그레이드. 미니멀, 블랙/실버 라벨 제품이 주인공.
- **느낌**: 스튜디오 스포트라이트 위에 제품 3개가 부채꼴(fan)로 겹쳐 서 있고, **왼쪽 → 중앙 → 오른쪽** 순서로 하나씩 떠오르며 자리잡음. 등장 후 미세하게 둥둥(float).
- 기존 디자인 시스템(`globals.css`의 토큰, Syne/Manrope 폰트) 그대로 사용.

---

## 2. 배경 & 무대

- 섹션 높이: `min-h-[calc(100vh-4rem)]` (navbar 64px 제외), `relative overflow-hidden`.
- 배경: 부드러운 라이트 스튜디오.
  - 베이스: `bg-white`
  - 중앙 스포트라이트: 라디얼 그라데이션 오버레이
    `radial-gradient(60% 60% at 50% 38%, #f4f4f5 0%, #ffffff 70%)`
  - 제품 발밑 그림자: 가로로 긴 타원 `bg-black/10 blur-2xl` (vial 묶음 아래 absolute).
- 상단/하단에 얇은 카피(왼쪽 위 eyebrow, 하단 메타) — 미니멀리스트 히어로 구조 차용.

---

## 3. 레이아웃 (ASCII)

```
┌───────────────────────────────────────────────────────────┐
│  RESEARCH USE ONLY · 99% PURITY            (eyebrow, 좌상단) │
│                                                             │
│                                                             │
│                 ┌──────┐                                    │
│        ┌──────┐ │  중앙 │ ┌──────┐                          │
│        │ 좌측 │ │ (앞) │ │ 우측 │      ← 3개 바이알 부채꼴 겹침 │
│        └──────┘ └──────┘ └──────┘                          │
│              ░░░ ground shadow ░░░                          │
│                                                             │
│        Precision peptides,                                  │
│        proven pure.                          (headline)     │
│        99%+ identity purity · COA every batch  (sub)        │
│        [ Browse Catalog → ]                   (CTA)         │
│                                                             │
│  ⌀ social/icons (선택)              USA · Lab-tested  (메타) │
└───────────────────────────────────────────────────────────┘
```

데스크탑: 제품 묶음이 화면 중앙 상단, 그 아래 헤드라인+CTA 중앙 정렬.
(원하면 좌측 텍스트 / 우측 제품 2-컬럼 변형도 가능하지만 기본은 **센터 스테이지**.)

---

## 4. 제품 3개 배치 (부채꼴 / 겹침)

`relative` 컨테이너 안에 3개를 배치. 가운데가 앞(z-30), 양옆이 뒤(z-20).

| 위치 | 이미지 | 높이(데스크탑) | transform | z-index |
|---|---|---|---|---|
| 좌측 | glutathione.png | `h-[320px] md:h-[420px]` | `translateX(58%)` 기준 왼쪽으로 `-translate-x-[58%] rotate-[-13deg] translate-y-6` | z-20 |
| 중앙 | igf-1-lr3.png | `h-[380px] md:h-[500px]` | `rotate-0`, 앞쪽 | z-30 |
| 우측 | glp-3rt.png | `h-[320px] md:h-[420px]` | `translate-x-[58%] rotate-[13deg] translate-y-6` | z-20 |

- 좌/우는 절대배치(`absolute bottom-0 left-1/2`)로 중앙과 밑단을 맞추고 서로 **가장자리가 겹치게**.
- 각 바이알에 `drop-shadow-2xl`로 입체감.
- 중앙이 가장 크고 가장 앞.

---

## 5. 애니메이션 (Framer Motion) — "하나씩" 핵심

### 5-1. 부모 컨테이너 (stagger)
```ts
const stage = {
  hidden: {},
  visible: {
    transition: { staggerChildren: 0.28, delayChildren: 0.15 },
  },
};
```
자식 등장 순서를 **좌 → 중앙 → 우**로 만들려면 JSX에서 그 순서로 렌더하거나,
각 child에 `custom` index를 주고 `delay: i * 0.28`로 제어한다.

### 5-2. 각 바이알 등장 (아래에서 떠오르며 페이드 + 살짝 스케일)
```ts
const vialReveal = {
  hidden: { opacity: 0, y: 70, scale: 0.92 },
  visible: {
    opacity: 1,
    y: 0,
    scale: 1,
    transition: { duration: 0.9, ease: [0.22, 1, 0.36, 1] },
  },
};
```

### 5-3. 등장 후 둥둥(float) — entrance와 분리(중첩 motion)
바깥 `motion.div`는 `vialReveal`(등장), 안쪽 `motion.div`는 무한 float:
```ts
const float = (delay: number) => ({
  y: [0, -10, 0],
  transition: { duration: 4.5, repeat: Infinity, ease: "easeInOut", delay },
});
```
- 좌/중/우 float `delay`를 `0 / 0.6 / 1.2`로 어긋나게 → 살아있는 느낌.

### 5-4. 텍스트/CTA
- eyebrow, headline, sub, CTA는 `opacity/y` 페이드업, `delay`를 제품보다 뒤(예: 1.0s~1.4s)로 줘서 **제품이 먼저, 글자가 나중**에 들어오게.

### 5-5. 접근성
- `prefers-reduced-motion`이면 stagger/float 끄고 즉시 표시.

---

## 6. 카피 (펩타이드 브랜드 wording)

- **eyebrow**: `RESEARCH USE ONLY · 99% IDENTITY PURITY`
- **headline (Syne 800)**: `Precision peptides,` / `proven pure.`
- **sub (Manrope)**: `Research-grade peptides with a Certificate of Analysis on every batch. Third-party identity tested, USA sourced.`
- **CTA (pill, black)**: `Browse Catalog →` → `/store`
- **하단 메타 좌/우**: 좌 `Carbon Labs` · 우 `USA · Lab-tested · COA included`

---

## 7. 구현 컴포넌트 골격 (`components/HeroProducts.tsx`)

```tsx
"use client";

import { motion, type Variants, type TargetAndTransition } from "framer-motion";
import Link from "next/link";

const VIALS = [
  { src: "/products/glutathione.png", alt: "Carbon Labs Glutathione 1500mg",
    cls: "absolute bottom-0 left-1/2 z-20 h-[320px] md:h-[420px] -translate-x-[108%] rotate-[-13deg] translate-y-6", floatDelay: 0 },
  { src: "/products/igf-1-lr3.png", alt: "Carbon Labs IGF-1 LR3 1mg",
    cls: "relative z-30 h-[380px] md:h-[500px]", floatDelay: 0.6 },
  { src: "/products/glp-3rt.png", alt: "Carbon Labs GLP-3RT 10mg",
    cls: "absolute bottom-0 left-1/2 z-20 h-[320px] md:h-[420px] translate-x-[8%] rotate-[13deg] translate-y-6", floatDelay: 1.2 },
];

const stage: Variants = {
  hidden: {},
  visible: { transition: { staggerChildren: 0.28, delayChildren: 0.15 } },
};
const vialReveal: Variants = {
  hidden: { opacity: 0, y: 70, scale: 0.92 },
  visible: { opacity: 1, y: 0, scale: 1, transition: { duration: 0.9, ease: [0.22, 1, 0.36, 1] } },
};
const float = (delay: number): TargetAndTransition => ({
  y: [0, -10, 0],
  transition: { duration: 4.5, repeat: Infinity, ease: "easeInOut", delay },
});
const textUp: Variants = {
  hidden: { opacity: 0, y: 24 },
  visible: (d: number) => ({ opacity: 1, y: 0, transition: { duration: 0.7, ease: "easeOut", delay: d } }),
};

export default function HeroProducts() {
  return (
    <section className="relative flex min-h-[calc(100vh-4rem)] w-full flex-col items-center justify-center overflow-hidden bg-white px-6 py-16">
      {/* spotlight */}
      <div className="pointer-events-none absolute inset-0"
           style={{ background: "radial-gradient(60% 60% at 50% 38%, #f4f4f5 0%, #ffffff 70%)" }} />

      <p className="eyebrow absolute left-6 top-6 md:left-12">Research use only · 99% identity purity</p>

      {/* product stage */}
      <motion.div variants={stage} initial="hidden" animate="visible"
                  className="relative flex h-[420px] w-full max-w-3xl items-end justify-center md:h-[540px]">
        {/* ground shadow */}
        <div className="absolute bottom-6 left-1/2 h-8 w-[60%] -translate-x-1/2 rounded-[50%] bg-black/10 blur-2xl" />
        {VIALS.map((v) => (
          <motion.div key={v.src} variants={vialReveal} className={v.cls}>
            <motion.img src={v.src} alt={v.alt} animate={float(v.floatDelay)}
              className="h-full w-auto object-contain drop-shadow-2xl"
              onError={(e) => {
                const t = e.currentTarget; t.onerror = null;
                t.src = "https://placehold.co/480x720/0a0a0a/ffffff?text=Carbon+Labs";
              }} />
          </motion.div>
        ))}
      </motion.div>

      {/* copy */}
      <motion.div initial="hidden" animate="visible" className="relative z-10 mt-8 text-center">
        <motion.h1 variants={textUp} custom={1.0}
          className="font-display text-5xl font-extrabold leading-[1.05] tracking-tight text-black md:text-7xl">
          Precision peptides,<br />proven pure.
        </motion.h1>
        <motion.p variants={textUp} custom={1.15}
          className="mx-auto mt-4 max-w-md text-base leading-relaxed text-gray-600">
          Research-grade peptides with a Certificate of Analysis on every batch.
          Third-party identity tested, USA sourced.
        </motion.p>
        <motion.div variants={textUp} custom={1.3} className="mt-7">
          <Link href="/store"
            className="inline-flex items-center gap-3 rounded-full bg-black px-8 py-4 text-[15px] font-semibold text-white transition hover:opacity-85 hover:-translate-y-px">
            Browse Catalog <span aria-hidden>→</span>
          </Link>
        </motion.div>
      </motion.div>

      <div className="absolute bottom-6 left-6 right-6 z-10 flex items-center justify-between text-xs font-medium text-gray-600 md:left-12 md:right-12">
        <span className="font-display font-bold">carbon<span className="opacity-40">labs</span></span>
        <span>USA · Lab-tested · COA included</span>
      </div>
    </section>
  );
}
```

> 참고: 위 `-translate-x-[108%]` / `translate-x-[8%]`는 좌·우 바이알이 중앙과 겹치도록 한 예시값.
> 실제 이미지 비율 보고 `translate-x`, `rotate`, `h-*`를 미세조정해 가장자리가 자연스럽게 겹치게 맞춘다.

---

## 8. 통합 단계

1. 이미지 3개를 `public/products/`에 저장(섹션 0).
2. `components/HeroProducts.tsx` 생성(섹션 7).
3. `app/page.tsx`에서 `HeroSection` → `HeroProducts`로 교체:
   ```tsx
   import HeroProducts from "@/components/HeroProducts";
   // ...
   <HeroProducts />   // 기존 <HeroSection /> 자리
   ```
4. `npm run build`로 타입/빌드 확인 → 데브서버에서 등장 순서(좌→중→우)와 float 확인.
5. 겹침·회전·크기 미세조정.

---

## 9. 반응형

- 모바일(<768px): 제품 높이 축소(`h-[300px]` 중앙, `h-[230px]` 좌우), 회전·겹침은 유지하되 `translate-x` 폭 줄임. 헤드라인 `text-5xl`.
- 모션은 동일하되 float 진폭 `-8px`로 약간 축소.

---

## 10. 품질 체크리스트

- [ ] 3개가 **동시에**가 아니라 **하나씩**(stagger 0.28s) 등장하는가
- [ ] 등장 순서 좌 → 중앙 → 우, 중앙이 가장 크고 앞(z-30)인가
- [ ] 등장 후 각자 다른 타이밍으로 float 하는가
- [ ] 텍스트가 제품보다 **뒤에** 들어오는가
- [ ] 투명 PNG라 배경이 흰 스튜디오에 자연스럽게 얹히는가
- [ ] `prefers-reduced-motion`에서 즉시 표시되는가
