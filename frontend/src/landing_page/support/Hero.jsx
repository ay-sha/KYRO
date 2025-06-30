export default function Hero() {
    return (
        <>
            <div className="h-[32rem] text-white pl-45 pt-15 pr-50" id="supportHero">
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                    <a href="" className="text-2xl font-medium pb-4">Support Portal</a>
                    <a href="#" className="text-lg underline underline-offset-4 decoration-1 text-right"> Track tickets </a>
                </div>


                <div className="grid  grid-cols-2 md:grid-cols-2 gap-4 sm:grid-cols-1 mt-7">
                    <div>
                        <h2 className="text-[1.6rem] leading-relaxed pb-5">Search for an answer or browse help topics to create a ticket</h2>
                        <input type="text" placeholder="Eg: how do i activate F&O, why is my order getting rejected ..." id="supportSearch" />
                        <div className="flex flex-wrap gap-5 pt-5 text-lg">
                            <a href="" className="border-b-2 border-white">Track account opening</a>
                            <a href="" className="border-b-2 border-white"> Track segment activation</a>
                            <a href="" className="border-b-2 border-white">Intraday margins</a>
                            <a href="" className="border-b-2 border-white">Kite user manual</a>
                        </div>
                    </div>
                    <div className="ml-8">
                        <h2 className="text-[1.6rem] leading-relaxed pb-2">Featured</h2>
                        <ol className="list-decimal list-inside space-y-2 text-white text-[1.2rem] ml-4">
                            <li className="ml-2 mb-6">
                                <a href="#" className="underline-offset-1 underline decoration-1">
                                    Exclusion of F&O contracts on 8 securities from August 29, 2025
                                </a>
                            </li>
                            <li className="ml-2">
                                <a href="#" className="underline-offset-1 underline decoration-1">
                                    Revision in expiry day of Index and Stock derivatives contracts
                                </a>
                            </li>
                        </ol>
                    </div>

                </div>
            </div>
        </>
    )
}