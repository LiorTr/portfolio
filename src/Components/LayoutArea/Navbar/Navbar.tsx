import "./Navbar.css";
import { FaLinkedin } from "react-icons/fa"
import { FaGithub } from "react-icons/fa"
import { FaInstagram } from "react-icons/fa"
export function Navbar(): JSX.Element {
    return (
        <div className="mb-20 flex item-center justify-between py-6">
            <div className="flex flex-shrink-0 items-center">
                <h1 >LT</h1>
            </div>
            <div className="m-8 flex items-center justify-center gap-4 text-2xl">
                <FaLinkedin />
                <FaGithub />
                <FaInstagram />
            </div>
        </div>
    );
}
