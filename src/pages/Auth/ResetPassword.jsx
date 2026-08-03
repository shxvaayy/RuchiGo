import { useState } from "react";
import { Link } from "react-router-dom";
import Logo from "../../components/common/Logo";
import { motion } from "framer-motion";
import {
  ShieldCheck,
  LockKeyhole,
  CheckCircle2,
  Sparkles,
  Users,
  Store,
  Truck,
  ShoppingBag,
  KeyRound,
  Shield,
} from "lucide-react";

const statistics = [
  {
    title: "Protected Accounts",
    value: "250K+",
    icon: Users,
    color: "text-cyan-400",
  },
  {
    title: "Restaurant Partners",
    value: "5,200+",
    icon: Store,
    color: "text-green-400",
  },
  {
    title: "Delivery Partners",
    value: "18K+",
    icon: Truck,
    color: "text-orange-400",
  },
  {
    title: "Successful Recoveries",
    value: "1.2M+",
    icon: ShoppingBag,
    color: "text-purple-400",
  },
];

const passwordBenefits = [
  "Create a strong and secure password",
  "End-to-end encrypted password update",
  "Enterprise-grade account protection",
  "AI-powered security monitoring",
  "Instant password synchronization",
  "Secure access across all devices",
];

const securityFeatures = [
  "256-bit SSL Encryption",
  "Strong Password Validation",
  "JWT Session Protection",
  "AI Threat Detection",
  "Multi-Layer Authentication",
  "Secure Cloud Infrastructure",
];

const ResetPassword = () => {

  const [loading] = useState(false);

  return (

    <div className="min-h-screen bg-slate-950 text-white overflow-hidden">

      <div className="grid lg:grid-cols-2 min-h-screen">

        {/* ================= LEFT PANEL ================= */}

        <motion.div
          initial={{ opacity: 0, x: -80 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8 }}
          className="relative hidden lg:flex flex-col justify-between p-12 overflow-hidden"
        >

          {/* Background Effects */}

          <div className="absolute -top-40 -left-40 w-96 h-96 bg-cyan-500/20 rounded-full blur-3xl" />

          <div className="absolute bottom-0 right-0 w-96 h-96 bg-blue-600/20 rounded-full blur-3xl" />

          {/* Logo */}

          <div className="relative z-10">

            <div className="flex items-center gap-4">

              <div className="w-16 h-16 rounded-2xl bg-gradient-to-r from-cyan-500 to-blue-600 flex items-center justify-center shadow-xl">

                <Logo type="icon" size="md" />

              </div>

              <div>

                <h1 className="text-4xl font-bold">

                  RuchiGo

                </h1>

                <p className="text-slate-400">

                  Secure Password Reset

                </p>

              </div>

            </div>

          </div>

          {/* Hero */}

          <div className="relative z-10 my-10">

            <motion.h1
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.2 }}
              className="text-6xl font-extrabold leading-tight"
            >

              Create Your

              <span className="block bg-gradient-to-r from-cyan-400 to-blue-500 bg-clip-text text-transparent">

                New Password

              </span>

            </motion.h1>

            <p className="mt-8 text-lg text-slate-400 leading-8 max-w-xl">

              Your identity has been successfully verified.
              Create a strong new password to protect your
              RuchiGo account and continue using all platform
              services securely.

            </p>

            {/* Benefits */}

            <div className="mt-10 space-y-4">

              {passwordBenefits.map((item, index) => (

                <motion.div
                  key={index}
                  initial={{ opacity: 0, x: -25 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ delay: index * 0.1 }}
                  className="flex items-center gap-4"
                >

                  <div className="w-10 h-10 rounded-full bg-cyan-500/20 flex items-center justify-center">

                    <CheckCircle2
                      className="text-cyan-400"
                      size={20}
                    />

                  </div>

                  <span>

                    {item}

                  </span>

                </motion.div>

              ))}

            </div>

          </div>

          {/* Statistics */}

          <div className="relative z-10">

            <div className="grid grid-cols-2 gap-5">

              {statistics.map((item, index) => {

                const Icon = item.icon;

                return (

                  <motion.div
                    key={index}
                    whileHover={{ scale: 1.03 }}
                    className="bg-slate-900/80 backdrop-blur-xl border border-slate-700 rounded-3xl p-6"
                  >

                    <div className="flex justify-between items-center">

                      <div>

                        <p className="text-slate-400">

                          {item.title}

                        </p>

                        <h2 className="text-3xl font-bold mt-3">

                          {item.value}

                        </h2>

                      </div>

                      <Icon
                        className={item.color}
                        size={34}
                      />

                    </div>

                  </motion.div>

                );

              })}

            </div>

          </div>

        </motion.div>

        {/* ================= RIGHT PANEL ================= */}

        <div className="flex justify-center items-center p-6 lg:p-12">

          {/* Reset Password Form Starts in Part 1B */}
                    <motion.div
            initial={{ opacity: 0, x: 80 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            className="w-full max-w-xl"
          >

            <div className="bg-slate-900/90 backdrop-blur-2xl border border-slate-700 rounded-3xl shadow-2xl p-8 lg:p-10">

              {/* Header */}

              <div className="text-center mb-8">

                <div className="w-20 h-20 rounded-full bg-gradient-to-r from-cyan-500 to-blue-600 flex items-center justify-center mx-auto mb-5">

                  <KeyRound size={34} />

                </div>

                <h2 className="text-3xl font-bold">

                  Reset Password

                </h2>

                <p className="text-slate-400 mt-3 leading-7">

                  Create a new strong password for your RuchiGo account.
                  Make sure it's unique and difficult to guess.

                </p>

              </div>

              {/* Reset Form */}

              <form className="space-y-6">

                {/* New Password */}

                <div>

                  <label className="block mb-2 font-medium">

                    New Password

                  </label>

                  <div className="relative">

                    <LockKeyhole
                      size={20}
                      className="absolute left-4 top-1/2 -translate-y-1/2 text-slate-400"
                    />

                    <input
                      type="password"
                      placeholder="Enter your new password"
                      className="w-full pl-12 pr-14 py-3 rounded-xl bg-slate-800 border border-slate-700 outline-none focus:border-cyan-500 transition"
                    />

                    <button
                      type="button"
                      className="absolute right-4 top-1/2 -translate-y-1/2 text-slate-400 hover:text-cyan-400 transition"
                    >

                      Show

                    </button>

                  </div>

                </div>

                {/* Confirm Password */}

                <div>

                  <label className="block mb-2 font-medium">

                    Confirm Password

                  </label>

                  <div className="relative">

                    <LockKeyhole
                      size={20}
                      className="absolute left-4 top-1/2 -translate-y-1/2 text-slate-400"
                    />

                    <input
                      type="password"
                      placeholder="Confirm your new password"
                      className="w-full pl-12 pr-14 py-3 rounded-xl bg-slate-800 border border-slate-700 outline-none focus:border-cyan-500 transition"
                    />

                    <button
                      type="button"
                      className="absolute right-4 top-1/2 -translate-y-1/2 text-slate-400 hover:text-cyan-400 transition"
                    >

                      Show

                    </button>

                  </div>

                </div>

                {/* Password Strength */}

                <div>

                  <div className="flex justify-between mb-2">

                    <span className="font-medium">

                      Password Strength

                    </span>

                    <span className="text-green-400 font-semibold">

                      Strong

                    </span>

                  </div>

                  <div className="w-full h-3 rounded-full bg-slate-700 overflow-hidden">

                    <motion.div
                      initial={{ width: 0 }}
                      animate={{ width: "85%" }}
                      transition={{ duration: 1 }}
                      className="h-full rounded-full bg-gradient-to-r from-green-500 to-emerald-400"
                    />

                  </div>

                </div>

                {/* Password Requirements */}

                <div className="rounded-2xl bg-slate-800 border border-slate-700 p-5">

                  <h4 className="font-semibold mb-4">

                    Password Requirements

                  </h4>

                  <div className="grid md:grid-cols-2 gap-3">

                    {[
                      "Minimum 8 characters",
                      "One uppercase letter",
                      "One lowercase letter",
                      "One number",
                      "One special character",
                      "No common passwords",
                    ].map((item, index) => (

                      <div
                        key={index}
                        className="flex items-center gap-3"
                      >

                        <CheckCircle2
                          size={18}
                          className="text-green-400"
                        />

                        <span className="text-sm text-slate-300">

                          {item}

                        </span>

                      </div>

                    ))}

                  </div>

                </div>

                {/* Generate Password */}

                <button
                  type="button"
                  className="w-full rounded-xl border border-cyan-500 py-3 text-cyan-400 font-semibold hover:bg-cyan-500/10 transition"
                >

                  Generate Strong Password

                </button>

                {/* Reset Button */}

                <motion.button
                  whileHover={{ scale: 1.02 }}
                  whileTap={{ scale: 0.98 }}
                  disabled={loading}
                  className="w-full py-4 rounded-xl bg-gradient-to-r from-cyan-500 to-blue-600 font-semibold flex justify-center items-center gap-3 hover:shadow-xl transition"
                >

                  {loading ? (

                    <>

                      <div className="w-5 h-5 border-2 border-white border-t-transparent rounded-full animate-spin" />

                      Updating Password...

                    </>

                  ) : (

                    <>

                      Reset Password

                      <Shield
                        size={20}
                      />

                    </>

                  )}

                </motion.button>

              </form>

              {/* Security Notice */}

              <div className="mt-8 rounded-2xl bg-slate-800 border border-slate-700 p-5">

                <div className="flex items-start gap-4">

                  <ShieldCheck
                    className="text-green-400 mt-1"
                    size={24}
                  />

                  <div>

                    <h4 className="font-semibold">

                      Security Notice

                    </h4>

                    <p className="text-slate-400 mt-2 leading-7">

                      After changing your password, you'll be asked to log in
                      again. For your protection, active sessions on other
                      devices can also be signed out.

                    </p>

                  </div>

                </div>

              </div>

              {/* Back to Login */}

              <div className="mt-8 text-center">

                <p className="text-slate-400">

                  Remember your password?{" "}

                  <Link
                    to="/login"
                    className="text-cyan-400 font-semibold hover:underline"
                  >

                    Back to Login

                  </Link>

                </p>

              </div>

            </div>

          </motion.div>
                        {/* Password Reset Progress */}

              <motion.div
                initial={{ opacity: 0, y: 30 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.35 }}
                className="mt-8"
              >

                <div className="bg-slate-800 border border-slate-700 rounded-2xl p-6">

                  <div className="flex justify-between items-center mb-5">

                    <h3 className="text-xl font-bold">

                      Password Reset Progress

                    </h3>

                    <span className="text-cyan-400 font-semibold">

                      Step 3 of 4

                    </span>

                  </div>

                  <div className="w-full h-3 bg-slate-700 rounded-full overflow-hidden">

                    <motion.div
                      initial={{ width: 0 }}
                      animate={{ width: "75%" }}
                      transition={{ duration: 1 }}
                      className="h-full rounded-full bg-gradient-to-r from-cyan-500 to-blue-600"
                    />

                  </div>

                  <div className="grid grid-cols-4 gap-4 mt-6 text-center">

                    {[
                      "Identity",
                      "OTP",
                      "Password",
                      "Completed",
                    ].map((step, index) => (

                      <div key={index}>

                        <div
                          className={`w-10 h-10 rounded-full mx-auto flex items-center justify-center ${
                            index <= 2
                              ? "bg-cyan-500"
                              : "bg-slate-700"
                          }`}
                        >

                          {index <= 2 ? (
                            <CheckCircle2 size={18} />
                          ) : (
                            index + 1
                          )}

                        </div>

                        <p className="text-sm text-slate-400 mt-3">

                          {step}

                        </p>

                      </div>

                    ))}

                  </div>

                </div>

              </motion.div>

              {/* Password Security */}

              <motion.div
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ delay: 0.45 }}
                className="mt-8"
              >

                <div className="rounded-2xl border border-slate-700 bg-slate-800 p-6">

                  <div className="flex items-center gap-3 mb-6">

                    <ShieldCheck
                      className="text-green-400"
                      size={26}
                    />

                    <h3 className="text-xl font-bold">

                      Password Security

                    </h3>

                  </div>

                  <div className="space-y-5">

                    {[
                      "Use at least 8–12 characters",
                      "Include uppercase, lowercase, numbers and symbols",
                      "Avoid using personal information",
                      "Don't reuse passwords from other websites",
                    ].map((item, index) => (

                      <div
                        key={index}
                        className="flex items-center gap-4"
                      >

                        <div className="w-9 h-9 rounded-full bg-green-500/20 flex items-center justify-center">

                          <CheckCircle2
                            size={18}
                            className="text-green-400"
                          />

                        </div>

                        <span className="text-slate-300">

                          {item}

                        </span>

                      </div>

                    ))}

                  </div>

                </div>

              </motion.div>

              {/* Enterprise Protection */}

              <motion.div
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ delay: 0.55 }}
                className="mt-8"
              >

                <div className="bg-gradient-to-r from-slate-800 via-slate-900 to-slate-800 border border-slate-700 rounded-2xl p-6">

                  <div className="flex justify-between items-center mb-6">

                    <h3 className="text-xl font-bold">

                      Enterprise Protection

                    </h3>

                    <ShieldCheck
                      className="text-cyan-400"
                      size={28}
                    />

                  </div>

                  <div className="grid md:grid-cols-2 gap-5">

                    {securityFeatures.map((feature, index) => (

                      <div
                        key={index}
                        className="flex items-center gap-3"
                      >

                        <CheckCircle2
                          size={18}
                          className="text-green-400"
                        />

                        <span className="text-slate-300">

                          {feature}

                        </span>

                      </div>

                    ))}

                  </div>

                </div>

              </motion.div>

              {/* Password Policy */}

              <motion.div
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ delay: 0.65 }}
                className="mt-8"
              >

                <div className="rounded-2xl border border-cyan-500/30 bg-cyan-500/10 p-6">

                  <div className="flex items-start gap-4">

                    <LockKeyhole
                      className="text-cyan-400 mt-1"
                      size={26}
                    />

                    <div>

                      <h3 className="font-semibold text-lg">

                        Password Policy

                      </h3>

                      <p className="text-slate-300 mt-2 leading-7">

                        Passwords must contain uppercase letters,
                        lowercase letters, numbers, and special
                        characters. For better protection, avoid
                        dictionary words and previously used passwords.

                      </p>

                    </div>

                  </div>

                </div>

              </motion.div>

              {/* Session Protection */}

              <motion.div
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ delay: 0.75 }}
                className="mt-8"
              >

                <div className="bg-slate-800 border border-slate-700 rounded-2xl p-6">

                  <div className="flex items-center gap-3 mb-6">

                    <Shield
                      className="text-cyan-400"
                      size={26}
                    />

                    <h3 className="text-xl font-bold">

                      Session Protection

                    </h3>

                  </div>

                  <div className="space-y-4">

                    {[
                      "Old sessions can be automatically terminated",
                      "JWT tokens will be regenerated",
                      "Password update is securely encrypted",
                      "Unauthorized devices will require login again",
                    ].map((item, index) => (

                      <div
                        key={index}
                        className="flex items-center gap-4"
                      >

                        <CheckCircle2
                          className="text-cyan-400"
                          size={18}
                        />

                        <span className="text-slate-300">

                          {item}

                        </span>

                      </div>

                    ))}

                  </div>

                </div>

              </motion.div>
                            {/* Password Security Dashboard */}

              <motion.div
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ delay: 0.85 }}
                className="mt-8"
              >

                <div className="bg-slate-800 border border-slate-700 rounded-3xl p-6">

                  <div className="flex items-center justify-between mb-6">

                    <h3 className="text-2xl font-bold">

                      Password Security Dashboard

                    </h3>

                    <ShieldCheck
                      size={30}
                      className="text-cyan-400"
                    />

                  </div>

                  <div className="grid md:grid-cols-3 gap-5">

                    {[
                      {
                        title: "Password Strength",
                        value: "Strong",
                        color: "text-green-400",
                        icon: ShieldCheck,
                      },
                      {
                        title: "Encryption",
                        value: "AES-256",
                        color: "text-cyan-400",
                        icon: LockKeyhole,
                      },
                      {
                        title: "Account Status",
                        value: "Protected",
                        color: "text-purple-400",
                        icon: CheckCircle2,
                      },
                    ].map((card, index) => {

                      const Icon = card.icon;

                      return (

                        <motion.div
                          key={index}
                          whileHover={{ y: -5 }}
                          className="bg-slate-900 border border-slate-700 rounded-2xl p-5"
                        >

                          <Icon
                            size={32}
                            className={`${card.color} mb-4`}
                          />

                          <h4 className="font-semibold">

                            {card.title}

                          </h4>

                          <p className={`mt-3 text-xl font-bold ${card.color}`}>

                            {card.value}

                          </p>

                        </motion.div>

                      );

                    })}

                  </div>

                </div>

              </motion.div>

              {/* AI Threat Detection */}

              <motion.div
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ delay: 0.95 }}
                className="mt-8"
              >

                <div className="bg-gradient-to-r from-slate-900 via-slate-800 to-slate-900 border border-slate-700 rounded-3xl p-6">

                  <div className="flex justify-between items-center mb-6">

                    <h3 className="text-2xl font-bold">

                      AI Threat Detection

                    </h3>

                    <Sparkles
                      size={30}
                      className="text-cyan-400"
                    />

                  </div>

                  <div className="space-y-5">

                    {[
                      "Detects weak or compromised passwords instantly.",
                      "Blocks password reuse from previous credentials.",
                      "Monitors unusual password reset activities.",
                      "Identifies suspicious login attempts after password changes.",
                      "Protects your account using AI-driven security analytics.",
                    ].map((item, index) => (

                      <div
                        key={index}
                        className="flex items-center gap-4"
                      >

                        <CheckCircle2
                          size={18}
                          className="text-green-400"
                        />

                        <span className="text-slate-300">

                          {item}

                        </span>

                      </div>

                    ))}

                  </div>

                </div>

              </motion.div>

              {/* Developer Ready */}

              <motion.div
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ delay: 1.05 }}
                className="mt-8"
              >

                <div className="bg-slate-800 border border-slate-700 rounded-3xl p-6">

                  <h3 className="text-2xl font-bold mb-6">

                    Developer Ready

                  </h3>

                  <div className="grid md:grid-cols-2 gap-6">

                    <div className="bg-slate-900 border border-slate-700 rounded-2xl p-5">

                      <h4 className="font-semibold mb-4">

                        React Hook Form

                      </h4>

                      <ul className="space-y-3 text-slate-400">

                        <li>✔ register()</li>
                        <li>✔ handleSubmit()</li>
                        <li>✔ watch()</li>
                        <li>✔ formState.errors</li>
                        <li>✔ reset()</li>

                      </ul>

                    </div>

                    <div className="bg-slate-900 border border-slate-700 rounded-2xl p-5">

                      <h4 className="font-semibold mb-4">

                        Zod Validation

                      </h4>

                      <ul className="space-y-3 text-slate-400">

                        <li>✔ Required Fields</li>
                        <li>✔ Password Length</li>
                        <li>✔ Password Complexity</li>
                        <li>✔ Confirm Password Match</li>
                        <li>✔ API Error Handling</li>

                      </ul>

                    </div>

                  </div>

                </div>

              </motion.div>

              {/* Validation Example */}

              <motion.div
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ delay: 1.15 }}
                className="mt-8"
              >

                <div className="bg-red-500/10 border border-red-500/30 rounded-2xl p-5">

                  <h4 className="text-red-400 font-semibold mb-2">

                    Example Validation Message

                  </h4>

                  <p className="text-slate-300">

                    Passwords do not match. Please ensure both password fields
                    contain the same value before continuing.

                  </p>

                </div>

              </motion.div>

              {/* Password Status */}

              <motion.div
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ delay: 1.25 }}
                className="mt-8"
              >

                <div className="grid md:grid-cols-3 gap-5">

                  {[
                    {
                      title: "Password Policy",
                      value: "Satisfied",
                      icon: CheckCircle2,
                      color: "text-green-400",
                    },
                    {
                      title: "Encryption",
                      value: "Enabled",
                      icon: ShieldCheck,
                      color: "text-cyan-400",
                    },
                    {
                      title: "Ready to Update",
                      value: "Yes",
                      icon: Sparkles,
                      color: "text-purple-400",
                    },
                  ].map((item, index) => {

                    const Icon = item.icon;

                    return (

                      <motion.div
                        key={index}
                        whileHover={{ scale: 1.04 }}
                        className="bg-slate-800 border border-slate-700 rounded-2xl p-6"
                      >

                        <Icon
                          size={30}
                          className={`${item.color} mb-4`}
                        />

                        <h4 className="font-semibold">

                          {item.title}

                        </h4>

                        <p className={`mt-3 text-xl font-bold ${item.color}`}>

                          {item.value}

                        </p>

                      </motion.div>

                    );

                  })}

                </div>

              </motion.div>
                            {/* Trusted by Millions */}

              <motion.div
                initial={{ opacity: 0, y: 35 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 1.35 }}
                className="mt-8"
              >

                <div className="bg-gradient-to-r from-cyan-500/10 via-slate-900 to-blue-600/10 border border-slate-700 rounded-3xl p-6">

                  <div className="flex justify-between items-center mb-8">

                    <div>

                      <h3 className="text-2xl font-bold">

                        Trusted by Millions

                      </h3>

                      <p className="text-slate-400 mt-2 leading-7">

                        Every password reset is secured using enterprise-grade
                        encryption, intelligent monitoring, and advanced
                        authentication to keep your RuchiGo account protected.

                      </p>

                    </div>

                    <ShieldCheck
                      size={34}
                      className="text-cyan-400"
                    />

                  </div>

                  <div className="grid md:grid-cols-4 grid-cols-2 gap-5">

                    {[
                      {
                        value: "250K+",
                        title: "Protected Accounts",
                        icon: Users,
                        color: "text-cyan-400",
                      },
                      {
                        value: "99.99%",
                        title: "Security Success",
                        icon: CheckCircle2,
                        color: "text-green-400",
                      },
                      {
                        value: "24×7",
                        title: "AI Monitoring",
                        icon: ShieldCheck,
                        color: "text-orange-400",
                      },
                      {
                        value: "< 30 Sec",
                        title: "Average Reset",
                        icon: KeyRound,
                        color: "text-purple-400",
                      },
                    ].map((item, index) => {

                      const Icon = item.icon;

                      return (

                        <motion.div
                          key={index}
                          whileHover={{ scale: 1.05 }}
                          className="bg-slate-800 rounded-2xl border border-slate-700 p-5 text-center"
                        >

                          <Icon
                            size={34}
                            className={`mx-auto mb-3 ${item.color}`}
                          />

                          <h2 className="text-3xl font-bold">

                            {item.value}

                          </h2>

                          <p className="text-slate-400 mt-2">

                            {item.title}

                          </p>

                        </motion.div>

                      );

                    })}

                  </div>

                </div>

              </motion.div>

              {/* Customer Success Stories */}

              <motion.div
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ delay: 1.45 }}
                className="mt-8"
              >

                <div className="bg-slate-800 border border-slate-700 rounded-3xl p-6">

                  <h3 className="text-2xl font-bold mb-6">

                    Customer Success Stories

                  </h3>

                  <div className="space-y-5">

                    {[
                      {
                        name: "Rahul Sharma",
                        role: "Customer",
                        review:
                          "Changing my password was incredibly fast. The security tips helped me create a much stronger password.",
                      },
                      {
                        name: "Foodie's Kitchen",
                        role: "Restaurant Partner",
                        review:
                          "The password reset process was smooth and all our restaurant data remained completely secure.",
                      },
                      {
                        name: "Priya Reddy",
                        role: "Delivery Partner",
                        review:
                          "The AI security verification gave me confidence that nobody else could access my account.",
                      },
                    ].map((story, index) => (

                      <motion.div
                        key={index}
                        whileHover={{ x: 5 }}
                        className="bg-slate-900 border border-slate-700 rounded-2xl p-5"
                      >

                        <div className="flex justify-between items-center mb-3">

                          <div>

                            <h4 className="font-semibold">

                              {story.name}

                            </h4>

                            <p className="text-cyan-400 text-sm">

                              {story.role}

                            </p>

                          </div>

                          <div className="flex gap-1">

                            {[...Array(5)].map((_, i) => (

                              <Sparkles
                                key={i}
                                size={16}
                                className="text-yellow-400"
                              />

                            ))}

                          </div>

                        </div>

                        <p className="text-slate-400 leading-7">

                          "{story.review}"

                        </p>

                      </motion.div>

                    ))}

                  </div>

                </div>

              </motion.div>

              {/* Why Strong Passwords Matter */}

              <motion.div
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ delay: 1.55 }}
                className="mt-8"
              >

                <div className="bg-slate-800 border border-slate-700 rounded-3xl p-6">

                  <h3 className="text-2xl font-bold mb-6">

                    Why Strong Passwords Matter

                  </h3>

                  <div className="grid md:grid-cols-2 gap-5">

                    {[
                      {
                        icon: ShieldCheck,
                        title: "Maximum Account Protection",
                        desc: "Strong passwords dramatically reduce the risk of unauthorized account access.",
                        color: "text-green-400",
                      },
                      {
                        icon: LockKeyhole,
                        title: "Secure Personal Data",
                        desc: "Protect your addresses, saved cards, orders, and personal information.",
                        color: "text-cyan-400",
                      },
                      {
                        icon: Sparkles,
                        title: "AI Fraud Prevention",
                        desc: "Advanced AI continuously monitors suspicious activities and blocks threats.",
                        color: "text-purple-400",
                      },
                      {
                        icon: Shield,
                        title: "Enterprise Security",
                        desc: "Every password update follows industry-standard security policies and encryption.",
                        color: "text-orange-400",
                      },
                    ].map((feature, index) => {

                      const Icon = feature.icon;

                      return (

                        <motion.div
                          key={index}
                          whileHover={{ y: -6 }}
                          className="bg-slate-900 border border-slate-700 rounded-2xl p-5"
                        >

                          <Icon
                            size={34}
                            className={`${feature.color} mb-4`}
                          />

                          <h4 className="text-lg font-semibold">

                            {feature.title}

                          </h4>

                          <p className="text-slate-400 mt-3 leading-7">

                            {feature.desc}

                          </p>

                        </motion.div>

                      );

                    })}

                  </div>

                </div>

              </motion.div>
                            {/* Footer */}

              <motion.div
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ delay: 1.65 }}
                className="mt-8"
              >

                <div className="bg-gradient-to-r from-slate-900 via-slate-800 to-slate-900 border border-slate-700 rounded-3xl p-6">

                  <div className="text-center">

                    <div className="w-20 h-20 rounded-2xl bg-gradient-to-r from-cyan-500 to-blue-600 flex items-center justify-center mx-auto mb-6">

                      <LockKeyhole size={34} />

                    </div>

                    <h2 className="text-3xl font-bold">

                      Your Account Is Protected

                    </h2>

                    <p className="text-slate-400 mt-4 max-w-2xl mx-auto leading-8">

                      Your password is encrypted using enterprise-grade
                      security standards. Every password reset is protected
                      with AI-powered monitoring, secure authentication,
                      and encrypted communication to keep your account safe.

                    </p>

                  </div>

                  {/* Footer Links */}

                  <div className="grid md:grid-cols-4 grid-cols-2 gap-8 mt-12">

                    {/* Company */}

                    <div>

                      <h3 className="font-semibold mb-4">

                        Company

                      </h3>

                      <div className="space-y-3">

                        <Link
                          to="/about"
                          className="block text-slate-400 hover:text-cyan-400 transition"
                        >

                          About Us

                        </Link>

                        <Link
                          to="/careers"
                          className="block text-slate-400 hover:text-cyan-400 transition"
                        >

                          Careers

                        </Link>

                        <Link
                          to="/contact"
                          className="block text-slate-400 hover:text-cyan-400 transition"
                        >

                          Contact

                        </Link>

                      </div>

                    </div>

                    {/* Support */}

                    <div>

                      <h3 className="font-semibold mb-4">

                        Support

                      </h3>

                      <div className="space-y-3">

                        <Link
                          to="/help"
                          className="block text-slate-400 hover:text-cyan-400 transition"
                        >

                          Help Center

                        </Link>

                        <Link
                          to="/faq"
                          className="block text-slate-400 hover:text-cyan-400 transition"
                        >

                          FAQs

                        </Link>

                        <Link
                          to="/support"
                          className="block text-slate-400 hover:text-cyan-400 transition"
                        >

                          Customer Support

                        </Link>

                      </div>

                    </div>

                    {/* Legal */}

                    <div>

                      <h3 className="font-semibold mb-4">

                        Legal

                      </h3>

                      <div className="space-y-3">

                        <Link
                          to="/privacy"
                          className="block text-slate-400 hover:text-cyan-400 transition"
                        >

                          Privacy Policy

                        </Link>

                        <Link
                          to="/terms"
                          className="block text-slate-400 hover:text-cyan-400 transition"
                        >

                          Terms & Conditions

                        </Link>

                        <Link
                          to="/cookies"
                          className="block text-slate-400 hover:text-cyan-400 transition"
                        >

                          Cookie Policy

                        </Link>

                      </div>

                    </div>

                    {/* Security */}

                    <div>

                      <h3 className="font-semibold mb-4">

                        Security

                      </h3>

                      <div className="space-y-3">

                        <div className="flex items-center gap-2 text-slate-400">

                          <ShieldCheck
                            size={18}
                            className="text-green-400"
                          />

                          SSL Secured

                        </div>

                        <div className="flex items-center gap-2 text-slate-400">

                          <CheckCircle2
                            size={18}
                            className="text-cyan-400"
                          />

                          Password Encrypted

                        </div>

                        <div className="flex items-center gap-2 text-slate-400">

                          <Sparkles
                            size={18}
                            className="text-purple-400"
                          />

                          AI Protected

                        </div>

                      </div>

                    </div>

                  </div>

                  {/* Bottom Footer */}

                  <div className="border-t border-slate-700 mt-10 pt-6 flex flex-col md:flex-row justify-between items-center gap-4">

                    <p className="text-slate-400 text-sm">

                      © {new Date().getFullYear()} RuchiGo Technologies Pvt. Ltd.
                      All Rights Reserved.

                    </p>

                    <div className="flex flex-wrap justify-center gap-6 text-sm">

                      <Link
                        to="/privacy"
                        className="text-slate-400 hover:text-cyan-400 transition"
                      >

                        Privacy

                      </Link>

                      <Link
                        to="/terms"
                        className="text-slate-400 hover:text-cyan-400 transition"
                      >

                        Terms

                      </Link>

                      <Link
                        to="/cookies"
                        className="text-slate-400 hover:text-cyan-400 transition"
                      >

                        Cookies

                      </Link>

                      <Link
                        to="/support"
                        className="text-slate-400 hover:text-cyan-400 transition"
                      >

                        Support

                      </Link>

                    </div>

                  </div>

                </div>

              </motion.div>

            </div>

        </div>

      </div>

  );

};

export default ResetPassword;