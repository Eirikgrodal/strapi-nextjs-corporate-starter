import { formatDate, getStrapiMedia } from '@/app/[lang]/utils/api-helpers';
import { fetchAPI } from "@/app/[lang]/utils/fetch-api";
import { postRenderer } from '@/app/[lang]/utils/post-renderer';
import Image from 'next/image';
import { Interface } from 'readline';

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
        blocks: any[];
        publishedAt: string;
    };
}

interface Category {
    id: number;
    attributes: {
        name: string;
    };
};



export default function Post({ data }: { data: Article }) {
    const { title, description, publishedAt, cover, authorsBio, categories } = data.attributes;
    const author = authorsBio.data?.attributes;
    const imageUrl = getStrapiMedia(cover.data?.attributes.url);
    const authorImgUrl = getStrapiMedia(authorsBio.data?.attributes.avatar.data.attributes.url);
    const category = categories.data;
    return (
        <>
        <section className="pb-12">
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
                {category?.map((category: Category) => (
                    <p key={category.id} className="hover:text-darkGold">{category.attributes.name}</p>
                ))}
                
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
            <div className="text-gray-100">
                {data.attributes.blocks.map((section: any, index: number) => postRenderer(section, index))}
            </div>
        </article>
        </>
    );
}
