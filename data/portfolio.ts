export type Video = { title: string; category: string; style: string; client?: string; videoUrl?: string; embedUrl?: string; sourceUrl?: string; poster?: string; metric?: string };
// Replace videoUrl with a local /videos/... asset or direct MP4 URL when cleared for use.
export const videos: Video[] = [
  { title: "SaaS video 1", category: "AI & SaaS", style: "TikTok · SaaS content", embedUrl: "https://www.tiktok.com/player/v1/7432090393568677127?controls=1&description=1", sourceUrl: "https://www.tiktok.com/@ugc_mia/video/7432090393568677127" },
  { title: "A better way to plan your day", category: "Tech & Apps", style: "App demo · Lifestyle" },
  { title: "The routine my sensitive skin loves", category: "Beauty & Skincare", style: "First-person testimonial" },
  { title: "Small habits, big energy", category: "Health & Wellness", style: "Educational · Voiceover" },
  { title: "Get ready with me", category: "Fashion & Lifestyle", style: "GRWM · Product feature" },
  { title: "A weekend in the mountains", category: "Travel & Food", style: "Travel diary · Storytelling" },
  { title: "Three tips you might have missed", category: "Tech & Apps", style: "Tips & tricks · Tutorial" },
  { title: "A little product unboxing", category: "Beauty & Skincare", style: "Unboxing · Organic testimonial" },
];
export const photos = ["Lifestyle", "Product photography", "Beauty", "Fashion", "Travel", "Food", "Outdoor adventures"];
export const categories = ["All Videos", "Tech & Apps", "AI & SaaS", "Beauty & Skincare", "Health & Wellness", "Fashion & Lifestyle", "Travel & Food"];
