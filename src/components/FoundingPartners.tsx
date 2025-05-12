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
            <div className="items-center justify-start text-center mt-15">
                <h1 className="font-primary text-[#1F3429] md:text-4xl pb-4">
                    Founding Partners
                </h1>
            </div>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-12 max-w-7xl mx-auto mt-25">
        {partners.map((p) => (
          <div key={p.name} className="relative">
            {/* Hexágono solapado */}
            <img
              src={p.hexagon}
              alt=""
              className="
                absolute
                top-0
                left-15
                transform -translate-y-1/2
                w-35 md:w-39
                h-auto
              "
            />

            {/* Tarjeta con espacio extra arriba (pt-14) */}
            <div
              className="
                bg-white
                border border-gray-300
                rounded-lg
                p-6
                pt-24            /* deja hueco al hexágono */
                flex flex-col justify-between
                h-full
              "
            >
              {/* Nombre y título dentro de la tarjeta */}
              <div>
                <h3 className="font-primary text-xl md:text-2xl text-[#1F3429] font-semibold">
                  {p.name}
                </h3>
                <p className="text-sm md:text-base text-gray-600 mb-4">
                  {p.title}
                </p>
                <p className="text-gray-700 text-sm md:text-base">
                  {p.description}
                </p>
              </div>

              {/* Footer con LinkedIn y botón */}
              <div className="flex items-center justify-between mt-6">
                <img
                  src={p.linkedin}
                  alt="LinkedIn"
                  className="w-6 h-6 md:w-8 md:h-8"
                />
                <button
                  className="
                    px-4 md:px-5
                    py-2
                    border border-[#F5A31F]
                    text-[#F5A31F]
                    rounded-full
                    text-sm
                  "
                >
                  Read More
                </button>
              </div>
            </div>
          </div>
        ))}
      </div>
        </section>
    )
}