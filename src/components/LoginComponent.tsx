import { useState } from "react";
import { Link, useLocation } from "react-router-dom";
import { useUserLoginMutation } from "../services/auth.service";
import { storageService } from "../services/storage.service";
import { generateFingerprint } from "../utils/fingerprint";

const inputClass = "w-full px-4 py-3 border border-white/10 rounded-xl bg-charcoal text-white placeholder-stone-500 focus:border-cyan-400 focus:ring-2 focus:ring-cyan-400/20 outline-none transition-all";

export default function LoginComponent() {
  const location = useLocation();
  const [userLogin] = useUserLoginMutation();
  const [isError, setIsError] = useState(false);
  const [error, setError] = useState("");

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    setIsError(false);
    setError("");
    e.preventDefault();
    const data = new FormData(e.currentTarget);
    const email = data.get("email") as string;
    const password = data.get("password") as string;
    try {
      const siteName = import.meta.env.VITE_SITE_NAME;
      const fingerprint = await generateFingerprint().catch(() => undefined);
      const resp = await userLogin({
        email,
        password,
        ...(siteName && { siteName }),
        ...(fingerprint && { fingerprint }),
      }).unwrap();
      const baSlug = (resp.data as { clientBa?: { slug?: string } })?.clientBa?.slug ?? "studies";
      if (resp.Authorization) storageService.setAccessToken(resp.Authorization);
      if (baSlug !== "studies") storageService.setBaSlug(baSlug);
      if (location.pathname === "/login") {
        setTimeout(() => { window.location.href = `/${baSlug}`; }, 3000);
      } else if (location.pathname === "/studies") {
        window.location.href = `${window.location.origin}/${baSlug}`;
      } else {
        if(location.pathname === "/survey") {
          window.location.reload();
        }else{
          window.location.href = `${window.location.origin}/${baSlug}`;
        }
      }
    } catch (e: unknown) {
      setError((e as { data?: { message?: string } })?.data?.message ?? "Login failed.");
      setIsError(true);
    }
  };

  return (
    <div className="max-w-sm mx-auto">
      <div className="mb-8 text-center">
        <h1 className="text-2xl font-bold text-white mb-2">Log In</h1>
        <div className="h-1 w-16 bg-cyan-400 rounded-full mx-auto mb-4" />
        <p className="text-stone-400">Login to explore</p>
      </div>
      <form onSubmit={handleSubmit} className="space-y-4">
        <input type="email" className={inputClass} maxLength={256} name="email" placeholder="Email" required />
        <input type="password" className={inputClass} maxLength={256} name="password" placeholder="Password" required />
        <input type="submit" value="Log In" className="w-full px-5 py-3 text-sm font-semibold rounded-xl text-charcoal bg-cyan-400 hover:bg-cyan-500 cursor-pointer" />
        <div className="text-center">
          <Link to="/forgot-password" className="text-sm font-medium text-cyan-400 hover:text-cyan-300">Forgot password?</Link>
        </div>
      </form>
      {isError && <div className="mt-4 p-3 rounded-lg bg-amber-500/10 border border-amber-500/20"><p className="text-sm text-amber-400">{error}</p></div>}
    </div>
  );
}
