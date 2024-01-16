import Link from "next/link";
import Image from "next/image";
import HighlightedText from "./HighlightedText";
import { getStrapiMedia } from "../utils/api-helpers";
import { renderButtonStyle } from "../utils/render-button-style";

interface Button {
  id: string;
  url: string;
  text: string;
  type: string;
  newTab: boolean;
}

interface Picture {
  data: {
    id: string;
    attributes: {
      url: string;
      name: string;
      alternativeText: string;
    };
  };
}

interface HeroProps {
  data: {
    id: string;
    title: string;
    description: string;
    picture: Picture;
    buttons: Button[];
  };
}

export default function Hero({ data }: HeroProps) {
  const imgUrl = getStrapiMedia(data.picture.data.attributes.url);

  return (
    <section className="">
      <div className="relative isolate overflow-hidden ">
        <div className=" mx-auto max-w-7xl pb-24 pt-10 sm:pb-32 lg:grid lg:grid-cols-2 lg:gap-x-8 lg:px-8 lg:py-40">
          <div className=" lg:my-auto px-6 lg:px-0 ">
            <div className="mx-auto lg:max-w-2xl max-w-4xl">
              <HighlightedText
                text={data.title}
                tag="h1"
                className="md:text-5xl text-4xl sm:text-5xl font-bold leading-tight tracking-normal"
              />
              <HighlightedText
                text={data.description}
                tag="p"
                className="mt-6 text-lg leading-8 text-lightBlueNew"
              />
              <div className="flex flex-col mt-10 space-y-4 sm:items-center sm:flex-row sm:space-y-0 sm:space-x-4 lg:justify-start">
                {data.buttons.map((button: Button, index: number) => (
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
          <div className="mt-20 sm:mt-24 md:mx-auto px-6 lg:px-0  lg:aspect-square lg:mx-0 lg:mt-0 ">
            <Image
              src={imgUrl || ""}
              alt={
                data.picture.data.attributes.alternativeText || "none provided"
              }
              className="rounded-3xl w-full h-full object-cover object-top "
              width={600}
              height={600}
            />
          </div>
        </div>
      </div>
    </section>
    // <section className="">
    //   <div className="container flex flex-col justify-center p-6 mx-auto sm:py-12 lg:py-24 lg:flex-row lg:justify-between">
    //     <div className="flex flex-col justify-center p-6 text-center rounded-lg lg:max-w-md xl:max-w-lg lg:text-left">
    //       <HighlightedText
    //         text={data.title}
    //         tag="h1"
    //         className="text-5xl font-bold leading-none sm:text-6xl mb-8"
    //         color="dark:text-violet-400"
    //       />

    //       <HighlightedText
    //         text={data.description}
    //         tag="p"
    //         className="tmt-6 mb-8 text-lg sm:mb-12 text-blueNew"
    //         color="dark:text-violet-400"
    //       />
    //       <div className="flex flex-col space-y-4 sm:items-center sm:justify-center sm:flex-row sm:space-y-0 sm:space-x-4 lg:justify-start">
    //         {data.buttons.map((button: Button, index: number) => (
    //           <Link
    //             key={index}
    //             href={button.url}
    //             target={button.newTab ? "_blank" : "_self"}
    //             className={renderButtonStyle(button.type)}
    //           >
    //             {button.text}
    //           </Link>
    //         ))}
    //       </div>
    //     </div>
    //     <div className="flex items-center justify-center p-6 mt-8 lg:mt-0 h-72 sm:h-80 lg:h-96 xl:h-112 2xl:h-128">
    //       <Image
    //         src={imgUrl || ""}
    //         alt={
    //           data.picture.data.attributes.alternativeText || "none provided"
    //         }
    //         className="object-contain h-72 sm:h-80 lg:h-96 xl:h-112 2xl:h-128 "
    //         width={600}
    //         height={600}
    //       />
    //     </div>
    //   </div>
    // </section>
  );
}
