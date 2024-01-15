import { url } from "inspector";
import Link from "next/link";
import { Interface } from "readline";
import { renderButtonStyle } from "../utils/render-button-style";

interface Button {
id: string;
url: string;
text: string;
type: string;
newTab: boolean;
}

interface FooterctaData {
    id: string;
    title: string;
    description: string;
    button: Button[];
}

export default function FooterCta({ footerctaData }: { footerctaData: FooterctaData }) {
return (
<section className="w-full ">
    <div className="max-w-7xl mx-auto  py-24 sm:px-6 sm:py-32 lg:px-8 px-6 ">
    <div className="mx-auto w-full p-10 lg:p-20 rounded-[15px] bg-[#0E193F] flex-col justify-center items-center gap-2 inline-flex">
        <div className=" flex-col justify-start items-center gap-6 flex">
        <div className="self-stretch  flex-col justify-start items-center lg:gap-6 gap-3 flex">
            <h2 className="self-stretch text-center text-3xl font-bold lg:text-5xl">
            {footerctaData.title}
            </h2>
            <p className="self-stretch text-center text-lightBlueNew text-lg font-normal">
            {footerctaData.description}
            </p>
        </div>
        <div className="pt-4 justify-start items-start gap-4 inline-flex">
            {footerctaData.button.map((button: Button, index: number) => (
            <Link
                key={index}
                href={button.url}
                target={button.newTab ? "_blank" : "_self"}
                className={renderButtonStyle(button.type)}
            >
                {button.text}
            </Link>
            ))}
        </div>
        </div>
    </div>
    </div>
</section>
);
}
