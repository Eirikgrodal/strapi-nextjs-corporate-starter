import Link from "next/link";
import Image from "next/image";
import { getStrapiMedia } from "../utils/api-helpers";
import { fetchAPI } from "../utils/fetch-api";
import ArticleSelect from "./ArticleSelect";




interface ArticleData {
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
                id: number;
                attributes: {
                    url: string;
                    alternativeText: string;
                    caption: string | null;
                    width: number;
                    height: number;
                };
            };
        };
        categories:{
            data: Category[];
        
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

interface ArticlesProps {
    data: {
        title: string;
        description: string;
        articles: {
            data: ArticleData[];
        };
    };
}


function Article({title, description, slug, cover, categories }: ArticleData["attributes"]) {
const imgUrl = getStrapiMedia(cover.data.attributes.url);
return (
<Link
    href={`/blog/${categories?.data[0]?.attributes?.slug}/${slug}`}
    // target={newTab ? "_blank" : "_self"}
    className="flex flex-col  p-4 bg-darkBlueNew justify-start rounded-2xl"
>
    <div className="relative rounded-t-lg w-full overflow-hidden">
    <Image
        src={imgUrl || ""}
        alt={cover.data.attributes.alternativeText || "none provided"}
        className="aspect-[16/9] w-full  bg-gray-100 sm:aspect-[2/1] lg:aspect-[3/2] object-cover object-top "
        width={600}
        height={600}
    />
    </div>
    <div className=" mt-4 flex gap-1 ">
    {categories.data.map(() => (
        <div className="px-2 py-1 bg-Gold hover:bg-darkGold rounded-sm">
        <p className="text-sm text-white font-semibold">
            {categories?.data[0]?.attributes?.name}
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

export default function PortfolioHome({ data }: ArticlesProps) {
return (
    <section className=" bg-lightBackground py-24 sm:py-32">
    <div className="mx-auto max-w-7xl px-6 lg:px-8">
        <div className="container mx-auto py-4 space-y-2 text-center">
        <h2 className="text-3xl font-bold tracking-tight  sm:text-5xl">
            {data.title}
        </h2>
        <p className="mt-2 text-lg leading-8 text-lightBlueNew">
            {data.description}
        </p>
        </div>
        <div className="mx-auto mt-16 grid max-w-3xl grid-cols-1 gap-x-8 gap-y-20 lg:mx-0 lg:max-w-none md:grid-cols-2 lg:grid-cols-3">
        {data.articles.data.map((article: ArticleData, index: number) => (
            <Article key={index} {...article.attributes} />
        ))}
        </div>
    </div>
    </section>
);
}
