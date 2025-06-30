export default function Universe() {
    const partnerPlatforms = [
        {
            src: "media/images/zerodhaFundhouse.png",
            alt: "Fundhouse",
            text: "Our asset management venture that is creating simple and transparent index funds to help you save for your goals."
        },
        {
            src: "media/images/sensibullLogo.svg",
            alt: "Sensibull",
            text: "Options trading platform that lets you create strategies, analyze positions, and examine data points like open interest, FII/DII, and more."
        },
        {
            src: "media/images/tijori.svg",
            alt: "Tijori",
            text: "Investment research platform that offers detailed insights on stocks, sectors, supply chains, and more."
        },
        {
            src: "media/images/streakLogo.png",
            alt: "Streak",
            text: "Systematic trading platform that allows you to create and backtest strategies without coding."
        },
        {
            src: "media/images/smallcaseLogo.png",
            alt: "Smallcase",
            text: "Thematic investing platform that helps you invest in diversified baskets of stocks and ETFs."
        },
        {
            src: "media/images/dittoLogo.png",
            alt: "Ditto",
            text: "Personalized advice on life and health insurance. No spam and no mis-selling."
        }
    ];

    return (
        <>
        {/* Tech Stack Note */}
            <div className="max-w-7xl mx-auto px-6 pb-6 text-center mt-20 mb-10">
                <h3 className="text-xl md:text-2xl text-gray-700">
                    Want to know more about our technology stack? Check out the
                    <a href="#" className="text-blue-500 hover:text-black"> KYRO.tech </a> blog.
                </h3>
            </div>

            {/* Title & Subtitle */}
            <div className="max-w-7xl mx-auto px-6 pt-12 text-center space-y-4">
                <h2 className="text-3xl md:text-4xl font-medium text-neutral-700 pb-4">
                    The KYRO Universe
                </h2>
                <p className="text-md md:text-lg text-gray-600 pb-10">
                    Extend your trading and investment experience even further with our partner platforms
                </p>
            </div>

            {/* Partner Cards */}
            <div className="max-w-7xl mx-auto px-6 py-18">
                <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-10 mb-8">
                    {partnerPlatforms.map((card, index) => (
                        <div key={index} className="flex flex-col items-center text-center space-y-4">
                            <img src={card.src} alt={card.alt} className="h-12 object-contain" />
                            <p className="text-sm text-gray-500">{card.text}</p>
                        </div>
                    ))}
                </div>
            </div>

            {/* Signup Button */}
            <div className="text-xl text-center py-10 mb-10">
                <button className="w-1/7 bg-blue-500 hover:bg-black text-white font-medium px-6 py-3 rounded-md transition">
                    Sign up for Free
                </button>
            </div>
        </>
    );
}
