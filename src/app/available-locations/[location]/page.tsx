import { generateStaticParams } from "./location-data";
import LocationDetailsPageClient from "./page-client";

// Export generateStaticParams for static export
export { generateStaticParams };

export default function LocationDetailsPage({ params }: { params: { location: string } }) {
  return <LocationDetailsPageClient locationSlug={params.location} />;
}
