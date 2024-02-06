

export default function PortfolioHero() {
    return (
        <section className="">
        <div className="relative isolate px-6  lg:px-8">
        <div className="mx-auto max-w-3xl py-24 pt-12 md:py-32 lg:py-28">
            <div className="text-center">
            <h1 className="text-4xl font-bold tracking-tight  sm:text-6xl">
                Se noe av det jag har gjort i løpet av min karriere
            </h1>
            <p className="mt-6 text-lg leading-8 text-lightBlueNew">
                Viser min lidenskap for å lage visuelt fantastiske nettsteder
                som gir resultater.
            </p>
            <div className="mt-10 flex items-center justify-center  gap-x-6">
                <p className="hover:text-darkGold">Frontend utvikling</p>
                <p className="hover:text-darkGold">Web design</p>
                <p className="hover:text-darkGold">Backend utvikling</p>
            </div>
            </div>
        </div>
        </div>
    </section>
    );
}