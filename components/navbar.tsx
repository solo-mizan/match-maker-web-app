import Link from "next/link"

const Navbar = () => {
    return (
        <div className="sticky inset-x-0 top-0 z-30 w-full transition-all border-b border-gray-200 bg-white/75 backdrop-blur-lg">
            <div className="max-w-7xl mx-auto lg:px-8 px-6">
                <div className=" flex h-14 items-center justify-evenly">
                    <Link
                        href='/'
                        className="px-10 sm:absolute inset-y-0 left-0 flex items-center font-semibold"
                    >
                        <img src="./logo.png" alt="" className="h-12" />
                        BiyeSaadi
                    </Link>
                    <Link
                        href='/pricing'
                    >
                        Pricing
                    </Link>
                    <Link
                        href='/login'
                    >
                        Login
                    </Link>
                    <Link
                        href='/about-us'
                    >
                        About us
                    </Link>
                    <Link
                        href='/faq'
                    >
                        FAQ
                    </Link>
                </div>

            </div>
        </div>
    )
}

export default Navbar