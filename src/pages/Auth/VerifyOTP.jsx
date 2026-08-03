import { useState } from "react";
import { Link } from "react-router-dom";
import Logo from "../../components/common/Logo";
import { motion } from "framer-motion";
import {
  ShieldCheck,
  CheckCircle2,
  Sparkles,
  Users,
  Store,
  Truck,
  ShoppingBag,
  Clock3,
  Smartphone,
  Mail,
  KeyRound,
} from "lucide-react";

const statistics = [
  {
    title: "Verified Users",
    value: "250K+",
    icon: Users,
    color: "text-cyan-400",
  },
  {
    title: "Restaurants",
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
    title: "Orders Delivered",
    value: "8M+",
    icon: ShoppingBag,
    color: "text-purple-400",
  },
];

const verificationBenefits = [
  "Secure 6-digit OTP verification",
  "Email & Mobile OTP support",
  "Fast identity confirmation",
  "Enterprise-grade security",
  "AI-powered fraud protection",
  "Secure account recovery process",
];

const securityFeatures = [
  "256-bit SSL Encryption",
  "OTP Expiration Protection",
  "Device Verification",
  "AI Fraud Detection",
  "JWT Session Security",
  "Brute Force Protection",
];

const VerifyOTP = () => {

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

                  Secure OTP Verification

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

              Verify Your

              <span className="block bg-gradient-to-r from-cyan-400 to-blue-500 bg-clip-text text-transparent">

                Identity

              </span>

            </motion.h1>

            <p className="mt-8 text-lg text-slate-400 leading-8 max-w-xl">

              We've sent a secure One-Time Password (OTP) to your
              registered email address or mobile number. Enter the
              verification code to continue securely.

            </p>

            {/* Verification Benefits */}

            <div className="mt-10 space-y-4">

              {verificationBenefits.map((item, index) => (

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

          {/* OTP Verification Card Starts in Part 1B */}
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

                  Verify OTP

                </h2>

                <p className="text-slate-400 mt-3 leading-7">

                  Enter the 6-digit verification code sent to your
                  registered email or mobile number.

                </p>

              </div>

              {/* Verification Details */}

              <div className="rounded-2xl bg-slate-800 border border-slate-700 p-5 mb-8">

                <div className="flex items-center gap-4">

                  <Mail
                    className="text-cyan-400"
                    size={24}
                  />

                  <div>

                    <h4 className="font-semibold">

                      Verification Code Sent

                    </h4>

                    <p className="text-sm text-slate-400">

                      p****@gmail.com

                    </p>

                  </div>

                </div>

              </div>

              {/* OTP Form */}

              <form className="space-y-8">

                {/* OTP Boxes */}

                <div>

                  <label className="block mb-4 font-medium text-center">

                    Enter Verification Code

                  </label>

                  <div className="flex justify-center gap-3">

                    {[...Array(6)].map((_, index) => (

                      <motion.input
                        key={index}
                        whileFocus={{ scale: 1.08 }}
                        type="text"
                        maxLength={1}
                        className="w-14 h-16 rounded-xl bg-slate-800 border border-slate-700 text-center text-2xl font-bold outline-none focus:border-cyan-500 transition"
                      />

                    ))}

                  </div>

                </div>

                {/* Countdown */}

                <div className="rounded-xl bg-slate-800 border border-slate-700 p-4 flex justify-between items-center">

                  <div className="flex items-center gap-3">

                    <Clock3
                      className="text-cyan-400"
                      size={22}
                    />

                    <span className="text-slate-300">

                      OTP expires in

                    </span>

                  </div>

                  <span className="font-bold text-orange-400 text-lg">

                    05:00

                  </span>

                </div>

                {/* Verify Button */}

                <motion.button
                  whileHover={{ scale: 1.02 }}
                  whileTap={{ scale: 0.98 }}
                  disabled={loading}
                  className="w-full py-4 rounded-xl bg-gradient-to-r from-cyan-500 to-blue-600 font-semibold flex justify-center items-center gap-3 hover:shadow-xl transition"
                >

                  {loading ? (

                    <>

                      <div className="w-5 h-5 border-2 border-white border-t-transparent rounded-full animate-spin" />

                      Verifying...

                    </>

                  ) : (

                    <>

                      Verify OTP

                      <CheckCircle2 size={20} />

                    </>

                  )}

                </motion.button>

              </form>

              {/* Resend OTP */}

              <div className="mt-8 text-center">

                <p className="text-slate-400">

                  Didn't receive the code?

                </p>

                <button
                  type="button"
                  className="mt-3 text-cyan-400 hover:text-cyan-300 font-semibold transition"
                >

                  Resend OTP

                </button>

              </div>

              {/* Change Email / Mobile */}

              <div className="mt-8 rounded-2xl bg-slate-800 border border-slate-700 p-5">

                <div className="flex items-center justify-between">

                  <div className="flex items-center gap-3">

                    <Smartphone
                      className="text-green-400"
                      size={22}
                    />

                    <div>

                      <h4 className="font-semibold">

                        Wrong Email or Mobile?

                      </h4>

                      <p className="text-sm text-slate-400">

                        Change your recovery destination.

                      </p>

                    </div>

                  </div>

                  <button
                    type="button"
                    className="text-cyan-400 font-semibold hover:underline"
                  >

                    Change

                  </button>

                </div>

              </div>

              {/* Support */}

              <div className="mt-8 rounded-2xl bg-slate-800 border border-slate-700 p-5">

                <div className="flex items-start gap-4">

                  <ShieldCheck
                    className="text-green-400 mt-1"
                    size={24}
                  />

                  <div>

                    <h4 className="font-semibold">

                      Need Assistance?

                    </h4>

                    <p className="text-slate-400 mt-2 leading-7">

                      If you didn't receive the verification code after
                      multiple attempts, our support team is available
                      24×7 to help verify your identity securely.

                    </p>

                    <Link
                      to="/support"
                      className="inline-flex items-center gap-2 text-cyan-400 mt-4 hover:underline font-medium"
                    >

                      Contact Support

                    </Link>

                  </div>

                </div>

              </div>

              {/* Back to Login */}

              <div className="mt-8 text-center">

                <p className="text-slate-400">

                  Want to use another account?{" "}

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
                        {/* Verification Progress */}

              <motion.div
                initial={{ opacity: 0, y: 30 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.35 }}
                className="mt-8"
              >

                <div className="bg-slate-800 border border-slate-700 rounded-2xl p-6">

                  <div className="flex justify-between items-center mb-5">

                    <h3 className="text-xl font-bold">

                      Verification Progress

                    </h3>

                    <span className="text-cyan-400 font-semibold">

                      Step 2 of 4

                    </span>

                  </div>

                  <div className="w-full h-3 bg-slate-700 rounded-full overflow-hidden">

                    <motion.div
                      initial={{ width: 0 }}
                      animate={{ width: "50%" }}
                      transition={{ duration: 1 }}
                      className="h-full rounded-full bg-gradient-to-r from-cyan-500 to-blue-600"
                    />

                  </div>

                  <div className="grid grid-cols-4 gap-4 mt-6 text-center">

                    {[
                      "Identity",
                      "OTP",
                      "Password",
                      "Complete",
                    ].map((step, index) => (

                      <div key={index}>

                        <div
                          className={`w-10 h-10 mx-auto rounded-full flex items-center justify-center ${
                            index <= 1
                              ? "bg-cyan-500"
                              : "bg-slate-700"
                          }`}
                        >

                          {index <= 1 ? (
                            <CheckCircle2 size={18} />
                          ) : (
                            index + 1
                          )}

                        </div>

                        <p className="mt-3 text-sm text-slate-400">

                          {step}

                        </p>

                      </div>

                    ))}

                  </div>

                </div>

              </motion.div>

              {/* Verification Process */}

              <motion.div
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ delay: 0.45 }}
                className="mt-8"
              >

                <div className="bg-slate-800 border border-slate-700 rounded-2xl p-6">

                  <div className="flex items-center gap-3 mb-6">

                    <ShieldCheck
                      className="text-green-400"
                      size={26}
                    />

                    <h3 className="text-xl font-bold">

                      Verification Process

                    </h3>

                  </div>

                  <div className="space-y-5">

                    {[
                      "Receive secure 6-digit OTP",
                      "Verify your identity",
                      "Prevent unauthorized access",
                      "Continue password recovery safely",
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

              {/* Enterprise Security */}

              <motion.div
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ delay: 0.55 }}
                className="mt-8"
              >

                <div className="rounded-2xl bg-gradient-to-r from-slate-800 via-slate-900 to-slate-800 border border-slate-700 p-6">

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
                          className="text-green-400"
                          size={18}
                        />

                        <span className="text-slate-300">

                          {feature}

                        </span>

                      </div>

                    ))}

                  </div>

                </div>

              </motion.div>

              {/* OTP Expiry Notice */}

              <motion.div
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ delay: 0.65 }}
                className="mt-8"
              >

                <div className="rounded-2xl border border-orange-500/30 bg-orange-500/10 p-6">

                  <div className="flex items-start gap-4">

                    <Clock3
                      className="text-orange-400 mt-1"
                      size={26}
                    />

                    <div>

                      <h3 className="font-semibold text-lg">

                        OTP Expiry Information

                      </h3>

                      <p className="text-slate-300 mt-2 leading-7">

                        Your verification code expires after 5 minutes.
                        If the timer reaches zero, request a new OTP.
                        Expired OTPs cannot be reused for security reasons.

                      </p>

                    </div>

                  </div>

                </div>

              </motion.div>

              {/* Device Verification */}

              <motion.div
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ delay: 0.75 }}
                className="mt-8"
              >

                <div className="bg-slate-800 border border-slate-700 rounded-2xl p-6">

                  <div className="flex items-center gap-3 mb-6">

                    <Smartphone
                      className="text-cyan-400"
                      size={26}
                    />

                    <h3 className="text-xl font-bold">

                      Device Verification

                    </h3>

                  </div>

                  <div className="space-y-4">

                    {[
                      "Verification request from trusted device",
                      "Encrypted communication channel",
                      "Secure session validation",
                      "Suspicious activity monitoring",
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
                            {/* OTP Security Dashboard */}

              <motion.div
                initial={{ opacity: 0, y: 30 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.85 }}
                className="mt-8"
              >

                <div className="bg-slate-800 border border-slate-700 rounded-2xl p-6">

                  <div className="flex justify-between items-center mb-6">

                    <h3 className="text-xl font-bold">

                      OTP Security Dashboard

                    </h3>

                    <ShieldCheck
                      className="text-green-400"
                      size={28}
                    />

                  </div>

                  <div className="space-y-5">

                    {[
                      {
                        title: "OTP Validation",
                        status: "Ready",
                        progress: 100,
                        color: "from-green-500 to-emerald-500",
                      },
                      {
                        title: "Device Verification",
                        status: "Verified",
                        progress: 100,
                        color: "from-cyan-500 to-blue-500",
                      },
                      {
                        title: "Session Protection",
                        status: "Active",
                        progress: 95,
                        color: "from-purple-500 to-indigo-500",
                      },
                    ].map((item, index) => (

                      <div key={index}>

                        <div className="flex justify-between mb-2">

                          <span>{item.title}</span>

                          <span className="text-cyan-400 font-semibold">

                            {item.status}

                          </span>

                        </div>

                        <div className="w-full h-3 rounded-full bg-slate-700 overflow-hidden">

                          <div
                            className={`h-full rounded-full bg-gradient-to-r ${item.color}`}
                            style={{ width: `${item.progress}%` }}
                          />

                        </div>

                      </div>

                    ))}

                  </div>

                </div>

              </motion.div>

              {/* Fraud Detection */}

              <motion.div
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ delay: 0.95 }}
                className="mt-8"
              >

                <div className="bg-slate-800 border border-slate-700 rounded-2xl p-6">

                  <div className="flex items-center gap-3 mb-6">

                    <ShieldCheck
                      className="text-red-400"
                      size={24}
                    />

                    <h3 className="text-xl font-bold">

                      Fraud Protection

                    </h3>

                  </div>

                  <div className="grid md:grid-cols-2 gap-5">

                    {[
                      "Multiple OTP attempt detection",
                      "Automatic OTP expiration",
                      "Brute-force attack prevention",
                      "IP & Device monitoring",
                      "AI suspicious activity detection",
                      "Real-time security alerts",
                    ].map((item, index) => (

                      <div
                        key={index}
                        className="flex items-center gap-3 bg-slate-900 rounded-xl p-4"
                      >

                        <CheckCircle2
                          className="text-green-400"
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

              {/* Developer Ready */}

              <motion.div
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ delay: 1.05 }}
                className="mt-8"
              >

                <div className="bg-slate-900 border border-slate-700 rounded-2xl p-6">

                  <div className="flex justify-between items-center mb-6">

                    <h3 className="text-xl font-bold">

                      Developer Ready

                    </h3>

                    <Sparkles
                      className="text-cyan-400"
                      size={24}
                    />

                  </div>

                  <div className="grid md:grid-cols-2 gap-5">

                    <div className="bg-slate-800 rounded-xl p-5">

                      <h4 className="font-semibold text-cyan-400 mb-4">

                        React Hook Form

                      </h4>

                      <ul className="space-y-2 text-sm text-slate-400">

                        <li>✓ register()</li>
                        <li>✓ handleSubmit()</li>
                        <li>✓ watch()</li>
                        <li>✓ setValue()</li>
                        <li>✓ formState.errors</li>

                      </ul>

                    </div>

                    <div className="bg-slate-800 rounded-xl p-5">

                      <h4 className="font-semibold text-green-400 mb-4">

                        Zod Validation

                      </h4>

                      <ul className="space-y-2 text-sm text-slate-400">

                        <li>✓ OTP Required</li>
                        <li>✓ Six Digit Validation</li>
                        <li>✓ Numeric Validation</li>
                        <li>✓ Expiry Validation</li>
                        <li>✓ API Error Handling</li>

                      </ul>

                    </div>

                  </div>

                  <div className="mt-6 rounded-xl bg-red-500/10 border border-red-500/30 p-4">

                    <p className="text-red-300 text-sm">

                      <strong>Example Error:</strong> Invalid or expired OTP.
                      Please verify the code or request a new OTP.

                    </p>

                  </div>

                </div>

              </motion.div>

              {/* Verification Status */}

              <motion.div
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ delay: 1.15 }}
                className="mt-8"
              >

                <div className="grid md:grid-cols-3 gap-5">

                  <div className="bg-slate-800 border border-slate-700 rounded-2xl p-5 text-center">

                    <Mail
                      className="mx-auto text-cyan-400 mb-3"
                      size={30}
                    />

                    <h3 className="font-semibold">

                      Email Verified

                    </h3>

                    <p className="text-sm text-slate-400 mt-2">

                      Recovery email confirmed

                    </p>

                  </div>

                  <div className="bg-slate-800 border border-slate-700 rounded-2xl p-5 text-center">

                    <Smartphone
                      className="mx-auto text-green-400 mb-3"
                      size={30}
                    />

                    <h3 className="font-semibold">

                      Device Trusted

                    </h3>

                    <p className="text-sm text-slate-400 mt-2">

                      Verified secure device

                    </p>

                  </div>

                  <div className="bg-slate-800 border border-slate-700 rounded-2xl p-5 text-center">

                    <Clock3
                      className="mx-auto text-orange-400 mb-3"
                      size={30}
                    />

                    <h3 className="font-semibold">

                      Session Active

                    </h3>

                    <p className="text-sm text-slate-400 mt-2">

                      Secure verification session

                    </p>

                  </div>

                </div>

              </motion.div>
                            {/* Trusted by Millions */}

              <motion.div
                initial={{ opacity: 0, y: 35 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 1.25 }}
                className="mt-8"
              >

                <div className="bg-gradient-to-r from-cyan-500/10 via-slate-900 to-blue-600/10 border border-slate-700 rounded-3xl p-6">

                  <div className="flex justify-between items-center mb-8">

                    <div>

                      <h3 className="text-2xl font-bold">

                        Trusted by Millions

                      </h3>

                      <p className="text-slate-400 mt-2">

                        Every OTP verification request is protected with
                        enterprise-grade encryption, intelligent fraud
                        detection, and real-time identity verification.

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
                        title: "Verified Users",
                        icon: Users,
                        color: "text-cyan-400",
                      },
                      {
                        value: "99.99%",
                        title: "OTP Accuracy",
                        icon: CheckCircle2,
                        color: "text-green-400",
                      },
                      {
                        value: "24×7",
                        title: "Security Monitoring",
                        icon: ShieldCheck,
                        color: "text-orange-400",
                      },
                      {
                        value: "< 30 Sec",
                        title: "Average Verification",
                        icon: Clock3,
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

              {/* Verification Success Stories */}

              <motion.div
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ delay: 1.35 }}
                className="mt-8"
              >

                <div className="bg-slate-800 border border-slate-700 rounded-3xl p-6">

                  <h3 className="text-2xl font-bold mb-6">

                    Verification Success Stories

                  </h3>

                  <div className="space-y-5">

                    {[
                      {
                        name: "Rahul Sharma",
                        role: "Customer",
                        review:
                          "OTP verification took less than 20 seconds. The process was smooth, secure, and helped me recover my account instantly.",
                      },
                      {
                        name: "Spice Garden",
                        role: "Restaurant Partner",
                        review:
                          "The secure OTP verification protected our restaurant dashboard and made password recovery incredibly simple.",
                      },
                      {
                        name: "Anita Verma",
                        role: "Delivery Partner",
                        review:
                          "I received my verification code immediately and completed account verification without any issues.",
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

              {/* Why OTP Verification Is Secure */}

              <motion.div
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ delay: 1.45 }}
                className="mt-8"
              >

                <div className="bg-slate-800 border border-slate-700 rounded-3xl p-6">

                  <h3 className="text-2xl font-bold mb-6">

                    Why OTP Verification Is Secure

                  </h3>

                  <div className="grid md:grid-cols-2 gap-5">

                    {[
                      {
                        icon: ShieldCheck,
                        title: "Enterprise Encryption",
                        desc: "Every OTP is transmitted through encrypted channels to ensure maximum security.",
                        color: "text-green-400",
                      },
                      {
                        icon: Smartphone,
                        title: "Device Authentication",
                        desc: "OTP verification confirms the request is coming from a trusted device.",
                        color: "text-cyan-400",
                      },
                      {
                        icon: Mail,
                        title: "Verified Communication",
                        desc: "Codes are delivered only to registered email addresses or mobile numbers.",
                        color: "text-orange-400",
                      },
                      {
                        icon: Sparkles,
                        title: "AI Threat Detection",
                        desc: "Machine learning continuously detects suspicious verification attempts in real time.",
                        color: "text-purple-400",
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
                transition={{ delay: 1.55 }}
                className="mt-8"
              >

                <div className="bg-gradient-to-r from-slate-900 via-slate-800 to-slate-900 border border-slate-700 rounded-3xl p-6">

                  <div className="text-center">

                    <div className="w-20 h-20 rounded-2xl bg-gradient-to-r from-cyan-500 to-blue-600 flex items-center justify-center mx-auto mb-6">

                      <KeyRound size={34} />

                    </div>

                    <h2 className="text-3xl font-bold">

                      Secure OTP Verification

                    </h2>

                    <p className="text-slate-400 mt-4 max-w-2xl mx-auto leading-8">

                      RuchiGo protects every verification request with
                      enterprise-grade encryption, AI-powered fraud detection,
                      secure session management, and real-time monitoring to
                      ensure only the rightful account owner gains access.

                    </p>

                  </div>

                  {/* Footer Links */}

                  <div className="grid md:grid-cols-4 grid-cols-2 gap-8 mt-12">

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
                          to="/contact"
                          className="block text-slate-400 hover:text-cyan-400 transition"
                        >

                          Contact

                        </Link>

                        <Link
                          to="/careers"
                          className="block text-slate-400 hover:text-cyan-400 transition"
                        >

                          Careers

                        </Link>

                      </div>

                    </div>

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

                          OTP Verified

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

export default VerifyOTP;