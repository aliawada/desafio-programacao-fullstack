import { useRouter } from "next/router"

export default function Navbar() {
    const router = useRouter();

    function handleClick() {
        router.push('/upload')
    }

    return (
        <nav>
            <div className="max-w-screen-xl flex flex-wrap items-center justify-between mx-auto p-4">
                <a href="/" className="flex items-center">
                    <img src="6206aa98efa43a84b2d43f98_HUBLA Logo.svg" className="h-8 mr-3" alt="Hubla Logo" />
                </a>
                <div className="flex md:order-2">
                    <button onClick={handleClick} type="button" className="text-white bg-gray-700 font-medium rounded-md text-sm px-4 py-2 text-center mr-3 md:mr-0 dark:bg-gray-900 dark:hover:bg-gray-700 dark:focus:ring-gray-800">Upload File</button>
                </div>
                <div className="items-center justify-between hidden w-full md:flex md:w-auto md:order-1" id="navbar-cta">
                    <ul className="flex flex-col font-medium p-4 md:p-0 mt-4 border border-gray-100 rounded-lg bg-gray-50 md:flex-row md:space-x-8 md:mt-0 md:border-0 md:bg-white">
                        <li>
                            <a href="/creators" className="group  transition duration-300">
                                Creators
                                <span className="block max-w-0 group-hover:max-w-full transition-all duration-400 h-0.5 bg-gray-900"></span>
                            </a>
                        </li>
                        <li>
                            <a href="/affiliates" className="group  transition duration-300">
                                Affiliates
                                <span className="block max-w-0 group-hover:max-w-full transition-all duration-400 h-0.5 bg-gray-900"></span>
                            </a>
                        </li>
                        <li>
                            <a href="/transactions" className="group  transition duration-300">
                                Transactions
                                <span className="block max-w-0 group-hover:max-w-full transition-all duration-400 h-0.5 bg-gray-900"></span>
                            </a>
                        </li>
                    </ul>
                </div>
            </div>
        </nav>
    )
}