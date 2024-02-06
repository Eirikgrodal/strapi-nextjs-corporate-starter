import MinReiseElement from "./MinReiseElement";
import MinReiseElementEnd from "./MinReiseElementEnd";

interface AboutMinReiseProps {
    data: {
        title: string;
        tag: string;
        minReise:  MinReise[];
    };
}

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

export default function AboutMinReise({ data }: AboutMinReiseProps) {
    const minReiseEnd = data.minReise.length - 1;
    console.log("minReiseEnd",minReiseEnd);
return (
<section className=" mx-auto lg:px-8 px-6 max-w-7xl py-32 flex-col justify-start items-start gap-20 ">
    <div className=" justify-start items-start gap-20 md:flex-row flex-col flex">
    <div className="basis-0 grow w-full flex-col justify-start items-start gap-8 inline-flex">
        <div className="self-stretch flex-col justify-start items-start gap-4 flex">
        <div className=" text-base text-lightBlueNew font-semibold leading-normal">
            {data.tag}
        </div>
        <h2 className="self-stretch md:text-4xl lg:text-5xl text-3xl sm:text-5xl font-bold lg:leading-[57.60px] sm:leading-[57.60px] leading-[57.60px]">
            {data.title}
        </h2>
        </div>
    </div>
    <div className="md:grow basis-0 w-full flex-col justify-start items-start gap-10 inline-flex">
        {data.minReise.map((item: MinReise, index: number) =>
        index === data.minReise.length - 1 ? (
            <MinReiseElementEnd key={item.id} item={item} />
        ) : (
            <MinReiseElement key={item.id} item={item} />
        )
        )}
    </div>
    </div>
</section>
);
}
