// pages/Login.tsx
import { useState } from "react";
import { toast } from "react-toastify";
import { Eye, EyeOff } from "lucide-react"; // Using lucide-react icons

const Login = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [showPassword, setShowPassword] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!email || !password) {
      toast.error("Please fill in all fields");
      return;
    }
    // Simulate login submission (replace with API call)
    console.log("Logging in with:", { email, password });
    toast.success("Login successful!");
  };

  return (
    <div className="min-h-screen flex items-center justify-center bg-[#D6DAC8] p-4">
      <div className="bg-white p-8 rounded-lg shadow-lg w-full max-w-md">
        <h1 className="text-3xl font-bold mb-6 text-center text-[#9CAFAA]">
          Login
        </h1>
        <form className="space-y-4" onSubmit={handleSubmit}>
          {/* Email */}
          <div>
            <label className="block mb-1 font-medium text-gray-700">
              Email
            </label>
            <input
              type="email"
              placeholder="you@example.com"
              className="w-full p-3 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-[#9CAFAA]"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
            />
          </div>

          {/* Password */}
          <div className="relative">
            <label className="block mb-1 font-medium text-gray-700">
              Password
            </label>
            <input
              type={showPassword ? "text" : "password"}
              placeholder="********"
              className="w-full p-3 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-[#9CAFAA] pr-10"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
            />
            {/* Funny Eye Icon */}
            <button
              type="button"
              className="absolute top-13 right-2 -translate-y-1/2 text-gray-600 hover:text-gray-900"
              onClick={() => setShowPassword(!showPassword)}
            >
              {showPassword ? (
                <EyeOff size={22} title="Hide password" />
              ) : (
                <Eye size={22} title="Show password" />
              )}
            </button>
          </div>

          {/* Submit */}
          <button
            type="submit"
            className="w-full bg-[#9CAFAA] text-white font-semibold py-3 rounded-md hover:bg-[#8aa08e] transition"
          >
            Login
          </button>
        </form>

        <p className="mt-4 text-center text-gray-600 text-sm">
          Don't have an account?{" "}
          <a href="/register" className="text-[#9CAFAA] hover:underline">
            Register
          </a>
        </p>
      </div>
    </div>
  );
};

export default Login;
