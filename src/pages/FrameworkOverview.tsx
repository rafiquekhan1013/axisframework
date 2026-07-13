import { motion } from 'framer-motion';
import { CheckCircle, XCircle, FileText } from 'lucide-react';

const FrameworkOverview = () => {
  const fadeInUp = {
    initial: { opacity: 0, y: 60 },
    whileInView: { opacity: 1, y: 0 },
    viewport: { once: true },
    transition: { duration: 0.7 },
  };

  const scopeItems = [
    'Regulated digital platforms',
    'Policy-constrained interfaces',
    'Systems with layered user permissions',
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
              OVERVIEW
            </span>
          </div>

          <h1 className="text-5xl lg:text-6xl font-bold text-white mb-8 leading-tight">
            Framework Overview
          </h1>

          <p className="text-xl text-stone-400 leading-relaxed">
            A comprehensive understanding of Axis Framework's purpose, scope, and positioning.
          </p>
        </motion.div>

        <div className="mt-20 space-y-24">
          <motion.section {...fadeInUp}>
            <div className="flex items-start gap-4 mb-8">
              <div className="p-3 bg-cyan-400/10 rounded-lg">
                <FileText className="text-cyan-400" size={28} />
              </div>
              <div>
                <h2 className="text-3xl font-bold text-white mb-4">Purpose</h2>
                <div className="w-20 h-1 bg-gradient-to-r from-cyan-400 to-cyan-600" />
              </div>
            </div>

            <div className="space-y-6 text-lg text-stone-300 leading-relaxed pl-16">
              <p>
                Axis Framework exists to provide a common structural lens for analyzing complex
                digital systems. It establishes a standardized vocabulary and evaluation approach
                for examining how systems are organized, layered, and presented to users.
              </p>
              <p>
                The framework is intended to support internal evaluation, comparison, and
                documentation of system design choices. It provides a consistent methodology for
                assessing structural decisions without imposing prescriptive solutions.
              </p>
              <div className="mt-8 p-6 bg-charcoal-light rounded-xl border border-white/10">
                <p className="text-cyan-400 font-medium">
                  Key Principle: Axis Framework enables organizations to systematically understand
                  and document their structural choices in regulated environments.
                </p>
              </div>
            </div>
          </motion.section>

          <motion.section {...fadeInUp}>
            <div className="flex items-start gap-4 mb-8">
              <div className="p-3 bg-cyan-400/10 rounded-lg">
                <CheckCircle className="text-cyan-400" size={28} />
              </div>
              <div>
                <h2 className="text-3xl font-bold text-white mb-4">Scope</h2>
                <div className="w-20 h-1 bg-gradient-to-r from-cyan-400 to-cyan-600" />
              </div>
            </div>

            <div className="pl-16">
              <p className="text-lg text-stone-300 leading-relaxed mb-8">
                The framework applies to digital systems operating under regulatory, policy, or
                governance constraints. It is particularly relevant for environments where
                structural clarity directly impacts user understanding and decision-making.
              </p>

              <div className="space-y-4">
                <h3 className="text-xl font-semibold text-white mb-4">
                  Applicable System Types:
                </h3>
                {scopeItems.map((item, index) => (
                  <motion.div
                    key={index}
                    initial={{ opacity: 0, x: -20 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    viewport={{ once: true }}
                    transition={{ delay: index * 0.1 }}
                    className="flex items-start gap-3 p-4 bg-charcoal-light rounded-lg border border-white/10"
                  >
                    <div className="mt-1 w-2 h-2 rounded-full bg-cyan-400 flex-shrink-0" />
                    <p className="text-stone-300">{item}</p>
                  </motion.div>
                ))}
              </div>

              <div className="mt-10 p-6 bg-charcoal-light rounded-xl border border-white/10">
                <p className="text-lg text-stone-300">
                  <span className="font-semibold text-white">Important:</span> Axis Framework does
                  not prescribe design solutions. It provides a structured approach to evaluating
                  and documenting what exists.
                </p>
              </div>
            </div>
          </motion.section>

          <motion.section {...fadeInUp}>
            <div className="flex items-start gap-4 mb-8">
              <div className="p-3 bg-cyan-400/10 rounded-lg">
                <XCircle className="text-cyan-400" size={28} />
              </div>
              <div>
                <h2 className="text-3xl font-bold text-white mb-4">Neutral Positioning</h2>
                <div className="w-20 h-1 bg-gradient-to-r from-cyan-400 to-cyan-600" />
              </div>
            </div>

            <div className="pl-16 space-y-8">
              <div className="p-8 bg-gradient-to-br from-charcoal-light to-charcoal-dark rounded-2xl border border-cyan-400/30">
                <p className="text-xl text-cyan-400 font-semibold mb-4">
                  Axis Framework is descriptive, not normative.
                </p>
                <p className="text-lg text-stone-300 leading-relaxed">
                  It does not assert best practices or optimal outcomes. The framework observes and
                  documents structural characteristics without making value judgments about their
                  effectiveness.
                </p>
              </div>

              <div className="space-y-4">
                <h3 className="text-xl font-semibold text-white">What Axis Framework Does Not Do:</h3>
                <div className="grid gap-4">
                  {[
                    'Evaluate performance or outcomes',
                    'Assess compliance with regulations',
                    'Recommend specific design patterns',
                    'Certify or validate systems',
                    'Make normative judgments about quality',
                  ].map((item, index) => (
                    <motion.div
                      key={index}
                      initial={{ opacity: 0, x: -20 }}
                      whileInView={{ opacity: 1, x: 0 }}
                      viewport={{ once: true }}
                      transition={{ delay: index * 0.1 }}
                      className="flex items-start gap-3 p-4 bg-charcoal-light rounded-lg border border-white/10"
                    >
                      <XCircle className="text-stone-500 flex-shrink-0 mt-0.5" size={20} />
                      <p className="text-stone-300">{item}</p>
                    </motion.div>
                  ))}
                </div>
              </div>

              <div className="mt-10 p-6 bg-charcoal-light rounded-xl border border-white/10">
                <p className="text-stone-300 leading-relaxed">
                  This neutral stance ensures that Axis Framework remains a useful analytical tool
                  across diverse contexts and organizational requirements, without imposing
                  external value systems or design philosophies.
                </p>
              </div>
            </div>
          </motion.section>
        </div>
      </div>
    </div>
  );
};

export default FrameworkOverview;
