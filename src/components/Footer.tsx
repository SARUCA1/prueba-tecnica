export function Footer() {
    return (
        <section 
            id="footer"
            className="min-h-[415px] bg-black flex items-center justify-center"
        >
            {/* contenido */}
            <div className="w-full max-w-7xl px-6">
                <div className="flex justify-end items-center space-x-6 pb-8">
                    <a
                        href="mailto:contact@gmail.com"
                        className="flex items-center hover:text-white text-gray-300"
                    >
                        <img
                          src="/mail.svg"
                          alt="Email"
                          className="md:h-8 md:w-8"
                        />
                        <span className="ml-2">contact@gmail.com</span>
                    </a>

                    <a
                      href="https://linkedin.com"
                      target="_blank"
                      rel="noopener"
                      className="hover:text-white text-gray-300"
                    >
                        <img
                          src="/linkedin.svg"
                          alt="LinkedIn"
                          className="md:h-8 md:w-8"
                        />
                    </a>
                </div>

                {/* Línea divisoria */}
                <hr className="border-gray-700 mb-8" />

              {/* Texto debajo de la línea, alineado a la izquierda */}
              <div className="text-gray-300">
                <span>Edificio Design Center</span>
              </div>
            </div>
        </section>
    )
}