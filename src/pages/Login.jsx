import axios from "axios";
import { useState } from "react";
import { useNavigate } from "react-router-dom";

const Login = () => {
  const [loginPage, setLoginPage] = useState(true);
  const [isUser, setIsUser] = useState(true);
  const [isRegistered, setIsRegister] = useState(false);

  const navigate = useNavigate();

  //   login function
  const loginNow = (e) => {
    e.preventDefault();

    const email = e.target.email.value;
    const password = e.target.password.value;

    const loginBody = {
      email,
      password,
    };

    console.log(loginBody);

    axios
      .post("https://server-task-1.vercel.app/users/login", loginBody)
      .then((res) => {
        navigate(`/dashboard?role=${res.data.role}&mail=${email}`);
      })
      .catch((error) => {
        setIsUser(error.response.data.status);
        console.log(error);
      });
  };

  //   registration function
  const registerNow = (e) => {
    e.preventDefault();

    const form = e.target;

    const username = form.username.value;
    const role = form.role.value;
    const mobile = form.mobile.value;
    const email = form.email.value;
    const password = form.password.value;

    const userBody = {
      username,
      role,
      mobile,
      email,
      password,
    };

    console.log(userBody);

    axios
      .post("https://server-task-1.vercel.app/users", userBody)
      .then((response) => {
        setIsRegister(true);
        setLoginPage(true);
        console.log(response.status);
      })
      .catch((error) => console.log(error));
  };

  return (
    <div className="md:h-screen md:w-10/12 lg:w-9/12 mx-auto flex items-center justify-center">
      <div className="flex-1 p-10">
        {loginPage ? (
          <>
            <h1 className="text-3xl font-bold mb-5">Login now</h1>
            {!isUser && <p className="text-red-600">Wrong Credentials!</p>}
            <form
              onSubmit={loginNow}
              className="flex flex-col gap-1 items-start"
            >
              <label htmlFor="email" className="mt-3 font-semibold">
                Email:
              </label>
              <input
                type="email"
                name="email"
                id="email"
                className="bg-slate-300 placeholder:text-slate-600 p-2 px-3 focus:outline-none rounded-md w-full"
                placeholder="Email address"
                required
              />
              <label htmlFor="password" className="font-semibold mt-3">
                Password:
              </label>
              <input
                type="password"
                name="password"
                id="password"
                className="bg-slate-300 placeholder:text-slate-600 p-2 px-3 focus:outline-none rounded-md w-full"
                placeholder="Password"
                required
              />
              <button className="mt-3 bg-violet-600 hover:bg-violet-400 active:scale-95 text-white px-5 py-2 rounded font-semibold">
                Login
              </button>
            </form>
          </>
        ) : (
          <>
            <h1 className="text-3xl font-bold mb-5">Register now</h1>
            <form
              onSubmit={registerNow}
              className="flex flex-col gap-1 items-start"
            >
              <label htmlFor="name" className="font-semibold">
                Full Name:
              </label>
              <input
                type="text"
                name="username"
                id="name"
                className="bg-slate-300 placeholder:text-slate-600 p-2 px-3 focus:outline-none rounded-md w-full"
                placeholder="Username"
                required
              />
              <label htmlFor="role" className="mt-3 font-semibold">
                Role:
              </label>
              <select
                name="role"
                id="role"
                className="bg-slate-300 placeholder:text-slate-600 p-2 px-3 focus:outline-none rounded-md w-full"
              >
                <option value="owner">House Owner</option>
                <option value="renter">House Renter</option>
              </select>
              <label htmlFor="mobile" className="mt-3 font-semibold">
                Mobile:
              </label>
              <input
                type="text"
                name="mobile"
                id="mobile"
                className="bg-slate-300 placeholder:text-slate-600 p-2 px-3 focus:outline-none rounded-md w-full"
                placeholder="Mobile Number"
                required
              />
              <label htmlFor="email" className="mt-3 font-semibold">
                Email:
              </label>
              <input
                type="email"
                name="email"
                id="email"
                className="bg-slate-300 placeholder:text-slate-600 p-2 px-3 focus:outline-none rounded-md w-full"
                placeholder="Email address"
                required
              />
              <label htmlFor="password" className="font-semibold mt-3">
                Password:
              </label>
              <input
                type="password"
                name="password"
                id="password"
                className="bg-slate-300 placeholder:text-slate-600 p-2 px-3 focus:outline-none rounded-md w-full"
                placeholder="Password"
                required
              />
              <button className="mt-3 bg-violet-600 hover:bg-violet-400 active:scale-95 text-white px-5 py-2 rounded font-semibold">
                Register
              </button>
            </form>
          </>
        )}
      </div>
      <div className="flex-1 p-10">
        {isRegistered && (
          <p className="font-bold text-2xl">
            You have successfully registered!
          </p>
        )}

        {loginPage ? (
          <h1 className="text-lg font-semibold">
            If you don&apos;t have an account,{" "}
            <button
              className="text-violet-500"
              onClick={() => setLoginPage(!loginPage)}
            >
              Register now!
            </button>
          </h1>
        ) : (
          <>
            <h1 className="text-lg font-semibold">
              Already have an account?{" "}
              <button
                className="text-violet-500"
                onClick={() => setLoginPage(!loginPage)}
              >
                Login now!
              </button>
            </h1>
          </>
        )}
      </div>
    </div>
  );
};

export default Login;
