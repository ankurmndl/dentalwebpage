// // import { servicesMap } from "@/lib/servicesData";
// // import SingleTreatmentPage from "@/app/components/services/SingleTreatmentPage";

// // export default function TreatmentPage({ params }) {
// //   const { slug, treatmentSlug } = params;

// //   // Find main service
// //   const service = servicesMap[slug];
// //   if (!service) return <div>Service not found</div>;

// //   // Find treatment inside main service
// //   const treatment = service.treatments?.find(
// //     (t) => t.slug === treatmentSlug
// //   );
// //   if (!treatment) return <div>Treatment not found</div>;

// //   return (
// //     <SingleTreatmentPage
// //       title={treatment.name}
// //       description={treatment.description}
// //       benefits={treatment.benefits}
// //       steps={treatment.steps}
// //       image={treatment.image}
// //     />
// //   );
// // }

// import servicesData from "@/lib/servicesData";

// export default function TreatmentPage({ params }) {
//   const { slug, treatmentSlug } = params;
//   const service = servicesData.find(s => s.slug === slug);
//   const treatment = service?.treatments.find(t => t.treatmentSlug === treatmentSlug);

//   if (!treatment) return <p>Treatment not found</p>;

//   return (
//     <div className="max-w-4xl mx-auto py-12 px-4">
//       <h1 className="text-4xl font-bold text-teal-900 mb-6">{treatment.name}</h1>
//       <p className="mb-6 text-gray-700">{treatment.fullDescription}</p>

//       <h2 className="text-2xl font-semibold text-teal-800 mt-8 mb-4">Benefits</h2>
//       <ul className="list-disc list-inside text-gray-600 mb-6">
//         {treatment.benefits.map((b, i) => <li key={i}>{b}</li>)}
//       </ul>

//       <h2 className="text-2xl font-semibold text-teal-800 mt-8 mb-4">Treatment Steps</h2>
//       <ol className="list-decimal list-inside text-gray-600">
//         {treatment.steps.map((s, i) => <li key={i}>{s}</li>)}
//       </ol>
//     </div>
//   );
// }

import SingleTreatmentPage from "@/app/components/services/SingleTreatmentPage";
import { servicesArray } from "@/lib/servicesData"; // Import your array

export default function TreatmentPage({ params }) {
  const { slug, treatmentSlug } = params;

  // 1️⃣ Find the parent service
  const service = servicesArray.find((s) => s.slug === slug);
  if (!service) return <div>Service not found</div>;

  // 2️⃣ Find the specific treatment
  const treatment = service.treatments.find((t) => t.slug === treatmentSlug);
  if (!treatment) return <div>Treatment not found</div>;

  // 3️⃣ Render the treatment page
  return (
    <SingleTreatmentPage
      title={treatment.name}
      description={treatment.shortDescription}
      benefits={treatment.benefits}
      steps={treatment.steps}
      image={treatment.image || service.image} // fallback to service image
    />
  );
}
