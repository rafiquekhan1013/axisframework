import { Link, useNavigate } from "react-router-dom";
import { useUserForgotPasswordMutation } from "../services/auth.service";
import { useState } from "react";

export default function ForgotPassword() {
  const [forgotPassword] = useUserForgotPasswordMutation();
  const [isSuccess, setIsSuccess] = useState(false);
  const [isError, setIsError] = useState(false);
  const navigate = useNavigate();

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    setIsError(false);
    e.preventDefault();
    const data = new FormData(e.currentTarget);
    const email = data.get("email") as string;
    try {
      const siteName = import.meta.env.VITE_SITE_NAME;
      await forgotPassword({
        email,
        ...(siteName && { siteName }),
      }).unwrap();
      setIsSuccess(true);
      setTimeout(() => navigate("/"), 3000);
    } catch {
      setIsError(true);
    }
  };

  return (
    <section className="py-8">
      <div className="text-center mb-8">
        <h1 className="text-3xl font-bold text-white mb-2">Forgot Password</h1>
        <div className="h-1 w-16 bg-cyan-400 rounded-full mx-auto mb-4" />
        <p className="text-stone-300">Enter your email to receive a reset link.</p>
      </div>
      <div className="bg-charcoal-light border border-white/10 rounded-2xl p-8 max-w-md mx-auto">
        <form onSubmit={handleSubmit} className="space-y-4">
          <div>
            <label htmlFor="email" className="block text-sm font-medium text-stone-300 mb-1">Email</label>
            <input id="email" type="email" name="email" placeholder="Email" maxLength={256} required className="w-full px-4 py-3 border border-white/10 rounded-lg bg-charcoal text-white placeholder-stone-500 focus:border-cyan-400 focus:ring-2 focus:ring-cyan-400/20 outline-none transition-all" />
          </div>
          <button type="submit" className="w-full px-5 py-3 text-sm font-semibold rounded-lg text-charcoal bg-cyan-400 hover:bg-cyan-500 transition-colors">Send reset link</button>
        </form>
        {isSuccess && <div className="mt-4 p-4 rounded-lg bg-cyan-400/10 border border-cyan-400/20"><p className="text-sm text-cyan-400">We have sent a reset password link to your email.</p></div>}
        {isError && <div className="mt-4 p-4 rounded-lg bg-amber-500/10 border border-amber-500/20"><p className="text-sm text-amber-400">Invalid user, please try with correct entry.</p></div>}
      </div>
      <p className="text-center mt-6 text-stone-400 text-sm"><Link to="/" className="text-cyan-400 font-medium hover:text-cyan-300">Back to Home</Link></p>
    </section>
  );
}
