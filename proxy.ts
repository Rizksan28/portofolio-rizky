import { NextResponse } from "next/server";
import type { NextRequest } from "next/server";
import { awards, projects } from "@/lib/data";

const projectSlugs = new Set(projects.map((p) => p.slug));
const awardSlugs = new Set(awards.map((a) => a.slug));

// Cache Components streams the shell before notFound() runs, so unknown slugs would answer 200.
export function proxy(request: NextRequest) {
  const [, section, slug] = request.nextUrl.pathname.split("/");
  const known = section === "projects" ? projectSlugs : awardSlugs;
  if (slug && !known.has(slug)) {
    return NextResponse.rewrite(new URL("/_archive-not-found", request.url));
  }
  return NextResponse.next();
}

export const config = {
  matcher: ["/projects/:slug", "/achievements/:slug"],
};
