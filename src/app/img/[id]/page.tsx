import { FullPageImageView } from "~/common/full-page-image-view";

export default function PhotoPage({
  params: { id: photoId },
}: {
  params: { id: string };
}) {
  return (
    <div className="h-full">
      <FullPageImageView id={photoId} />
    </div>
  );
}
