// app/page.js (or src/app/page.js depending on your Next.js setup)
'use client';

import { motion } from 'framer-motion';
import Footer from './common/Footer';
import Navbar from './common/Navbar';


export default function DemoPage() {
  return (
    <main className="text-[#fef7f1] font-[Quicksand] min-h-screen flex flex-col">
      <Navbar />

      <motion.section
        initial={{ opacity: 0, y: 40 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.7, ease: 'easeOut' }}
        className="flex-grow flex flex-col justify-center items-center text-center px-6 py-32"
      >
        <h1 className="text-5xl md:text-6xl font-bold mb-6 leading-tight drop-shadow text-[#fef7f1]">
          This is a Demo Page
        </h1>
        <p className="text-lg md:text-xl text-white/70 max-w-xl mb-10">
          This one-pager exists to test <span className="text-[#e8ded1] font-medium">Plausible Analytics</span>. Interact, scroll, click — make it count.
        </p>
        <a
          href="#track-me"
          className="group relative px-6 py-3 rounded-full font-semibold text-[#3a2f2b] bg-[#e8ded1] transition-all duration-300 border border-transparent shadow-[0_0_40px_#ffffff33] hover:scale-105"
        >
          Trigger Some Tracking
        </a>
      </motion.section>

      <motion.section
        id="track-me"
        initial={{ opacity: 0, y: 50 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, amount: 0.3 }}
        transition={{ duration: 0.7, ease: 'easeOut' }}
        className="py-24 px-6 text-center max-w-2xl mx-auto"
      >
        <h2 className="text-3xl md:text-4xl font-bold mb-4">Tracking Zone</h2>
        <p className="text-white/70 mb-6">
          By viewing and interacting with this section, you’re generating analytics events.
        </p>
        <button
          onClick={() => console.log('Clicked tracking CTA')}
          className="mt-4 px-5 py-2 rounded-full bg-white/10 text-white hover:bg-white/20 transition"
        >
          Click Me Too
        </button>
      </motion.section>

      <Footer />
    </main>
  );
}
