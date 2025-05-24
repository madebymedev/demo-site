// components/common/Navbar.js
'use client';

export default function Navbar() {
  return (
    <header className="rounded-lg mt-10 fixed top-4 w-full z-50 flex justify-center">
      <div className="px-6 py-3 rounded-xl border border-white/20 shadow-xl bg-white/5 backdrop-blur-xl font-[Quicksand]">
        <div className="text-xl font-bold tracking-wide text-white">
          madebyme<span className="text-[#d1b5aa]">.dev</span>
        </div>
      </div>
    </header>
  );
}
