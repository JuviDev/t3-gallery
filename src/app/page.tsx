const mockUrls = [
  "https://utfs.io/f/623b6961-85b9-41ff-a073-d740c55a3d93-1psigh.jpg",
  "https://utfs.io/f/d8d986df-16fd-4c90-ae24-a1a834588487-komxmc.png",
  "https://utfs.io/f/bb9a74f1-5fec-4bbc-9705-f7bc567ab1ab-snoqzm.jpg",
];

const mockImages = mockUrls.map((url, index) => ({ id: index + 1, url }));

export default function HomePage() {
  return (
    <main className="">
      <div className="flex flex-wrap gap-4">
        {[...mockImages, ...mockImages, ...mockImages].map((image) => (
          <div key={image.id} className="w-48">
            <picture>
              <source type="image/webp" srcSet={`${image.url}?format=webp`} />
              <img
                src={`${image.url}?format=jpeg`}
                alt="mock image"
                className="h-48 w-full object-cover"
              />
            </picture>
          </div>
        ))}
      </div>
    </main>
  );
}
