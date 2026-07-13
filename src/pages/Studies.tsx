import PopupModal from "../components/PopupModal";
import { useAuth } from "../hooks/useAuth";

const Studies = () => {
  const { isAuthenticated } = useAuth();
  return (
    <div className="min-h-screen pt-32 pb-24">
      <div className="max-w-6xl mx-auto px-6 lg:px-12">
        {!isAuthenticated && <PopupModal />}
        <header className="mb-12">
          <h1 className="text-3xl font-bold text-white mb-2">Active Studies</h1>
        </header>
      </div>
    </div>
  );
};

export default Studies;
