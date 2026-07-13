import { useState, useMemo } from "react";
import { useNavigate } from "react-router-dom";
import { CansList } from "../../components/cans/CansList";
import { StateDropdown, StateOption } from "../../components/StateDropdown";
import { useSiteLocation } from "../../hooks/useSiteLocation";
import { Types as typeOptions } from "../../types";
import { isRgSurveyPassed, markRgSurveyPassed } from "../../utils/rgSurvey";

interface ListProps {
  provider?: string;
  state?: string;
  type?: string;
  hasRgSurvey?: boolean;
  cans: any[];
  canStates?: { label?: string; slug?: string; type?: string }[];
  hasTypes?: boolean;
}

const getSiteDisplayName = () => {
  const site = (import.meta.env.VITE_DISPLAY_SITE_NAME || "") || "";
  return site as string;
};

const questions = [
  "Have you ever bet more than you could afford to lose?",
  "Have you ever felt the need to gamble with larger amounts of money to get the same excitement?",
  "Have you ever tried to win back money you lost by gambling more?",
  "Have you ever lied to people important to you about how much or how often you gamble?",
  "Have you ever felt unable to cut back or stop gambling, even when you wanted to?",
  "Has gambling ever caused you stress, anxiety, or conflict with family or friends?",
  "Have you ever missed work, school, or other responsibilities because of gambling?",
];

export default function List({
  provider,
  state,
  type,
  cans,
  hasRgSurvey,
  canStates = [],
  hasTypes = false,
}: ListProps) {
  const showSurvey = !!hasRgSurvey && !isRgSurveyPassed();
  const [activeStep, setActiveStep] = useState(0);
  const [answers, setAnswers] = useState<string[]>(Array(7).fill(""));
  const [content, setContent] = useState(!showSurvey);
  const [formContent, setformContent] = useState(showSurvey);
  const navigate = useNavigate();

  const { isUsLocation, locationFilter } = useSiteLocation();
  const filteredCanStates = useMemo(
    () =>
      canStates.filter(
        (s: { type?: string }) => (s as { type?: string }).type === locationFilter
      ),
    [canStates, locationFilter]
  );

  const handleStateSelect = (slug: string) => {
    if (!provider || !slug) return;
    const path = type ? `/${provider}/${slug}/${type}` : `/${provider}/${slug}`;
    navigate(path);
  };

  const handleTypeSelect = (e: React.ChangeEvent<HTMLSelectElement>) => {
    const newType = e.target.value;
    if (!provider || !state || !newType) return;
    navigate(`/${provider}/${state}/${newType}`);
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const updated = [...answers];
    updated[activeStep] = e.target.value;
    setAnswers(updated);
  };

  const handleSubmit = () => {
    if (answers.some((ans) => ans === "yes")) navigate("/support");
    else {
      markRgSurveyPassed();
      setContent(true);
      setformContent(false);
    }
  };

  const inputClass = "w-4 h-4 text-cyan-400 border-stone-600 bg-charcoal focus:ring-cyan-400";
  const btnClass = "px-5 py-2.5 text-sm font-semibold rounded-lg text-charcoal bg-cyan-400 hover:bg-cyan-500 disabled:opacity-50";

  return (
    <>
      {formContent && (
        <div className="mb-8 py-32 md:py-32">
          <div className="max-w-[900px] mx-auto mt-6 p-6 border border-white/10 rounded-xl bg-charcoal-light">
            {activeStep === 0 && (
              <>
                <h4 className="text-2xl font-bold text-white mb-4"><span className="text-cyan-400">Before You</span> Continue…</h4>
                <p className="text-stone-300 mb-2">At {getSiteDisplayName()}, we believe gambling should always be fun, safe, and positive.</p>
                <p className="text-stone-300 mb-2">Before we recommend any casino or sportsbook offers, we invite you to complete a quick 7-part questionnaire about your past experiences on betting sites.</p>
                <p className="text-stone-300 mb-2">It takes less than 30 seconds, and helps us better understand gambling behaviours so we can support safer play — and improve how responsible gambling is approached across the industry.</p>
                <p className="text-stone-300">Please answer each question honestly. Your responses help inform responsible gambling insights in North America.</p>
              </>
            )}
            <p className="text-lg font-semibold text-white mt-6 mb-2">Step {activeStep + 1} of 7</p>
            <p className="text-base font-semibold text-stone-200 mb-4">{questions[activeStep]}</p>
            <div className="flex flex-col gap-2 mb-6">
              <label className="flex items-center gap-2 cursor-pointer text-stone-300">
                <input type="radio" name={"q-" + activeStep} value="yes" checked={answers[activeStep] === "yes"} onChange={handleChange} className={inputClass} />
                Yes
              </label>
              <label className="flex items-center gap-2 cursor-pointer text-stone-300">
                <input type="radio" name={"q-" + activeStep} value="no" checked={answers[activeStep] === "no"} onChange={handleChange} className={inputClass} />
                No
              </label>
            </div>
            <div className="flex justify-between gap-4">
              <button type="button" onClick={() => setActiveStep((p) => Math.max(0, p - 1))} disabled={activeStep === 0} className="px-4 py-2.5 text-sm font-medium rounded-lg border border-white/10 text-stone-300 hover:bg-white/5 disabled:opacity-50">
                Back
              </button>
              {activeStep === questions.length - 1 ? (
                <button type="button" onClick={handleSubmit} disabled={!answers[activeStep]} className={btnClass}>Submit & Continue</button>
              ) : (
                <button type="button" onClick={() => setActiveStep((p) => p + 1)} disabled={!answers[activeStep]} className={btnClass}>Next</button>
              )}
            </div>
          </div>
        </div>
      )}
      {content && (
        <section className="py-32 md:py-32 border-b border-white/10">
          <div className="max-w-7xl mx-auto">
            <div className="text-center mb-12">
              <h2 className="text-2xl md:text-3xl font-bold text-white mb-6">Join The {getSiteDisplayName()} Study!</h2>
              <div className="h-1 w-24 bg-cyan-400 rounded-full mx-auto mb-6" />
              <p className="text-xl text-stone-300 max-w-2xl mx-auto">Select a study below to get started</p>
            </div>
            {isUsLocation && (filteredCanStates.length > 0 || hasTypes) && (
              <div className="flex flex-wrap justify-center items-end gap-4 mb-8">
                {filteredCanStates.length > 0 && (
                  <StateDropdown
                    noMargin
                    states={filteredCanStates as StateOption[]}
                    value={state ?? ""}
                    onSelect={handleStateSelect}
                    label="Your state"
                    placeholder="Select your state"
                    id="list-state-select"
                  />
                )}
                {hasTypes && (
                  <div className="min-w-[200px]">
                    <label htmlFor="list-type-select" className="block text-sm font-medium text-stone-300 mb-1">
                      Sportsbook or Casino
                    </label>
                    <select
                      id="list-type-select"
                      value={type ?? ""}
                      onChange={handleTypeSelect}
                      className="w-full px-4 py-3 border border-white/10 rounded-xl text-white bg-charcoal-light focus:border-cyan-400 focus:ring-2 focus:ring-cyan-400/20 outline-none"
                    >
                      <option value="">Select option</option>
                      {typeOptions.map((t) => (
                          <option key={t.slug} value={t.slug}>{t.label}</option>
                        ))}
                    </select>
                  </div>
                )}
              </div>
            )}
            <CansList type={type} state={state} cans={cans} />
          </div>
        </section>
      )}
    </>
  );
}
