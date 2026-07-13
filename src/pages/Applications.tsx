import { motion } from 'framer-motion';
import { CheckCircle2, XCircle, Search, GitCompare, FileText } from 'lucide-react';

const Applications = () => {
  const fadeInUp = {
    initial: { opacity: 0, y: 60 },
    whileInView: { opacity: 1, y: 0 },
    viewport: { once: true },
    transition: { duration: 0.7 },
  };

  const useCases = [
    {
      icon: Search,
      title: 'Internal Design Audits',
      description:
        'Systematically evaluate the structural characteristics of your own digital systems. Identify inconsistencies, document organizational patterns, and build institutional knowledge about design decisions.',
    },
    {
      icon: GitCompare,
      title: 'Comparative Structural Analysis',
      description:
        'Compare structural approaches across multiple systems, versions, or implementations. Understand how different architectural choices impact information organization and user navigation.',
    },
    {
      icon: FileText,
      title: 'Documentation of System Architecture',
      description:
        'Create comprehensive structural documentation using standardized vocabulary. Support design handoffs, regulatory filings, or internal knowledge management with consistent, objective descriptions.',
    },
  ];

  const nonApplications = [
    {
      title: 'Certification',
      description:
        'Axis Framework does not certify systems or award compliance badges. It provides descriptive analysis, not validation.',
    },
    {
      title: 'Compliance Determination',
      description:
        'The framework does not assess whether systems meet regulatory requirements or legal standards.',
    },
    {
      title: 'Consumer Guidance',
      description:
        'Axis Framework is not intended to guide consumer choices or provide public-facing quality assessments.',
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
              APPLICATIONS
            </span>
          </div>

          <h1 className="text-5xl lg:text-6xl font-bold text-white mb-8 leading-tight">
            Framework Applications
          </h1>

          <p className="text-xl text-stone-400 leading-relaxed">
            Understanding where Axis Framework adds value—and where it does not apply.
          </p>
        </motion.div>

        <div className="mt-20 space-y-24">
          <motion.section {...fadeInUp}>
            <div className="flex items-start gap-4 mb-12">
              <div className="p-3 bg-cyan-400/10 rounded-lg">
                <CheckCircle2 className="text-cyan-400" size={28} />
              </div>
              <div>
                <h2 className="text-3xl font-bold text-white mb-4">Intended Use Cases</h2>
                <div className="w-20 h-1 bg-gradient-to-r from-cyan-400 to-cyan-600" />
              </div>
            </div>

            <p className="text-lg text-stone-300 leading-relaxed mb-10 pl-16">
              Axis Framework is designed to support internal organizational needs for structural
              understanding and documentation. Its primary applications involve analysis,
              comparison, and documentation activities conducted by design teams, product
              organizations, and governance functions.
            </p>

            <div className="grid gap-8 pl-16">
              {useCases.map((useCase, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: index * 0.15 }}
                  className="group relative"
                >
                  <div className="absolute left-0 top-0 bottom-0 w-1 bg-gradient-to-b from-cyan-400 to-cyan-600 rounded-full opacity-0 group-hover:opacity-100 transition-opacity" />

                  <div className="pl-8 p-6 bg-charcoal-light rounded-xl border border-white/10 hover:border-cyan-400/30 transition-all duration-300">
                    <div className="flex items-start gap-4 mb-4">
                      <div className="p-2 bg-cyan-400/10 rounded-lg">
                        <useCase.icon className="text-cyan-400" size={24} />
                      </div>
                      <h3 className="text-xl font-bold text-white group-hover:text-cyan-400 transition-colors">
                        {useCase.title}
                      </h3>
                    </div>
                    <p className="text-stone-400 leading-relaxed">{useCase.description}</p>
                  </div>
                </motion.div>
              ))}
            </div>

            <div className="mt-12 p-8 bg-charcoal-light rounded-xl border border-white/10 pl-16">
              <h3 className="text-lg font-semibold text-white mb-3">
                Common Organizational Contexts:
              </h3>
              <ul className="space-y-3 text-stone-300">
                {[
                  'Product teams seeking to understand their own structural decisions',
                  'Design organizations building institutional design principles',
                  'Regulatory affairs teams documenting system characteristics',
                  'Engineering teams comparing architectural approaches',
                ].map((item, index) => (
                  <li key={index} className="flex items-start gap-3">
                    <div className="mt-2 w-1.5 h-1.5 rounded-full bg-cyan-400 flex-shrink-0" />
                    <span>{item}</span>
                  </li>
                ))}
              </ul>
            </div>
          </motion.section>

          <motion.section {...fadeInUp}>
            <div className="flex items-start gap-4 mb-12">
              <div className="p-3 bg-cyan-400/10 rounded-lg">
                <XCircle className="text-cyan-400" size={28} />
              </div>
              <div>
                <h2 className="text-3xl font-bold text-white mb-4">Non-Applications</h2>
                <div className="w-20 h-1 bg-gradient-to-r from-cyan-400 to-cyan-600" />
              </div>
            </div>

            <p className="text-lg text-stone-300 leading-relaxed mb-10 pl-16">
              It is equally important to understand what Axis Framework is not designed to do.
              The following applications fall outside the framework's intended scope:
            </p>

            <div className="space-y-6 pl-16">
              {nonApplications.map((item, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, x: -20 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: index * 0.1 }}
                  className="p-6 bg-charcoal-light rounded-xl border border-white/10"
                >
                  <div className="flex items-start gap-3 mb-3">
                    <XCircle className="text-stone-500 flex-shrink-0 mt-0.5" size={20} />
                    <h3 className="text-xl font-semibold text-white">{item.title}</h3>
                  </div>
                  <p className="text-stone-400 leading-relaxed pl-8">{item.description}</p>
                </motion.div>
              ))}
            </div>

            <div className="mt-12 p-8 bg-gradient-to-br from-charcoal-light to-charcoal-dark rounded-2xl border border-cyan-400/30 pl-16">
              <p className="text-lg text-cyan-400 font-semibold mb-4">Critical Distinction</p>
              <p className="text-lg text-stone-300 leading-relaxed">
                Axis Framework observes and documents structure—it does not judge quality,
                validate compliance, or make recommendations. Organizations seeking certification,
                compliance validation, or prescriptive design guidance should look to other
                frameworks and methodologies specifically designed for those purposes.
              </p>
            </div>
          </motion.section>
        </div>
      </div>
    </div>
  );
};

export default Applications;
