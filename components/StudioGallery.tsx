import Image from "next/image";

const studioImages = [
  {
    src: "/assets/studio/500781.jpg",
    alt: "Two guests seated together for a studio conversation",
    title: "Studio conversations",
    placement: "col-span-2 row-span-2 lg:col-span-3",
  },
  {
    src: "/assets/studio/485746.jpg",
    alt: "Portrait of a guest captured at Elim Studio",
    title: "Portraits with presence",
    placement: "col-span-1 row-span-2 lg:col-span-1",
  },
  {
    src: "/assets/studio/500784.jpg",
    alt: "Two guests sharing a relaxed moment in the studio",
    title: "Stories worth sharing",
    placement: "col-span-1 row-span-2 lg:col-span-2",
  },
  {
    src: "/assets/studio/500799.jpg",
    alt: "A group of guests together at Elim Studio",
    title: "The people behind the stories",
    placement: "col-span-2 row-span-1 lg:col-span-3",
  },
  {
    src: "/assets/studio/500786.jpg",
    alt: "A guest captured during a studio visit",
    title: "Moments in the making",
    placement: "col-span-1 row-span-1",
  },
  {
    src: "/assets/studio/500808.jpg",
    alt: "A guest celebrating a special moment at the studio",
    title: "Made to be remembered",
    placement: "col-span-1 row-span-1 lg:col-span-2",
  },
];

export function StudioGallery() {
  return (
    <section
      id="studio-gallery"
      className="scroll-mt-24 bg-brand-accent px-6 py-24 dark:bg-[#0d111a] sm:px-10 lg:px-12 lg:py-32"
    >
      <div className="mx-auto max-w-7xl">
        <div className="mb-12 flex flex-col justify-between gap-6 md:flex-row md:items-end">
          <div>
            <p className="text-xs font-bold uppercase tracking-[0.24em] text-brand-red">
              Elim Studio / In frames
            </p>
            <h2 className="mt-4 text-4xl font-bold tracking-tight text-brand-blue dark:text-white sm:text-5xl">
              Stories, faces &amp; studio moments.
            </h2>
          </div>
          <p className="max-w-md leading-7 text-muted-foreground">
            A glimpse of the people, conversations, and moments we get to bring
            to life together.
          </p>
        </div>

        <div className="grid auto-rows-[150px] grid-cols-2 gap-3 sm:auto-rows-[185px] sm:grid-cols-4 sm:gap-4 lg:auto-rows-[200px] lg:grid-cols-6 lg:gap-5">
          {studioImages.map((image, index) => (
            <figure
              key={image.src}
              className={`group relative isolate overflow-hidden rounded-2xl bg-muted ring-1 ring-black/5 sm:rounded-3xl ${image.placement}`}
            >
              <Image
                src={image.src}
                alt={image.alt}
                fill
                sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 33vw"
                className="object-cover transition-transform duration-700 ease-out group-hover:scale-105 motion-reduce:transition-none motion-reduce:group-hover:scale-100"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/5 to-transparent opacity-90 transition-opacity duration-500 group-hover:opacity-100" />
              <figcaption className="absolute inset-x-0 bottom-0 p-4 text-white sm:p-5">
                <p className="text-[10px] font-semibold uppercase tracking-[0.22em] text-brand-gold sm:text-xs">
                  Elim Studio · 0{index + 1}
                </p>
                <h3 className="mt-1 text-sm font-semibold sm:text-lg">
                  {image.title}
                </h3>
              </figcaption>
            </figure>
          ))}
        </div>
      </div>
    </section>
  );
}
