interface AboutMySkillProps {
data: {
    title: string;
    paragraph: string;
    categories: {
    data: Category[];
    };
};
}

interface Category {
        id: number;
        attributes: {
            name: string;
        };
}

export default function AboutMySkill({data}: AboutMySkillProps) {
return (
<section className=" bg-lightBackground py-32 ">
    <div className="mx-auto max-w-7xl lg:px-8 px-6 flex md:flex-row flex-col gap-10  lg:gap-16">
    <div className=" grid md:w-1/2 lg:gap-6 grid-rows gap-4 ">
        <div className="">
        <h2 className="md:text-4xl text-4xl sm:text-5xl font-bold leading-tight tracking-normal ">
            {data.title}
        </h2>
        </div>
        <div className="">
        <p className="text-md leading-8 text-lightBlueNew">
            {data.paragraph}
        </p>
        </div>
    </div>
    <div className="flex md:w-1/2 flex-wrap gap-2 content-start ">
        {data.categories.data.map((category: Category) => (
        <div
            key={category.id}
            className="border-[1px] rounded-md border-Gold px-2 py-1 "
        >
            <p className="text-md font-medium">
            {category.attributes.name}
            </p>
        </div>
        ))}
    </div>
    </div>
</section>
);
}
