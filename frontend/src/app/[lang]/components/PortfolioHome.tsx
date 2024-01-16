import Link from "next/link";
import Image from "next/image";
import { getStrapiMedia } from "../utils/api-helpers";
import { fetchAPI } from "../utils/fetch-api";

interface ArticlesProps {
data: {
    title: string;
    description: string;
    articles: Article[];
};
}

interface Cover {
data: {
    id: string;
    attributes: {
        url: string;
        name: string;
        alternativeText: string;
    };
};
}

interface Category {
id: string;
attributes: {
    name: string;
    slug: string;
};
}

interface Article {
    id: string;
    title: string;
    description: string;
    cover: Cover;
    category: Category[];
    slug: string;

}


function Article({title, description, cover, slug }: Article) {
// const imgUrl = getStrapiMedia(media.data.attributes.url);
return (
    <Link
        href={{ pathname: slug }}
        // target={newTab ? "_blank" : "_self"}
        className="flex flex-col  p-4 bg-darkBlueNew justify-start rounded-2xl"
        >
        <div className="relative rounded-t-lg w-full overflow-hidden">
            {/* <Image
            src={imgUrl || ""}
            alt={media.data.attributes.alternativeText || "none provided"}
            className="aspect-[16/9] w-full  bg-gray-100 sm:aspect-[2/1] lg:aspect-[3/2] object-cover object-top "
            width={600}
            height={600}
            /> */}
        </div>
        <h3 className="my-3 text-3xl font-semibold">{title}</h3>
        <div className="space-y-1 leading-tight my-6">
            <p>{description}</p>
        </div>
    </Link>
);
}

export default function PortfolioHome({ data }: ArticlesProps) {
    console.log(data)
return (
    <section className=" bg-lightBackground m:py-12 lg:py-24">
    <div className="mx-auto max-w-7xl px-6 lg:px-8">
        <div className="container mx-auto py-4 space-y-2 text-center">
        <h2 className="text-3xl font-bold tracking-tight  sm:text-4xl">
            {data.title}
        </h2>
        <p className="mt-2 text-lg leading-8 text-lightBlueNew">
            {data.description}
        </p>
        </div>
        <div className="mx-auto mt-16 grid max-w-2xl grid-cols-1 gap-x-8 gap-y-20 lg:mx-0 lg:max-w-none lg:grid-cols-3">
        {data.articles && data.articles.map((article: Article, index: number) => (
            <Article key={index} {...article} />
        ))}
        </div>
    </div>
    </section>
);
}
