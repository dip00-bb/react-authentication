import React, { use, useState } from "react";
import { Link, useNavigate } from "react-router";
import { AuthContext } from "../../AuthProvider/AuthProvider";
import { toast } from 'react-toastify';
import useTitle from "../../Component/Title/useTitle";
import { Eye, EyeClosed } from "lucide-react";
export default function Register() {

  useTitle('register')

  const [showPassword, setShowPassword] = useState(false)
  const { createUser, setUser, updateUser, createWithGoogle } = use(AuthContext);
  const navigate = useNavigate();



  const handleSignUpWithGoogle = () => {
    createWithGoogle().then(() => {
      toast("Registration Successful")
      navigate('/')
    }).catch(error => {
      toast.warn(error.message)
    })
  }

  const handleSignUpUser = (e) => {
    e.preventDefault()
    const target = e.target;
    const userName = target.name.value;
    const userEmail = target.email.value;
    const userPhotoURL = target.photoUrl.value;
    const password = target.password.value;

    createUser(userEmail, password).
      then(result => {
        const user = result.user
        
        updateUser(userName,userPhotoURL).then(() => {
  
          setUser({ ...user, displayName: userName, photoURL: userPhotoURL });
          toast("Registration Successful");
          navigate('/')

        }).catch(error => {
          setUser(user)
          toast.warn(error.message);
        })
      }).catch(error => {
        toast.warn(error.message);
      })

  }

  return (
    <div className="min-h-screen flex items-center justify-center p-4">
      <div className="w-full max-w-md bg-gray-800/70 rounded-2xl p-6 shadow-lg">
        <h2 className="text-2xl font-bold text-white text-center mb-6">Register</h2>
        <form onSubmit={handleSignUpUser} className="space-y-4">
          <div>
            <label className="block text-gray-300 mb-1">Name</label>
            <input
              type="text"
              placeholder="Your Name"
              name="name"
              className="w-full p-2 rounded bg-gray-700/50 text-white focus:outline-none focus:ring-2 focus:ring-blue-500"
              required
            />


          </div>

          <div>
            <label className="block text-gray-300 mb-1">Email</label>
            <input
              type="email"
              placeholder="Your Email"
              name="email"
              className="w-full p-2 rounded bg-gray-700/50 text-white focus:outline-none focus:ring-2 focus:ring-blue-500"
              required
            />
          </div>

          <div>
            <label className="block text-gray-300 mb-1">Photo URL</label>
            <input
              type="url"
              placeholder="Photo URL"
              name="photoUrl"
              className="w-full p-2 rounded bg-gray-700/50 text-white focus:outline-none focus:ring-2 focus:ring-blue-500"
              required
            />
          </div>

          <div>
            <label className="block text-gray-300 mb-1">Password</label>
            <div className="relative">
              <input
                type={showPassword ? 'text' : 'password'}
                placeholder="Password"
                name="password"
                className="w-full p-2 rounded bg-gray-700/50 text-white focus:outline-none focus:ring-2 focus:ring-blue-500"
                required
                pattern="(?=.*[a-z])(?=.*[A-Z]).{6,}"
                title="Password must be at least 6 characters and include at least one uppercase and one lowercase letter."
              />
              <span className="absolute top-2 right-2.5" onClick={()=>setShowPassword(!showPassword)}> {showPassword ? <EyeClosed size={20}></EyeClosed> : <Eye size={20}></Eye>} </span>
            </div>


          </div>

          <button
            type="submit"
            className="w-full bg-blue-600 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded"
          >
            Register
          </button>
        </form>

        <div className="text-center mt-4">
          <p className="text-gray-300">
            Already have an account?{' '}
            <Link to="/auth/login" className="text-blue-400 hover:underline">
              Login here
            </Link>
          </p>
        </div>

        <div className="mt-6 text-center">
          <button onClick={handleSignUpWithGoogle} className="w-full bg-red-600 hover:bg-red-700 text-white font-bold py-2 px-4 rounded">
            SignUp with Google
          </button>
        </div>
      </div>
    </div>
  );
}
