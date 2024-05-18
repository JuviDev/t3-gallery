import { clerkClient } from "@clerk/nextjs/server";
import Image from "next/image";
import { Button } from "~/components/ui/button";
import { deleteImage, getImage } from "~/server/queries";

export async function FullPageImageView(props: { id: string }) {
  const idAsNumber = Number(props.id);
  if (Number.isNaN(idAsNumber)) throw new Error("Invalid photo id");

  const image = await getImage(idAsNumber);
  const userInfo = await clerkClient.users.getUser(image.userId);

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
      <div className="flex w-48 flex-shrink-0 flex-col gap-2 border-l">
        <div className="border-b p-2 text-center text-lg">{image.name}</div>

        <div className="flex flex-col px-2">
          <span>Uploaded By:</span>
          <span>{userInfo.fullName}</span>
        </div>

        <div className="flex flex-col px-2">
          <span>Created On:</span>
          <span>{image.createdAt.toLocaleDateString()}</span>
        </div>

        <div className="p-2">
          <form
            action={async () => {
              "use server";

              await deleteImage(idAsNumber);
            }}
          >
            <Button type="submit" variant="destructive">
              Delete
            </Button>
          </form>
        </div>
      </div>
    </div>
  );
}
