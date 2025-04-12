export default function Home() {
  return (
    <div className="flex items-center justify-center min-h-screen">
      <div className=" w-2xl py-6 px-8  mt-20 bg-white rounded-2xl shadow-2xl">
        <div className="flex justify-center mb-6">
          <img src="/globe.svg" alt="Logo" className="h-16 w-16" />
        </div>

        <h2 className="text-2xl font-bold mb-6 text-center text-gray-800">
          Sign in to your account
        </h2>

        <form action="">
          <div>
            <label className="block text-gray-800 font-bold">Email:</label>
            <input
              type="text"
              name="email"
              id="email"
              placeholder="@email"
              className="w-full border border-gray-300 py-2 pl-3 rounded mt-2  focus:outline-none focus:ring-2 focus:ring-indigo-600 :ring-indigo-600"
            />
          </div>

          <div className="mb-6">
            <label className="block text-gray-800 font-bold">Password:</label>
            <input
              type="password"
              name="password"
              id="password"
              placeholder="Password"
              className="w-full border border-gray-300 py-2 pl-3 rounded mt-2  focus:outline-none focus:ring-2 ring-indigo-600 :ring-indigo-600"
            />
          </div>

          <button className="cursor-pointer py-2 px-4 block mt-6 bg-indigo-500 text-white font-bold w-full text-center rounded  hover:bg-blue-700 transition">
            Login
          </button>
        </form>
      </div>
    </div>
  );
}
