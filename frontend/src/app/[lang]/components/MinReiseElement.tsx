import { getStrapiMedia } from "../utils/api-helpers";
import Image from "next/image";
import RichText from "./RichText";

interface MinReise {
    id: number;
    picture: {
        data: {
            attributes: {
                url: string;
                alternativeText: string;
                width: number;
                height: number;
            }
        }
    }
    rolle: string;
    bedrift: string;
    dato: string;
    body: string;

}

export default function MinReiseElement({ item }: { item: MinReise }, minReiseEnd: number) {
    const imgUrl = getStrapiMedia(item.picture.data.attributes.url);
    console.log("item",item);
  return (
                    <div
                        key={item.id}
                        className="self-stretch justify-start items-start md:gap-10 gap-4 inline-flex"
                    >
                        <div className="flex-col min-w-[48px] self-stretch min-h-full justify-start items-center gap-10 flex">
                        <Image
                            src={imgUrl || ""}
                            alt={item.picture.data.attributes.alternativeText || "none provided"}
                            width={600}
                            height={600}
                            style={{ objectFit: "cover" }}
                            // loader={({ src, width }: ImageLoaderProps) => {
                            //         return `${src}?w=${width}&q=75`;
                            //     }}
                            className=" w-12 h-12"
                        />
                        
                        <div className="w-[0px] h-full justify-self-stretch border-[1px] border-Gold"></div>
                        </div>
                        <div className="grow basis-0 flex-col justify-start items-start gap-4 inline-flex">
                        <h3 className="self-stretch  sm:text-3xl text-xl font-semibold  leading-[38.40px]">
                            {item.rolle}
                        </h3>
                        <div className="self-stretch">
                            <span className=" text-md font-bold  leading-[27px]">
                            {item.bedrift}{" "}
                            </span>
                            <span className=" text-md font-normal  leading-[27px]">
                            {item.dato}
                            </span>
                        </div>
                        <div className="self-stretch text-lightBlueNew text-sm font-normal  leading-[27px]">
                            <RichText data={item}/>
                        </div>
                        </div>
                    </div>
                    );
}
