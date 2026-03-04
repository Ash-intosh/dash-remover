"use client";

import { useState } from "react";

export default function Home() {
  const [input, setInput] = useState("");
  const [output, setOutput] = useState("");
  const [mode, setMode] = useState("remove");

  const cleanText = () => {
    let cleaned = input;

    if (mode === "remove") {
      // Remove em dash and en dash completely
      cleaned = cleaned.replace(/[—–]/g, "");
    } else if (mode === "space") {
      // Replace with space
      cleaned = cleaned.replace(/[—–]/g, " ");
    } else if (mode === "comma") {
      // Replace with comma
      cleaned = cleaned.replace(/[—–]/g, ",");
    }

    setOutput(cleaned);
  };

  return (
    <main className="min-h-screen p-10 bg-white text-gray-900">
      <h1 className="text-3xl font-bold mb-6">
        AI Dash Cleaner
      </h1>

      <textarea
        className="w-full p-4 border rounded mb-4"
        rows={6}
        placeholder="Paste AI generated text here..."
        value={input}
        onChange={(e) => setInput(e.target.value)}
      />

      <div className="mb-4">
        <label className="mr-4">
          <input
            type="radio"
            value="remove"
            checked={mode === "remove"}
            onChange={(e) => setMode(e.target.value)}
          />
          Remove
        </label>

        <label className="mr-4">
          <input
            type="radio"
            value="space"
            checked={mode === "space"}
            onChange={(e) => setMode(e.target.value)}
          />
          Replace with Space
        </label>

        <label>
          <input
            type="radio"
            value="comma"
            checked={mode === "comma"}
            onChange={(e) => setMode(e.target.value)}
          />
          Replace with Comma
        </label>
      </div>

      <button
        onClick={cleanText}
        className="px-6 py-2 bg-black text-white rounded"
      >
        Clean Text
      </button>

      <textarea
        className="w-full p-4 border border-gray-300 rounded-lg mb-4 text-gray-900 font-semibold focus:outline-none focus:ring-2 focus:ring-black"
        rows={6}
        placeholder="Cleaned output..."
        value={output}
        readOnly
      />
    </main>
  );
}