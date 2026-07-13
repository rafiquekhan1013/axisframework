import { Link, useNavigate, useParams } from "react-router-dom";
import { useUserResetPasswordMutation } from "../../services/auth.service";
import { useState, useEffect } from "react";

export default function ResetPassword() {
  const { token } = useParams<{ token: string }>();
  const navigate = useNavigate();
  const [userResetPassword] = useUserResetPasswordMutation();
  const [isSuccess, setIsSuccess] = useState(false);
  const [isError, setIsError] = useState(false);
  const [error, setError] = useState("");
  const [data, setData] = useState({ password: "", cpassword: "" });

  useEffect(() => {
    if (!token) navigate("/");
  }, [token, navigate]);

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setData((prev) => ({ ...prev, [e.target.name]: e.target.value }));
  };

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    setIsError(false);
    setError("");
    e.preventDefault();
    if (data.password !== data.cpassword) {
      setIsError(true);
      setError("Passwords do not match.");
      return;
    }
    const formData = new FormData(e.currentTarget);
    const password = formData.get("password") as string;
    try {
      await userResetPassword({ token, password }).unwrap();
      setIsSuccess(true);
      setTimeout(() => navigate("/"), 3000);
    } catch (err: unknown) {
      setIsError(true);
      setError((err as { data?: { message?: string } })?.data?.message ?? "Invalid link.");
    }
  };

  if (!token) return null;

  return (
    <section className="py-8">
      <div className="text-center mb-8">
        <h1 className="text-3xl font-bold text-white mb-2">Password Reset</h1>
        <div className="h-1 w-16 bg-cyan-400 rounded-full mx-auto mb-4" />
        <p className="text-stone-300">Create a new password.</p>
      </div>
      <div className="bg-charcoal-light border border-white/10 rounded-2xl p-8 max-w-md mx-auto">
        <form onSubmit={handleSubmit} className="space-y-4">
          <div>
            <label htmlFor="password" className="block text-sm font-medium text-stone-300 mb-1">New password</label>
            <input id="password" type="password" name="password" placeholder="Password" maxLength={256} required onChange={handleInputChange} className="w-full px-4 py-3 border border-white/10 rounded-lg bg-charcoal text-white placeholder-stone-500 focus:border-cyan-400 focus:ring-2 focus:ring-cyan-400/20 outline-none transition-all" />
          </div>
          <div>
            <label htmlFor="cpassword" className="block text-sm font-medium text-stone-300 mb-1">Confirm password</label>
            <input id="cpassword" type="password" name="cpassword" placeholder="Confirm password" maxLength={256} required onChange={handleInputChange} className="w-full px-4 py-3 border border-white/10 rounded-lg bg-charcoal text-white placeholder-stone-500 focus:border-cyan-400 focus:ring-2 focus:ring-cyan-400/20 outline-none transition-all" />
          </div>
          <button type="submit" className="w-full px-5 py-3 text-sm font-semibold rounded-lg text-charcoal bg-cyan-400 hover:bg-cyan-500 transition-colors">Save</button>
        </form>
        {isSuccess && <div className="mt-4 p-4 rounded-lg bg-cyan-400/10 border border-cyan-400/20"><p className="text-sm text-cyan-400">Password reset. You can log in with your new password.</p></div>}
        {isError && <div className="mt-4 p-4 rounded-lg bg-amber-500/10 border border-amber-500/20"><p className="text-sm text-amber-400">{error}</p></div>}
      </div>
      <p className="text-center mt-6 text-sm"><Link to="/" className="text-cyan-400 font-medium hover:text-cyan-300">Back to Home</Link></p>
    </section>
  );
}
