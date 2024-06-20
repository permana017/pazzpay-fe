import React from "react";

function SkeletonUser() {
  return (
    <div className="flex items-center gap-2">
      <div className="w-10 h-10 md:h-12  md:w-12 bg-slate-400 animate-pulse rounded-md"></div>
      <div className="flex flex-col justify-between h-full py-1">
        <p className="p-2 bg-slate-400 animate-pulse rounded w-20 mb-2"></p>
        <p className="p-2 bg-slate-400 animate-pulse rounded w-40"></p>
      </div>
    </div>
  );
}

export default SkeletonUser;
