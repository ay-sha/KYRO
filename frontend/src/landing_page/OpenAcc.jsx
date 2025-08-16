import { Link } from "react-router-dom";
export default function OpenAcc() {
    return (
        <div className="mb-20 containerMain">
            <div className="flex flex-col mt-12 justify-center items-center gap-y-4">
                <h1 className="text-5xl text-center font-medium">Open a KYRO account</h1>
                <p className="para">Modern platforms and apps, &#2547;0 investments, and flat  &#2547;20 intraday and F&O trades.</p>
                <button className="blue-btn -mt-10">
                    <Link to='/signup' >
                        Sign up for free
                    </Link>
                </button>
            </div>
        </div>
    )
}