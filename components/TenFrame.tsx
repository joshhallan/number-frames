"use client";

import { useState } from "react";

// We add onDelete to the component properties
interface TenFrameProps {
  onDelete: () => void;
  frameNumber: number;
}

export default function TenFrame({ onDelete, frameNumber }: TenFrameProps) {
  const [slots, setSlots] = useState(Array(10).fill(false));

  const toggleSlot = (index: number) => {
    const newSlots = [...slots];
    newSlots[index] = !newSlots[index];
    setSlots(newSlots);
  };

  const clearFrame = () => setSlots(Array(10).fill(false));

  return (
    <div className="mx-auto max-w-2xl p-6 bg-white dark:bg-zinc-900 border border-zinc-200 dark:border-zinc-800 rounded-xl shadow-sm mb-6">
      {/* Header with obvious actions */}
      <div className="flex justify-between items-center mb-6">
        <h3 className="text-xs font-bold text-zinc-400 uppercase tracking-widest">Frame {frameNumber}</h3>
        
        <div className="flex gap-4">
          <button 
            onClick={clearFrame}
            className="px-3 py-1 text-xs font-bold text-zinc-500 hover:bg-zinc-100 dark:hover:bg-zinc-800 rounded transition-colors"
          >
            RESET
          </button>
          <button 
            onClick={onDelete}
            className="px-3 py-1 text-xs font-bold text-white bg-red-500 hover:bg-red-600 rounded shadow-sm transition-colors"
          >
            DELETE
          </button>
        </div>
      </div>

      <div className="grid grid-cols-5 gap-4">
        {slots.map((isFilled, i) => (
          <button
            key={i}
            onClick={() => toggleSlot(i)}
            className="flex aspect-square items-center justify-center rounded-lg border-2 border-dashed border-zinc-200 bg-zinc-50/50 transition-all hover:border-zinc-400 hover:bg-white dark:border-zinc-700 dark:bg-zinc-800/50 dark:hover:bg-zinc-800"
          >
            {isFilled && (
              <div className="h-3/4 w-3/4 rounded-full bg-red-500 shadow-md ring-2 ring-red-600 ring-offset-2" />
            )}
          </button>
        ))}
      </div>
    </div>
  );
}