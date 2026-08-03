import Navbar from "../components/Navbar.jsx";
import Logo from "../components/common/Logo.jsx";

import {
  User,
  Mail,
  Phone,
  Lock,
  Eye,
  EyeOff,
} from "lucide-react";

import { Link } from "react-router-dom";
import { useState } from "react";

export default function Register() {

  const [showPassword, setShowPassword] =
    useState(false);

  const [showConfirmPassword, setShowConfirmPassword] =
    useState(false);

  const [fullName, setFullName] =
    useState("");

  const [email, setEmail] =
    useState("");

  const [phone, setPhone] =
    useState("");

  const [password, setPassword] =
    useState("");

  const [confirmPassword, setConfirmPassword] =
    useState("");

  const [acceptTerms, setAcceptTerms] =
    useState(false);

  return (

    <>

      <Navbar />

      <main className="min-h-screen bg-gradient-to-br from-orange-50 via-white to-orange-100 flex items-center justify-center px-6 py-10">

        <div className="w-full max-w-lg rounded-3xl border border-orange-100 bg-white/90 p-8 shadow-xl backdrop-blur-lg">

          {/* Logo */}

          <div className="mb-8 text-center">

            <div className="mx-auto flex h-20 w-20 items-center justify-center rounded-full bg-orange-500 text-white">

              <Logo type="icon" size="md" />

            </div>

            <h1 className="mt-5 text-4xl font-bold text-gray-900">
              Create Account
            </h1>

            <p className="mt-2 text-gray-500">
              Join RuchiGo and start ordering your favourite food.
            </p>

          </div>

          {/* Full Name */}

          <div className="mb-5">

            <label className="mb-2 block font-semibold">
              Full Name
            </label>

            <div className="flex items-center rounded-xl border border-orange-200 px-4">

              <User className="text-orange-500" size={20} />

              <input
                type="text"
                placeholder="Enter your full name"
                value={fullName}
                onChange={(e) =>
                  setFullName(e.target.value)
                }
                className="w-full bg-transparent px-3 py-4 outline-none"
              />

            </div>

          </div>

          {/* Email */}

          <div className="mb-5">

            <label className="mb-2 block font-semibold">
              Email Address
            </label>

            <div className="flex items-center rounded-xl border border-orange-200 px-4">

              <Mail className="text-orange-500" size={20} />

              <input
                type="email"
                placeholder="Enter your email"
                value={email}
                onChange={(e) =>
                  setEmail(e.target.value)
                }
                className="w-full bg-transparent px-3 py-4 outline-none"
              />

            </div>

          </div>

          {/* Phone */}

          <div className="mb-5">

            <label className="mb-2 block font-semibold">
              Phone Number
            </label>

            <div className="flex items-center rounded-xl border border-orange-200 px-4">

              <Phone className="text-orange-500" size={20} />

              <input
                type="tel"
                placeholder="Enter your phone number"
                value={phone}
                onChange={(e) =>
                  setPhone(e.target.value)
                }
                className="w-full bg-transparent px-3 py-4 outline-none"
              />

            </div>

          </div>
                    {/* Password */}

          <div className="mb-5">

            <label className="mb-2 block font-semibold">
              Password
            </label>

            <div className="flex items-center rounded-xl border border-orange-200 px-4">

              <Lock className="text-orange-500" size={20} />

              <input
                type={showPassword ? "text" : "password"}
                placeholder="Create a password"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                className="w-full bg-transparent px-3 py-4 outline-none"
              />

              <button
                type="button"
                onClick={() => setShowPassword(!showPassword)}
              >
                {showPassword ? (
                  <EyeOff size={20} />
                ) : (
                  <Eye size={20} />
                )}
              </button>

            </div>

          </div>

          {/* Confirm Password */}

          <div className="mb-6">

            <label className="mb-2 block font-semibold">
              Confirm Password
            </label>

            <div className="flex items-center rounded-xl border border-orange-200 px-4">

              <Lock className="text-orange-500" size={20} />

              <input
                type={showConfirmPassword ? "text" : "password"}
                placeholder="Confirm your password"
                value={confirmPassword}
                onChange={(e) => setConfirmPassword(e.target.value)}
                className="w-full bg-transparent px-3 py-4 outline-none"
              />

              <button
                type="button"
                onClick={() =>
                  setShowConfirmPassword(!showConfirmPassword)
                }
              >
                {showConfirmPassword ? (
                  <EyeOff size={20} />
                ) : (
                  <Eye size={20} />
                )}
              </button>

            </div>

          </div>

          {/* Terms & Conditions */}

          <div className="mb-6 flex items-start gap-3">

            <input
              type="checkbox"
              checked={acceptTerms}
              onChange={() => setAcceptTerms(!acceptTerms)}
              className="mt-1 h-4 w-4 accent-orange-500"
            />

            <p className="text-sm text-gray-600">

              I agree to the{" "}

              <Link
                to="/terms"
                className="font-semibold text-orange-500 hover:text-orange-600"
              >
                Terms & Conditions
              </Link>

              {" "}and{" "}

              <Link
                to="/privacy"
                className="font-semibold text-orange-500 hover:text-orange-600"
              >
                Privacy Policy
              </Link>

            </p>

          </div>

          {/* Register Button */}

          <button
            disabled={
              !fullName ||
              !email ||
              !phone ||
              !password ||
              !confirmPassword ||
              !acceptTerms
            }
            className={`w-full rounded-xl py-4 text-lg font-semibold text-white transition ${
              !fullName ||
              !email ||
              !phone ||
              !password ||
              !confirmPassword ||
              !acceptTerms
                ? "cursor-not-allowed bg-orange-300"
                : "bg-orange-500 hover:bg-orange-600"
            }`}
          >
            Create Account
          </button>

          {/* Divider */}

          <div className="my-8 flex items-center">

            <div className="h-px flex-1 bg-gray-200"></div>

            <span className="px-4 text-sm text-gray-400">
              OR
            </span>

            <div className="h-px flex-1 bg-gray-200"></div>

          </div>

          {/* Google Sign Up */}

          <button
            className="flex w-full items-center justify-center gap-3 rounded-xl border border-gray-200 py-3 font-semibold transition hover:bg-gray-50"
          >
            <span className="text-xl">🔵</span>

            Continue with Google
          </button>

          {/* Login Link */}

          <p className="mt-8 text-center text-gray-600">

            Already have an account?

            <Link
              to="/login"
              className="ml-2 font-semibold text-orange-500 hover:text-orange-600"
            >
              Login
            </Link>

          </p>
                  </div>

      </main>

    </>

  );

}