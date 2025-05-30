const partners = [
    {
        name: 'Gian Carlo Juarez',
        title: 'Founding & General Partner',
        description: 'Founder, advisor, and executive with over 20 years of experience in technology and operations. Skilled in building and scaling B2B2C marketplace companies across diverse industries, with a strong track record in driving growth and innovation.',
        hexagon: 'fp_1.svg',
        linkedin:'/LinkedinFP.svg',
    },
    {
        name: 'Juan Rodríguez',
        title: 'Founding & General Partner',
        description: 'Professional with over 20 years of experience as an entrepreneur, advisor, board member, investor, and executive. Former founder and CEO of a technology company. Demonstrated ability to leverage innovative technologies in real-world contexts across consumer, business, and government sectors.',
        hexagon: '/fp_2.svg',
        linkedin:'/LinkedinFP.svg',
    },
]

export function FoundingPartners() {
    return (
        <section
            id="founding-partners"
            className="min-h-[755px] md:w-full bg-[#F5A31F] flex flex-col items-center justify-start pt-12 md:pt-10"
        >
            <div className="items-center justify-start text-center mt-10">
                <h1 className="font-primary text-[#1F3429] md:text-4xl pb-4">
                    Founding Partners
                </h1>
            </div>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-3 max-w-7xl mx-auto mt-5">
            {partners.map((p) => (
                <div key={p.name} className="relative">
                {/* Hexágono */}
                <div className="relative">
                    <div className="flex items-end mb-[-52px] pl-12 md:pl-16">
                        <img
                        src={p.hexagon}
                        alt=""
                        className="w-40 md:w-44 h-auto"
                        />

                        <div className="ml-8 mb-20">
                            <h2 className="text-2xl md:text-xl-3xl font-semibold text-[#1F3429]">
                                {p.name}
                            </h2>
                            <p className="text-sm md:text-base text-[#23382C]">
                                {p.title}
                            </p>
                        </div>
                    </div>
                    <div className="bg-white border border-[#23382C] rounded-[6px] p-6 pt-15 flex flex-col justify-between h-full">
                        <p className="text-gray-700 text-sm md:text-base">
                            {p.description}
                        </p>
                        <div className="flex items-center justify-between mt-6">
                            <img
                                src={p.linkedin}
                                alt="LinkedIn"
                                className="w-6 h-6 md:w-8 md:h-8"
                            />
                            <button className="px-4 md:px-5 py-2 border border-[#F5A31F] text-[#F5A31F] rounded-full text-sm">
                                Read More
                            </button>
                        </div>
                    </div>
                </div>
              </div>
            ))}
        </div>
    </section>
    )
}