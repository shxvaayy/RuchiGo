import { useState } from "react";
import { Link } from "react-router-dom";
import Logo from "../../components/common/Logo";
import { motion } from "framer-motion";
import {
  Mail,
  ShieldCheck,
  CheckCircle2,
  Sparkles,
  Users,
  Store,
  Truck,
  ShoppingBag,
  Clock3,
  Send,
} from "lucide-react";

const statistics = [
  {
    title: "Verified Users",
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
    title: "Emails Verified",
    value: "3M+",
    icon: ShoppingBag,
    color: "text-purple-400",
  },
];

const verificationBenefits = [
  "Verify your account in just a few seconds",
  "Enterprise-grade email security",
  "Prevent unauthorized account access",
  "Secure communication with encrypted verification",
  "AI-powered fraud and spam detection",
  "Unlock all RuchiGo platform features",
];

const securityFeatures = [
  "256-bit SSL Encryption",
  "Secure Email Verification",
  "AI Spam Detection",
  "JWT Session Protection",
  "Enterprise Cloud Security",
  "Real-Time Verification Tracking",
];

const EmailVerification = () => {

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

                  Email Verification

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

                Email Address

              </span>

            </motion.h1>

            <p className="mt-8 text-lg text-slate-400 leading-8 max-w-xl">

              We've sent a verification email to your registered
              email address. Verify your email to activate your
              RuchiGo account and enjoy secure access to all
              platform features.

            </p>

            {/* Benefits */}

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

          {/* Email Verification Form Starts in Part 1B */}
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

                  <Mail size={34} />

                </div>

                <h2 className="text-3xl font-bold">

                  Verify Your Email

                </h2>

                <p className="text-slate-400 mt-3 leading-7">

                  We've sent a 6-digit verification code to your
                  registered email address. Enter the code below to
                  activate your RuchiGo account.

                </p>

              </div>

              {/* Registered Email */}

              <div className="rounded-2xl bg-slate-800 border border-slate-700 p-5 mb-8">

                <div className="flex items-center gap-4">

                  <div className="w-12 h-12 rounded-xl bg-cyan-500/20 flex items-center justify-center">

                    <Mail
                      className="text-cyan-400"
                      size={24}
                    />

                  </div>

                  <div>

                    <p className="text-sm text-slate-400">

                      Verification Email Sent To

                    </p>

                    <h4 className="font-semibold mt-1">

                      pavan@example.com

                    </h4>

                  </div>

                </div>

              </div>

              {/* Verification Form */}

              <form className="space-y-8">

                {/* OTP Boxes */}

                <div>

                  <label className="block mb-4 font-medium">

                    Verification Code

                  </label>

                  <div className="flex justify-between gap-3">

                    {[...Array(6)].map((_, index) => (

                      <motion.input
                        key={index}
                        whileFocus={{ scale: 1.05 }}
                        maxLength={1}
                        type="text"
                        className="w-14 h-14 text-center text-xl font-bold rounded-xl bg-slate-800 border border-slate-700 focus:border-cyan-500 outline-none transition"
                      />

                    ))}

                  </div>

                </div>

                {/* Countdown */}

                <div className="flex items-center justify-between rounded-2xl bg-slate-800 border border-slate-700 p-4">

                  <div className="flex items-center gap-3">

                    <Clock3
                      size={22}
                      className="text-orange-400"
                    />

                    <div>

                      <p className="font-medium">

                        Code Expires In

                      </p>

                      <p className="text-slate-400 text-sm">

                        Enter the code before it expires.

                      </p>

                    </div>

                  </div>

                  <span className="text-xl font-bold text-orange-400">

                    04:59

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

                      Verify Email

                      <ShieldCheck size={20} />

                    </>

                  )}

                </motion.button>

                {/* Resend Email */}

                <button
                  type="button"
                  className="w-full rounded-xl border border-cyan-500 py-3 text-cyan-400 font-semibold hover:bg-cyan-500/10 transition flex items-center justify-center gap-3"
                >

                  <Send size={20} />

                  Resend Verification Email

                </button>

              </form>

              {/* Change Email */}

              <div className="mt-8 rounded-2xl bg-slate-800 border border-slate-700 p-5">

                <div className="flex items-start gap-4">

                  <Mail
                    className="text-cyan-400 mt-1"
                    size={24}
                  />

                  <div>

                    <h4 className="font-semibold">

                      Wrong Email Address?

                    </h4>

                    <p className="text-slate-400 mt-2 leading-7">

                      If this email address is incorrect, you can update
                      it and request a new verification email.

                    </p>

                    <button
                      type="button"
                      className="mt-4 text-cyan-400 font-semibold hover:underline"
                    >

                      Change Email Address

                    </button>

                  </div>

                </div>

              </div>

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

                      Never share your verification code with anyone.
                      RuchiGo employees will never ask for your
                      verification code via phone, email, or chat.

                    </p>

                  </div>

                </div>

              </div>

              {/* Back to Login */}

              <div className="mt-8 text-center">

                <p className="text-slate-400">

                  Already verified?{" "}

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
                        {/* Email Verification Progress */}

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

                      Step 2 of 3

                    </span>

                  </div>

                  <div className="w-full h-3 rounded-full bg-slate-700 overflow-hidden">

                    <motion.div
                      initial={{ width: 0 }}
                      animate={{ width: "66%" }}
                      transition={{ duration: 1 }}
                      className="h-full rounded-full bg-gradient-to-r from-cyan-500 to-blue-600"
                    />

                  </div>

                  <div className="grid grid-cols-3 gap-4 mt-6 text-center">

                    {[
                      "Register",
                      "Verify Email",
                      "Completed",
                    ].map((step, index) => (

                      <div key={index}>

                        <div
                          className={`w-10 h-10 rounded-full mx-auto flex items-center justify-center ${
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

                        <p className="text-sm text-slate-400 mt-3">

                          {step}

                        </p>

                      </div>

                    ))}

                  </div>

                </div>

              </motion.div>

              {/* Email Security */}

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

                      Email Security

                    </h3>

                  </div>

                  <div className="space-y-5">

                    {[
                      "Verification links expire automatically.",
                      "Every verification request is encrypted.",
                      "Only registered email addresses are accepted.",
                      "Email ownership is verified before activation.",
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

              {/* Verification Policy */}

              <motion.div
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ delay: 0.65 }}
                className="mt-8"
              >

                <div className="rounded-2xl border border-cyan-500/30 bg-cyan-500/10 p-6">

                  <div className="flex items-start gap-4">

                    <Mail
                      className="text-cyan-400 mt-1"
                      size={26}
                    />

                    <div>

                      <h3 className="font-semibold text-lg">

                        Verification Policy

                      </h3>

                      <p className="text-slate-300 mt-2 leading-7">

                        Verification emails remain valid for a limited
                        time. If your code expires, simply request a new
                        verification email from this page. Multiple failed
                        verification attempts may temporarily delay new
                        requests to help protect your account.

                      </p>

                    </div>

                  </div>

                </div>

              </motion.div>

              {/* Account Security Notice */}

              <motion.div
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ delay: 0.75 }}
                className="mt-8"
              >

                <div className="bg-slate-800 border border-slate-700 rounded-2xl p-6">

                  <div className="flex items-center gap-3 mb-6">

                    <ShieldCheck
                      className="text-cyan-400"
                      size={26}
                    />

                    <h3 className="text-xl font-bold">

                      Account Security Notice

                    </h3>

                  </div>

                  <div className="space-y-4">

                    {[
                      "Email verification activates your account securely.",
                      "Only verified users can access protected features.",
                      "Suspicious verification requests are automatically blocked.",
                      "Your email is encrypted during every verification process.",
                    ].map((item, index) => (

                      <div
                        key={index}
                        className="flex items-center gap-4"
                      >

                        <CheckCircle2
                          size={18}
                          className="text-cyan-400"
                        />

                        <span className="text-slate-300">

                          {item}

                        </span>

                      </div>

                    ))}

                  </div>

                </div>

              </motion.div>
                            {/* Email Security Dashboard */}

              <motion.div
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ delay: 0.85 }}
                className="mt-8"
              >

                <div className="bg-slate-800 border border-slate-700 rounded-3xl p-6">

                  <div className="flex items-center justify-between mb-6">

                    <h3 className="text-2xl font-bold">

                      Email Security Dashboard

                    </h3>

                    <ShieldCheck
                      size={30}
                      className="text-cyan-400"
                    />

                  </div>

                  <div className="grid md:grid-cols-3 gap-5">

                    {[
                      {
                        title: "Verification Status",
                        value: "Pending",
                        icon: Mail,
                        color: "text-orange-400",
                      },
                      {
                        title: "Email Encryption",
                        value: "AES-256",
                        icon: ShieldCheck,
                        color: "text-cyan-400",
                      },
                      {
                        title: "Spam Protection",
                        value: "Enabled",
                        icon: Sparkles,
                        color: "text-green-400",
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

              {/* AI Spam & Fraud Detection */}

              <motion.div
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ delay: 0.95 }}
                className="mt-8"
              >

                <div className="bg-gradient-to-r from-slate-900 via-slate-800 to-slate-900 border border-slate-700 rounded-3xl p-6">

                  <div className="flex justify-between items-center mb-6">

                    <h3 className="text-2xl font-bold">

                      AI Spam & Fraud Detection

                    </h3>

                    <Sparkles
                      size={30}
                      className="text-cyan-400"
                    />

                  </div>

                  <div className="space-y-5">

                    {[
                      "Detects suspicious verification requests in real time.",
                      "Blocks automated spam and bot registrations.",
                      "Identifies phishing and spoofed email attempts.",
                      "Monitors unusual verification activity across devices.",
                      "Uses AI-powered analytics to protect every account.",
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
                        <li>✔ setValue()</li>
                        <li>✔ formState.errors</li>

                      </ul>

                    </div>

                    <div className="bg-slate-900 border border-slate-700 rounded-2xl p-5">

                      <h4 className="font-semibold mb-4">

                        Zod Validation

                      </h4>

                      <ul className="space-y-3 text-slate-400">

                        <li>✔ Required Fields</li>
                        <li>✔ 6-Digit Code Validation</li>
                        <li>✔ Email Format Validation</li>
                        <li>✔ Expired Code Handling</li>
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

                    Invalid or expired verification code. Please enter the
                    correct 6-digit code or request a new verification email.

                  </p>

                </div>

              </motion.div>

              {/* Verification Status */}

              <motion.div
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ delay: 1.25 }}
                className="mt-8"
              >

                <div className="grid md:grid-cols-3 gap-5">

                  {[
                    {
                      title: "Email Status",
                      value: "Pending",
                      icon: Mail,
                      color: "text-orange-400",
                    },
                    {
                      title: "Security",
                      value: "Protected",
                      icon: ShieldCheck,
                      color: "text-cyan-400",
                    },
                    {
                      title: "Ready to Verify",
                      value: "Yes",
                      icon: CheckCircle2,
                      color: "text-green-400",
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

                        Millions of users trust RuchiGo's secure email
                        verification system every day. Every verification
                        request is protected by enterprise-grade encryption,
                        AI-powered fraud detection, and continuous monitoring.

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
                        title: "Email Accuracy",
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
                        value: "< 20 Sec",
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
                          "My account was verified within seconds. The process was smooth, secure, and incredibly easy to follow.",
                      },
                      {
                        name: "Food Paradise",
                        role: "Restaurant Partner",
                        review:
                          "The email verification process helped us activate our business account quickly while keeping everything secure.",
                      },
                      {
                        name: "Sneha Patel",
                        role: "Delivery Partner",
                        review:
                          "Receiving and verifying the email code took less than a minute. The security experience was excellent.",
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

              {/* Why Email Verification Matters */}

              <motion.div
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ delay: 1.55 }}
                className="mt-8"
              >

                <div className="bg-slate-800 border border-slate-700 rounded-3xl p-6">

                  <h3 className="text-2xl font-bold mb-6">

                    Why Email Verification Matters

                  </h3>

                  <div className="grid md:grid-cols-2 gap-5">

                    {[
                      {
                        icon: ShieldCheck,
                        title: "Account Protection",
                        desc: "Ensures only the rightful owner can activate and access the account.",
                        color: "text-green-400",
                      },
                      {
                        icon: Mail,
                        title: "Verified Communication",
                        desc: "Important notifications and password recovery emails reach the correct recipient.",
                        color: "text-cyan-400",
                      },
                      {
                        icon: Sparkles,
                        title: "AI Fraud Detection",
                        desc: "Artificial intelligence continuously detects suspicious verification attempts.",
                        color: "text-purple-400",
                      },
                      {
                        icon: Send,
                        title: "Secure Activation",
                        desc: "Every verification request is encrypted and securely delivered in real time.",
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

                      <Mail size={34} />

                    </div>

                    <h2 className="text-3xl font-bold">

                      Email Verification Complete Security

                    </h2>

                    <p className="text-slate-400 mt-4 max-w-2xl mx-auto leading-8">

                      Your email verification is protected using enterprise-grade
                      encryption, AI-powered fraud detection, secure verification
                      workflows, and continuous monitoring to ensure only you can
                      activate your RuchiGo account.

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

                          Email Verified

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

export default EmailVerification;