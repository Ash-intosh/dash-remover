"use client";

import { useState } from "react";

export default function Home() {
  const [input, setInput] = useState("");
  const [output, setOutput] = useState("");
  const [mode, setMode] = useState("remove");

  const cleanText = () => {
    let cleaned = input;

    if (mode === "remove") {
      cleaned = cleaned.replace(/[—–]/g, "");
    } else if (mode === "space") {
      cleaned = cleaned.replace(/[—–]/g, " ");
    } else if (mode === "comma") {
      cleaned = cleaned.replace(/[—–]/g, ", ");
    }

    cleaned = cleaned.replace(/\s+/g, " ").trim();

    setOutput(cleaned);
  };

  return (
    <main className="min-h-screen bg-gradient-to-br from-gray-50 to-gray-200 flex items-center justify-center p-6">
      <div className="w-full max-w-4xl bg-white rounded-2xl shadow-2xl p-8 space-y-6">

        <div className="text-center space-y-2">
          <h1 className="text-4xl font-extrabold text-gray-900">
            DashCleaner
          </h1>
          <p className="text-gray-500">
            Instantly remove em dashes (—) and en dashes (–) from AI-generated text.
          </p>
        </div>

        <textarea
          rows={6}
          placeholder="Paste AI-generated text here..."
          value={input}
          onChange={(e) => setInput(e.target.value)}
          className="w-full p-4 border border-gray-300 rounded-xl text-gray-900 font-medium focus:outline-none focus:ring-2 focus:ring-black transition"
        />

        <div className="flex justify-center gap-6 text-sm font-medium text-gray-700">
          <label className="flex items-center gap-2 cursor-pointer">
            <input
              type="radio"
              value="remove"
              checked={mode === "remove"}
              onChange={(e) => setMode(e.target.value)}
            />
            Remove
          </label>

          <label className="flex items-center gap-2 cursor-pointer">
            <input
              type="radio"
              value="space"
              checked={mode === "space"}
              onChange={(e) => setMode(e.target.value)}
            />
            Replace with Space
          </label>

          <label className="flex items-center gap-2 cursor-pointer">
            <input
              type="radio"
              value="comma"
              checked={mode === "comma"}
              onChange={(e) => setMode(e.target.value)}
            />
            Replace with Comma
          </label>
        </div>

        <div className="flex justify-center">
          <button
            onClick={cleanText}
            className="px-8 py-3 bg-black text-white font-semibold rounded-xl hover:scale-105 hover:bg-gray-800 transition-all duration-200 shadow-md"
          >
            Clean Text
          </button>
        </div>

        <textarea
          rows={6}
          placeholder="Cleaned output will appear here..."
          value={output}
          readOnly
          className="w-full p-4 border border-gray-200 rounded-xl text-gray-800 bg-gray-50 font-medium"
        />

      </div>
    </main>
  );
}
