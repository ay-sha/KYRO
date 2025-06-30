import './homeStyle.css' 

export default function Education() {
    return (
        <div className="containerMain container">
            <div className="w-full px-15 py-5 lg:w-1/2">
                <img className="w-5/6 m-auto" src="media/images/education.svg" alt="Largest Broker" />
            </div>
            <div className="w-full pl-5 pr-5 h-5/6 sm:mt-15 lg:w-1/2">
                <h1 className="text-xl lg:text-4xl font-medium">
                    Free and open market education
                </h1>
                <p className="text-lg mt-2 lg:mt-5 para-2">
                    Varsity, the largest online stock market education book in the world covering everything from the basics to advanced trading.
                </p>
                <a href="#check" className=" bluetxt" >Varsity <i className="fa-solid fa-arrow-right"></i></a>
                <p className="text-lg mt-2 lg:mt-5 para-2">
                    TradingQ&A, the most active trading and investment community in India for all your market related queries.
                </p>
                <a href="#check" className=" bluetxt" >TradingQ&A<i className="fa-solid fa-arrow-right"></i></a>
            </div>
        </div>

    )
}