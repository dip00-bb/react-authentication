
import { Link, NavLink } from 'react-router';
import { AuthContext } from '../../AuthProvider/AuthProvider';

const Navbar = () => {

    const link = <><li><NavLink to='/'>Home</NavLink></li><li><NavLink>My Profile</NavLink></li></>;
    return (
        <div className="navbar bg-transparent shadow-sm">
            <div className="navbar-start">
                <div className="dropdown">
                    <div tabIndex={0} role="button" className="btn btn-ghost lg:hidden">
                        <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"> <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h8m-8 6h16" /> </svg>
                    </div>
                    <ul
                        tabIndex={0}
                        className="menu menu-sm dropdown-content bg-base-100 rounded-box z-1 mt-3 w-52 p-2 shadow">
                        {
                            link
                        }
                    </ul>
                </div>
                <a className="text-2xl font-extrabold text-red-600 hover:text-white hover:drop-shadow-[0_0_8px_#dc2626] transition-all duration-300 cursor-pointer tracking-wide">
                    Lava<span className="text-white">ROX</span>
                </a>
            </div>
            <div className="navbar-center hidden lg:flex">
                <ul className="menu menu-horizontal px-1">
                    {
                        link
                    }
                </ul>
            </div>



            <div className="navbar-end flex gap-3">
                <div tabIndex={0} role="button" className="btn btn-ghost btn-circle avatar">
                    <div className="w-10 rounded-full">
                        <img
                            alt="Tailwind CSS Navbar component"
                            src="https://img.daisyui.com/images/stock/photo-1534528741775-53994a69daeb.webp" />
                    </div>
                </div>
                <Link to='/auth/login' className="text-gray-300 hover:text-white bg-transparent hover:bg-red-500 hover:shadow-[0_0_10px_#dc2626] transition-all duration-500 px-4 py-2 rounded-md">Log In</Link>
            </div>
        </div>
    );
};

export default Navbar;