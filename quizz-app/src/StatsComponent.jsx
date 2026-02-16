import React from "react";

function StatsComponent({ skippedShare, correctShare, incorrectShare }) {
  return (
    <div className="flex justify-center gap-10 text-[#30273a] border-b-2 border-[#30273a] pb-8">
      <div className="flex flex-col gap-2 items-center text-center">
        <span className="text-4xl">{skippedShare}%</span>
        <span className="text-[18px] opacity-60">SKIPPED</span>
      </div>
      <div className="flex flex-col gap-2 items-center text-center">
        <span className="text-4xl">{correctShare}%</span>
        <span className="text-[18px] opacity-60">
          ANSWERED
          <br />
          CORRECTLY
        </span>
      </div>
      <div className="flex flex-col gap-2 items-center text-center">
        <span className="text-4xl">{incorrectShare}%</span>
        <span className="text-[18px] opacity-60">
          ANSWERED
          <br />
          INCORRECTLY
        </span>
      </div>
    </div>
  );
}

export default StatsComponent;
