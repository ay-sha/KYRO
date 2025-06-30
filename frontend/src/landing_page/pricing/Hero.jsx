export default function Hero() {
    const pricingTag = [
        {
            src: "media/images/pricing-eq.svg",
            alt: "pricing",
            heading: "Free equity delivery",
            text: "All equity delivery investments (NSE, BSE), are absolutely free — ₹ 0 brokerage."
        },
        {
            src: "media/images/other-trades.svg",
            alt: "other-trades",
            heading: "Intraday and F&O trades",
            text: "Flat ₹ 20 or 0.03% (whichever is lower) per executed order on intraday trades across equity, currency, and commodity trades. Flat ₹20 on all option trades."
        },
        {
            src: "media/images/pricing-eq.svg",
            alt: "pricing",
            heading:"Free direct MF",
            text: "All direct mutual fund investments are absolutely free — ₹ 0 commissions & DP charges."
        },
    ];
    return (
        <>
            <div className=" pt-20 pb-20">
                <h1 className="text-4xl md:text-5xl font-medium text-center text-neutral-700 leading-loose">
                    Charges</h1>
                <h2 className="text-base md:text-2xl text-center text-neutral-400 leading-loose">List of all charges and taxes</h2>
            </div>
            <div className="max-w-7xl mx-auto px-6 py-18">
                <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-10 mb-8">
                    {pricingTag.map((card, index) => (
                        <div key={index} className="flex flex-col items-center text-center space-y-4">
                            <img src={card.src} alt={card.alt} className="h-50 object-contain mt-8" />
                            <h2 className="text-3xl font-semibold text-neutral-700 pb-5 pt-5">{card.heading}</h2>
                            <p className="text-lg text-neutral-600 leading-loose">{card.text}</p>
                        </div>
                    ))}
                </div>
            </div>
        </>
    )
}