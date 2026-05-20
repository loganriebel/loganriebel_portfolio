import { profile } from "@/data/profile";
import { siteUrl } from "@/lib/site";

export function PersonSchema() {
  const schema = {
    "@context": "https://schema.org",
    "@type": "Person",
    name: profile.name,
    url: siteUrl,
    jobTitle: profile.title,
    email: profile.email,
    sameAs: [profile.linkedin, profile.github]
  };

  return (
    <script
      type="application/ld+json"
      dangerouslySetInnerHTML={{ __html: JSON.stringify(schema) }}
    />
  );
}
