import Image from "next/image";
import Link from "next/link";
import { getStrapiMedia, formatDate } from "../utils/api-helpers";

interface Article {
  id: number;
  attributes: {
    title: string;
    description: string;
    slug: string;
    createdAt: string;
    updatedAt: string;
    publishedAt: string;
    cover: {
      data: {
        attributes: {
          url: string;
        };
      };
    };
    categories: {
      data: Category[];
    };
    authorsBio: {
      data: {
        attributes: {
          name: string;
          avatar: {
            data: {
              attributes: {
                url: string;
              };
            };
          };
        };
      };
    };
  };
}

interface Category {
  id: number;
  attributes: {
    name: string;
    slug: string;
  };
}

export default function PostList({
  data: articles,
  children,
}: {
  data: Article[];
  children?: React.ReactNode;
}) {
  console.log(articles);
  return (
    <section className="py-12 sm:py-20 bg-lightBackground">
      <div className="container  p-6 mx-auto space-y-6 sm:space-y-12">
        <div className="grid justify-center grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {articles.map((article) => {
            const imageUrl = getStrapiMedia(
              article.attributes.cover.data?.attributes.url
            );

            return (
              <Link
                href={`/blog/${article.attributes.categories?.data[0]?.attributes?.slug}/${article.attributes.slug}`}
                // target={newTab ? "_blank" : "_self"}
                className="flex flex-col  p-4 bg-darkBlueNew justify-start rounded-2xl"
              >
                <div className="relative rounded-t-lg w-full overflow-hidden">
                  <Image
                    src={imageUrl || ""}
                    alt="presentation"
                    className="aspect-[16/9] w-full  bg-gray-100 sm:aspect-[2/1] lg:aspect-[3/2] object-cover object-top "
                    width={600}
                    height={600}
                  />
                </div>
                <div className=" mt-4 flex flex-wrap gap-1 ">
                  {article.attributes.categories?.data?.map(
                    (category: Category) => (
                      <div
                        key={category.id}
                        className="px-2 py-1 bg-Gold hover:bg-darkGold rounded-sm"
                      >
                        <p className="text-sm text-white font-semibold">
                          {category.attributes.name}
                        </p>
                      </div>
                    )
                  )}
                </div>
                <h3 className="my-3 text-3xl font-semibold">
                  {article.attributes.title}
                </h3>
                <div className="space-y-1 leading-tight my-6">
                  <p>{article.attributes.description}</p>
                </div>
              </Link>
            );
          })}
        </div>
        {children && children}
      </div>
    </section>
  );
}
