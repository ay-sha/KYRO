export default function Footer() {
    return (
        <footer className="border-t border-neutral-300 bg-gray-50 pt-10">
            <div className="flex flex-col gap-y-10 px-4 max-w-7xl mx-auto">
                {/* Top Section with columns */}
                <div className="w-full flex flex-col sm:flex-row gap-8">
                    {/* Left: Logo and Icons */}
                    <div className="w-full sm:w-[22%] pr-4 sm:pr-8">
                        <img src='media/images/KYRO.png' className='w-28' />
                        <p className="text-sm text-neutral-500 mt-2">
                            ©2025, KYRO Broking Ltd. <br /> All rights reserved.
                        </p>

                        {/* Social icons row 1 */}
                        <div className="flex gap-6 mt-4 pb-6 border-b border-neutral-300">
                            <i className="fa-brands fa-x-twitter text-2xl text-neutral-500 hover:text-blue-500 transition"></i>
                            <i className="fa-brands fa-square-facebook text-xl text-neutral-500 hover:text-blue-500 transition"></i>
                            <i className="fa-brands fa-instagram text-2xl text-neutral-500 hover:text-blue-500 transition"></i>
                            <i className="fa-brands fa-linkedin-in text-2xl text-neutral-500 hover:text-blue-500 transition"></i>
                        </div>

                        {/* Social icons row 2 */}
                        <div className="flex gap-6 mt-6">
                            <i className="fa-brands fa-youtube text-2xl text-neutral-500 hover:text-blue-500 transition"></i>
                            <i className="fa-brands fa-whatsapp text-2xl text-neutral-500 hover:text-blue-500 transition"></i>
                            <i className="fa-brands fa-telegram text-2xl text-neutral-500 hover:text-blue-500 transition"></i>
                        </div>
                    </div>

                    {/* Link Sections */}
                    <div className="grid grid-cols-2 sm:grid-cols-4 gap-8 w-full text-sm">
                        <div>
                            <h2 className="text-lg font-semibold text-neutral-700 mb-2">Account</h2>
                            <ul className="space-y-1 text-neutral-600">
                                <li><a href="#" className="blue-hover-a">Open demat account</a></li>
                                <li><a href="#" className="blue-hover-a">Minor demat account</a></li>
                                <li><a href="#" className="blue-hover-a">NRI demat account</a></li>
                                <li><a href="#" className="blue-hover-a">Commodity</a></li>
                                <li><a href="#" className="blue-hover-a">Dematerialisation</a></li>
                                <li><a href="#" className="blue-hover-a">Fund transfer</a></li>
                                <li><a href="#" className="blue-hover-a">MTF</a></li>
                                <li><a href="#" className="blue-hover-a">Referral program</a></li>
                            </ul>
                        </div>

                        <div>
                            <h2 className="text-lg font-semibold text-neutral-700 mb-2">Support</h2>
                            <ul className="space-y-1 text-neutral-600">
                                <li><a href="#" className="blue-hover-a">Contact us</a></li>
                                <li><a href="#" className="blue-hover-a">Support portal</a></li>
                                <li><a href="#" className="blue-hover-a">NRI demat account</a></li>
                                <li><a href="#" className="blue-hover-a">Commodity</a></li>
                                <li><a href="#" className="blue-hover-a">Dematerialisation</a></li>
                                <li><a href="#" className="blue-hover-a">Fund transfer</a></li>
                                <li><a href="#" className="blue-hover-a">MTF</a></li>
                                <li><a href="#" className="blue-hover-a">Referral program</a></li>
                            </ul>
                        </div>

                        <div>
                            <h2 className="text-lg font-semibold text-neutral-700 mb-2">Company</h2>
                            <ul className="space-y-1 text-neutral-600">
                                <li><a href="#" className="blue-hover-a">About</a></li>
                                <li><a href="#" className="blue-hover-a">Philosophy</a></li>
                                <li><a href="#" className="blue-hover-a">Press & media</a></li>
                                <li><a href="#" className="blue-hover-a">Careers</a></li>
                                <li><a href="#" className="blue-hover-a">KYRO Cares (CSR)</a></li>
                                <li><a href="#" className="blue-hover-a">KYRO.tech</a></li>
                                <li><a href="#" className="blue-hover-a">Open source</a></li>
                            </ul>
                        </div>

                        <div>
                            <h2 className="text-lg font-semibold text-neutral-700 mb-2">Quick Links</h2>
                            <ul className="space-y-1 text-neutral-600">
                                <li><a href="#" className="blue-hover-a">Upcoming IPOs</a></li>
                                <li><a href="#" className="blue-hover-a">Brokerage charges</a></li>
                                <li><a href="#" className="blue-hover-a">Market holidays</a></li>
                                <li><a href="#" className="blue-hover-a">Economic calendar</a></li>
                                <li><a href="#" className="blue-hover-a">Calculators</a></li>
                                <li><a href="#" className="blue-hover-a">Markets</a></li>
                                <li><a href="#" className="blue-hover-a">Sectors</a></li>
                            </ul>
                        </div>
                    </div>
                </div>

                {/* Disclaimer Section */}
                <div className="text-xs text-neutral-500 space-y-4 leading-relaxed mt-6">
                    <p>
                        KYRO Broking Ltd.: Member of NSE, BSE​ &​ MCX – SEBI Registration no.: INZ000031633 CDSL/NSDL: Depository services through KYRO Broking Ltd. – SEBI Registration no.: IN-DP-431-2019 Commodity Trading through KYRO Commodities Pvt. Ltd. MCX: 46025; NSE-50001 – SEBI Registration no.: INZ000038238 Registered Address: KYRO Broking Ltd., Dhaka, Bangladesh. For any complaints pertaining to securities broking please write to.  
                        <a href="#" className="text-blue-500 hover:underline mx-1">complaints@KYRO.com</a>,for DP related to
                        <a href="#" className="text-blue-500 hover:underline mx-1">dp@KYRO.com</a>.
                        Please ensure you carefully read the Risk Disclosure Document as prescribed by SEBI | ICF
                    </p>

                    <p>
                        Procedure to file a complaint on<a href="#" className="text-blue-500 hover:underline mx-1">SEBI SCORES</a> Register on SCORES portal. Mandatory details for filing complaints on SCORES: Name, PAN, Address, Mobile Number, E-mail ID. Benefits: Effective Communication, Speedy redressal of the grievances
                    </p>

                    <p className="text-neutral-500"> <a href="" className="text-blue-500 hover:text-black">Smart Online Dispute Resolution</a> | <a href="" className="text-blue-500 hover:text-black"> Grievances Redressal Mechanism </a></p>
                    
                    <p>Investments in securities market are subject to market risks; read all related documents carefully before investing.</p>
                    <p>
                        Attention investors: 1) Stock brokers can accept securities as margins from clients only by way of pledge in the depository system w.e.f September 01, 2020. 2) Update your e-mail and phone number with your stock broker / depository participant and receive OTP directly from depository on your e-mail and/or mobile number to create pledge. 3) Check your securities / MF / bonds in the consolidated account statement issued by NSDL/CDSL every month.
                    </p>
                    <p>
                        "Prevent unauthorised transactions in your account. Update your mobile numbers/email IDs with your stock brokers. Receive information of your transactions directly from Exchange on your mobile/email at the end of the day. Issued in the interest of investors. KYC is one time exercise while dealing in securities markets - once KYC is done through a SEBI registered intermediary (broker, DP, Mutual Fund etc.), you need not undergo the same process again when you approach another intermediary." Dear Investor, if you are subscribing to an IPO, there is no need to issue a cheque. Please write the Bank account number and sign the IPO application form to authorize your bank to make payment in case of allotment. In case of non allotment the funds will remain in your bank account. As a business we don't give stock tips, and have not authorized anyone to trade on behalf of others. If you find anyone claiming to be part of KYRO and offering such services, please <a href="#" className="text-blue-500 hover:underline">create a ticket here</a>.
                    </p>
                </div>

                {/* Bottom Links */}
                <div className="flex flex-wrap justify-center gap-x-4 text-sm text-neutral-500 text-center mt-6 pb-8">
                    <a href="#">NSE</a>
                    <a href="#">BSE</a>
                    <a href="#">MCX</a>
                    <a href="#">Terms & conditions</a>
                    <a href="#">Policies & procedures</a>
                    <a href="#">Privacy policy</a>
                    <a href="#">Disclosure</a>
                    <a href="#">For Investor's attention</a>
                    <a href="#">Investor charter</a>
                </div>
            </div>
        </footer>
    );
}
