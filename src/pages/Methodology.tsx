import { motion } from 'framer-motion';
import { Settings, ArrowRight, FileOutput, Database } from 'lucide-react';

const Methodology = () => {
  const fadeInUp = {
    initial: { opacity: 0, y: 60 },
    whileInView: { opacity: 1, y: 0 },
    viewport: { once: true },
    transition: { duration: 0.7 },
  };

  const inputs = [
    {
      title: 'Interface Observation',
      description:
        'Systematic examination of user interface elements, their organization, and presentation patterns.',
    },
    {
      title: 'Flow Mapping',
      description:
        'Documentation of user pathways, decision points, and the sequence of interactions within the system.',
    },
    {
      title: 'Structural Documentation',
      description:
        'Analysis of existing system documentation, architecture diagrams, and design specifications.',
    },
  ];

  const outputs = [
    {
      title: 'Structural Mappings',
      description:
        'Visual and textual representations of how system components are organized and related.',
    },
    {
      title: 'Domain-Level Observations',
      description:
        'Detailed findings organized by the four structural domains, using standardized descriptors.',
    },
    {
      title: 'Comparative Documentation',
      description:
        'Structured records that enable comparison across different systems or system versions.',
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
              METHODOLOGY
            </span>
          </div>

          <h1 className="text-5xl lg:text-6xl font-bold text-white mb-8 leading-tight">
            Evaluation Methodology
          </h1>

          <p className="text-xl text-stone-400 leading-relaxed">
            A systematic, process-driven approach to structural evaluation.
          </p>
        </motion.div>

        <div className="mt-20 space-y-24">
          <motion.section {...fadeInUp}>
            <div className="flex items-start gap-4 mb-8">
              <div className="p-3 bg-cyan-400/10 rounded-lg">
                <Settings className="text-cyan-400" size={28} />
              </div>
              <div>
                <h2 className="text-3xl font-bold text-white mb-4">Evaluation Model</h2>
                <div className="w-20 h-1 bg-gradient-to-r from-cyan-400 to-cyan-600" />
              </div>
            </div>

            <div className="space-y-6 text-lg text-stone-300 leading-relaxed pl-16">
              <p>
                Axis Framework applies a layered evaluation model based on the four defined
                structural domains. Each domain is assessed independently, ensuring that
                observations remain focused and systematic.
              </p>
              <p>
                The methodology emphasizes objectivity and consistency. Evaluators document what
                they observe using standardized descriptors, avoiding subjective interpretations
                or normative judgments.
              </p>

              <div className="mt-10 grid md:grid-cols-3 gap-6">
                {[
                  { step: '01', label: 'Observe', detail: 'Document structural characteristics' },
                  {
                    step: '02',
                    label: 'Classify',
                    detail: 'Organize findings by domain',
                  },
                  {
                    step: '03',
                    label: 'Document',
                    detail: 'Record using standard descriptors',
                  },
                ].map((item, index) => (
                  <motion.div
                    key={index}
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ delay: index * 0.15 }}
                    className="p-6 bg-charcoal-light rounded-xl border border-white/10"
                  >
                    <div className="text-4xl font-bold text-cyan-400/30 mb-3">
                      {item.step}
                    </div>
                    <h4 className="text-lg font-semibold text-white mb-2">{item.label}</h4>
                    <p className="text-stone-400 text-sm">{item.detail}</p>
                  </motion.div>
                ))}
              </div>
            </div>
          </motion.section>

          <motion.section {...fadeInUp}>
            <div className="flex items-start gap-4 mb-8">
              <div className="p-3 bg-cyan-400/10 rounded-lg">
                <Database className="text-cyan-400" size={28} />
              </div>
              <div>
                <h2 className="text-3xl font-bold text-white mb-4">Inputs</h2>
                <div className="w-20 h-1 bg-gradient-to-r from-cyan-400 to-cyan-600" />
              </div>
            </div>

            <div className="pl-16">
              <p className="text-lg text-stone-300 leading-relaxed mb-8">
                Framework evaluations may draw from various sources of structural information.
                The methodology does not require user testing, behavioral data, or performance
                metrics.
              </p>

              <div className="space-y-4">
                {inputs.map((input, index) => (
                  <motion.div
                    key={index}
                    initial={{ opacity: 0, x: -20 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    viewport={{ once: true }}
                    transition={{ delay: index * 0.1 }}
                    className="group p-6 bg-charcoal-light rounded-xl border border-white/10 hover:border-cyan-400/30 transition-all duration-300"
                  >
                    <div className="flex items-start justify-between">
                      <div className="flex-1">
                        <h4 className="text-lg font-semibold text-white mb-2 group-hover:text-cyan-400 transition-colors">
                          {input.title}
                        </h4>
                        <p className="text-stone-400 leading-relaxed">{input.description}</p>
                      </div>
                      <ArrowRight className="text-cyan-400 opacity-0 group-hover:opacity-100 transition-opacity flex-shrink-0 ml-4 mt-1" size={20} />
                    </div>
                  </motion.div>
                ))}
              </div>

              <div className="mt-8 p-6 bg-charcoal-light rounded-xl border border-white/10">
                <p className="text-stone-300">
                  <span className="font-semibold text-white">Important:</span> No user testing or
                  behavioral inference is required. Axis Framework focuses exclusively on
                  observable structural characteristics.
                </p>
              </div>
            </div>
          </motion.section>

          <motion.section {...fadeInUp}>
            <div className="flex items-start gap-4 mb-8">
              <div className="p-3 bg-cyan-400/10 rounded-lg">
                <FileOutput className="text-cyan-400" size={28} />
              </div>
              <div>
                <h2 className="text-3xl font-bold text-white mb-4">Outputs</h2>
                <div className="w-20 h-1 bg-gradient-to-r from-cyan-400 to-cyan-600" />
              </div>
            </div>

            <div className="pl-16">
              <p className="text-lg text-stone-300 leading-relaxed mb-8">
                Framework application produces structured documentation that can support internal
                analysis, design discussions, and comparative evaluation.
              </p>

              <div className="space-y-4">
                {outputs.map((output, index) => (
                  <motion.div
                    key={index}
                    initial={{ opacity: 0, x: -20 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    viewport={{ once: true }}
                    transition={{ delay: index * 0.1 }}
                    className="p-6 bg-charcoal-light rounded-xl border border-white/10"
                  >
                    <h4 className="text-lg font-semibold text-white mb-2">{output.title}</h4>
                    <p className="text-stone-400 leading-relaxed">{output.description}</p>
                  </motion.div>
                ))}
              </div>

              <div className="mt-10 p-8 bg-gradient-to-br from-charcoal-light to-charcoal-dark rounded-2xl border border-cyan-400/30">
                <p className="text-xl text-cyan-400 font-semibold mb-4">
                  No Scores or Rankings
                </p>
                <p className="text-lg text-stone-300 leading-relaxed">
                  Axis Framework does not generate scores, ratings, or rankings. Outputs are
                  descriptive and analytical, designed to support understanding rather than
                  comparative judgment.
                </p>
              </div>
            </div>
          </motion.section>
        </div>
      </div>
    </div>
  );
};

export default Methodology;
