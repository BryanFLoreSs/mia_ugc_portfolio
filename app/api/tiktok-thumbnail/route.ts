import { NextRequest, NextResponse } from "next/server";

export async function GET(request: NextRequest) {
  const source = request.nextUrl.searchParams.get("url");
  if (!source) return NextResponse.json({ error: "A TikTok video URL is required." }, { status: 400 });
  let parsed: URL;
  try { parsed = new URL(source); } catch { return NextResponse.json({ error: "Invalid video URL." }, { status: 400 }); }
  if (parsed.protocol !== "https:" || parsed.hostname !== "www.tiktok.com" || !/^\/@[\w.]+\/video\/\d+\/?$/.test(parsed.pathname)) {
    return NextResponse.json({ error: "Only standard TikTok video URLs are supported." }, { status: 400 });
  }
  try {
    const response = await fetch(`https://www.tiktok.com/oembed?url=${encodeURIComponent(parsed.origin + parsed.pathname)}`, { next: { revalidate: 86400 }, headers: { Accept: "application/json" } });
    if (!response.ok) return NextResponse.json({ error: "TikTok thumbnail is unavailable." }, { status: 502 });
    const metadata = await response.json();
    const thumbnailUrl = typeof metadata.thumbnail_url === "string" ? metadata.thumbnail_url : "";
    if (!thumbnailUrl.startsWith("https://")) return NextResponse.json({ error: "TikTok did not return a thumbnail." }, { status: 502 });
    return NextResponse.json({ thumbnailUrl }, { headers: { "Cache-Control": "public, max-age=3600, stale-while-revalidate=86400" } });
  } catch { return NextResponse.json({ error: "TikTok thumbnail is unavailable." }, { status: 502 }); }
}
