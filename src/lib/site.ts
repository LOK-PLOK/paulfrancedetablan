// Canonical origin (no trailing slash). NEXT_PUBLIC_SITE_URL overrides it at build time; new URL() fails the build on a malformed value.
export const siteUrl = new URL(process.env.NEXT_PUBLIC_SITE_URL || "https://paulfrancedetablan.com").origin;
