import { motion } from 'framer-motion';
import { Link } from "react-router-dom";

const Footer = () => {
  return (
    <footer className="bg-charcoal-dark border-t border-white/10">
      <div className="max-w-7xl mx-auto px-6 lg:px-12 py-16">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="space-y-8"
        >
          <div className="flex flex-col md:flex-row md:items-center md:justify-between">
            <div className="mb-8 md:mb-0">
              <h3 className="text-2xl font-bold mb-2">
                <span className="text-white">AXIS</span>
                <span className="text-cyan-400 ml-2">FRAMEWORK</span>
              </h3>
              <p className="text-stone-400 text-sm max-w-md">
                A structural reference model for evaluating regulated digital systems.
              </p>
            </div>
          </div>

          <div className="border-t border-white/10 pt-8">
            <div className="flex flex-col md:flex-row md:items-center md:justify-between space-y-4 md:space-y-0">
              <p className="text-sm text-stone-500">
                The framework does not provide legal, regulatory, or compliance determinations.
              </p>
              <div className="flex items-center gap-6">
                <Link to="/terms" className="text-sm text-stone-500 hover:text-cyan-400 transition-colors">
                  Terms & Conditions
                </Link>
                <p className="text-sm text-stone-500">
                  © 2026 Axis Framework. All rights reserved.
                </p>
              </div>
            </div>
          </div>
        </motion.div>
      </div>
    </footer>
  );
};

export default Footer;
