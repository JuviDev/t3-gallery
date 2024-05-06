import { db } from "~/server/db";

export const dynamic = "force-dynamic";

export default async function HomePage() {
  const images = await db.query.images.findMany({
    orderBy: (model, { desc }) => desc(model.id),
  });

  return (
    <main className="">
      <div className="flex flex-wrap gap-4">
        {[...images, ...images, ...images].map((image, index) => (
          <div key={image.id + "-" + index} className="flex w-48 flex-col">
            <picture>
              <source type="image/webp" srcSet={`${image.url}?format=webp`} />
              <img
                src={`${image.url}?format=jpeg`}
                alt="mock image"
                className="h-48 w-full object-cover"
              />
            </picture>
            <div>
              <p>{image.name}</p>
            </div>
          </div>
        ))}
      </div>
    </main>
  );
}
