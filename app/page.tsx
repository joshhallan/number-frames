"use client";

import { useState } from "react";
import TenFrame from "@/components/TenFrame";

export default function Home() {
  // Use objects for clearer state. UUIDs are cleaner than timestamps.
  const [frames, setFrames] = useState([{ id: crypto.randomUUID() }]);

  const addFrame = () => {
    setFrames([...frames, { id: crypto.randomUUID() }]);
  };

  const removeFrame = (idToRemove: string) => {
    if (frames.length > 1) {
      setFrames(frames.filter((frame) => frame.id !== idToRemove));
    }
  };

  return (
    <main className="min-h-screen bg-zinc-50 py-12 dark:bg-zinc-950">
      <div className="mx-auto max-w-2xl px-4 mb-8 flex justify-between items-center">
        <div>
          <h1 className="text-2xl font-bold text-zinc-800 dark:text-zinc-100">
            Digital Ten Frames
          </h1>
          <p className="text-sm text-zinc-500">Total Frames: {frames.length}</p>
        </div>
        
        <button
          onClick={addFrame}
          className="rounded-full bg-blue-600 px-4 py-2 text-sm font-semibold text-white shadow-sm hover:bg-blue-500 transition-colors"
        >
          + Add Frame
        </button>
      </div>

      <div className="space-y-4">
        {frames.map((frame, index) => (
          <div key={frame.id}>
            {/* We pass the index + 1 to the frame so it knows its number */}
            <TenFrame 
              frameNumber={index + 1} 
              onDelete={() => removeFrame(frame.id)} 
            />
          </div>
        ))}
      </div>
    </main>
  );
}