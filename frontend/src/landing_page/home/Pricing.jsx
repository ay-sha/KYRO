import './homeStyle.css' 
export default function Pricing() {
    return (
        <div className="containerMain">
            <div className="flex flex-col lg:flex-row w-full px-5 mb-10">
                <div className="w-full lg:w-2/5">
                    <h1 className="text-3xl text-semibold mb-5">Unbeatable pricing</h1>
                    <p className="pb-4">We pioneered the concept of discount broking and price transparency in Bangladesh. Flat fees and no hidden charges.</p>
                    <div>
                        <a href="#check" className="bluetxt text-sm" >See pricing <i className="fa-solid fa-arrow-right"></i></a>
                    </div>
                </div>
                
                <div className="w-full lg:w-3/5">
                    <div className="w-full flex">
                        <div className="w-1/3 flex justify-center items-center -mx-4">
                            <img src="media/images/pricing.svg" alt="" className="w-1/3 sm:w-1/6" />
                            <p className="text-xs/4 sm:text-xs"> Free account opening</p>
                        </div>
                        <div className="w-1/3 flex justify-center items-center">
                            <img src="media/images/pricing.svg" alt="" className="w-1/3 sm:w-1/6" />
                            <p className="text-xs/4 sm:text-xs">Free equity delivery and direct mutual funds</p>
                        </div>
                        <div className="w-1/3 flex justify-center items-center">
                            <img src="media/images/pricing-2.svg" alt="" className="w-2/3 sm:w-1/3" />
                            <p className="text-xs/4 sm:text-xs">Free equity delivery and direct mutual funds</p>
                        </div>
                    </div>

                </div>

            </div>
        </div>
    )
}