import { defineCloudflareConfig } from "@opennextjs/cloudflare";

export default defineCloudflareConfig({
  // No incremental cache / queue configured yet — this UI-only site doesn't
  // need ISR. Add an R2/KV incremental cache here later if you enable ISR.
});
