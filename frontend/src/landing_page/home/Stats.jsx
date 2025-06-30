import './homeStyle.css' 
export default function Stats() {
    return (
        <div className="containerMain">
            <div className="flex flex-col lg:flex-row p-5">
                <div className="w-full lg:w-1/2">
                    <h1 className="text-4xl font-medium mb-10">Trust with confidence</h1>
                    <h2 className="head2">Customer-first always</h2>
                    <p className="para">That's why 1.6+ crore customers trust KYRO with ~ &#x09F3;6 lakh crores of equity investments and contribute to 15% of daily retail exchange volumes in Bangladesh.</p>

                    <h2 className="head2">No spam or gimmicks</h2>
                    <p className="para">No gimmicks, spam, "gamification", or annoying push notifications. High quality apps that you use at your pace, the way you like.<a className="bluetxt" href=''> Our philosophies.</a></p>

                    <h2 className="head2">The KYRO universe</h2>
                    <p className="para">Not just an app, but a whole ecosystem. Our investments in 30+ fintech startups offer you tailored services specific to your needs.</p>

                    <h2 className="head2">Do better with money</h2>
                    <p className="para">With initiatives like Nudge and Kill Switch, we don't just facilitate transactions, but actively help you do better with your money.</p>

                </div>
                <div className="w-full lg:w-1/2 flex flex-col justify-center lg:justify-end p-5">
                    <img src="media/images/ecosystem.png" alt="ecosystem" className="w-5/6 lg:w-full" />
                    <div className=" bluetxt text-xs/2 text-center md:text-sm">
                        <a href="#check" className="mr-3" >Explore our Products <i className="fa-solid fa-arrow-right"></i></a>
                        <a href="#try">Try Kite demo <i className="fa-solid fa-arrow-right"></i></a>
                    </div>
                </div>
            </div>
        </div>
    )
}