import { formatDate, getStrapiMedia } from '@/app/[lang]/utils/api-helpers';
import { fetchAPI } from "@/app/[lang]/utils/fetch-api";
import { postRenderer } from '@/app/[lang]/utils/post-renderer';
import Image from 'next/image';

interface Article {
    id: number;
    attributes: {
        title: string;
        description: string;
        slug: string;
        cover: {
            data: {
                attributes: {
                    url: string;
                };
            };
        };
        categories: {
                    name: string;
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
        blocks: any[];
        publishedAt: string;
    };
}



export default function Post({ data }: { data: Article }) {
    const { title, description, publishedAt, cover, authorsBio, categories } = data.attributes;
    const author = authorsBio.data?.attributes;
    const imageUrl = getStrapiMedia(cover.data?.attributes.url);
    const authorImgUrl = getStrapiMedia(authorsBio.data?.attributes.avatar.data.attributes.url);
    console.log(data);
    return (
        <>
        <section className="">
        <div className="relative isolate px-6  lg:px-8">
        <div className="mx-auto max-w-3xl py-24 pt-12 md:py-32 lg:py-28">
            <div className="text-center">
            <h1 className="text-4xl font-bold tracking-tight  sm:text-6xl">
                {title}
            </h1>
            <p className="mt-6 text-lg leading-8 text-lightBlueNew">
                {description}
            </p>
            <div className="mt-10 flex items-center justify-center  gap-x-6">
                {/* har skal jeg legge in map funktion */}
                <p className="hover:text-darkGold">Frontend utvikling</p>
                <p className="hover:text-darkGold">Web design</p>
                <p className="hover:text-darkGold">Backend utvikling</p>
            </div>
            </div>
        </div>
        {imageUrl && (
                <Image
                    src={imageUrl}
                    alt="article cover image"
                    width={400}
                    height={400}
                    className="w-full h-96 object-cover rounded-lg"
                />
            )}
        </div>
    </section>
        <article className="space-y-8">
            {imageUrl && (
                <Image
                    src={imageUrl}
                    alt="article cover image"
                    width={400}
                    height={400}
                    className="w-full h-96 object-cover rounded-lg"
                />
            )}
            <div className="space-y-6">
                <h1 className="leading-tight text-5xl font-bold ">{title}</h1>
                <div className="flex flex-col items-start justify-between w-full md:flex-row md:items-center">
                    <div className="flex items-center md:space-x-2">
                        {authorImgUrl && (
                            <Image
                                src={authorImgUrl}
                                alt="article cover image"
                                width={400}
                                height={400}
                                className="w-14 h-14 border rounded-full "
                            />
                        )}
                    </div>
                </div>
            </div>

            <div className="dark:text-gray-100">
                <p>{description}</p>

                {data.attributes.blocks.map((section: any, index: number) => postRenderer(section, index))}
            </div>
        </article>
        </>
    );
}
