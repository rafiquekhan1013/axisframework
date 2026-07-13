import { motion } from 'framer-motion';
import { Shield, GitBranch, Archive, RefreshCw } from 'lucide-react';

const Governance = () => {
  const fadeInUp = {
    initial: { opacity: 0, y: 60 },
    whileInView: { opacity: 1, y: 0 },
    viewport: { once: true },
    transition: { duration: 0.7 },
  };

  const principles = [
    {
      title: 'Consistency',
      description:
        'Definitions and evaluation criteria remain stable, ensuring that structural assessments are comparable over time.',
    },
    {
      title: 'Transparency',
      description:
        'All framework changes are documented and versioned, with clear explanations of modifications to domains or descriptors.',
    },
    {
      title: 'Independence',
      description:
        'The framework is maintained independently from commercial interests or advocacy positions.',
    },
    {
      title: 'Clarity',
      description:
        'Framework language is precise and unambiguous, avoiding subjective or interpretive terminology.',
    },
  ];

  return (
    <div className="min-h-screen pt-32 pb-24">
      <div className="max-w-5xl mx-auto px-6 lg:px-12">
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
        >
          <div className="mb-6">
            <span className="inline-block px-4 py-2 bg-cyan-400/10 border border-cyan-400/20 rounded-full text-cyan-400 text-sm font-medium tracking-wide">
              GOVERNANCE
            </span>
          </div>

          <h1 className="text-5xl lg:text-6xl font-bold text-white mb-8 leading-tight">
            Framework Governance
          </h1>

          <p className="text-xl text-stone-400 leading-relaxed">
            How Axis Framework is maintained, updated, and evolved over time.
          </p>
        </motion.div>

        <div className="mt-20 space-y-24">
          <motion.section {...fadeInUp}>
            <div className="flex items-start gap-4 mb-8">
              <div className="p-3 bg-cyan-400/10 rounded-lg">
                <Shield className="text-cyan-400" size={28} />
              </div>
              <div>
                <h2 className="text-3xl font-bold text-white mb-4">
                  Maintenance and Oversight
                </h2>
                <div className="w-20 h-1 bg-gradient-to-r from-cyan-400 to-cyan-600" />
              </div>
            </div>

            <div className="space-y-6 text-lg text-stone-300 leading-relaxed pl-16">
              <p>
                Axis Framework is maintained as a controlled reference model. This means that
                all definitions, domain descriptions, and evaluation criteria are subject to
                formal review processes designed to preserve the framework's internal consistency
                and analytical utility.
              </p>
              <p>
                The framework's governance structure prioritizes stability while allowing for
                refinement based on practical application experience. Changes are deliberate,
                documented, and versioned to ensure continuity for organizations using the
                framework over extended periods.
              </p>

              <div className="mt-10 grid md:grid-cols-2 gap-6">
                {principles.map((principle, index) => (
                  <motion.div
                    key={index}
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ delay: index * 0.1 }}
                    className="p-6 bg-charcoal-light rounded-xl border border-white/10 hover:border-cyan-400/30 transition-all duration-300"
                  >
                    <h4 className="text-lg font-semibold text-white mb-3">
                      {principle.title}
                    </h4>
                    <p className="text-stone-400 text-sm leading-relaxed">
                      {principle.description}
                    </p>
                  </motion.div>
                ))}
              </div>
            </div>
          </motion.section>

          <motion.section {...fadeInUp}>
            <div className="flex items-start gap-4 mb-8">
              <div className="p-3 bg-cyan-400/10 rounded-lg">
                <RefreshCw className="text-cyan-400" size={28} />
              </div>
              <div>
                <h2 className="text-3xl font-bold text-white mb-4">Review Process</h2>
                <div className="w-20 h-1 bg-gradient-to-r from-cyan-400 to-cyan-600" />
              </div>
            </div>

            <div className="pl-16">
              <p className="text-lg text-stone-300 leading-relaxed mb-10">
                Framework definitions and domain descriptions are periodically reviewed to
                maintain internal consistency, clarity, and practical applicability. The review
                process examines whether terminology remains precise, whether domain boundaries
                are clear, and whether the framework continues to serve its intended analytical
                purpose.
              </p>

              <div className="space-y-6">
                <h3 className="text-xl font-semibold text-white">Review Triggers:</h3>

                <div className="space-y-4">
                  {[
                    {
                      label: 'Scheduled Reviews',
                      detail:
                        'Periodic examination of all framework elements on a defined cadence.',
                    },
                    {
                      label: 'Definitional Ambiguity',
                      detail:
                        'When practical application reveals unclear or contradictory definitions.',
                    },
                    {
                      label: 'Domain Overlap',
                      detail:
                        'If evaluation criteria begin to blur boundaries between structural domains.',
                    },
                    {
                      label: 'Terminology Evolution',
                      detail:
                        'When industry language shifts in ways that affect framework clarity.',
                    },
                  ].map((item, index) => (
                    <motion.div
                      key={index}
                      initial={{ opacity: 0, x: -20 }}
                      whileInView={{ opacity: 1, x: 0 }}
                      viewport={{ once: true }}
                      transition={{ delay: index * 0.1 }}
                      className="flex items-start gap-4 p-4 bg-charcoal-light rounded-lg border border-white/10"
                    >
                      <div className="mt-1.5 w-2 h-2 rounded-full bg-cyan-400 flex-shrink-0" />
                      <div>
                        <h4 className="font-semibold text-white mb-1">{item.label}</h4>
                        <p className="text-stone-400 text-sm">{item.detail}</p>
                      </div>
                    </motion.div>
                  ))}
                </div>
              </div>

              <div className="mt-10 p-6 bg-charcoal-light rounded-xl border border-white/10">
                <p className="text-stone-300 leading-relaxed">
                  <span className="font-semibold text-white">Important:</span> Reviews focus on
                  improving clarity and consistency, not on expanding scope or adding normative
                  elements. The framework's descriptive, non-prescriptive nature is a core
                  principle that remains constant.
                </p>
              </div>
            </div>
          </motion.section>

          <motion.section {...fadeInUp}>
            <div className="flex items-start gap-4 mb-8">
              <div className="p-3 bg-cyan-400/10 rounded-lg">
                <GitBranch className="text-cyan-400" size={28} />
              </div>
              <div>
                <h2 className="text-3xl font-bold text-white mb-4">Change Management</h2>
                <div className="w-20 h-1 bg-gradient-to-r from-cyan-400 to-cyan-600" />
              </div>
            </div>

            <div className="pl-16">
              <p className="text-lg text-stone-300 leading-relaxed mb-10">
                All updates to the framework are versioned and documented. Each version clearly
                identifies what has changed, why the change was made, and how it affects existing
                evaluations or documentation.
              </p>

              <div className="space-y-6">
                <div className="p-6 bg-charcoal-light rounded-xl border border-white/10">
                  <h4 className="text-lg font-semibold text-white mb-4">
                    Version Documentation Includes:
                  </h4>
                  <ul className="space-y-3 text-stone-300">
                    {[
                      'Specific changes to definitions or domain descriptions',
                      'Rationale for each modification',
                      'Impact assessment on existing framework applications',
                      'Effective date and transition guidance',
                      'Cross-references to superseded definitions',
                    ].map((item, index) => (
                      <li key={index} className="flex items-start gap-3">
                        <div className="mt-2 w-1.5 h-1.5 rounded-full bg-cyan-400 flex-shrink-0" />
                        <span>{item}</span>
                      </li>
                    ))}
                  </ul>
                </div>

                <div className="p-8 bg-gradient-to-br from-charcoal-light to-charcoal-dark rounded-2xl border border-cyan-400/30">
                  <div className="flex items-start gap-4">
                    <Archive className="text-cyan-400 flex-shrink-0 mt-1" size={24} />
                    <div>
                      <h4 className="text-xl font-semibold text-cyan-400 mb-3">
                        Historical Versions
                      </h4>
                      <p className="text-stone-300 leading-relaxed">
                        Historical versions of the framework remain accessible for reference.
                        Organizations that have conducted evaluations using previous versions can
                        continue to reference the definitions and criteria that were in effect at
                        the time of their analysis.
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </motion.section>

          <motion.div
            {...fadeInUp}
            className="p-8 lg:p-12 bg-charcoal-light rounded-2xl border border-white/10"
          >
            <h3 className="text-2xl font-bold text-white mb-6 text-center">
              Governance Commitment
            </h3>
            <p className="text-lg text-stone-300 leading-relaxed text-center max-w-3xl mx-auto">
              Axis Framework's governance structure exists to preserve its analytical utility over
              time. By maintaining consistency, documenting changes, and remaining independent,
              the framework serves as a reliable reference model for structural evaluation across
              diverse organizational contexts.
            </p>
          </motion.div>
        </div>
      </div>
    </div>
  );
};

export default Governance;
