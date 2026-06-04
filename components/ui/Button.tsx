import Link from "next/link";
import React from "react";

type Variant = "primary" | "outline" | "ghost";
type Size = "default" | "hero";

const base =
  "inline-flex items-center justify-center gap-3 rounded-full font-semibold transition disabled:cursor-not-allowed disabled:opacity-50";

const variants: Record<Variant, string> = {
  primary:
    "bg-black text-white hover:opacity-85 hover:-translate-y-px",
  outline:
    "border-[1.5px] border-black text-black hover:bg-black hover:text-white",
  ghost: "text-black/70 hover:text-black",
};

const sizes: Record<Size, string> = {
  default: "px-6 py-3 text-sm",
  hero: "px-8 py-4 text-[15px]",
};

type CommonProps = {
  variant?: Variant;
  size?: Size;
  className?: string;
  children: React.ReactNode;
};

type ButtonAsButton = CommonProps &
  React.ButtonHTMLAttributes<HTMLButtonElement> & { href?: undefined };
type ButtonAsLink = CommonProps & { href: string };

export default function Button(props: ButtonAsButton | ButtonAsLink) {
  const { variant = "primary", size = "default", className = "", children } = props;
  const cls = `${base} ${variants[variant]} ${sizes[size]} ${className}`;

  if ("href" in props && props.href) {
    return (
      <Link href={props.href} className={cls}>
        {children}
      </Link>
    );
  }

  const { variant: _v, size: _s, className: _c, children: _ch, href: _h, ...rest } =
    props as ButtonAsButton & { href?: undefined };
  void _v, _s, _c, _ch, _h;
  return (
    <button className={cls} {...rest}>
      {children}
    </button>
  );
}
