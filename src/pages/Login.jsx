import { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { Mail } from "lucide-react";
import { motion } from "framer-motion";

import { useAuth } from "../../context/AuthContext.jsx";

import AuthLayout from "../../components/auth/AuthLayout";
import AuthTabs from "../../components/auth/AuthTabs";
import RoleSelector from "../../components/auth/RoleSelector";
import AuthInput from "../../components/auth/AuthInput";
import PasswordInput from "../../components/auth/PasswordInput";
import AuthButton from "../../components/auth/AuthButton";
import SocialLogin from "../../components/auth/SocialLogin";
import AuthFooter from "../../components/auth/AuthFooter";

export default function Login() {
  const navigate = useNavigate();

  const { login, loading } = useAuth();

  const [activeTab, setActiveTab] = useState("login");

  const [formData, setFormData] = useState({
    email: "",
    password: "",
    role: "customer",
    remember: false,
  });

  const [errors, setErrors] = useState({});

  const handleChange = (e) => {
    const { name, value, checked, type } = e.target;

    setFormData((prev) => ({
      ...prev,
      [name]:
        type === "checkbox"
          ? checked
          : value,
    }));
  };

  const handleRole = (role) => {
    setFormData((prev) => ({
      ...prev,
      role,
    }));
  };

  const validate = () => {
    const newErrors = {};

    if (!formData.email.trim()) {
      newErrors.email =
        "Email is required.";
    } else if (
      !/\S+@\S+\.\S+/.test(
        formData.email
      )
    ) {
      newErrors.email =
        "Enter a valid email.";
    }

    if (!formData.password) {
      newErrors.password =
        "Password is required.";
    } else if (
      formData.password.length < 4
    ) {
      newErrors.password =
        "Password must contain at least 4 characters.";
    }

    setErrors(newErrors);

    return (
      Object.keys(newErrors).length ===
      0
    );
  };

  const handleLogin = async (e) => {
    e.preventDefault();

    if (!validate()) return;

    const success = await login({
      email: formData.email,
      password: formData.password,
      role: formData.role,
    });
    console.log("Login Success:", success);
console.log("Stored Auth:", localStorage.getItem("ruchigo-auth"));

    if (success) {
      console.log(
        "Login Successful"
      );
    }
  };

  const handleSocialLogin = (
    provider
  ) => {
    console.log(
      "Login with:",
      provider
    );
  };

  return (
    <>
  <AuthLayout
    title="Welcome Back!"
    subtitle="Login to order your favourite food."
  >
    <AuthTabs
      activeTab={activeTab}
      onChange={(tab) => {
        setActiveTab(tab);

        if (tab === "register") {
          navigate("/register");
        }
      }}
    />

    <form
      onSubmit={handleLogin}
      className="space-y-5"
    >

      <RoleSelector
        selectedRole={formData.role}
        onSelectRole={handleRole}
      />

      <AuthInput
        label="Email Address"
        name="email"
        type="email"
        placeholder="Enter your email"
        value={formData.email}
        onChange={handleChange}
        icon={Mail}
        error={errors.email}
        required
      />

      <PasswordInput
        label="Password"
        name="password"
        value={formData.password}
        onChange={handleChange}
        placeholder="Enter your password"
        error={errors.password}
        required
      />

      <div className="mb-6 flex items-center justify-between">

        <label className="flex items-center gap-2 text-sm text-gray-600">

          <input
            type="checkbox"
            name="remember"
            checked={formData.remember}
            onChange={handleChange}
            className="accent-orange-500"
          />

          Remember Me

        </label>

        <Link
          to="/forgot-password"
          className="text-sm font-semibold text-orange-500 hover:text-red-500"
        >
          Forgot Password?
        </Link>

      </div>

      <AuthButton
        type="submit"
        loading={loading}
      >
        Login
      </AuthButton>

    </form>

    <SocialLogin
      onSocialLogin={handleSocialLogin}
    />

    <div className="mt-8 text-center">

      <p className="text-sm text-gray-600">

        Don't have an account?{" "}

        <Link
          to="/register"
          className="font-semibold text-orange-500 hover:text-red-500"
        >
          Create Account
        </Link>

      </p>

    </div>

    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ delay: 0.4 }}
      className="mt-6 rounded-2xl border border-orange-100 bg-orange-50 p-5"
    >

      <h3 className="text-sm font-semibold text-orange-600">
        🔒 Secure Login
      </h3>

      <p className="mt-2 text-sm leading-6 text-gray-600">
        Your account is protected using encrypted
        authentication and secure communication.
        Order safely with RuchiGo.
      </p>

    </motion.div>

    <AuthFooter />

  </AuthLayout>
</>
);
}