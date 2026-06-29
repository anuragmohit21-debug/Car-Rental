import React from 'react'
import { useAppContext } from '../context/AppContext'
import { toast } from 'react-hot-toast'
const Login = () => {


  const{setShowLogin, axios, setToken, navigate} = useAppContext()
  const [state, setState] = React.useState("login")
  const [name, setName] = React.useState("")
  const [email, setEmail] = React.useState("")
  const [password, setPassword] = React.useState("")

  const onSubmitHandler = async (event) => {
  try {
    event.preventDefault();

    const { data } = await axios.post(
      `/api/user/${state}`,
      {
        name,
        email,
        password,
      }
    );

    if (data.success) {
      navigate("/");
      setToken(data.token);
      localStorage.setItem("token", data.token);
      setShowLogin(false);
    } else {
      toast.error(data.message);
    }
  } catch (error) {
    toast.error(error.message);
  }
}

  return (
    <div
      onClick={() => setShowLogin(false)}
      className='fixed top-0 bottom-0 left-0 right-0 z-100 flex items-center text-sm text-gray-600 bg-black/50'
    >

      <form
        onSubmit={onSubmitHandler}
        onClick={(e) => e.stopPropagation()}
        className='flex flex-col gap-4 m-auto items-start p-8 py-12 w-80 sm:w-[352px] rounded-lg shadow-xl border border-gray-200 bg-white'
      >

        <p className='text-2xl font-medium m-auto'>
          <span className='text-primary'>User</span>{" "}
          {state === "login" ? "Login" : "Sign Up"}
        </p>

        {state === "register" && (
          <div className='w-full'>
            <p>Name</p>
            <input
              onChange={(e) => setName(e.target.value)}
              value={name}
              placeholder='type here'
              className='border border-gray-200 rounded w-full p-2 mt-1 outline-primary'
              type='text'
              required
            />
          </div>
        )}

        <div className='w-full'>
          <p>Email</p>
          <input
            onChange={(e) => setEmail(e.target.value)}
            value={email}
            placeholder='type here'
            className='border border-gray-200 rounded w-full p-2 mt-1 outline-primary'
            type='email'
            required
          />
        </div>

        <div className='w-full'>
          <p>Password</p>
          <input
            onChange={(e) => setPassword(e.target.value)}
            value={password}
            placeholder='type here'
            className='border border-gray-200 rounded w-full p-2 mt-1 outline-primary'
            type='password'
            required
          />
          <p
  onClick={() => {
    setShowLogin(false);
    navigate("/forgot-password");
  }}
  className="text-primary cursor-pointer text-sm"
>
  Forgot Password?
</p>
        </div>

        {state === "register" ? (
          <p>
            Already have account?{" "}
            <span
              onClick={() => setState("login")}
              className='text-primary cursor-pointer'
            >
              click here
            </span>
          </p>
        ) : (
          <p>
            Create an account?{" "}
            <span
              onClick={() => setState("register")}
              className='text-primary cursor-pointer'
            >
              click here
            </span>
          </p>
        )}

        <button
          className='bg-primary hover:bg-blue-800 transition-all text-white w-full py-2 rounded-md cursor-pointer'
        >
          {state === "register" ? "Create Account" : "Login"}
        </button>

      </form>

    </div>
  )
}

export default Login


// import { useState } from "react";
// import { useAppContext } from "../contex/appContextValue";

// const Login = () => {

//   const{setShowLogin, axios, setToken} = useAppContext()
//   const [state, setState] = useState("login");
//   const [name, setName] = useState("");
//   const [email, setEmail] = useState("");
//   const [password, setPassword] = useState("");

//   const onSubmitHandler = async (event) => {
//     event.preventDefault();
//   };

//   return (
//     <div
//       onClick={() => setShowLogin(false)}
//       className="fixed inset-0 z-[999] flex items-center justify-center bg-black/40 backdrop-blur-md px-4"
//     >
//       <form
//         onSubmit={onSubmitHandler}
//         onClick={(e) => e.stopPropagation()}
//         className="relative w-full max-w-md overflow-hidden rounded-3xl
//         border border-white/20 bg-white/10 backdrop-blur-xl
//         shadow-[0_8px_32px_rgba(0,0,0,0.25)]
//         p-8"
//       >
//         {/* Glow Effect */}
//         <div className="absolute -top-20 -left-20 h-40 w-40 rounded-full bg-blue-500/30 blur-3xl"></div>
//         <div className="absolute -bottom-20 -right-20 h-40 w-40 rounded-full bg-purple-500/30 blur-3xl"></div>

//         {/* Close Button */}
//         <button
//           type="button"
//           onClick={() => setShowLogin(false)}
//           className="absolute right-4 top-4 text-white text-xl"
//         >
//           ✕
//         </button>

//         {/* Heading */}
//         <div className="text-center mb-8">
//           <h2 className="text-3xl font-bold text-white">
//             {state === "login" ? "Welcome Back" : "Create Account"}
//           </h2>

//           <p className="text-white/70 mt-2">
//             {state === "login"
//               ? "Login to continue"
//               : "Join the Car Rental Platform"}
//           </p>
//         </div>

//         {/* Name */}
//         {state === "register" && (
//           <div className="mb-4">
//             <label className="text-white text-sm block mb-2">
//               Full Name
//             </label>

//             <input
//               type="text"
//               value={name}
//               onChange={(e) => setName(e.target.value)}
//               placeholder="Enter your name"
//               className="w-full rounded-xl border border-white/20
//               bg-white/10 px-4 py-3 text-white
//               placeholder-white/50 outline-none
//               focus:border-blue-400"
//               required
//             />
//           </div>
//         )}

//         {/* Email */}
//         <div className="mb-4">
//           <label className="text-white text-sm block mb-2">
//             Email Address
//           </label>

//           <input
//             type="email"
//             value={email}
//             onChange={(e) => setEmail(e.target.value)}
//             placeholder="Enter your email"
//             className="w-full rounded-xl border border-white/20
//             bg-white/10 px-4 py-3 text-white
//             placeholder-white/50 outline-none
//             focus:border-blue-400"
//             required
//           />
//         </div>

//         {/* Password */}
//         <div className="mb-6">
//           <label className="text-white text-sm block mb-2">
//             Password
//           </label>

//           <input
//             type="password"
//             value={password}
//             onChange={(e) => setPassword(e.target.value)}
//             placeholder="Enter password"
//             className="w-full rounded-xl border border-white/20
//             bg-white/10 px-4 py-3 text-white
//             placeholder-white/50 outline-none
//             focus:border-blue-400"
//             required
//           />
//         </div>

//         {/* Glass Button */}
//         <button
//           type="submit"
//           className="w-full rounded-xl py-3 font-semibold text-white
//           bg-gradient-to-r from-blue-500 to-purple-600
//           hover:scale-[1.02] transition-all duration-300
//           shadow-lg shadow-blue-500/30"
//         >
//           {state === "login" ? "Login" : "Create Account"}
//         </button>

//         {/* Toggle */}
//         <div className="mt-6 text-center text-white/80">
//           {state === "register" ? (
//             <p>
//               Already have an account?{" "}
//               <span
//                 onClick={() => setState("login")}
//                 className="cursor-pointer text-blue-300 hover:text-blue-200 font-medium"
//               >
//                 Login
//               </span>
//             </p>
//           ) : (
//             <p>
//               Don't have an account?{" "}
//               <span
//                 onClick={() => setState("register")}
//                 className="cursor-pointer text-blue-300 hover:text-blue-200 font-medium"
//               >
//                 Sign Up
//               </span>
//             </p>
//           )}
//         </div>
//       </form>
//     </div>
//   );
// };

// export default Login;











