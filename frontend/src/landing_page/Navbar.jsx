import { useState } from 'react';
import { Link } from 'react-router-dom';

export default function Navbar() {
    const [isOpen, setIsOpen] = useState(false);

    return (
        <nav className="bg-white border-b border-gray-300 sticky top-0 z-50">
            <div className="max-w-7xl mx-auto px-8 sm:px-6 lg:px-8">
                <div className="flex justify-between h-16 items-center">
                    <Link to='/'>
                        <img src="media/images/KYRO.png" className="w-30" alt="KYRO Logo" />
                    </Link>

                    {/* Desktop Links */}
                    <div className="hidden lg:flex space-x-14">
                        <Link to='/signup' className="text-gray-500 hover:text-blue-600">Signup</Link>
                        <Link to='/login' className="text-gray-500 hover:text-blue-600">Login</Link>
                        <Link to='/about' className="text-gray-500 hover:text-blue-600">About</Link>
                        <Link to='/products' className="text-gray-500 hover:text-blue-600">Products</Link>
                        <Link to='/pricing' className="text-gray-500 hover:text-blue-600">Pricing</Link>
                        <Link to='/support' className="text-gray-500 hover:text-blue-600">Support</Link>
                    </div>

                    {/* Mobile Hamburger */}
                    <div className="lg:hidden">
                        <button
                            onClick={() => setIsOpen(!isOpen)}
                            className="text-gray-500 focus:outline-none"
                            aria-label="Toggle menu"
                        >
                            {isOpen ? (
                                // Cross Icon
                                <svg
                                    className="h-6 w-6"
                                    fill="none"
                                    stroke="currentColor"
                                    viewBox="0 0 24 24"
                                >
                                    <path
                                        strokeLinecap="round"
                                        strokeLinejoin="round"
                                        strokeWidth={2}
                                        d="M6 18L18 6M6 6l12 12"
                                    />
                                </svg>
                            ) : (
                                // Hamburger Icon
                                <svg
                                    className="h-6 w-6"
                                    fill="none"
                                    stroke="currentColor"
                                    viewBox="0 0 24 24"
                                >
                                    <path
                                        strokeLinecap="round"
                                        strokeLinejoin="round"
                                        strokeWidth={2}
                                        d="M4 6h16M4 12h16M4 18h16"
                                    />
                                </svg>
                            )}
                        </button>
                    </div>
                </div>
            </div>

            {/* Mobile Menu */}
            {isOpen && (
                <div className="lg:hidden bg-white border-t border-gray-300 px-4 py-3 space-y-2">
                    <Link to='/signup' className="block text-gray-500 hover:text-blue-600">Signup</Link>
                    <Link to='/login' className="block text-gray-500 hover:text-blue-600">Login</Link>
                    <Link to='/about' className="block text-gray-500 hover:text-blue-600">About</Link>
                    <Link to='/products' className="block text-gray-500 hover:text-blue-600">Products</Link>
                    <Link to='/pricing' className="block text-gray-500 hover:text-blue-600">Pricing</Link>
                    <Link to='/support' className="block text-gray-500 hover:text-blue-600">Support</Link>
                </div>
            )}
        </nav>
    );
}
