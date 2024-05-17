import Image from "next/image";
import { getImage } from "~/server/queries";

export async function FullPageImageView(props: { id: string }) {
  const idAsNumber = Number(props.id);
  if (Number.isNaN(idAsNumber)) throw new Error("Invalid photo id");

  const image = await getImage(idAsNumber);

  return (
    <div className="flex h-full w-full min-w-0 ">
      <div className="relative size-full">
        <Image
          src={image.url}
          fill
          priority
          className="object-contain"
          alt={image.name}
        />
      </div>
      <div className="flex w-48 flex-shrink-0 flex-col">
        <div className="text-xl font-bold">{image.name}</div>
      </div>
    </div>
  );
}
