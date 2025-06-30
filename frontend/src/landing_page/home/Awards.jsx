import './homeStyle.css' 
export default function Awards() {
    return (
        <div className="containerMain container">
            <div className="w-full px-15 py-5 lg:w-1/2">
                <img className="w-5/6 m-auto" src="media/images/largestBroker.svg" alt="Largest Broker" />
            </div>
            <div className="w-full lg:w-1/2 pl-5 pr-5 h-5/6">
                <h1 className="text-xl lg:text-4xl font-medium">
                    Largest Stock Broker in Bangladesh
                </h1>
                <p className="text-lg mt-2 lg: mt-5">
                    2+ million KYRO clients contribute to over 15% of all retail order volumes in India daily by trading and investing in:
                </p>
                <ul className="grid grid-cols-2 gap-x-6 gap-y-2 list-disc pl-5 text-md mt-5">
                    <li>Futures and Options</li>
                    <li>Stocks & IPOs</li>
                    <li>Commodity derivatives</li>
                    <li>Direct mutual funds</li>
                    <li>Currency derivatives</li>
                    <li>Bonds and Government Securities</li>
                </ul>
                <img className="pt-20" src="media/images/pressLogos.png" alt="pressLogo" />
            </div>
        </div>

    )
}