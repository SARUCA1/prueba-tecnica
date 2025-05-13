export function ContactUs() {
    return (
        <section 
            id="contact-us"
            className="min-h-[938px] md:w-full bg-[#000000]"
            style={
                {
                    backgroundImage: "url('/bg-contact-us.svg')",
                    backgroundSize: 'cover',
                    backgroundPosition: 'center'
                }
            }
        >
            {/* contenido */}
            <div className="hero-content flex flex-col items-center justify-start text-center pt-55">
                <h1 className="font-primary text-[#F5A31F] md:text-1xl pb-13">
                    CONTACT US
                </h1>
                <h2 className="text-white text-5xl md:text-5xl font-primary mb-4">
                    Tech and Talent - Unleashed
                </h2>
            </div>

            <div className="w-full max-w-4xl mx-auto px-4 mt-12">
                <form className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  {/* Name */}
                    <div className="flex flex-col">
                      <label className="text-white mb-2">Name</label>
                      <input
                        type="text"
                        placeholder="Ramiro Ortega"
                        className="w-full p-4 bg-white rounded-lg placeholder-gray-400 text-black focus:outline-none"
                      />
                    </div>
                
                    {/* Email */}
                    <div className="flex flex-col">
                      <label className="text-white mb-2">Email Address</label>
                      <input
                        type="email"
                        placeholder="email@email.com"
                        className="w-full p-4 bg-white rounded-lg placeholder-gray-400 text-black focus:outline-none"
                      />
                    </div>
                
                    {/* Message */}
                    <div className="flex flex-col md:col-span-2">
                      <label className="text-white mb-2">Message</label>
                      <textarea
                        placeholder="Your Message"
                        rows={6}
                        className="w-full p-4 bg-white rounded-lg placeholder-gray-400 text-black focus:outline-none resize-none"
                      />
                    </div>
                
                    {/* Submit */}
                    <button
                      type="submit"
                      className="w-90 md:col-span-2 justify-self-center bg-[#F5A31F] text-white font-primary rounded-full px-8 py-3 hover:bg-yellow-600 transition focus:outline-none focus:ring-4 focus:ring-yellow-300">
                      Send Message
                    </button>
                </form>
            </div>

            {/* Black container */}
            

        </section>
    )
}