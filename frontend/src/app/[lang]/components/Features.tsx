import Link from "next/link";
import Image from "next/image";
import { getStrapiMedia } from "../utils/api-helpers";

interface FeaturesProps {
  data: {
    heading: string;
    description: string;
    feature: Feature[];
  };
}

interface Media {
  data: {
    id: string;
    attributes: {
      url: string;
      name: string;
      alternativeText: string;
    };
  };
}

interface Feature {
  id: string;
  title: string;
  description: string;
  media: Media;
  showLink: boolean;
  newTab: boolean;
  url: string;
  text: string;
}

function Feature({ title, description, showLink, newTab, url, text, media }: Feature) {
  const imgUrl = getStrapiMedia(media.data.attributes.url);
  return (
    <Link
      href={{ pathname: url }}
      target={newTab ? "_blank" : "_self"}
      className="flex flex-col  p-4 bg-darkBlueNew justify-start rounded-2xl"
    >
      <div className="relative rounded-t-lg w-full overflow-hidden">
        <Image
          src={imgUrl || ""}
          alt={media.data.attributes.alternativeText || "none provided"}
          className="aspect-[16/9] w-full  bg-gray-100 sm:aspect-[2/1] lg:aspect-[3/2] object-cover object-top "
          width={600}
          height={600}
        />
      </div>
      <h3 className="my-3 text-3xl font-semibold">{title}</h3>
      <div className="space-y-1 leading-tight my-6">
        <p>{description}</p>
      </div>
      {showLink && url && text && (
        <div>
          <Link
            href={url}
            target={newTab ? "_blank" : "_self"}
            className="inline-block px-4 py-2 mt-4 text-sm font-semibold text-white transition duration-200 ease-in-out bg-violet-500 rounded-lg hover:bg-violet-600"
          >
            {text}
          </Link>
        </div>
      )}
    </Link>
  );
}

export default function Features({ data }: FeaturesProps) {
  return (
    <section className=" bg-lightBackground m:py-12 lg:py-24">
      <div className="mx-auto max-w-7xl px-6 lg:px-8">
        <div className="container mx-auto py-4 space-y-2 text-center">
          <h2 className="text-3xl font-bold tracking-tight  sm:text-4xl">
            {data.heading}
          </h2>
          <p className="mt-2 text-lg leading-8 text-lightBlueNew">
            {data.description}
          </p>
        </div>
        <div className="mx-auto mt-16 grid max-w-2xl grid-cols-1 gap-x-8 gap-y-20 lg:mx-0 lg:max-w-none lg:grid-cols-3">
          {data.feature.map((feature: Feature, index: number) => (
            <Feature key={index} {...feature} />
          ))}
        </div>
      </div>
    </section>
  );
}
