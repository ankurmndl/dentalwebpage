'use client';

import { motion } from 'framer-motion';
import Image from 'next/image';

export default function HomePage() {
  return (
    <main className="min-h-screen bg-white text-gray-900">
      
      {/* --- Hero Section --- */}
      {/* ...Your existing Hero Section code here... */}

      {/* --- About Section --- */}
      <section className="py-20 px-4 bg-teal-50">
        <div className="max-w-6xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-10 items-center">
          
          {/* Image (optional) */}
          <motion.div
            initial={{ opacity: 0, x: -40 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, ease: 'easeOut' }}
            viewport={{ once: true }}
            className="flex justify-center"
          >
            <Image
              src="/images/dr-arunima.jpg"
              alt="Dr. Arunima Mukherjee"
              width={350}
              height={350}
              className="rounded-xl shadow-lg object-cover"
            />
          </motion.div>

          {/* Text */}
          <motion.div
            initial={{ opacity: 0, x: 40 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, ease: 'easeOut' }}
            viewport={{ once: true }}
            className="text-center md:text-left"
          >
            <h2 className="text-3xl md:text-4xl font-bold text-teal-900 mb-4">
              Meet Dr. Arunima Mukherjee
            </h2>
            <p className="text-lg text-gray-700 mb-6 leading-relaxed">
              With over a decade of experience in cosmetic and implant dentistry, Dr. Arunima blends advanced clinical skill with a passion for compassionate care. She believes every smile is personal — and every patient deserves the best.
            </p>
            <a
              href="/about" 
              className="inline-block bg-teal-600 hover:bg-teal-700 text-white px-5 py-3 rounded-lg text-base shadow transition"
            >
              Learn More About Her
            </a>
          </motion.div>

        </div>
      </section>

    </main>
  );
}
