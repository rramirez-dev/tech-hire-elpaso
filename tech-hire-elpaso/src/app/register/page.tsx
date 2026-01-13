import React from "react";
import Link from "next/link";

export default function RegisterPage() {
  return (
    <section className="min-h-screen flex items-center justify-center bg-white dark:bg-black">
      <div className="w-full max-w-md bg-white/90 dark:bg-gray-900/80 backdrop-blur-xl rounded-2xl p-10 shadow-2xl dark:shadow-[var(--white-drop-shadow)] -mt-50 border border-gray-200 dark:border-gray-800">
        <form action="">
          {/* Header */}
          <h2 className="text-3xl font-extrabold text-center text-gray-800 dark:text-white mb-8 tracking-tight">
            Create Your Account
          </h2>

          {/* Full Name */}
          <div className="mb-5">
            <label
              htmlFor="name"
              className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-2"
            >
              Full Name
            </label>
            <input
              type="text"
              id="name"
              name="name"
              className="w-full rounded-lg px-4 py-3 bg-gray-50 dark:bg-gray-800 text-gray-900 dark:text-gray-100 border border-gray-300 dark:border-gray-700 focus:outline-none focus:ring-2 focus:ring-red-500 focus:border-transparent transition-all duration-300"
              required
            />
          </div>

          {/* Email */}
          <div className="mb-5">
            <label
              htmlFor="email"
              className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-2"
            >
              Email
            </label>
            <input
              type="email"
              id="email"
              name="email"
              className="w-full rounded-lg px-4 py-3 bg-gray-50 dark:bg-gray-800 text-gray-900 dark:text-gray-100 border border-gray-300 dark:border-gray-700 focus:outline-none focus:ring-2 focus:ring-red-500 focus:border-transparent transition-all duration-300"
              required
            />
          </div>

          {/* Password */}
          <div className="mb-5">
            <label
              htmlFor="password"
              className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-2"
            >
              Password
            </label>
            <input
              type="password"
              id="password"
              name="password"
              className="w-full rounded-lg px-4 py-3 bg-gray-50 dark:bg-gray-800 text-gray-900 dark:text-gray-100 border border-gray-300 dark:border-gray-700 focus:outline-none focus:ring-2 focus:ring-red-500 focus:border-transparent transition-all duration-300"
              required
            />
          </div>

          {/* Confirm Password */}
          <div className="mb-8">
            <label
              htmlFor="confirmPassword"
              className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-2"
            >
              Confirm Password
            </label>
            <input
              type="password"
              id="confirmPassword"
              name="confirmPassword"
              className="w-full rounded-lg px-4 py-3 bg-gray-50 dark:bg-gray-800 text-gray-900 dark:text-gray-100 border border-gray-300 dark:border-gray-700 focus:outline-none focus:ring-2 focus:ring-red-500 focus:border-transparent transition-all duration-300"
              required
            />
          </div>

          {/* Submit Button */}
          <button
            type="submit"
            className="w-full bg-gradient-to-r from-red-600 to-red-500 hover:from-red-700 hover:to-red-600 text-white font-semibold py-3 rounded-lg shadow-md dark:shadow-[0_0_20px_rgba(255,0,0,0.3)] transition-all duration-300"
          >
            Register
          </button>

          {/* Footer */}
          <p className="text-center text-sm text-gray-700 dark:text-gray-400 mt-6">
            Have an account?
            <Link
              href="/login"
              className="text-red-600 dark:text-red-400 font-medium ml-1 hover:underline transition-colors duration-300"
            >
              Login
            </Link>
          </p>
        </form>
      </div>
    </section>
  );
}
