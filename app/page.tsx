"use client";

import { useState } from "react";
import TenFrame from "@/components/TenFrame";

export default function Home() {
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
    <main className="min-h-screen bg-zinc-50 pb-12 dark:bg-zinc-950">
      <div className="sticky top-0 z-50 w-full bg-zinc-50/80 backdrop-blur-md border-b border-zinc-200 dark:bg-zinc-950 dark:border-zinc-800">
        <div className="mx-auto max-w-2xl px-6 py-4 flex justify-between items-center">
          <div>
            <h1 className="text-xl font-bold text-zinc-800 dark:text-zinc-100">
              Digital Ten Frames
            </h1>
            <h1>Test for deploy</h1>
            <p className="text-xs font-medium text-zinc-500 uppercase tracking-wider">
              Total Frames: {frames.length}
            </p>
          </div>
          
          <button
            onClick={addFrame}
            className="rounded-full bg-blue-600 px-5 py-2 text-sm font-semibold text-white shadow-lg shadow-blue-500/20 hover:bg-blue-500 active:scale-95 transition-all"
          >
            + Add Frame
          </button>
        </div>
      </div>

      {/* Frame List - Added pt-8 to give space below the sticky header */}
      <div className="space-y-6 pt-8">
        {frames.map((frame, index) => (
          <div key={frame.id}>
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