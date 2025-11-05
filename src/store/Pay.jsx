import { create } from "zustand";
import { initMercadoPago } from "@mercadopago/sdk-react";

initMercadoPago(import.meta.env.VITE_MERCADO_PAGO_KEY, {
  locale: "en-US",
});

export const Pay = create((set, get) => ({
  idPreference: "",

  fetchPay: async (cart) => {
    try {
      const res = await fetch("http://localhost:3000/create_preference", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ cart }),
      });

      const data = await res.json();

      if (data.id) {
        set({ idPreference: data.id });
      } else {
        alert("Error al crear preferencia: " + data.error);
      }

      return data.id;
    } catch (err) {
      console.error(err);
      alert("Error de red: " + err.message);
    }
  },
  clearPreference: () => {
    set({ idPreference: "" });
  },
}));
