import { motion } from 'framer-motion';
import { Grid3x3, Target, LayoutGrid, Layers } from 'lucide-react';

const StructuralDomains = () => {
  const fadeInUp = {
    initial: { opacity: 0, y: 60 },
    whileInView: { opacity: 1, y: 0 },
    viewport: { once: true },
    transition: { duration: 0.7 },
  };

  const domains = [
    {
      icon: Grid3x3,
      title: 'Information Architecture',
      subtitle: 'Evaluation of how information is categorized, layered, and accessed',
      description:
        'Information architecture examines the organizational structure of content and data within a system. This domain focuses on understanding how information is grouped, how hierarchies are constructed, and how users navigate through different levels of detail.',
      includes: [
        {
          term: 'Hierarchy Depth',
          definition:
            'The number of levels in the information structure and whether depth supports or impedes user comprehension.',
        },
        {
          term: 'Label Consistency',
          definition:
            'Whether terminology, naming conventions, and categorizations remain consistent across contexts.',
        },
        {
          term: 'Progressive Disclosure Patterns',
          definition:
            'How information is revealed incrementally, balancing initial simplicity with access to detail.',
        },
      ],
      color: 'cyan',
    },
    {
      icon: Target,
      title: 'Control Placement',
      subtitle: 'Assessment of where user controls are located within system flows',
      description:
        'Control placement analyzes the strategic positioning of interactive elements that enable user actions. This domain examines whether controls appear where users expect them, whether they are sufficiently visible, and how primary and secondary actions are distinguished.',
      includes: [
        {
          term: 'Proximity to Decision Points',
          definition:
            'Whether controls appear near the information or context needed to make informed decisions.',
        },
        {
          term: 'Visibility Across Contexts',
          definition:
            'How consistently controls are positioned and whether they remain accessible as users navigate through different system states.',
        },
        {
          term: 'Separation of Primary and Secondary Controls',
          definition:
            'The visual and spatial distinction between high-frequency actions and supporting functions.',
        },
      ],
      color: 'cyan',
    },
    {
      icon: LayoutGrid,
      title: 'Structural Clarity',
      subtitle: 'Examination of how clearly system structure can be inferred by users',
      description:
        'Structural clarity assesses how easily users can develop an accurate mental model of the system. This domain examines whether the underlying organization is transparent, whether navigation is predictable, and whether cognitive load is minimized through consistent patterns.',
      includes: [
        {
          term: 'Predictability of Navigation',
          definition:
            'Whether users can anticipate where actions will lead them and how to return to previous contexts.',
        },
        {
          term: 'Consistency Across Modules',
          definition:
            'The degree to which different parts of the system follow similar structural patterns and interaction models.',
        },
        {
          term: 'Reduction of Cognitive Overhead',
          definition:
            'How effectively the system minimizes the mental effort required to understand options and consequences.',
        },
      ],
      color: 'cyan',
    },
    {
      icon: Layers,
      title: 'Contextual Presentation',
      subtitle: 'Analysis of how information and controls are presented relative to user intent',
      description:
        'Contextual presentation examines how systems adapt what they display based on user context, current task, and decision requirements. This domain focuses on timing, relevance, and the provision of appropriate contextual cues.',
      includes: [
        {
          term: 'Timing of Disclosures',
          definition:
            'Whether information appears when users need it, neither prematurely burdening them nor withheld until too late.',
        },
        {
          term: 'Contextual Cues',
          definition:
            'Visual, textual, or interactive signals that help users understand their current state and available options.',
        },
        {
          term: 'Dependency Signaling',
          definition:
            'How clearly the system communicates relationships, prerequisites, and consequences of actions.',
        },
      ],
      color: 'cyan',
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
              STRUCTURAL DOMAINS
            </span>
          </div>

          <h1 className="text-5xl lg:text-6xl font-bold text-white mb-8 leading-tight">
            The Four Structural Domains
          </h1>

          <p className="text-xl text-stone-400 leading-relaxed">
            Axis Framework is built upon four independent domains, each providing a distinct lens
            for structural evaluation.
          </p>
        </motion.div>

        <div className="mt-20 space-y-20">
          {domains.map((domain, index) => (
            <motion.section
              key={index}
              {...fadeInUp}
              transition={{ delay: index * 0.1 }}
            >
              <div className="relative">
                <div className="absolute left-0 top-0 bottom-0 w-1 bg-gradient-to-b from-cyan-400 via-cyan-500 to-cyan-600 rounded-full" />

                <div className="pl-12">
                  <div className="flex items-start gap-4 mb-6">
                    <div className="p-3 bg-cyan-400/10 rounded-lg">
                      <domain.icon className="text-cyan-400" size={32} />
                    </div>
                    <div className="flex-1">
                      <h2 className="text-3xl font-bold text-white mb-2">
                        {domain.title}
                      </h2>
                      <p className="text-lg text-cyan-400">{domain.subtitle}</p>
                    </div>
                  </div>

                  <div className="space-y-8">
                    <p className="text-lg text-stone-300 leading-relaxed">
                      {domain.description}
                    </p>

                    <div>
                      <h3 className="text-xl font-semibold text-white mb-6">
                        Key Evaluation Criteria:
                      </h3>
                      <div className="space-y-4">
                        {domain.includes.map((item, idx) => (
                          <motion.div
                            key={idx}
                            initial={{ opacity: 0, x: -20 }}
                            whileInView={{ opacity: 1, x: 0 }}
                            viewport={{ once: true }}
                            transition={{ delay: idx * 0.1 }}
                            className="group p-6 bg-charcoal-light rounded-xl border border-white/10 hover:border-cyan-400/30 transition-all duration-300"
                          >
                            <h4 className="text-lg font-semibold text-white mb-2 group-hover:text-cyan-400 transition-colors">
                              {item.term}
                            </h4>
                            <p className="text-stone-400 leading-relaxed">
                              {item.definition}
                            </p>
                          </motion.div>
                        ))}
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </motion.section>
          ))}
        </div>

        <motion.div
          {...fadeInUp}
          className="mt-20 p-8 lg:p-12 bg-gradient-to-br from-charcoal-light to-charcoal-dark rounded-2xl border border-cyan-400/30"
        >
          <h3 className="text-2xl font-bold text-white mb-4">Independent Assessment</h3>
          <p className="text-lg text-stone-300 leading-relaxed">
            Each domain is evaluated independently using standardized descriptors and observation
            protocols. This separation ensures that structural evaluation remains focused and
            systematic, while allowing for comprehensive documentation across all four dimensions.
          </p>
        </motion.div>
      </div>
    </div>
  );
};

export default StructuralDomains;
