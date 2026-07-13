import { useState } from "react";
import { useUserUpdatePasswordMutation } from "../../services/surveyApi";

export default function Account() {
  const [userUpdatePassword] = useUserUpdatePasswordMutation();
  const [isSuccess, setIsSuccess] = useState(false);
  const [isError, setIsError] = useState(false);
  const [error, setError] = useState("");
  const [data, setData] = useState({ password: "", cpassword: "" });

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;
    setData((prev) => ({ ...prev, [name]: value }));
  };

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    setIsError(false);
    setError("");
    e.preventDefault();
    if (data.password !== data.cpassword) {
      setIsError(true);
      setError("Passwords don't match.");
      return;
    }
    const formData = new FormData(e.currentTarget);
    const old_password = formData.get("oldPassword") as string;
    const new_password = formData.get("password") as string;
    try {
      await userUpdatePassword({ old_password, new_password }).unwrap();
      setIsSuccess(true);
    } catch (err: unknown) {
      setIsError(true);
      setError((err as { data?: { message?: string } })?.data?.message ?? "Something went wrong, please try later.");
    }
  };

  return (
    <section className="py-8 mt  mt-10 flex flex-col items-center">
      <div className="mb-8 text-center">
        <h1 className="text-3xl font-bold text-white mb-2">Manage Your Account</h1>
        <div className="h-1 w-24 bg-cyan-400 rounded-full mb-4 mx-auto" />
        <p className="text-stone-300">Update your account password below.</p>
      </div>
      <div className="bg-charcoal-light border border-white/10 rounded-2xl p-8 max-w-xl w-full">
        <h2 className="text-xl font-semibold text-white mb-4">Change password</h2>
        <form onSubmit={handleSubmit} className="space-y-4">
          <div>
            <label htmlFor="oldPassword" className="block text-sm font-medium text-stone-300 mb-1">Current password</label>
            <input id="oldPassword" type="password" name="oldPassword" placeholder="Current password" maxLength={256} required className="w-full px-4 py-3 border border-white/10 rounded-lg bg-charcoal text-white placeholder-stone-500 focus:border-cyan-400 focus:ring-2 focus:ring-cyan-400/20 outline-none transition-all" />
          </div>
          <div>
            <label htmlFor="password" className="block text-sm font-medium text-stone-300 mb-1">New password</label>
            <input id="password" type="password" name="password" placeholder="New password" maxLength={256} required onChange={handleInputChange} className="w-full px-4 py-3 border border-white/10 rounded-lg bg-charcoal text-white placeholder-stone-500 focus:border-cyan-400 focus:ring-2 focus:ring-cyan-400/20 outline-none transition-all" />
          </div>
          <div>
            <label htmlFor="cpassword" className="block text-sm font-medium text-stone-300 mb-1">Confirm new password</label>
            <input id="cpassword" type="password" name="cpassword" placeholder="Confirm new password" maxLength={256} required onChange={handleInputChange} className="w-full px-4 py-3 border border-white/10 rounded-lg bg-charcoal text-white placeholder-stone-500 focus:border-cyan-400 focus:ring-2 focus:ring-cyan-400/20 outline-none transition-all" />
          </div>
          <button type="submit" className="px-6 py-3 text-sm font-semibold rounded-lg text-charcoal bg-cyan-400 hover:bg-cyan-500 transition-colors">Save</button>
        </form>
        {isSuccess && <div className="mt-6 p-4 rounded-lg bg-cyan-400/10 border border-cyan-400/20"><p className="text-sm text-cyan-400">Your password has been updated.</p></div>}
        {isError && <div className="mt-6 p-4 rounded-lg bg-amber-500/10 border border-amber-500/20"><p className="text-sm text-amber-400">{error}</p></div>}
      </div>
    </section>
  );
}
