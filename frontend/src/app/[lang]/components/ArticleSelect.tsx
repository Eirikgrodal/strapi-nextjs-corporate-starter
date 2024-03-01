import Link from "next/link";
import { getStrapiMedia } from "../utils/api-helpers";
import Image from "next/image";

interface Category {
  id: number;
  attributes: {
    name: string;
    slug: string;
    articles: {
      data: Array<{}>;
    };
  };
}

interface Article {
  id: number;
  attributes: {
    title: string;
    slug: string;
    description: string;
    cover: {
      data: {
        attributes: {
          url: string;
          alternativeText: string;
        };
      };
    };
    categories: {
      data: Category[];
    };
  };
}

function selectedFilter(current: string, selected: string) {
  return current === selected
    ? "px-3 py-1 rounded-lg hover:underline dark:bg-violet-700 dark:text-gray-100"
    : "px-3 py-1 rounded-lg hover:underline dark:bg-violet-400 dark:text-gray-900";
}

export default function ArticleSelect({
  categories,
  articles,
  params,
}: {
  categories: Category[];
  articles: Article[];
  params: {
    slug: string;
    category: string;
  };
}) {
  function Article({
    title,
    description,
    slug,
    cover,
    categories,
  }: Article["attributes"]) {
    const imgUrl = getStrapiMedia(cover?.data.attributes.url);
    return (
      <Link
        href={`/blog/${categories?.data[0]?.attributes?.slug}/${slug}`}
        // target={newTab ? "_blank" : "_self"}
        className="flex flex-col  p-4 bg-[#0E193F] justify-start rounded-2xl"
      >
        <div className="relative rounded-t-lg w-full overflow-hidden">
          <Image
            src={imgUrl || ""}
            alt={cover?.data.attributes.alternativeText || "none provided"}
            className="aspect-[16/9] w-full  bg-gray-100 sm:aspect-[2/1] lg:aspect-[3/2] object-cover object-top "
            width={600}
            height={600}
          />
        </div>
        <div className=" mt-4 flex-wrap flex gap-1 ">
          {categories?.data.map((category: Category) => (
            <div
              key={category.id}
              className="px-2 py-1 bg-Gold hover:bg-darkGold rounded-sm"
            >
              <p className="text-sm text-white font-semibold">
                {category.attributes.name}
              </p>
            </div>
          ))}
        </div>
        <h3 className="my-3 text-3xl font-semibold">{title}</h3>
        <div className="space-y-1 leading-tight my-6">
          <p>{description}</p>
        </div>
      </Link>
    );
  }

  return (
    <section className=" py-24 sm:py-32">
      <div className="mx-auto max-w-7xl px-6 lg:px-8">
        <div className="container mx-auto py-4 space-y-2 text-center">
          <h2 className="text-3xl font-bold tracking-tight  sm:text-5xl">
            See more of my portfolio
          </h2>
        </div>
        <div className="mx-auto mt-16 grid max-w-3xl grid-cols-1 gap-x-8 gap-y-20 lg:mx-0 lg:max-w-none md:grid-cols-2 lg:grid-cols-3">
          {params.slug && articles[0].attributes.slug
            ? articles
                .filter((article: Article) => article.attributes.slug !== params.slug)
                .slice(0, 3)
                .map((article: Article, index: number) => (
                  <Article key={index} {...article.attributes} />
                ))
            : null}
        </div>
      </div>
    </section>
  );
}


