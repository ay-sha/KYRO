import './homeStyle.css'
import { Link } from "react-router-dom";
export default function Hero() {
    return (
        <div className="p-5 mb-20 containerMain">
            <img className="w-full mb-10" src="media/images/homeHero.png" alt="Hero image" />
            <div className="flex flex-col mt-12 justify-center items-center gap-y-4">
                <h1 className="text-5xl text-center font-medium">Invest in everything</h1>
                <p className="text-center text-2xl">Online platform to invest in stocks, derivatives, mutual funds, ETFs, bonds, and more.</p>
                <button className="blue-btn" >
                    <Link to='/signup' >
                        Sign up for free
                    </Link>
                </button>
            </div>
        </div>
    )
}