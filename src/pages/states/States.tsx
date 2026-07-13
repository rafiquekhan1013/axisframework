import { useMemo, useState } from "react";
import { NavLink, useNavigate } from "react-router-dom";
import { StateDropdown, StateOption } from "../../components/StateDropdown";
import { useSiteLocation } from "../../hooks/useSiteLocation";
import { useGetProviderSingleQuery } from "../../services/provider.service";
import { CansList } from "../../components/cans/CansList";
import { Types as typeOptions } from "../../types";
import { isRgSurveyPassed, markRgSurveyPassed } from "../../utils/rgSurvey";

interface StatesProps {
  states: { label?: string; slug?: string; type?: string }[];
  provider: string;
  hasTypes?: boolean;
}

const getSiteDisplayName = () => {
  const site = (import.meta.env.VITE_DISPLAY_SITE_NAME || "") || "";
  return site as string;
};

const RG_QUESTIONS = [
  "Have you ever bet more than you could afford to lose?",
  "Have you ever felt the need to gamble with larger amounts of money to get the same excitement?",
  "Have you ever tried to win back money you lost by gambling more?",
  "Have you ever lied to people important to you about how much or how often you gamble?",
  "Have you ever felt unable to cut back or stop gambling, even when you wanted to?",
  "Has gambling ever caused you stress, anxiety, or conflict with family or friends?",
  "Have you ever missed work, school, or other responsibilities because of gambling?",
];

export default function States({ states, provider, hasTypes = false }: StatesProps) {
  const { isUsLocation, locationFilter } = useSiteLocation();
  const filteredStates = useMemo(
    () =>{
      const filtered = states.filter((item: { type?: string }) => item.type === locationFilter)

      return filtered.map((state => state.slug == 'ca' ? { ...state, label: 'Rest Of Canada' } : state));
    } ,
    [states, locationFilter]
  );
  const [selectedState, setSelectedState] = useState("");
  const [selectedType, setSelectedType] = useState("sports");
  const [rgActiveStep, setRgActiveStep] = useState(0);
  const [rgAnswers, setRgAnswers] = useState<string[]>(Array(7).fill(""));
  const [rgCompleted, setRgCompleted] = useState(isRgSurveyPassed());
  const navigate = useNavigate();

  const { data: providerData, isSuccess: providerDataSuccess } = useGetProviderSingleQuery(
    { slug: provider, state: selectedState || undefined, type: selectedType || undefined },
    { skip: !selectedState }
  );
  const cans = providerData?.cans ?? [];
  const hasRgSurvey = providerData?.hasRgSurvey ?? false;
  const showRgForm = selectedState && providerDataSuccess && hasRgSurvey && !rgCompleted;
  const showStudies = selectedState && providerDataSuccess && (!hasRgSurvey || rgCompleted);

  const handleStateSelect = (slug: string) => {
    if (isUsLocation) {
      setSelectedState(slug || "");
      setRgCompleted(isRgSurveyPassed());
    } else if (slug) navigate(`/${provider}/${slug}`);
  };
  const handleTypeSelect = (e: React.ChangeEvent<HTMLSelectElement>) => {
    const v = e.target.value;
    if (v) setSelectedType(v);
  };
  const handleRgChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const updated = [...rgAnswers];
    updated[rgActiveStep] = (e.target as HTMLInputElement).value;
    setRgAnswers(updated);
  };
  const handleRgSubmit = () => {
    if (rgAnswers.some((a) => a === "yes")) navigate("/support");
    else {
      markRgSurveyPassed();
      setRgCompleted(true);
    }
  };

  const typeOptionsFiltered = typeOptions;
  const inputClass = "w-4 h-4 text-cyan-400 border-stone-600 bg-charcoal focus:ring-cyan-400";
  const btnClass = "px-5 py-2.5 text-sm font-semibold rounded-lg text-charcoal bg-cyan-400 hover:bg-cyan-500 disabled:opacity-50";

  return (
    <div className="max-w-4xl mx-auto py-32">
      <div className="mb-12 text-center">
        <h1 className="text-3xl md:text-4xl font-light text-white mb-4">Where are you located?</h1>
        <div className="h-1 w-24 bg-cyan-400 rounded-full mx-auto mb-6" />
        <p className="text-xl text-stone-300">
          {isUsLocation ? "Select your state to see applicable studies." : "Choose your location."}
        </p>
      </div>
      <div className="text-center">
        {isUsLocation ? (
          <>
            <div className="flex flex-wrap justify-center items-end gap-4 mb-6">
                <StateDropdown focusOnMount noMargin states={filteredStates as StateOption[]} value={selectedState} onSelect={handleStateSelect} label="Select your state" placeholder="Select your state" id="states-state-select" />
                {selectedState && hasTypes && (
                  <div className="w-full min-w-[200px] max-w-[280px]">
                    <label htmlFor="states-type-select" className="block text-sm font-medium text-stone-300 mb-1">Sportsbook or Casino</label>
                    <select id="states-type-select" value={selectedType} onChange={handleTypeSelect} className="w-full px-4 py-3 border border-white/10 rounded-xl text-white bg-charcoal-light focus:border-cyan-400 outline-none">
                      {typeOptionsFiltered.map((t) => <option key={t.slug} value={t.slug}>{t.label}</option>)}
                    </select>
                  </div>
                )}
              </div>
            {showRgForm && (
              <div className="mb-8 text-left max-w-[900px] mx-auto mt-8">
                <div className="border border-cyan-400/20 rounded-xl p-6 bg-charcoal-light">
                  {rgActiveStep === 0 && (
                    <>
                      <h4 className="text-2xl font-bold text-white mb-4"><span className="text-cyan-400">Before You</span> Continue…</h4>
                      <p className="text-stone-300 mb-2">At {getSiteDisplayName()}, we believe gambling should always be fun, safe, and positive.</p>
                      <p className="text-stone-300 mb-2">Before we recommend any casino or sportsbook offers, we invite you to complete a quick 7-part questionnaire about your past experiences on betting sites.</p>
                      <p className="text-stone-300 mb-2">It takes less than 30 seconds, and helps us better understand gambling behaviours so we can support safer play.</p>
                      <p className="text-stone-300">Please answer each question honestly.</p>
                    </>
                  )}
                  <p className="text-lg font-semibold text-white mt-6 mb-2">Step {rgActiveStep + 1} of 7</p>
                  <p className="text-base font-semibold text-stone-200 mb-4">{RG_QUESTIONS[rgActiveStep]}</p>
                  <div className="flex flex-col gap-2 mb-6">
                    <label className="flex items-center gap-2 cursor-pointer text-stone-300">
                      <input type="radio" name="rg" value="yes" checked={rgAnswers[rgActiveStep] === "yes"} onChange={handleRgChange} className={inputClass} /> Yes
                    </label>
                    <label className="flex items-center gap-2 cursor-pointer text-stone-300">
                      <input type="radio" name="rg" value="no" checked={rgAnswers[rgActiveStep] === "no"} onChange={handleRgChange} className={inputClass} /> No
                    </label>
                  </div>
                  <div className="flex justify-between gap-4">
                    <button type="button" onClick={() => setRgActiveStep((p) => Math.max(0, p - 1))} disabled={rgActiveStep === 0} className="px-4 py-2.5 text-sm font-medium rounded-lg border border-cyan-400/30 text-cyan-200 hover:bg-cyan-400/10 disabled:opacity-50">Back</button>
                    {rgActiveStep === RG_QUESTIONS.length - 1 ? (
                      <button type="button" onClick={handleRgSubmit} disabled={!rgAnswers[rgActiveStep]} className={btnClass}>Submit & Continue</button>
                    ) : (
                      <button type="button" onClick={() => setRgActiveStep((p) => p + 1)} disabled={!rgAnswers[rgActiveStep]} className={btnClass}>Next</button>
                    )}
                  </div>
                </div>
              </div>
            )}
            {showStudies && (
              <section className="py-10 md:py-12 border-b border-white/10 -mx-4 md:-mx-8 px-4 md:px-8 mt-8 w-full">
                <div className="max-w-7xl mx-auto">
                  <div className="text-center mb-12">
                    <h2 className="text-2xl md:text-3xl font-bold text-white mb-6">Join The {getSiteDisplayName()} Study!</h2>
                    <div className="h-1 w-24 bg-cyan-400 rounded-full mx-auto mb-6" />
                    <p className="text-xl text-stone-300 max-w-2xl mx-auto">Select a study below to get started</p>
                  </div>
                  <CansList type={selectedType === "sports" ? "SPORTS" : "CASINO"} state={selectedState} cans={cans} />
                </div>
              </section>
            )}
          </>
        ) : (
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-2 gap-3">
            {filteredStates.map((state) => (
              <NavLink to={`/${provider}/${state.slug}`} key={state.slug} className="px-5 py-2.5 text-sm font-semibold tracking-wide rounded-xl text-charcoal bg-cyan-400 hover:bg-cyan-500 text-center transition-all">
                {state.label}
              </NavLink>
            ))}
          </div>
        )}
        <p className="text-center text-stone-500 text-sm mt-6">
          {filteredStates.length === 0 ? "Here is not any location available for this Brand Ambassador" : ""}
        </p>
      </div>
    </div>
  );
}
