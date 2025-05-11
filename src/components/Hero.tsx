export function Hero() {
    return (
        <section 
            id="hero"
            className="min-h-[1050px] w-full bg-[#030906]"
            style={
                {
                    backgroundImage: "url('/background.svg')",
                    backgroundSize: 'cover',
                    backgroundPosition: 'center'
                }
            }
        >
            {/* navbar */}
            <nav className="absolute top-0 left-0 w-full flex items-center justify-end px-4 py-4 pr-25">
                <ul className="flex space-x-4 ml-auto">
                    <li className="text-white font-primary">What We Do</li>
                    <li className="text-white font-primary">Who We Are</li>
                    <li className="text-white font-primary">Portfolio</li>
                    <li className="text-white font-primary">Tora Labs</li>
                    <li className="text-white font-primary">Contact Us</li>
                </ul>
            </nav>

            {/* contenido */}
            <div className="hero-content flex flex-col items-center justify-start text-center pt-32">
                <h1 className="font-primary text-[#F5A31F] md:text-1xl pb-13">
                    WHAT WE DO
                </h1>

                <h2 className="text-white text-5xl md:text-5xl font-primary mb-4">
                    We Build and Scale <br />
                    Tech and Data Enabled Companies
                </h2>

                <div className="w-[200px] sm:w-[300px] md:w-[460px] lg:w-[160px] border-t border-[#FFFFFF33] opacity-75 mt-3"/>

                <h3 className="text-white text-[21px] md:text-[21px] font-primary mt-6 mb-4 pb-4">
                    We are a Studio Founded by Serial Entrepreneurs partnering <br />
                    with Top-Talent Founders
                </h3>

                <button type="button" className="w-75 text-white bg-[#FFA32D] hover:bg-yellow-600 focus:outline-none focus:ring-4 focus:ring-yellow-300 font-primary rounded-full text-sm px-5 py-2.5 text-center me-2 mb-25 dark:focus:ring-yellow-900">
                    Contact
                </button>

                <div className="w-[200px] sm:w-[300px] md:w-[460px] lg:w-[1130px] border-t border-[#FFFFFF33] opacity-75"/>

                <div className="mt-24 pb-16 px-4 sm:px-6 lg:px-8">
                <div className="max-w-4xl mx-auto grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-35">
                {[
                    {
                        img: '/builds.svg',
                        title: 'Builds',
                        desc: 'Build and Scale Tech and Data-Enabled Companies with Top-Talent Founders and Teams',
                      },
                      {
                        img: '/software.svg',
                        title: 'Software and AI',
                        desc: 'Develop Software, AI, and Data Capabilities into Portfolio Companies',
                      },
                      {
                        img: '/funding.svg',
                        title: 'Funding',
                        desc: 'Support Portfolio Companies in obtaining Capital to Scale',
                      },
                    ].map(({ img, title, desc }) => (
                      <div key={title} className="flex flex-col items-start text-left">
                        <div className="bg-white/10 rounded-full p-4 mb-4 flex items-center justify-center text-left">
                          <img src={img} alt={title} className="h-8 w-8" />
                        </div>
                        <h3 className="text-[#F5A31F] font-poppins text-xl text-left font-primary mb-2">
                          {title}
                        </h3>
                        <p className="text-white text-base leading-relaxed text-left">
                          {desc}
                        </p>
                      </div>
                    ))}
                  </div>
                </div>
            </div>
        </section>
    )
}