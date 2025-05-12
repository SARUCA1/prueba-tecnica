export function TrustedBy() {

    const logos =[
        { src: '/emprelatam.svg',       alt: 'Emprelatam'},
        { src: '/altern.svg',          alt: 'alterna'},
        { src: '/villagecapital.svg',   alt: 'villagecapital'},
        { src: '/latitud.svg',          alt: 'latitud'},
        { src: '/forbes.svg',           alt: 'forbes'},
        { src: '/cannes.svg',           alt: 'cannes'},
        { src: '/undp.svg',             alt: 'undp'},

        { src: '/gobiernogt.svg',       alt: 'gobiernogt'},
        { src: '/centralamerica.svg',   alt: 'centralamerica'},
        { src: '/agora.svg',            alt: 'agora'},
        { src: '/altern.svg',           alt: 'altern'},
        { src: '/impa.svg',             alt: 'impa'},
        { src: '/citi.svg',             alt: 'citi'},
        { src: '/clio.svg',             alt: 'clio'},

        { src: '/innovators.svg',       alt: 'innovators'},
        { src: '/sachamama.svg',        alt: 'sachamama'},
        { src: '/effie.svg',            alt: 'effie'},
        { src: '/unreasonable.svg',     alt: 'unreasonable'},
        { src: '/ieuniversity.svg',     alt: 'ieuniversity'},
        { src: '/prize.svg',            alt: 'prize'},
    ]

    const row1 = logos.slice(0, 7);
    const row2 = logos.slice(7, 14);
    const row3 = logos.slice(14);

    return (
        <section
            id="trusted-by"
            className="min-h-[400px] md:w-full bg-[#FFFFFF] flex items-center justify-center md:py-20"
        >
            {/* Contenido del encabezado */}
            <div className="flex flex-col items-center justify-start text-center mb-16">
                <h1 className="font-primary text-[#F5A31F] text-lg pb-4">
                    TRUSTED BY
                </h1>
                <h2 className="font-primary text-2xl md:text-4xl leading-tight">
                    Leading Brands and Industry Experts
                </h2>

                {/* primeras dos lineas */}
                <div className="space-y-8 mt-10">
                    <div className="grid grid-cols-7 gap-x-10 gap-y-8">
                        {row1.map(({ src, alt }) => (
                        <img
                            key={alt}
                            src={src}
                            alt={alt}
                            className="w-10 sm:w-16 md:w-18 lg:w-26 xl:w-34 object-contain" />
                        ))}
                    </div>
                    <div className="grid grid-cols-7 gap-x-10 gap-y-8">
                        {row2.map(({ src, alt }) => (
                        <img
                            key={alt}
                            src={src}
                            alt={alt}
                            className="w-10 sm:w-16 md:w-18 lg:w-26 xl:w-34 object-contain" />
                        ))}
                    </div>
                    
                    {/* utlima linea */}
                    <div className="flex justify-center">
                      <div className="grid grid-cols-6 gap-x-10 gap-y-8">
                        {row3.map(({ src, alt }) => (
                            <img
                                key={alt}
                                src={src}
                                alt={alt}
                                className="w-10 sm:w-16 md:w-18 lg:w-26 xl:w-34 object-contain" />
                        ))}
                      </div>
                    </div>
                </div>
            </div>

        </section>
    )
}