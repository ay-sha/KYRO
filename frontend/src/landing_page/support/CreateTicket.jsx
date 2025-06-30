export default function CreateTicket() {
    return (
        <div className="max-w-6xl mx-auto px-6 py-16 space-y-10 mb-15">
            <h1 className="text-2xl text-neutral-500 mb-10">
                To create a ticket, select a relevant topic
            </h1>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                {/* Section 1 */}
                <div>
                    <h2 className="flex items-center gap-2 text-xl text-neutral-700 hover:text-blue-500 transition cursor-pointer pb-2 leading-loose">
                        <i class="fa-solid fa-circle-plus"></i> Account Opening
                    </h2>
                    <ul className="mt-2 space-y-1 text-base pl-6 leading-loose">
                        <li>
                            <a href="#" className="text-blue-500 hover:text-neutral-500">
                                Resident individual
                            </a>
                        </li>
                        <li>
                            <a href="#" className="text-blue-500 hover:text-neutral-500">
                                Minor
                            </a>
                        </li>
                        <li>
                            <a href="#" className="text-blue-500 hover:text-neutral-500">
                                Immigrant
                            </a>
                        </li>
                        <li>
                            <a href="#" className="text-blue-500 hover:text-neutral-500">
                                Company, Partnership, HUF and LLP
                            </a>
                        </li>
                        <li>
                            <a href="#" className="text-blue-500 hover:text-neutral-500">
                                Glossary
                            </a>
                        </li>
                    </ul>
                </div>

                {/* Section 2 */}
                <div>
                    <h2 className="flex items-center gap-2 text-lg text-neutral-700 hover:text-blue-500 transition cursor-pointer leading-loose">
                        <i className="fa-solid fa-user"></i>  Your KYRO Account
                    </h2>
                    <ul className="mt-2 space-y-1 text-base pl-6 leading-loose">
                        <li>
                            <a href="#" className="text-blue-500 hover:text-neutral-500">
                                Your Profile
                            </a>
                        </li>
                        <li>
                            <a href="#" className="text-blue-500 hover:text-neutral-500">
                                Account modification
                            </a>
                        </li>
                        <li>
                            <a href="#" className="text-blue-500 hover:text-neutral-500">
                                Client Master Report (CMR) and Depository Participant (DP)
                            </a>
                        </li>
                        <li>
                            <a href="#" className="text-blue-500 hover:text-neutral-500">
                                Nomination
                            </a>
                        </li>
                        <li>
                            <a href="#" className="text-blue-500 hover:text-neutral-500">
                                Transfer and conversion of securities
                            </a>
                        </li>
                    </ul>
                </div>

                {/* Section 3 */}
                <div>
                    <h2 className="flex items-center gap-2 text-lg text-neutral-700 hover:text-blue-500 transition cursor-pointer leading-loose">
                        <i className="fa-solid fa-bars-staggered rotate-270"></i> Kite
                    </h2>
                    <ul className="mt-2 space-y-1 text-base pl-6 leading-loose">
                        <li>
                            <a href="#" className="text-blue-500 hover:text-neutral-500">
                                IPO

                            </a>
                        </li>
                        <li>
                            <a href="#" className="text-blue-500 hover:text-neutral-500">
                                Trading FAQs

                            </a>
                        </li>
                        <li>
                            <a href="#" className="text-blue-500 hover:text-neutral-500">
                                Margin Trading Facility (MTF) and Margins

                            </a>
                        </li>
                        <li>
                            <a href="#" className="text-blue-500 hover:text-neutral-500">
                                Charts and orders
                            </a>
                        </li>
                        <li>
                            <a href="#" className="text-blue-500 hover:text-neutral-500">
                                Alerts and Nudges
                            </a>
                        </li>
                        <li>
                            <a href="#" className="text-blue-500 hover:text-neutral-500">
                                General
                            </a>
                        </li>
                    </ul>
                </div>

                {/* Section 4 */}
                <div>
                    <h2 className="flex items-center gap-2 text-lg text-neutral-700 hover:text-blue-500 transition cursor-pointer leading-loose">
                        <i class="fa-solid fa-wallet"></i>Funds
                    </h2>
                    <ul className="mt-2 space-y-1 text-base pl-6 leading-loose">
                        <li>
                            <a href="#" className="text-blue-500 hover:text-neutral-500">
                                Add money
                            </a>
                        </li>
                        <li>
                            <a href="#" className="text-blue-500 hover:text-neutral-500">
                                Withdraw money
                            </a>
                        </li>
                        <li>
                            <a href="#" className="text-blue-500 hover:text-neutral-500">
                            Add bank accounts
                            </a>
                        </li>
                        <li>
                            <a href="#" className="text-blue-500 hover:text-neutral-500">
                                eMandates
                            </a>
                        </li>
                    </ul>
                </div>

                {/* Section 5 */}
                <div>
                    <h2 className="flex items-center gap-2 text-lg text-neutral-700 hover:text-blue-500 transition cursor-pointer leading-loose ">
                        <i class="fa-solid fa-circle-notch"></i> Console
                    </h2>
                    <ul className="mt-2 space-y-1 text-base pl-6 leading-loose">
                        <li>
                            <a href="#" className="text-blue-500 hover:text-neutral-500">
                                Portfolio
                            </a>
                        </li>
                        <li>
                            <a href="#" className="text-blue-500 hover:text-neutral-500">
                            Corporate actions
                            </a>
                        </li>
                        <li>
                            <a href="#" className="text-blue-500 hover:text-neutral-500">
                            Funds statement
                            </a>
                        </li>
                        <li>
                            <a href="#" className="text-blue-500 hover:text-neutral-500">
                                Reports
                            </a>
                        </li>
                        <li>
                            <a href="#" className="text-blue-500 hover:text-neutral-500">
                                Profile
                            </a>
                        </li>
                        <li>
                            <a href="#" className="text-blue-500 hover:text-neutral-500">
                            Segments
                            </a>
                        </li>
                    </ul>
                </div>

                {/* Section 6 */}
                <div>
                    <h2 className="flex items-center gap-2 text-lg text-neutral-700 hover:text-blue-500 transition cursor-pointer leading-loose">
                        <i class="fa-solid fa-coins"></i> Coin
                    </h2>
                    <ul className="mt-2 space-y-1 text-base pl-6 leading-loose">
                        <li>
                            <a href="#" className="text-blue-500 hover:text-neutral-500">
                                Mutual funds
                            </a>
                        </li>
                        <li>
                            <a href="#" className="text-blue-500 hover:text-neutral-500">
                                National Pension Scheme (NPS)
                            </a>
                        </li>
                        <li>
                            <a href="#" className="text-blue-500 hover:text-neutral-500">
                                Features on Coin
                            </a>
                        </li>
                        <li>
                            <a href="#" className="text-blue-500 hover:text-neutral-500">
                                Payments and Orders
                            </a>
                        </li>
                        <li>
                            <a href="#" className="text-blue-500 hover:text-neutral-500">
                                General
                            </a>
                        </li>
                    </ul>
                </div>
            </div>
        </div>
    );
}
