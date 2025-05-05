
import { Link, NavLink } from 'react-router';
import { AuthContext } from '../../AuthProvider/AuthProvider';
import { use } from 'react';
import { toast } from 'react-toastify';

const Navbar = () => {

    const { user, logOutUser } = use(AuthContext);

    const handleLogOut = () => {
        logOutUser().then(() => {
            toast("Log out successful")
        }).catch(error => {
            toast.warn(error.message)
        })
    }

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
                <Link to='/' className="text-2xl font-extrabold text-red-600 hover:text-white hover:drop-shadow-[0_0_8px_#dc2626] transition-all duration-300 cursor-pointer tracking-wide">
                    Lava<span className="text-white">ROX</span>
                </Link>
            </div>
            <div className="navbar-center hidden lg:flex">
                <ul className="menu menu-horizontal px-1">
                    {
                        link
                    }
                </ul>
            </div>



            <div className="navbar-end flex gap-3">
                {
                    user && <div className="relative group">
                        <div tabIndex={0} role="button" className="btn btn-ghost btn-circle avatar">
                            <div className="w-10 rounded-full">
                                <img
                                    alt="Tailwind CSS Navbar component"
                                    src={user.photoURL}
                                />
                            </div>
                        </div>

                        <div className="absolute left-1/2 -translate-x-1/2 mt-2 px-2 py-1 bg-gray-800 text-white text-sm rounded opacity-0 group-hover:opacity-100 transition-opacity duration-200">
                            {user.displayName}
                        </div>
                    </div>

                }
                <Link to={!user && '/auth/login'} onClick={user && handleLogOut} className="text-gray-300 hover:text-white bg-transparent hover:bg-red-500 hover:shadow-[0_0_10px_#dc2626] transition-all duration-500 px-4 py-2 rounded-md">{user ? 'Logout' : 'Log In'}</Link>
            </div>
        </div>
    );
};

export default Navbar;