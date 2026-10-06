import { useState } from "react";
import { NavLink } from "react-router-dom";

function Home() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  return (
    <div
      className="min-h-screen flex items-center justify-center p-4 bg-cover bg-center bg-no-repeat"
      style={{
        backgroundImage:
          "url('https://images.unsplash.com/photo-1544145945-f90425340c7e?w=1200&h=900&fit=crop')",
      }}
    >
      {/* Dark overlay so the card stays readable */}
      <div className="absolute inset-0 bg-black/30" />

      <div className="relative w-full max-w-sm bg-white rounded-3xl shadow-xl overflow-hidden">
        {/* Top image banner */}
        <div className="h-56 w-full">
          <img
            src="https://images.unsplash.com/photo-1544145945-f90425340c7e?w=600&h=400&fit=crop"
            alt="Assorted beverages"
            className="w-full h-full object-cover"
          />
        </div>

        <div className="p-6">
          <h1 className="text-2xl font-bold text-gray-900 mb-6">Login</h1>

          <form className="space-y-5">
            <div>
              <label
                htmlFor="email"
                className="block text-xs font-medium text-gray-400 uppercase tracking-wide mb-1"
              >
                Email Address
              </label>
              <input
                id="email"
                type="email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                placeholder="you@example.com"
                className="w-full border-b border-gray-200 focus:border-orange-500 outline-none py-2 text-gray-800"
              />
            </div>

            <div>
              <label
                htmlFor="password"
                className="block text-xs font-medium text-gray-400 uppercase tracking-wide mb-1"
              >
                Password
              </label>
              <input
                id="password"
                type="password"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                placeholder="••••••"
                className="w-full border-b border-gray-200 focus:border-orange-500 outline-none py-2 text-gray-800"
              />
            </div>

            <div className="text-right">
              <NavLink to="/forgot-password" className="text-sm text-gray-500 hover:text-orange-500">
                Forget Password?
              </NavLink>
            </div>

            <button
              type="submit"
              className="w-full bg-orange-500 hover:bg-orange-600 text-white font-semibold py-3 rounded-full transition-colors"
            >
              Sign in
            </button>
          </form>

          <p className="text-center text-sm text-gray-600 mt-6">
            Don't have account?{" "}
            <NavLink to="/signup" className="text-orange-500 font-medium hover:underline">
              Create new account.
            </NavLink>
          </p>
        </div>
      </div>
    </div>
  );
}

export default Home;