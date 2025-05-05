import React, { use, useState } from "react";
import { Link, useLocation, useNavigate } from "react-router";
import { AuthContext } from "../../AuthProvider/AuthProvider";
import { toast } from "react-toastify";
import useTitle from "../../Component/Title/useTitle";
import { Eye, EyeClosed } from "lucide-react";

export default function Login() {
    const [showPassword, setShowPassword] = useState(false)
    useTitle("login")
    const { logInUser, setUser, createWithGoogle } = use(AuthContext);

    const handleGoogleLogIn = () => {
        createWithGoogle().then(() => {
            toast("Login Successful");
            navigate(`${location.state ? location.state : '/'}`)
        }).catch(error => {
            toast.warn(error.message)
        })
    }

    const navigate = useNavigate()
    const location = useLocation();

    const handleLogIn = (e) => {

        e.preventDefault();
        const target = e.target;
        const email = target.email.value;
        const password = target.password.value;

        console.log(email, password)

        logInUser(email, password).then(result => {
            setUser(result.user);
            toast("Login successful");
            navigate(`${location.state ? location.state : '/'}`)
        }).catch(error => {
            toast(error.message)
        })
    }

    return (
        <div className="min-h-screen flex items-center justify-center p-4">
            <div className="w-full max-w-md bg-black/55 rounded-sm p-6 shadow-lg">
                <h2 className="text-2xl font-bold text-white text-center mb-6">Login</h2>
                <form onSubmit={handleLogIn} className="space-y-4">
                    <div>
                        <label className="block text-gray-300 mb-1">Email</label>
                        <input
                            type="email"
                            name="email"
                            placeholder="Your Email"
                            className="w-full p-2 rounded bg-gray-700/50 text-red-500 focus:outline-none focus:ring-2 focus:ring-blue-500"
                            required
                        />
                    </div>

                    <div>
                        <label className="block text-gray-300 mb-1">Password</label>
                        <div className="relative">
                            <input
                                type={showPassword ? 'text' : 'password'}
                                name="password"
                                placeholder="Your Password" 
                                className="w-full p-2 rounded bg-gray-700/60 text-red-500 focus:outline-none focus:ring-2 focus:ring-blue-500"
                                required
                            />
                            <span className="absolute top-2 right-2.5" onClick={() => setShowPassword(!showPassword)}> {showPassword ? <EyeClosed size={20}></EyeClosed> : <Eye size={20}></Eye>} </span>
                        </div>
                    </div>

                    <button
                        type="submit"
                        className="w-full bg-blue-600 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded"
                    >
                        Login
                    </button>
                </form>

                <div className="text-center mt-4">
                    <p className="text-gray-300">
                        Don't have an account?{' '}
                        <Link to="/auth/register" className="text-blue-400 hover:underline">
                            Register here
                        </Link>
                    </p>
                </div>

                <div className="mt-6 text-center">
                    <button onClick={handleGoogleLogIn} className="w-full bg-red-600 hover:bg-red-700 text-white font-bold py-2 px-4 rounded">
                        Login with Google
                    </button>
                </div>
            </div>
        </div>
    );
}
