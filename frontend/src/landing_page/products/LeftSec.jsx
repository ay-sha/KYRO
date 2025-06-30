export default function LeftSection({
    imgURL,
    productName,
    ProductDes,
    tryDemo,
    learnMore,
    playStore,
    appStore,
    coin,
}) {
    return (
        <>
            <div className="max-w-7xl mx-auto px-4 md:px-6 lg:px-8 py-16 flex flex-col md:flex-row items-center gap-8">
                <div className="w-full md:w-[55%] flex justify-center">
                    <img
                        src={imgURL}
                        alt="Image"
                        className="w-5/6 object-cover shadow-md"
                    />
                </div>

                {/* Right: Text */}
                <div className="w-full md:w-[45%] text-gray-700 text-base md:text-[18px] space-y-4">
                    <h2 className="text-xl md:text-4xl font-medium text-neutral-700 leading-relaxed">{productName}</h2>
                    <p className="">{ProductDes}</p>
                    <div className="flex flex-col gap-8 pt-3">
                        <div className="flex flex-col sm:flex-row gap-6">
                            {/* Try Demo & Learn More links (if either exists) */}
                            {(tryDemo || learnMore) && (
                                <div className="flex gap-8">
                                    {tryDemo && (
                                        <a href={tryDemo} className="text-blue-500 hover:text-black transition pr-14">
                                            Try Demo →
                                        </a>
                                    )}
                                    {learnMore && (
                                        <a href={learnMore} className="text-blue-500 hover:text-black transition">
                                            Learn More →
                                        </a>
                                    )}
                                </div>
                            )}

                            {/* Coin link (if exists) */}
                            {coin && (
                                <div>
                                    <a href={coin} className="text-blue-500 hover:text-black transition">
                                        Coin →
                                    </a>
                                </div>
                            )}
                        </div>


                        {/* Row 2: App Store Badges */}
                        <div className="flex gap-6 items-center">
                            <a href={playStore}>
                                <img
                                    src="media/images/googlePlayBadge.svg"
                                    alt="Google Play Store"
                                    className="h-13 w-40"
                                />
                            </a>
                            <a href={appStore}>
                                <img
                                    src="media/images/appstoreBadge.svg"
                                    alt="Apps Store"
                                    className="h-13 w-40"
                                />
                            </a>
                        </div>
                    </div>

                </div>
            </div>
        </>
    );
}
