const getSiteDisplayName = () => {
  const site = (import.meta.env.VITE_DISPLAY_SITE_NAME || "") || "";
  return site as string;
};

export default function Terms() {
  const siteName = getSiteDisplayName() || "Axis Framework";
  return (
    <div className="max-w-4xl mx-auto py-32" id="terms">
      <section className=" border-b-2 border-cyan-400/30 mb-12">
        <h1 className="mb-4 text-4xl text-white">Terms of Participation &amp; Research Conditions</h1>
        <div className="h-1 w-20 bg-cyan-400 mb-6"></div>
        <p className="text-xl text-stone-400 leading-relaxed">Effective Date: March 2, 2026</p>
      </section>
      <article className="space-y-6 text-stone-300 leading-relaxed">
        <p>{siteName} Research Inc. (&quot;{siteName}&quot;, &quot;we&quot;, &quot;us&quot;) is an independent standards and structural research organization. These Terms of Participation &amp; Research Conditions (the &quot;Agreement&quot;) govern your access to and participation in any {siteName} studies, evaluations, panels, or research programs (collectively, the &quot;Research Activities&quot;).</p>
        <p>By enrolling in or participating in any Research Activities, you acknowledge and agree to the terms below.</p>
        <p>{siteName} and the participant are each a &quot;Party&quot; and collectively the &quot;Parties.&quot;</p>

        <h2 className="text-xl font-semibold text-white mt-10 mb-4 first:mt-0">1. Organizational Purpose</h2>
        <h3 className="text-lg font-semibold text-white mt-6 mb-2">1.1 Research Mandate</h3>
        <p>{siteName} conducts independent research focused on structural standards, compliance presentation, interface architecture, user safeguards, governance transparency, and workflow integrity within regulated or age-restricted digital environments.</p>
        <p>Research may involve structured analysis of:</p>
        <ul>
          <li>Registration and identity verification sequencing</li>
          <li>Deposit and withdrawal system clarity</li>
          <li>Interface hierarchy and information disclosure</li>
          <li>Responsible-use tool visibility</li>
          <li>Control setting accessibility</li>
          <li>Communication of policies and limitations</li>
          <li>System reliability and user navigation</li>
        </ul>
        <p>Research findings may be aggregated, anonymized, synthesized, and used for analytical reporting purposes.</p>
        <h3 className="text-lg font-semibold text-white mt-6 mb-2">1.2 Non-Operational Status</h3>
        <p>{siteName} does not operate, manage, or facilitate wagering, gaming, betting, or financial services. It is not a casino, sportsbook, gambling operator, gaming platform, payment processor, or financial institution.</p>
        <p>{siteName} does not:</p>
        <ul>
          <li>Accept bets or wagers</li>
          <li>Hold user funds</li>
          <li>Process financial transactions</li>
          <li>Provide inducements or promotional offers</li>
        </ul>
        <h3 className="text-lg font-semibold text-white mt-6 mb-2">1.3 Excluded Scope</h3>
        <p>{siteName} Research Activities do not include evaluation or promotion of bonuses, incentives, inducements, marketing campaigns, or commercial offers.</p>

        <h2 className="text-xl font-semibold text-white mt-10 mb-4">2. Structural Independence</h2>
        <h3 className="text-lg font-semibold text-white mt-6 mb-2">2.1 No Ownership or Control</h3>
        <p>{siteName} is not owned by, affiliated with, partnered with, or controlled by any third-party platform reviewed as part of Research Activities.</p>
        <h3 className="text-lg font-semibold text-white mt-6 mb-2">2.2 No Performance-Based Compensation</h3>
        <p>{siteName} does not receive referral fees, commission payments, revenue share, or performance-based remuneration from platforms referenced in research.</p>

        <h2 className="text-xl font-semibold text-white mt-10 mb-4">3. Research Integrity &amp; Compliance Controls</h2>
        <p>{siteName} maintains commercially reasonable compliance systems, including:</p>
        <ul>
          <li>Age verification safeguards</li>
          <li>Ethical research protocols</li>
          <li>Structured methodology documentation</li>
          <li>Internal quality assurance controls</li>
        </ul>
        <p>These measures align with recognized professional research standards.</p>

        <h2 className="text-xl font-semibold text-white mt-10 mb-4">4. Compensation Parameters</h2>
        <p>If compensation is provided, it is issued solely in exchange for time spent providing structured feedback within Research Activities.</p>
        <p>Compensation is not contingent upon:</p>
        <ul>
          <li>Opening an account</li>
          <li>Depositing funds</li>
          <li>Placing wagers</li>
          <li>Engaging in commercial transactions</li>
          <li>Interacting with any third-party platform</li>
        </ul>
        <p>{siteName} retains discretion to determine compensation eligibility and may withhold payment for incomplete, inaccurate, misleading, or non-compliant submissions.</p>

        <h2 className="text-xl font-semibold text-white mt-10 mb-4">5. Confidential Research Materials</h2>
        <p>Participants may be exposed to non-public materials, structured evaluation frameworks, or internal methodologies.</p>
        <p>All such materials are confidential and may not be:</p>
        <ul>
          <li>Shared</li>
          <li>Distributed</li>
          <li>Reproduced</li>
          <li>Used outside the scope of participation</li>
        </ul>
        <p>Confidentiality obligations survive participation.</p>

        <h2 className="text-xl font-semibold text-white mt-10 mb-4">6. Ownership of Research Output</h2>
        <p>All research data, responses, structured evaluations, written submissions, analyses, and related intellectual property created through participation belong exclusively to {siteName}.</p>
        <p>Participants assign all rights, title, and interest in such materials to {siteName} and waive any applicable moral rights.</p>

        <h2 className="text-xl font-semibold text-white mt-10 mb-4">7. Participant Representations</h2>
        <p>By participating, you confirm:</p>
        <h3 className="text-lg font-semibold text-white mt-6 mb-2">7.1 Age Requirement</h3>
        <p>You are at least nineteen (19) years of age and legally capable of entering this Agreement.</p>
        <h3 className="text-lg font-semibold text-white mt-6 mb-2">7.2 Independent Capacity</h3>
        <p>You participate in a personal capacity only. No employment, agency, advisory, partnership, or fiduciary relationship is created.</p>
        <h3 className="text-lg font-semibold text-white mt-6 mb-2">7.3 Voluntary Engagement</h3>
        <p>Participation is voluntary. {siteName} does not require you to interact with third-party platforms or engage in gambling activity.</p>
        <h3 className="text-lg font-semibold text-white mt-6 mb-2">7.4 No Advisory Relationship</h3>
        <p>{siteName} does not provide financial, legal, investment, or gambling advice and makes no recommendations regarding third-party services.</p>

        <h2 className="text-xl font-semibold text-white mt-10 mb-4">8. Responsible Engagement Position</h2>
        <h3 className="text-lg font-semibold text-white mt-6 mb-2">8.1 Analytical Context</h3>
        <p>Research Activities are conducted solely for analytical purposes related to system transparency and governance evaluation. They are not intended to promote gambling activity.</p>
        <h3 className="text-lg font-semibold text-white mt-6 mb-2">8.2 Informational Resources</h3>
        <p>{siteName} may provide general information regarding responsible engagement and consumer protection tools where appropriate. Such information is educational only.</p>
        <h3 className="text-lg font-semibold text-white mt-6 mb-2">8.3 No Monitoring Obligation</h3>
        <p>{siteName} does not monitor participant behavior outside research activities and does not provide treatment, counseling, or intervention services.</p>

        <h2 className="text-xl font-semibold text-white mt-10 mb-4">9. Limitation of Liability</h2>
        <p>To the maximum extent permitted by law, {siteName} shall not be liable for indirect, incidental, special, consequential, or punitive damages arising from participation.</p>
        <p>{siteName}&apos;s total liability shall not exceed the total compensation paid to the participant, if any.</p>

        <h2 className="text-xl font-semibold text-white mt-10 mb-4">10. Indemnification</h2>
        <p>Participants agree to indemnify and hold harmless {siteName}, its officers, directors, employees, contractors, and affiliates from any claims arising out of:</p>
        <ul>
          <li>Participation in Research Activities</li>
          <li>Breach of this Agreement</li>
          <li>Misrepresentation by the participant</li>
          <li>Independent actions taken outside research scope</li>
        </ul>
        <p>This obligation survives termination.</p>

        <h2 className="text-xl font-semibold text-white mt-10 mb-4">11. Suspension or Removal</h2>
        <p>{siteName} may suspend, terminate, or disqualify participation at its discretion, including for non-compliance, misrepresentation, or conduct compromising research integrity.</p>
        <p>Unpaid compensation may be forfeited.</p>

        <h2 className="text-xl font-semibold text-white mt-10 mb-4">12. Data Handling and Privacy</h2>
        <p>{siteName} collects and processes personal information in accordance with applicable Canadian privacy laws, including PIPEDA.</p>
        <p>Research outputs may be anonymized and aggregated.</p>

        <h2 className="text-xl font-semibold text-white mt-10 mb-4">13. Entire Agreement</h2>
        <p>This Agreement constitutes the complete understanding between the Parties and supersedes prior agreements regarding participation.</p>

        <h2 className="text-xl font-semibold text-white mt-10 mb-4">14. Amendments</h2>
        <p>{siteName} may update this Agreement by posting revisions. Continued participation constitutes acceptance.</p>

        <h2 className="text-xl font-semibold text-white mt-10 mb-4">15. Assignment</h2>
        <p>{siteName} may assign this Agreement without consent. Participants may not assign their rights.</p>

        <h2 className="text-xl font-semibold text-white mt-10 mb-4">16. Force Majeure</h2>
        <p>{siteName} is not liable for delays or failures caused by events beyond reasonable control, including system failures, cyber incidents, governmental actions, or natural disasters.</p>

        <h2 className="text-xl font-semibold text-white mt-10 mb-4">17. Governing Law</h2>
        <p>This Agreement is governed by the laws of the Province of Ontario and the federal laws of Canada applicable therein.</p>
        <p>All disputes shall be resolved exclusively in the courts of Toronto, Ontario.</p>
      </article>
    </div>
  );
}
