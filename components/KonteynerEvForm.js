import React, { useState } from "react";

export default function KonteynerEvForm() {
  const [formData, setFormData] = useState({
    area: "",
    thickness: "",
    color: "",
    floor: "",
    insulation: "",
    rooms: "",
  });

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  return (
    <div className="bg-white p-6 rounded-2xl shadow-md w-full max-w-xl">
      <form className="space-y-4">
        {[
          { name: "area", label: "Ev Alanı (m²)", type: "number" },
          { name: "thickness", label: "Panel Kalınlığı" },
          { name: "color", label: "Renk" },
          { name: "floor", label: "Zemin" },
          { name: "insulation", label: "İzolasyon" },
          { name: "rooms", label: "Oda Sayısı" },
        ].map((field) => (
          <div key={field.name}>
            <label className="block font-medium mb-1">{field.label}</label>
            <input
              type={field.type || "text"}
              name={field.name}
              value={formData[field.name]}
              onChange={handleChange}
              className="w-full border border-gray-300 rounded-lg px-3 py-2 focus:outline-none focus:ring-2 focus:ring-blue-500"
              placeholder={field.label}
            />
          </div>
        ))}
        <button
          type="submit"
          className="w-full bg-blue-600 text-white py-2 rounded-lg hover:bg-blue-700 transition"
        >
          Teklif Göster
        </button>
      </form>

      <a
        href="https://wa.me/905555555555"
        target="_blank"
        rel="noopener noreferrer"
        className="fixed bottom-4 right-4 bg-green-500 text-white px-4 py-2 rounded-full shadow-md hover:bg-green-600 transition"
      >
        WhatsApp
      </a>
    </d iv>
  );
} React, { useState } from "react";

export default function KonteynerEvForm() {
  const [formData, setFormData] = useState({
    area: "",
    thickness: "",
    color: "",
    floor: "",
    insulation: "",
    rooms: "",
  });

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  return (
    <div className="bg-white p-6 rounded-2xl shadow-md w-full max-w-xl">
      <form className="space-y-4">
        {[
          { name: "area", label: "Ev Alanı (m²)", type: "number" },
          { name: "thickness", label: "Panel Kalınlığı" },
          { name: "color", label: "Renk" },
          { name: "floor", label: "Zemin" },
          { name: "insulation", label: "İzolasyon" },
          { name: "rooms", label: "Oda Sayısı" },
        ].map((field) => (
          <div key={field.name}>
            <label className="block font-medium mb-1">{field.label}</label>
            <input
              type={field.type || "text"}
              name={field.name}
              value={formData[field.name]}
              onChange={handleChange}
              className="w-full border border-gray-300 rounded-lg px-3 py-2 focus:outline-none focus:ring-2 focus:ring-blue-500"
              placeholder={field.label}
            />
          </div>
        ))}
        <button
          type="submit"
          className="w-full bg-blue-600 text-white py-2 rounded-lg hover:bg-blue-700 transition"
        >
          Teklif Göster
        </button>
      </form>

      <a
        href="https://wa.me/905555555555"
        target="_blank"
        rel="noopener noreferrer"
        className="fixed bottom-4 right-4 bg-green-500 text-white px-4 py-2 rounded-full shadow-md hover:bg-green-600 transition"
      >
        WhatsApp
      </a>
    </div>
  );
}
