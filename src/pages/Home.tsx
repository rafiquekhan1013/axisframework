import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';
import { ArrowRight, Grid3x3, LayoutGrid, Target, Layers } from 'lucide-react';

const Home = () => {
  const fadeInUp = {
    initial: { opacity: 0, y: 60 },
    whileInView: { opacity: 1, y: 0 },
    viewport: { once: true },
    transition: { duration: 0.7 },
  };

  const staggerChildren = {
    initial: { opacity: 0 },
    whileInView: { opacity: 1 },
    viewport: { once: true },
    transition: { staggerChildren: 0.2 },
  };

  const focusAreas = [
    {
      icon: Grid3x3,
      title: 'Information Architecture',
      description: 'How information is categorized, layered, and accessed within complex systems.',
    },
    {
      icon: Target,
      title: 'Control Placement',
      description: 'Strategic positioning of user controls within system flows and decision points.',
    },
    {
      icon: LayoutGrid,
      title: 'Structural Clarity',
      description: 'The degree to which system structure can be inferred and understood by users.',
    },
    {
      icon: Layers,
      title: 'Contextual Presentation',
      description: 'How information and controls are presented relative to user intent and context.',
    },
  ];

  return (
    <div className="min-h-screen">
      <section className="relative pt-32 pb-24 lg:pt-40 lg:pb-32 overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-b from-cyan-400/5 via-transparent to-transparent" />

        <div className="max-w-7xl mx-auto px-6 lg:px-12 relative">
          <motion.div
            initial={{ opacity: 0, y: 40 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="max-w-5xl"
          >
            <motion.div
              initial={{ opacity: 0, scale: 0.9 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.6, delay: 0.2 }}
              className="inline-block mb-6 px-4 py-2 bg-cyan-400/10 border border-cyan-400/20 rounded-full"
            >
              <span className="text-cyan-400 text-sm font-medium tracking-wide">
                STRUCTURAL EVALUATION FRAMEWORK
              </span>
            </motion.div>

            <h1 className="text-5xl lg:text-7xl font-bold mb-8 leading-tight">
              <span className="block text-white mb-2">
                A structural framework
              </span>
              <span className="block gradient-text">
                for evaluating regulated
              </span>
              <span className="block gradient-text">
                digital systems
              </span>
            </h1>

            <p className="text-xl lg:text-2xl text-stone-300 mb-12 leading-relaxed max-w-3xl">
              Axis Framework defines a structured approach to assessing how information, controls,
              and user interactions are organized within regulated digital environments.
            </p>

            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.6 }}
              className="flex flex-col sm:flex-row gap-4"
            >
              <Link
                to="/framework"
                className="group inline-flex items-center justify-center px-8 py-4 bg-cyan-400 text-charcoal font-semibold rounded-lg hover:bg-cyan-500 transition-all duration-300 hover:shadow-lg hover:shadow-cyan-400/25"
              >
                Explore Framework
                <ArrowRight className="ml-2 group-hover:translate-x-1 transition-transform" size={20} />
              </Link>
              <Link
                to="/domains"
                className="inline-flex items-center justify-center px-8 py-4 bg-white/5 text-white font-semibold rounded-lg hover:bg-white/10 border border-white/10 transition-all duration-300"
              >
                View Domains
              </Link>
            </motion.div>
          </motion.div>
        </div>

        <div className="absolute bottom-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-cyan-400/50 to-transparent" />
      </section>

      <section className="py-24 lg:py-32">
        <div className="max-w-7xl mx-auto px-6 lg:px-12">
          <motion.div {...fadeInUp} className="max-w-4xl mb-20">
            <h2 className="text-3xl lg:text-4xl font-bold text-white mb-8 leading-tight">
              A reference model for structural clarity
            </h2>
            <div className="space-y-6 text-lg text-stone-300 leading-relaxed">
              <p>
                Axis Framework is a reference model designed to evaluate structural clarity across
                digital systems operating under regulatory or policy constraints.
              </p>
              <p>
                The framework examines how information is layered, how controls are positioned, and
                how context is presented to users at critical decision points.
              </p>
              <p className="text-cyan-400 font-medium">
                Axis does not evaluate performance, outcomes, or compliance. It evaluates structure.
              </p>
            </div>
          </motion.div>

          <motion.div
            {...staggerChildren}
            className="grid md:grid-cols-2 gap-8"
          >
            {focusAreas.map((area, index) => (
              <motion.div
                key={index}
                {...fadeInUp}
                transition={{ delay: index * 0.1 }}
                whileHover={{ y: -8 }}
                className="group relative p-8 bg-charcoal-light rounded-2xl border border-white/10 hover:border-cyan-400/50 transition-all duration-300"
              >
                <div className="absolute top-0 left-0 w-full h-1 bg-gradient-to-r from-cyan-400 to-cyan-600 rounded-t-2xl opacity-0 group-hover:opacity-100 transition-opacity" />

                <div className="mb-6 inline-flex p-3 bg-cyan-400/10 rounded-lg">
                  <area.icon size={28} className="text-cyan-400" />
                </div>

                <h3 className="text-xl font-bold text-white mb-3">
                  {area.title}
                </h3>

                <p className="text-stone-400 leading-relaxed">
                  {area.description}
                </p>
              </motion.div>
            ))}
          </motion.div>

          <motion.div
            {...fadeInUp}
            className="mt-16 p-8 lg:p-12 bg-gradient-to-br from-charcoal-light to-charcoal-dark rounded-2xl border border-white/10"
          >
            <p className="text-lg text-stone-300 leading-relaxed text-center max-w-3xl mx-auto">
              Each area is defined independently and assessed within a standardized model,
              providing a consistent lens for analyzing complex digital systems.
            </p>
          </motion.div>
        </div>
      </section>

      <section className="py-24 lg:py-32 bg-charcoal-light">
        <div className="max-w-7xl mx-auto px-6 lg:px-12">
          <motion.div
            {...fadeInUp}
            className="max-w-3xl mx-auto text-center"
          >
            <h2 className="text-3xl lg:text-4xl font-bold text-white mb-6">
              Ready to explore the framework?
            </h2>
            <p className="text-xl text-stone-300 mb-10">
              Discover how Axis Framework can support your internal evaluation and documentation needs.
            </p>
            <Link
              to="/framework"
              className="inline-flex items-center justify-center px-8 py-4 bg-cyan-400 text-charcoal font-semibold rounded-lg hover:bg-cyan-500 transition-all duration-300 hover:shadow-lg hover:shadow-cyan-400/25"
            >
              Get Started
              <ArrowRight className="ml-2" size={20} />
            </Link>
          </motion.div>
        </div>
      </section>
    </div>
  );
};

export default Home;
