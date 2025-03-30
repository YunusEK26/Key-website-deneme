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
    <div style={{ padding: "2rem" }}>
      <h1>KEY KEY Makina - Konteyner Ev Konfigüratörü</h1>
      <form>
        <div><label>Ev Alanı (m²)</label><input name="area" type="number" value={formData.area} onChange={handleChange} /></div>
        <div><label>Panel Kalınlığı</label><input name="thickness" value={formData.thickness} onChange={handleChange} /></div>
        <div><label>Renk</label><input name="color" value={formData.color} onChange={handleChange} /></div>
        <div><label>Zemin</label><input name="floor" value={formData.floor} onChange={handleChange} /></div>
        <div><label>İzolasyon</label><input name="insulation" value={formData.insulation} onChange={handleChange} /></div>
        <div><label>Oda Sayısı</label><input name="rooms" value={formData.rooms} onChange={handleChange} /></div>
      </form>
      <a
        href="https://wa.me/905555555555"
        target="_blank"
        rel="noopener noreferrer"
        style={{
          position: "fixed",
          bottom: "20px",
          right: "20px",
          backgroundColor: "#25D366",
          color: "#fff",
          padding: "10px 20px",
          borderRadius: "50px",
          textDecoration: "none",
        }}
      >
        WhatsApp
      </a>
    </div>
  );
}
