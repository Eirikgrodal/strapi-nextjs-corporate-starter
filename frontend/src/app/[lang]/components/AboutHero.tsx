interface AboutHeroProps {
    data: {
        title: string;
        paragraph: string;
    };
}

export default function AboutHero({ data }: AboutHeroProps) {
  return (
    <>
      <section className="  px-6 py-24 pt-12 md:py-32 lg:px-8">
        <div className="mx-auto max-w-2xl text-center">
          <h1 className="text-4xl font-bold tracking-tight  sm:text-6xl">
            {data.title}
          </h1>
          <p className="mt-6 text-lg leading-8 text-lightBlueNew">
            {data.paragraph}
          </p>
        </div>
      </section>
    </>
  );
}
