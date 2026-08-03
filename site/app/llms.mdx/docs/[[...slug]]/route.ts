import { source } from "@/lib/source";
import { notFound } from "next/navigation";

interface RouteProps {
  params: Promise<{ slug?: string[] }>;
}

/** Pre-render each guide's Markdown representation at build time. */
export const revalidate = false;

/** Serve the processed Markdown for a guide page. */
export async function GET(_request: Request, { params }: RouteProps) {
  const { slug } = await params;
  const page = source.getPage(slug);

  if (!page) notFound();

  const markdown = await page.data.getText("processed");

  return new Response(`# ${page.data.title}\n\n${markdown}`, {
    headers: {
      "Content-Type": "text/markdown; charset=utf-8",
    },
  });
}

/** Return every guide slug for static generation. */
export function generateStaticParams() {
  return source.generateParams();
}
