
export const servicesArray = [
 
  {
    title: "Cosmetic Dentistry",
    slug: "cosmetic",
    description:
      "Discover the art of a confident smile with our advanced cosmetic dentistry services. From whitening to veneers, we combine precision, artistry, and technology to create smiles that look as good as they feel.",
    
    longDescription: `
      At our practice, we believe your smile should reflect the best version of you. 
      Our cosmetic dentistry services are designed to correct imperfections, enhance natural beauty, and give you a smile you can share with confidence.
      Using advanced technology and a personalized approach, Dr. Arunima blends dental science with artistry to deliver stunning, natural-looking results.
  
      **Why Choose Cosmetic Dentistry at Our Clinic**
  
      **Comprehensive Smile Enhancement**  
      Whether you want a subtle change or a complete smile makeover, we offer a wide range of treatments to address discoloration, chips, gaps, misalignment, and more.
  
      **Boosted Confidence & Self-Esteem**  
      A radiant smile can change how you feel about yourself. Many patients tell us they smile more often and feel more comfortable in social and professional settings.
  
      **Health Benefits Alongside Beauty**  
      Certain cosmetic procedures, like crowns, implants, and bonding, not only improve aesthetics but also restore strength and function to your teeth.
  
      **Tailored Treatment Plans**  
      No two smiles are the same. We listen to your goals, assess your needs, and create a fully customized plan to achieve your dream smile.
  
      **State-of-the-Art Techniques**  
      We use advanced materials and methods to ensure results that are durable, comfortable, and remarkably lifelike.
    `,
  
    image: "/images/services/cosmetic.webp",
  
    benefits: [
      "Brightens and rejuvenates your smile",
      "Boosts self-confidence in every interaction",
      "Improves dental function while enhancing aesthetics",
      "Long-lasting, natural-looking results",
      "Fully customized treatment plans for your unique smile"
    ],
  
    treatments: [
      {
        slug: "porcelain-veneers",
        name: "Porcelain Veneers",
        shortDescription:
          "Custom-crafted porcelain shells that cover the front of your teeth, correcting discoloration, gaps, and misalignment for a strong, beautiful smile.",
        fullDescription:
          "These custom-made shells cover the front surface of your teeth to correct imperfections such as discoloration, gaps, and misalignment. Porcelain veneers are designed to look and feel like natural teeth, providing a durable and aesthetically pleasing solution. They are stain-resistant, minimally invasive, and tailored to match your smile perfectly.",
        benefits: [
          "Brightens and rejuvenates your smile",
          "Boosts self-confidence in every interaction",
          "Improves dental function while enhancing aesthetics",
          "Long-lasting, natural-looking results",
          "Fully customized treatment plans for your unique smile"
        ],
        steps: [
          "Initial consultation and smile assessment",
          "Preparation of the teeth and impressions",
          "Custom veneer design and fabrication",
          "Precise fitting and bonding",
          "Final adjustments for comfort and appearance"
        ],
        image: "/images/services/veneers.jpg"
      },
      {
        // name: "Professional Teeth Whitening",
        // shortDescription:
        //   "Safely lifts deep stains for a dramatically brighter smile in one visit.",
        // benefits: [
        //   "Quick, noticeable results",
        //   "Safe for enamel",
        //   "Removes years of discoloration"
        // ]
          slug: "teeth-whitening",
          name: "Teeth Whitening",
          shortDescription:
            "Enhance your smile with professional teeth whitening treatments that brighten discolored or stained teeth for a radiant, confident appearance.",
          fullDescription:
            "Our advanced teeth whitening treatments help eliminate discoloration and stains caused by coffee, tea, smoking, and other lifestyle factors. The procedure is safe, minimally invasive, and tailored to your needs, providing noticeable results after just one session. Achieve a brighter, more youthful smile that boosts confidence and complements your overall appearance.",
          benefits: [
            "Removes stains and discoloration effectively",
            "Safe and minimally invasive procedure",
            "Quick and long-lasting results",
            "Boosts self-confidence and enhances appearance",
            "Custom treatment plans to meet your needs"
          ],
          steps: [
            "Comprehensive dental assessment",
            "Teeth cleaning to remove surface debris",
            "Application of whitening gel with protective measures",
            "Use of specialized light or laser for optimal results",
            "Post-treatment care and follow-up guidance"
          ],
          image: "/images/services/whitening.webp"        
      },
      {
        name: "Dental Bonding",
        shortDescription:
          "Repairs chips, cracks, or gaps with tooth-colored resin in a single visit.",
        benefits: [
          "Minimally invasive",
          "Immediate results",
          "Affordable cosmetic fix"
        ]
      },
      // {
      //   name: "Dental Implants",
      //   slug: "Dental Implants",
      //   shortDescription:
      //     "Permanent, natural-looking replacement for missing teeth.",
      //   benefits: [
      //     "Restores appearance and chewing function",
      //     "Prevents bone loss",
      //     "Long-lasting solution"
      //   ],
      //   image: "/images/services/implant.jpg"
      // }
      {
        slug: "dental-implants",
        name: "Dental Implants",
        shortDescription:
          "Permanent, natural-looking replacements for missing teeth that restore both function and aesthetics.",
        fullDescription:
          "Dental implants are a reliable and long-lasting solution for replacing missing teeth. They consist of a titanium post surgically placed into the jawbone, which acts as a sturdy root for an artificial tooth. This approach preserves bone structure, restores chewing ability, and blends seamlessly with your natural teeth. Implants are resistant to decay and can last for decades with proper care.",
        benefits: [
          "Restores full chewing ability and comfort",
          "Prevents bone loss in the jaw",
          "Looks and feels like natural teeth",
          "Durable and long-lasting solution",
          "Improves overall oral health and confidence"
        ],
        steps: [
          "Comprehensive dental examination and treatment planning",
          "Placement of the titanium implant post",
          "Healing period to allow for osseointegration",
          "Attachment of the custom-made crown",
          "Final bite adjustment for comfort and function"
        ],
        image: "/images/services/veneers.jpg"
      }
      ,
      {
        name: "Crowns & Bridges",
        shortDescription:
          "Restore damaged or missing teeth with strong, lifelike restorations.",
        benefits: [
          "Protects and strengthens teeth",
          "Improves chewing ability",
          "Looks natural"
        ]
      },
      {
        name: "Inlays & Onlays",
        shortDescription:
          "Custom restorations that repair moderate tooth damage while blending seamlessly.",
        benefits: [
          "Preserves more natural tooth structure",
          "Durable and aesthetic",
          "Perfect fit for moderate decay or damage"
        ]
      }
    ],
  
    faq: [
      {
        question: "What issues can cosmetic dentistry fix?",
        answer:
          "Cosmetic dentistry can address a variety of concerns, including discoloration, chipped or cracked teeth, gaps, misshapen teeth, and mild misalignment."
      },
      {
        question: "Is cosmetic dentistry only about looks?",
        answer:
          "While aesthetics are a focus, many cosmetic treatments also improve oral function, strength, and long-term dental health."
      },
      {
        question: "How long do results typically last?",
        answer:
          "With proper oral hygiene and routine dental care, cosmetic dentistry results can last many years—veneers, crowns, and implants may last a decade or longer."
      },
      {
        question: "Does treatment hurt?",
        answer:
          "Most procedures are minimally invasive and performed with local anesthesia, so discomfort is usually minimal."
      },
      {
        question: "Will insurance cover my treatment?",
        answer:
          "Most purely cosmetic procedures are not covered, but those that restore function may be partially covered. We can review your benefits during your consultation."
      }
    ],
  
    learnMore: {
      text: `Porcelain veneers are thin, durable shells made from high-quality dental porcelain. 
      They are bonded to the front of your teeth to create a flawless, natural appearance, masking issues such as stains, chips, gaps, or slightly crooked teeth.
  
      **What to Expect**  
      - **First Visit:** Consultation, smile design discussion, tooth preparation, and impressions.  
      - **Second Visit:** Custom veneers are precisely bonded, instantly transforming your smile.
  
      Veneers are stain-resistant and can last 10–15 years or more with proper care, making them one of the most sought-after cosmetic treatments.
    `,
      link: "/services/porcelain-veneers"
    },
  
    schema: {
      "@context": "https://schema.org",
      "@type": "MedicalBusiness",
      "name": "Cosmetic Dentistry",
      "image": "https://yourdomain.com/images/services/cosmetic.webp",
      "description":
        "Our cosmetic dentistry services enhance your smile’s beauty and function using treatments like veneers, whitening, crowns, and implants. Customized care with lasting results.",
      "url": "https://yourdomain.com/services/cosmetic",
      "address": {
        "@type": "PostalAddress",
        "addressLocality": "Your City",
        "addressRegion": "Your State",
        "postalCode": "123456",
        "streetAddress": "123 Your Clinic Street"
      },
      "medicalSpecialty": "Dentistry"
    }
  }
,  
  
  {
    title: "Dental Implants",
    slug: "implants",
    description:
      "Permanent, natural-looking tooth replacements that restore your smile’s beauty, strength, and function — as if you never lost a tooth.",
    
    longDescription: `
      Missing teeth can affect more than your smile — they can impact your ability to eat, speak, and feel confident in daily life.
      Dental implants offer the gold standard in tooth replacement, providing unmatched stability, comfort, and a natural appearance.
  
      At our clinic, we use advanced imaging and guided placement techniques to ensure your implants look, feel, and function just like real teeth. 
      Whether replacing one tooth or restoring your full smile, implants are designed to last for decades with proper care.
  
      **Benefits of Choosing Dental Implants**
  
      **Permanent Tooth Replacement**  
      Unlike dentures or bridges, implants fuse with your jawbone for a secure, long-lasting solution.
  
      **Natural Look & Feel**  
      Custom-designed crowns match the color, shape, and contour of your natural teeth for a seamless smile.
  
      **Improved Function & Comfort**  
      Eat, speak, and laugh with confidence — no slipping, shifting, or discomfort.
  
      **Bone Preservation**  
      Implants stimulate the jawbone, preventing the bone loss that often follows tooth loss.
  
      **High Success Rate**  
      With modern technology and expert placement, dental implants boast one of the highest success rates in dentistry.
    `,
  
    image: "/images/services/implants.webp",
  
    benefits: [
      "Permanent and stable tooth replacement",
      "Looks, feels, and functions like natural teeth",
      "Prevents bone loss and preserves facial structure",
      "Restores confidence in eating, speaking, and smiling",
      "High success rate with proper care"
    ],
  
    treatments: [
      {
        name: "Single-Tooth Implants",
        description:
          "Replaces an individual missing tooth with a custom crown attached to a titanium post for stability and aesthetics."
      },
      {
        name: "Implant-Supported Bridges",
        description:
          "Restores multiple missing teeth without relying on adjacent natural teeth for support."
      },
      {
        name: "All-on-4® Implants",
        description:
          "Full-arch restoration using four strategically placed implants to support a complete set of teeth."
      },
      {
        name: "Bone Grafting",
        description:
          "Enhances jawbone volume and density to ensure a stable foundation for implants."
      }
    ],
  
    faq: [
      {
        question: "How long do dental implants last?",
        answer:
          "With proper care, dental implants can last 20 years or more — many patients keep them for a lifetime."
      },
      {
        question: "Are dental implants painful?",
        answer:
          "The procedure is performed under local anesthesia and is typically no more uncomfortable than a routine extraction. Most patients report minimal post-treatment discomfort."
      },
      {
        question: "How soon can I get implants after tooth loss?",
        answer:
          "It depends on your oral health and bone density. Some patients qualify for immediate placement, while others may need healing or bone grafting first."
      },
      {
        question: "Will my implants look natural?",
        answer:
          "Yes. We custom-design the crown to match your surrounding teeth so seamlessly that no one will know it’s an implant."
      },
      {
        question: "Are implants covered by insurance?",
        answer:
          "Coverage varies. Some plans contribute to the crown or surgical portion. We can help check your benefits and explore financing options."
      }
    ],
  
    schema: {
      "@context": "https://schema.org",
      "@type": "MedicalBusiness",
      "name": "Dental Implants",
      "image": "https://yourdomain.com/images/services/implants.webp",
      "description":
        "Permanent, natural-looking tooth replacements that restore your smile’s beauty, strength, and function with advanced dental implants by Dr. Arunima.",
      "url": "https://yourdomain.com/services/implants",
      "address": {
        "@type": "PostalAddress",
        "addressLocality": "Your City",
        "addressRegion": "Your State",
        "postalCode": "123456",
        "streetAddress": "123 Your Clinic Street"
      },
      "medicalSpecialty": "Dentistry"
    }
  },
  
  {
    title: "Preventive Dentistry",
    slug: "preventive-dentistry",
    description:
      "Proactive care to protect your teeth and gums, prevent dental problems before they start, and keep your smile healthy for life.",
    
    longDescription: `
      A healthy smile begins with prevention. Preventive dentistry focuses on stopping problems before they require more complex — and costly — treatments.
  
      Our approach combines gentle, thorough dental care with personalized education to help you maintain your oral health between visits. 
      From routine cleanings to advanced screening tools, we provide everything you need to protect your teeth, gums, and overall well-being.
  
      **Why Preventive Dentistry Matters**
  
      **Early Detection Saves Time and Money**  
      Catching cavities, gum disease, or bite issues early means simpler treatments and better outcomes.
  
      **Protects Your Overall Health**  
      Oral health is closely connected to your heart health, diabetes management, and more.
  
      **Keeps Your Smile Beautiful**  
      Regular care helps prevent discoloration, wear, and damage, keeping your teeth looking their best.
  
      **Comfortable, Gentle Appointments**  
      We use advanced tools and a gentle touch to make every visit stress-free.
    `,
  
    image: "/images/services/preventive.webp",
  
    benefits: [
      "Reduces risk of cavities and gum disease",
      "Promotes fresh breath and long-term oral health",
      "Saves money by preventing major dental work",
      "Boosts overall health and well-being",
      "Keeps your smile bright and strong"
    ],
  
    treatments: [
      {
        name: "Routine Dental Exams & Cleanings",
        description:
          "Comprehensive checkups and professional cleanings to remove plaque, tartar, and surface stains."
      },
      {
        name: "Digital X-Rays & Oral Screenings",
        description:
          "High-precision diagnostics to detect issues early, including oral cancer screening."
      },
      {
        name: "Fluoride Treatments",
        description:
          "Strengthens tooth enamel to prevent cavities, especially beneficial for children and those prone to decay."
      },
      {
        name: "Sealants",
        description:
          "Protective coatings applied to the chewing surfaces of back teeth to prevent decay."
      },
      {
        name: "Personalized Home Care Guidance",
        description:
          "Tailored advice on brushing, flossing, and diet to maintain oral health between visits."
      }
    ],
  
    faq: [
      {
        question: "How often should I have a dental checkup?",
        answer:
          "Most people benefit from a checkup and cleaning every six months, though your dentist may recommend more frequent visits based on your needs."
      },
      {
        question: "Are preventive treatments covered by insurance?",
        answer:
          "Yes, most dental plans cover routine exams, cleanings, and X-rays. We can help you understand your benefits."
      },
      {
        question: "What if I haven’t been to the dentist in years?",
        answer:
          "It’s never too late to start. We’ll welcome you without judgment and create a plan to get your smile back on track."
      },
      {
        question: "Do children need preventive dentistry?",
        answer:
          "Absolutely. Early dental visits help kids develop healthy habits and prevent cavities from a young age."
      },
      {
        question: "Can preventive dentistry really save me money?",
        answer:
          "Yes. By catching and treating problems early, you can avoid costly and extensive procedures later on."
      }
    ],
  
    schema: {
      "@context": "https://schema.org",
      "@type": "MedicalBusiness",
      "name": "Preventive Dentistry",
      "image": "https://yourdomain.com/images/services/preventive.webp",
      "description":
        "Comprehensive preventive dental care in Your City, including cleanings, checkups, fluoride treatments, and oral health guidance for lasting smiles.",
      "url": "https://yourdomain.com/services/preventive-dentistry",
      "address": {
        "@type": "PostalAddress",
        "addressLocality": "Your City",
        "addressRegion": "Your State",
        "postalCode": "123456",
        "streetAddress": "123 Your Clinic Street"
      },
      "medicalSpecialty": "Dentistry"
    }
  },  
  {
    title: "Pediatric Dentistry",
    slug: "pediatric",
    description:
      "Gentle, child-friendly dental care that ensures your little one feels safe and cared for at every visit.",
    image: "/images/services/pediatric.webp",
    benefits: [
      "Kid-friendly environment",
      "Prevention-focused care",
      "Positive dental habits",
      "Painless treatments"
    ],
    schema: {}
  }
];

export const servicesMap = Object.fromEntries(
  servicesArray.map((service) => [service.slug, service])
);
