import { useState } from "react";
import SignupComponent from "./SignupComponent";
import LoginComponent from "./LoginComponent";

export default function PopupModal(props: { code?: string }) {
  const [isSignup, setIsSignup] = useState(true);
  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center bg-black/60 backdrop-blur-sm">
      <div className="relative bg-charcoal-light border border-white/10 rounded-2xl shadow-2xl max-w-md w-full mx-4 max-h-[90vh] overflow-y-auto p-8">
        {isSignup ? <SignupComponent code={props.code} /> : <LoginComponent />}
        <div className="mt-6 text-center text-sm text-stone-400">
          {isSignup ? (
            <span>Already have an account? <button type="button" className="text-cyan-400 font-semibold hover:text-cyan-300 ml-1" onClick={() => setIsSignup(false)}>Log In</button></span>
          ) : (
            <span>Don&apos;t have an account? <button type="button" className="text-cyan-400 font-semibold hover:text-cyan-300 ml-1" onClick={() => setIsSignup(true)}>Sign Up</button></span>
          )}
        </div>
      </div>
    </div>
  );
}
