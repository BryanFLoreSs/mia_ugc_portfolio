import { ImageResponse } from "next/og";
export const size = { width: 1200, height: 630 };
export const contentType = "image/png";
export default function OpenGraphImage() {
  return new ImageResponse(<div style={{ width: "100%", height: "100%", background: "#f6f1e9", display: "flex", padding: "72px", color: "#201f1b", fontFamily: "Georgia, serif", flexDirection: "column", justifyContent: "space-between" }}><div style={{ display: "flex", fontSize: 26, fontFamily: "Arial", letterSpacing: "3px" }}>UGC <span style={{ color: "#b8483d", fontStyle: "italic" }}>MIA</span></div><div style={{ display: "flex", flexDirection: "column", fontSize: 88, lineHeight: 1.02, letterSpacing: "-5px" }}><span>YOUR NEXT FAVORITE</span><span style={{ color: "#b8483d", fontStyle: "italic" }}>CONTENT CREATOR.</span></div><div style={{ display: "flex", fontSize: 22, fontFamily: "Arial", color: "#77736c", letterSpacing: "2px" }}>GEN Z UGC CREATOR · MALAYBALAY, PHILIPPINES</div></div>, size);
}
