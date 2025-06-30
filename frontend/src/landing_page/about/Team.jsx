export default function Team() {
    return (
        <>
            <h1 className="text-4xl md:text-5xl font-medium text-center text-neutral-700 leading-relaxed mt-10 mb-10">
                People
            </h1>

            <div className="flex flex-col md:flex-row items-center gap-8 px-6 md:px-80 mb-30">
                {/* Left: Image */}
                <div className="w-full md:w-1/2 flex flex-col items-center mb-6 md:mb-0">
                    <img
                        src="media/images/me.jpg"
                        alt="Founder"
                        className="w-90 h-90 object-cover object-center rounded-full shadow-md mx-auto"
                    />
                </div>

                {/* Right: Text */}
                <div className="w-full md:w-2/3 text-gray-700 text-[18px] leading-loose space-y-4">
                    <p>
                        Aysha is passionate about creating user-friendly digital experiences that empower people. With a curious mind and a heart full of creativity, she loves blending technology and design to bring ideas to life.
                    </p>
                    <p>
                        Beyond coding, Aysha enjoys exploring art, photography, and connecting with others to learn new perspectives.
                    </p>

                    <p className="text-[18px]">
                        Connect on <a href="#" className="text-blue-600 hover:text-black transition cursor-pointer">Homepage</a> / <a href="#" className="text-blue-600 hover:text-black transition cursor-pointer">TradingQnA</a> / <a href="#" className="text-blue-600 hover:text-black transition cursor-pointer">Twitter</a>
                    </p>
                </div>
            </div>
        </>
    );
}
