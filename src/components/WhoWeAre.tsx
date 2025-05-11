const cards = [
  {
    icon: '/deep.svg',
    title: 'Deep Tech Expertise',
    desc: 'Experts in Hardware, Software, Data, and AI',
  },
  {
    icon: '/reach.svg',
    title: 'Reach and Scale',
    desc: '5M+ Users, 500K Daily Transactions in B2C, B2B, & B2G Verticals in 6 Countries',
  },
  {
    icon: '/large.svg',
    title: 'Large-Scale Data',
    desc: '100Billion+ Data Events and Petabytes Processed in the Cloud',
  },
  {
    icon: '/global.svg',
    title: 'Global Teams',
    desc: '+1000 employees in distributed teams',
  },
  {
    icon: '/proven.svg',
    title: 'Proven Founders in Tech',
    desc: '2 Exits, 3 Cash-Generating Companies, 1 Unicorn, and $150M+ of Capital Raised',
  },
];

const clipPathHexagon = {
  clipPath:
    'polygon(25% 6.7%, 75% 6.7%, 100% 50%, 75% 93.3%, 25% 93.3%, 0% 50%)',
};

export function WhoWeAre() {
  return (
    <section
      id="who-we-are"
      className="min-h-[787px] w-full bg-[#FEFAF4] py-20"
    >
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Contenido del encabezado */}
        <div className="flex flex-col items-center justify-start text-center mb-16">
          <h1 className="font-primary text-[#F5A31F] text-lg pb-4">
            WHO WE ARE
          </h1>
          <h2 className="font-primary text-2xl md:text-4xl leading-tight">
            Founders, Advisors, and Investors with a <br className="hidden md:block"/>
            Unique Track Record in LATAM and the US
          </h2>
        </div>

        {/* Primera fila de cuadros */}
        <div className="flex flex-wrap justify-center gap-8 mb-12">
          {cards.slice(0, 3).map((c) => (
            <div key={c.title} className="relative flex items-center w-full md:w-[30%]">
              {/* Hexágono */}
              <div
                className="w-20 h-20 md:w-24 md:h-24 bg-white border-[3px] border-[#11211F] rounded-md flex items-center justify-center shadow-md absolute z-10"
              >
                <img src={c.icon} alt={c.title} className="h-8 w-8 md:h-10 md:w-10" />
              </div>
              {/* Rectángulo */}
              <div className="bg-[#1F3429] text-white pl-25 md:pl-25 py-5 md:py-5 shadow-lg ml-6 md:ml-8 h-full flex flex-col justify-center">
                <h3 className="font-semibold mb-2 text-lg">{c.title}</h3>
                <p className="text-gray-200 text-sm leading-relaxed">{c.desc}</p>
              </div>
            </div>
          ))}
        </div>

        {/* Segunda fila de cuadros */}
        <div className="flex flex-wrap justify-center gap-8 mt-12">
          {cards.slice(3).map((c) => (
            <div key={c.title} className="relative flex items-center w-full md:w-[30%]">
              {/* Hexágono */}
              <div
                className="w-20 h-20 md:w-24 md:h-24 bg-white border-2 border-[#11211f] rounded-md flex items-center justify-center shadow-md absolute z-10"
              >
                <img src={c.icon} alt={c.title} className="h-8 w-8 md:h-10 md:w-10" />
              </div>
              {/* Rectángulo */}
              <div className="bg-[#1F3429] text-white pl-20 md:pl-20 py-5 md:py-5 shadow-lg ml-6 md:ml-8 h-full flex flex-col justify-center">
                <h3 className="font-semibold mb-2 text-lg">{c.title}</h3>
                <p className="text-gray-200 text-sm leading-relaxed">{c.desc}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}