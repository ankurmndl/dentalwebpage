// 'use client';

// import { motion } from 'framer-motion';
// import Image from 'next/image';

// export default function HeroSection() {
//   return (
//     <section className="py-20 px-4 bg-teal-50">
//       <div className="max-w-6xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-10 items-center">
        
//         {/* Image */}
//         <motion.div
//           initial={{ opacity: 0, x: -40 }}
//           whileInView={{ opacity: 1, x: 0 }}
//           transition={{ duration: 0.8, ease: 'easeOut' }}
//           viewport={{ once: true }}
//           className="flex justify-center"
//         >
//           <Image
//             src="/images/dr-arunima.jpg"
//             alt="Dr. Arunima Mukherjee"
//             width={350}
//             height={350}
//             className="rounded-xl shadow-lg object-cover"
//           />
//         </motion.div>

//         {/* Text */}
//         <motion.div
//           initial={{ opacity: 0, x: 40 }}
//           whileInView={{ opacity: 1, x: 0 }}
//           transition={{ duration: 0.8, ease: 'easeOut' }}
//           viewport={{ once: true }}
//           className="text-center md:text-left"
//         >
//           <h2 className="text-3xl md:text-4xl font-bold text-teal-900 mb-4">
//             Meet Dr. Arunima Mukherjee
//           </h2>
//           <p className="text-lg text-gray-700 mb-6 leading-relaxed">
//             With over a decade of experience in cosmetic and implant dentistry, Dr. Arunima blends advanced clinical skill with a passion for compassionate care. She believes every smile is personal — and every patient deserves the best.
//           </p>
//           <a
//             href="/about"
//             className="inline-block bg-teal-600 hover:bg-teal-700 text-white px-5 py-3 rounded-lg text-base shadow transition"
//           >
//             Learn More About Her
//           </a>
//         </motion.div>

//       </div>
//     </section>
//   );
// }

'use client';

import { motion } from 'framer-motion';
import Image from 'next/image';
import Link from 'next/link';


export default function HeroSection() {
  return (
    <section className="relative w-full py-24 flex items-center justify-center bg-gradient-to-br from-white via-teal-50 to-white px-4">
      <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-7xl items-center">
        
        {/* Text Content with slide-up animation */}
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, ease: 'easeOut' }}
          className="z-10 text-center md:text-left"
        >
          <h1 className="text-4xl md:text-5xl font-bold leading-tight text-gray-900 mb-4">
            Cosmetic & Implant Dentistry<br />with a Human Touch
          </h1>
          <p className="text-lg md:text-xl text-gray-600 mb-6">
            20+ years of creating beautiful, confident smiles
          </p>
          <div className="flex justify-center md:justify-start gap-4">
            <Link
              href="/contact"
              className="bg-teal-600 hover:bg-teal-700 text-white px-6 py-3 rounded-lg text-lg shadow transition"
            >
              Book Appointment
            </Link>
            <Link
              href="/services"
              className="text-teal-700 border border-teal-600 px-6 py-3 rounded-lg text-lg hover:bg-teal-50 transition"
            >
              View Services
            </Link>
          </div>
        </motion.div>

        {/* Doctor Image with zoom-in animation */}
        <motion.div
          initial={{ opacity: 0, scale: 0.9 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.8, ease: 'easeOut', delay: 0.2 }}
          className="relative w-full h-80 md:h-96 flex justify-center"
        >
          <Image
            src="/images/dr-arunima.jpg"
            alt="Dr. Arunima Mukherjee"
            width={400}
            height={400}
            className="rounded-2xl object-cover shadow-lg"
            priority={false}
          />
        </motion.div>
      </div>
    </section>
  );
}

