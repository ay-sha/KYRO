export default function Hero() {
    return (
        <div className="max-w-7xl mx-auto px-4 py-10 space-y-8">

            {/* Section 1: Heading with bottom border */}
            <div className=" pt-20 pb-20 border-b border-gray-300">
                <h1 className="text-3xl md:text-4xl font-medium text-center text-neutral-700 leading-relaxed">
                    We pioneered the discount broking model in Bangladesh. <br />
                    Now, we are breaking ground with our technology.
                </h1>
            </div>


            {/* Section 2: Two divs side-by-side */}
            <div className="flex flex-col md:flex-row justify-center px-6 md:px-16 lg:px-24 gap-4 mt-20 pb-10 ">
                {/* Left Div */}
                <div className="flex-1 max-w-[600px] p-4 text-[18px] text-gray-700 space-y-4 leading-loose">
                    <p>
                        We kick-started operations on the 15th of August, 2010 with the goal of breaking all barriers that traders and investors face in India in terms of cost, support, and technology. We named the company Zerodha, a combination of Zero and "Rodha", the Sanskrit word for barrier.
                    </p>
                    <p>
                        Today, our disruptive pricing models and in-house technology have made us the biggest stock broker in India.
                    </p>
                    <p>
                        Over 1.6+ crore clients place billions of orders every year through our powerful ecosystem of investment platforms, contributing over 15% of all Indian retail trading volumes.
                    </p>
                </div>

                {/* Right Div */}
                <div className="flex-1 max-w-[600px] p-4 text-[18px] text-gray-700 space-y-4 leading-loose">
                    <p>
                        In addition, we run a number of popular open online educational and community initiatives to empower retail traders and investors.
                    </p>
                    <p>
                        <a href="#" className="text-blue-500 hover:text-black transition">Rainmatter</a>, our fintech fund and incubator, has invested in several fintech startups with the goal of growing the Indian capital markets.
                    </p>
                    <p>
                        And yet, we are always up to something new every day. Catch up on the latest updates on our <a href="#" className="text-blue-500 hover:text-black transition">blog</a>, or see what the media is <a href="#" className="text-blue-500 hover:text-black transition">saying about us</a>, or learn more about our business and product <a href="#" className="text-blue-500 hover:text-black transition">philosophies</a>.
                    </p>
                </div>
            </div>

        </div>
    );
}
