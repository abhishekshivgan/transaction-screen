export function Navbar() {
    return <div>
        <nav className="bg-blue-100 dark:bg-gray-700 ">
            <div className="max-w-screen-xl px-2 py-1 mx-auto">
                <div className="flex items-center">
                    <ul className="flex flex-row font-medium mt-0 space-x-4 rtl:space-x-reverse text-sm">
                        <li>
                            <a href="#" className="text-gray-900 dark:text-white hover:underline text-xs" aria-current="page">Show Overview</a>
                        </li>
                        <li className="pt-1">
                            <svg className="cursor-pointer" fill="#000000" width="15px" height="15px" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                                <path fillRule="evenodd" d="M13,3 L5,3 L5,21 L15,21 L15,23 L5,23 C3.8954305,23 3,22.1045695 3,21 L3,3 C3,1.8954305 3.8954305,1 5,1 L15.4142136,1 L21,6.58578644 L21,14 L19,14 L19,9 L15,9 C13.8954305,9 13,8.1045695 13,7 L13,3 Z M19,19 L19,17 L21,17 L21,19 L23,19 L23,21 L21,21 L21,23 L19,23 L19,21 L17,21 L17,19 L19,19 Z M18.5857864,7 L15,3.41421356 L15,7 L18.5857864,7 Z" />
                            </svg>
                        </li>
                        <li>
                            <a href="#" className="text-gray-900 dark:text-white hover:underline text-xs">Hold</a>
                        </li>
                        <li>
                            <a href="#" className="text-gray-900 dark:text-white hover:underline text-xs">Check</a>
                        </li>
                        <li>
                            <a href="#" className="text-gray-900 dark:text-white hover:underline text-xs">Post</a>
                        </li>
                        <li>
                            <a href="#" className="text-gray-900 dark:text-white hover:underline text-xs">Help</a>
                        </li>
                    </ul>
                </div>
            </div>
        </nav>
    </div>
}