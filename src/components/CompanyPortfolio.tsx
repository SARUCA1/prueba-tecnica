import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

export function CompanyPortfolio() {
    const settings =  {
        arrows: true,
        infinite: true,
        speed: 500,
        slidesToShow: 3,
        slidesToScroll: 1
    };

    const images = [
        {
            name: 'Luka',
            img: '/Luka.svg',
        },
        {
            name: 'PayIt',
            img: '/PayIt.svg',
        },
        {
            name: 'Ri',
            img: '/Ri.svg',
        },
        {
            name: 'Roka',
            img: '/Roka.svg',
        },
        {
            name: 'sostengo',
            img: '/sostengo.svg',
        },
        {
            name: 'ToraLabs',
            img: '/ToraLabs.svg',
        }
    ]
    return (
        <section 
            id="company-portfolio"
            className="min-h-[580px] bg-[#FEFAF4] py-20"
        >
            {/* Contenido del encabezado */}
            <div className="flex flex-col items-center justify-start text-center mb-16">
                <h1 className="font-primary text-[#F5A31F] text-lg pb-4">
                    COMPANY PORTFOLIO
                </h1>
                <h2 className="font-primary text-2xl md:text-4xl leading-tight">
                    We Build Tech and Data Companies with <br className="hidden md:block"/>
                    Top Founders
                </h2>           
            </div>

            <div className="w-full max-w-5xl m-auto px-4">
                    <div className="mt-5">
                        <Slider {...settings}>
                            {images.map((d) => (
                            <div className="rounded-xl p-4 flex items-center justify-center h-48">
                                <div className="flex justify-center items-center">
                                    <img src={d.img} alt="logo" className="max-h-full object-contain"/>
                                </div>
                            </div>
                        ))}
                        </Slider>
                    </div>
                </div>

        </section>
    )
}