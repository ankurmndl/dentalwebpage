'use client';

import { MapPin, Clock } from 'lucide-react';

export default function LocationSection() {
  return (
    <section className="bg-white py-20 px-4 border-t border-gray-100">
      <div className="max-w-6xl mx-auto grid md:grid-cols-2 gap-12 items-center">

        {/* Text Info */}
        <div>
          <h2 className="text-3xl md:text-4xl font-bold text-teal-800 mb-4">Visit Our Clinic</h2>
          <p className="text-gray-700 mb-6">
            Esthetix Dental is centrally located and easily accessible for patients across Ranchi.
          </p>

          <div className="space-y-4">
            <div className="flex items-start gap-3">
              <MapPin className="text-teal-600 w-6 h-6 mt-1" />
              <div>
                <p className="font-semibold text-gray-800">Esthetix Dental</p>
                <p className="text-gray-600">
                  107, Modi Heights, Opp. All India Radio <br />
                  Ranchi, Jharkhand – 834001
                </p>
              </div>
            </div>

            <div className="flex items-start gap-3">
              <Clock className="text-teal-600 w-6 h-6 mt-1" />
              <div>
                <p className="font-semibold text-gray-800">Clinic Hours</p>
                <p className="text-gray-600">
                  Mon – Sat: 10:00 AM – 7:00 PM<br />
                  Sunday: Closed
                </p>
              </div>
            </div>
          </div>
        </div>

        {/* Embedded Google Map */}
        <div className="w-full h-72 md:h-96 rounded-xl overflow-hidden shadow-lg border">
          <iframe
            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3585.9603044585747!2d85.31353879999999!3d23.3789062!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x39f4e117426d20b7%3A0xe135a9c47073eb1c!2sEsthetix%20Dental!5e1!3m2!1sen!2sin!4v1754383730847!5m2!1sen!2sin"
            width="100%"
            height="100%"
            style={{ border: 0 }}
            allowFullScreen=""
            loading="lazy"
            referrerPolicy="no-referrer-when-downgrade"
            title="Location map for Dr. Arunima Dental Clinic"
          ></iframe>
        </div>

      </div>
    </section>
  );
}
