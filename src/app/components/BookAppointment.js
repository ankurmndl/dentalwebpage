// 'use client';

// import { useState } from "react";

// export default function BookAppointment() {
//   const [isOpen, setIsOpen] = useState(false);
//   const [formData, setFormData] = useState({
//     name: "",
//     email: "",
//     phone: "",
//     message: ""
//   });
//   const [status, setStatus] = useState(null);

//   const toggleModal = () => setIsOpen(!isOpen);

//   const handleChange = (e) => {
//     setFormData({ ...formData, [e.target.name]: e.target.value });
//   };

//   const handleSubmit = async (e) => {
//     e.preventDefault();
//     setStatus("loading");

//     try {
//       const res = await fetch("/api/appointment", {
//         method: "POST",
//         headers: { "Content-Type": "application/json" },
//         body: JSON.stringify(formData)
//       });

//       const result = await res.json();

//       if (result.status === "success") {
//         setStatus("success");
//         setFormData({ name: "", email: "", phone: "", message: "" });
//         setTimeout(() => setIsOpen(false), 2000); // auto-close after success
//       } else {
//         setStatus("error");
//       }
//     } catch (error) {
//       console.error("Submission error:", error);
//       setStatus("error");
//     }
//   };

//   return (
//     <>
//       {/* Book Appointment Button */}
//       <button
//         onClick={toggleModal}
//         className="bg-blue-600 text-white px-6 py-3 rounded-lg hover:bg-blue-700 transition"
//       >
//         Book Appointment
//       </button>

//       {/* Modal */}
//       {isOpen && (
//         <div className="fixed inset-0 z-50 flex items-center justify-center bg-black/50">
//           <div className="bg-white rounded-xl shadow-lg w-full max-w-md p-6 relative">
//             <button
//               onClick={toggleModal}
//               className="absolute top-3 right-3 text-gray-500 hover:text-gray-700"
//             >
//               ✕
//             </button>
//             <h2 className="text-2xl font-semibold mb-4">Book Appointment</h2>

//             <form onSubmit={handleSubmit} className="space-y-4">
//               <input
//                 type="text"
//                 name="name"
//                 placeholder="Full Name"
//                 required
//                 value={formData.name}
//                 onChange={handleChange}
//                 className="w-full px-4 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
//               />
//               <input
//                 type="email"
//                 name="email"
//                 placeholder="Email"
//                 required
//                 value={formData.email}
//                 onChange={handleChange}
//                 className="w-full px-4 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
//               />
//               <input
//                 type="tel"
//                 name="phone"
//                 placeholder="Phone Number"
//                 required
//                 value={formData.phone}
//                 onChange={handleChange}
//                 className="w-full px-4 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
//               />
//               <textarea
//                 name="message"
//                 placeholder="Message / Notes"
//                 rows="3"
//                 value={formData.message}
//                 onChange={handleChange}
//                 className="w-full px-4 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
//               ></textarea>

//               <button
//                 type="submit"
//                 disabled={status === "loading"}
//                 className="bg-blue-600 text-white w-full py-2 rounded-lg hover:bg-blue-700 transition"
//               >
//                 {status === "loading" ? "Submitting..." : "Submit"}
//               </button>

//               {status === "success" && (
//                 <p className="text-green-600 text-center mt-2">
//                   Appointment booked successfully!
//                 </p>
//               )}
//               {status === "error" && (
//                 <p className="text-red-600 text-center mt-2">
//                   Something went wrong. Please try again.
//                 </p>
//               )}
//             </form>
//           </div>
//         </div>
//       )}
//     </>
//   );
// }

'use client';

import { useState } from "react";

export default function BookAppointment() {
  const [isOpen, setIsOpen] = useState(false);
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    message: "",
    date: ""
  });
  const [status, setStatus] = useState(null);

  const toggleModal = () => setIsOpen(!isOpen);

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    // Validate fields
    if (!formData.name || !formData.email || !formData.phone || !formData.date) {
      setStatus("Please fill all required fields.");
      return;
    }

    const emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailPattern.test(formData.email)) {
      setStatus("Please enter a valid email address.");
      return;
    }

    const phonePattern = /^[0-9]{7,15}$/;
    if (!phonePattern.test(formData.phone)) {
      setStatus("Please enter a valid phone number.");
      return;
    }

    setStatus("loading");

    try {
      const res = await fetch("/api/appointment", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(formData)
      });

      const result = await res.json();

      if (result.status === "success") {
        setStatus("success");
        setFormData({ name: "", email: "", phone: "", message: "", date: "" });
        setTimeout(() => setIsOpen(false), 2000); // auto-close after success
      } else {
        setStatus("Something went wrong. Please try again.");
      }
    } catch (error) {
      console.error("Submission error:", error);
      setStatus("Something went wrong. Please try again.");
    }
  };

  return (
    <>
      {/* Book Appointment Button */}
      <button
        onClick={toggleModal}
        className="bg-blue-600 text-white px-6 py-3 rounded-lg hover:bg-blue-700 transition"
      >
        Book Appointment
      </button>

      {/* Modal */}
      {isOpen && (
        <div className="fixed inset-0 z-50 flex items-center justify-center bg-black/50">
          <div className="bg-white rounded-xl shadow-lg w-full max-w-md p-6 relative">
            <button
              onClick={toggleModal}
              className="absolute top-3 right-3 text-gray-500 hover:text-gray-700"
            >
              ✕
            </button>
            <h2 className="text-2xl font-semibold mb-4">Book Appointment</h2>

            <form onSubmit={handleSubmit} className="space-y-4">
              <input
                type="text"
                name="name"
                placeholder="Full Name"
                required
                value={formData.name}
                onChange={handleChange}
                className="w-full px-4 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
              />
              <input
                type="email"
                name="email"
                placeholder="Email"
                required
                value={formData.email}
                onChange={handleChange}
                className="w-full px-4 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
              />
              <input
                type="tel"
                name="phone"
                placeholder="Phone Number"
                required
                value={formData.phone}
                onChange={handleChange}
                className="w-full px-4 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
              />
              <input
                type="date"
                name="date"
                required
                value={formData.date}
                onChange={handleChange}
                className="w-full px-4 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
              />
              <textarea
                name="message"
                placeholder="Message / Notes"
                rows="3"
                value={formData.message}
                onChange={handleChange}
                className="w-full px-4 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
              ></textarea>

              <button
                type="submit"
                disabled={status === "loading"}
                className="bg-blue-600 text-white w-full py-2 rounded-lg hover:bg-blue-700 transition disabled:opacity-50"
              >
                {status === "loading" ? "Submitting..." : "Submit"}
              </button>

              {status && (
                <p className={`text-center mt-2 ${status === "success" ? "text-green-600" : "text-red-600"}`}>
                  {status}
                </p>
              )}
            </form>
          </div>
        </div>
      )}
    </>
  );
}
