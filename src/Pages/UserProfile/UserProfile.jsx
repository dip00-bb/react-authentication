import React, { use } from 'react';
import useTitle from '../../Component/Title/useTitle';
import { AuthContext } from '../../AuthProvider/AuthProvider';
import { toast } from 'react-toastify';

const UserProfile = () => {


    useTitle("User Details");

    const {user,updateUser,setUser}=use(AuthContext);

    const handleUpdateUser=(e)=>{
        e.preventDefault();
        const name=e.target.name.value;
        const url=e.target.url.value
        updateUser(name,url).then(()=>{
            toast('Profile updated successful');
            setUser({...user, displayName: name, photoURL: url})
        }).catch(error=>{
            toast.warn(error.message)
        })
    }

    return (
        <div className="min-h-screen bg-gray-900 text-gray-200 px-4 py-10">
            <div className="max-w-3xl mx-auto bg-gray-800 rounded-2xl shadow-lg p-8">
                <h1 className="text-4xl font-bold text-center mb-8 text-red-500">
                    Your Profile - <span className='text-white'>Lava</span><span className='text-red-500'>ROX</span>
                </h1>

                <div className="flex flex-col md:flex-row items-center md:items-start gap-6 mb-10">
                    <img
                        src={user.photoURL}
                        alt="Profile"
                        className="w-28 h-28 rounded-full object-cover border-4 border-red-600"
                    />
                    <div>
                        <p className="text-lg">
                            <span className="font-semibold text-white">Name:</span> {user.displayName}
                        </p>
                        <p className="text-lg">
                            <span className="font-semibold text-white">Email:</span> {user.email}
                        </p>
                        <div className="text-lg break-words">
                            <span className="font-semibold text-white">Photo URL:</span> {user.photoURL}
                        </div>
                    </div>
                </div>


                <form onSubmit={handleUpdateUser} className="space-y-6">
                    <div>
                        <label className="block mb-2 text-sm font-medium text-gray-300">Update Name</label>
                        <input

                            required
                            type="text"
                            name='name'
                            placeholder="Enter new name"
                            className="w-full px-4 py-2 rounded-lg bg-gray-700 text-white border border-gray-600 focus:outline-none focus:ring-2 focus:ring-red-500"
                        />
                    </div>

                    <div>
                        <label className="block mb-2 text-sm font-medium text-gray-300">Update Photo URL</label>
                        <input 
                            required
                            type="text"
                            name='url'
                            placeholder="Enter new photo URL"
                            className="w-full px-4 py-2 rounded-lg bg-gray-700 text-white border border-gray-600 focus:outline-none focus:ring-2 focus:ring-red-500"
                        />
                    </div>

                    <button
                        type="submit"
                        className="w-full py-3 bg-red-600 hover:bg-red-700 transition duration-300 text-white font-semibold rounded-xl"
                    >
                        Save Changes
                    </button>
                </form>
            </div>
        </div>
    );
};

export default UserProfile;
