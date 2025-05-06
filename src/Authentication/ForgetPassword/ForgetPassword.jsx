import React, { use} from 'react';
import useTitle from '../../Component/Title/useTitle';
import { AuthContext } from '../../AuthProvider/AuthProvider';
import { toast } from 'react-toastify';

const ForgetPassword = () => {

    useTitle('Reset Password');
    const {email,forgetPassword}=use(AuthContext);

    const redirectToGmail = () => {
        window.open("https://mail.google.com", "_blank");
      };


    const handleResetPassword=(e)=>{
        e.preventDefault();
        const targetedEmail=e.target.email.value;
        forgetPassword(targetedEmail).then(()=>{
            toast.warn("Please check your email");
            redirectToGmail()
        }).catch(error=>{
            toast.error(error.message)
        })
    }


      
    return (
        <div className="min-h-screen flex items-center justify-center p-4">
            <form onSubmit={handleResetPassword}>
                <input
                    type="email"
                    name="email"
                    defaultValue={email}
                    placeholder="Your Email"
                    className="w-full p-2 rounded bg-gray-700/50 text-red-500 focus:outline-none focus:ring-2 focus:ring-blue-500"
                    required
                />

                <button type='submit' className="mt-8 w-full bg-blue-600 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded">Reset Password</button>
            </form>
        </div>
    );
};

export default ForgetPassword;