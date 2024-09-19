import thumb from "/icons/ericlyndert-new-webx.png";
import { NavLink} from "react-router-dom";

export default function Footer() {
// hook to get and auto update year
    const currentYear = new Date().getFullYear();
    
    return(
        <>
    <div className="w-full  px-24 bg-white text-black  p-4 md:py-8">
        <div className="sm:flex sm:items-center sm:justify-between">
            <NavLink to="/" className="flex items-center mb-4 sm:mb-0 space-x-3 rtl:space-x-reverse">
                <img src={thumb} className="h-16" alt="the_black_topic_logo" />
            </NavLink>
            <ul className="flex flex-wrap items-center mb-6 text-sm font-medium text-gray-500 sm:mb-0 dark:text-gray-400">
                <li>
                    <NavLink to="#" className="hover:underline me-4 md:me-6">About</NavLink>
                </li>
                <li>
                    <NavLink to="#" className="hover:underline me-4 md:me-6">Privacy Policy</NavLink>
                </li>
                <li>
                    <NavLink to="#" className="hover:underline me-4 md:me-6">Licensing</NavLink>
                </li>
                <li>
                    <NavLink to="#" className="hover:underline">Contact</NavLink>
                </li>
            </ul>
        </div>
        <hr className="my-6 border-gray-200 sm:mx-auto dark:border-gray-700 lg:my-8" />
        <span className="block text-sm text-gray-500 sm:text-center dark:text-gray-400">© {currentYear} <NavLink to="https://github.com/lyndertmanani" className="hover:underline">ericlyndert ™</NavLink>. All Rights Reserved.</span>
    </div>
        </>
    )
}
