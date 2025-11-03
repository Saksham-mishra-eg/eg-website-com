import { useState } from "react";

export default function useCreateLead(onSuccess, onError) {
  const [loading, setLoading] = useState(false);
  const [response, setResponse] = useState(null);
  const [error, setError] = useState(null);

  const createLead = async (leadData) => {
    setLoading(true);
    setError(null);
    setResponse(null);

    try {
      const res = await fetch("http://localhost:5000/api/get-token", {
      // const res = await fetch("https://data-flow.exportgenius.com/api/get-token", {
        method: "GET",
        headers: { "Content-Type": "application/json" },
        data: JSON.stringify(leadData),
      });

      if (!res.ok) {
        throw new Error(`Server error: ${res.status}`);
      }

      const data = await res.json();
      console.log("✅ Lead Created:", data);
      setResponse(data);

      if (onSuccess) onSuccess(data);
    } catch (err) {
      console.error("❌ Error:", err);
      setError(err.message);
      if (onError) onError(err.message);
    } finally {
      setLoading(false);
    }
  };

  return { createLead, loading, response, error };
}
