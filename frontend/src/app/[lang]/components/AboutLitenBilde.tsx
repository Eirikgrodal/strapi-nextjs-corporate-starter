import { getStrapiMedia } from "../utils/api-helpers";
import Image from "next/image";

interface AboutLitenBildeProps {
data: {
    title: string;
    paragraph: string;
    picture: Picture ;
};
}
interface Picture {
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
    
}

export default function AboutLitenBilde({ data }: AboutLitenBildeProps) {
    const imgUrl = getStrapiMedia(data.picture.data.attributes.url);
return (
<section className="bg-lightBackground lg:px-8 px-6">
    <div className="relative isolate overflow-hidden ">
    <div className=" mx-auto max-w-7xl pb-24 pt-10 sm:pb-32 lg:grid lg:grid-cols-2 lg:gap-x-8 lg:px-8 lg:py-40">
        <div className=" lg:my-auto  ">
        <div className="mx-auto max-w-2xl">
            <h2 className="mt-10 md:text-4xl text-2xl sm:text-5xl font-bold leading-tight tracking-normal  ">
            {data.title}
            </h2>
            <p className="mt-6 md:text-lg text-md md:leading-8 text-lightBlueNew">
            {data.paragraph}
            </p>
        </div>
        </div>
        <div className="mt-20 sm:mt-24 md:mx-auto md:max-w-xl lg:aspect-square lg:mx-0 lg:mt-0 ">
        <Image
            src={imgUrl || ""}
            alt={data.picture.data.attributes.alternativeText || "none provided"}
            width={data.picture.data.attributes.width || undefined}
            height={data.picture.data.attributes.height || undefined}
            style={{ objectFit: "cover" }}
            className="rounded-3xl w-full h-full"
        />
        </div>
    </div>
    </div>
</section>
);
}
