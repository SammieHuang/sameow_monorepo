import React from 'react';

const Welcome: React.FC = () => {
  return (
    <div className="min-h-screen bg-[#fafafa] text-[#1a1a1a] p-6 md:p-12 font-mono selection:bg-black selection:text-white">
      <header className="max-w-6xl mx-auto mb-16 flex justify-between items-end border-b border-black pb-4">
        <div>
          <h1 className="text-3xl font-light tracking-tighter text-black">SAMEOW/UI / v1.0</h1>
          <p className="text-[10px] uppercase tracking-[0.3em] text-gray-400 mt-2">Personal Component Experiment</p>
        </div>
        <div className="text-xs italic text-gray-500 font-sans">Built for curiosity.</div>
      </header>

      <main className="max-w-6xl mx-auto grid grid-cols-1 md:grid-cols-4 gap-4 auto-rows-[180px]">
        
        {/* The Manifesto */}
        <div className="md:col-span-3 md:row-span-2 bg-white border border-gray-200 p-8 flex flex-col justify-between group hover:border-black transition-all duration-300">
          <div className="text-5xl md:text-6xl font-light leading-[0.9] tracking-tighter italic text-black">
            SIMPLICITY <br />
            IS THE ULTIMATE <br />
            SOPHISTICATION.
          </div>
          <p className="max-w-md text-sm text-gray-500 font-sans leading-relaxed mt-4">
            A private UI laboratory. No marketing hype, just a relentless 
            pursuit of perfect pixels, spacing, and interaction. 
            Each component is crafted to create a quieter, more focused web.
          </p>
        </div>

        {/* Tech Stack */}
        <div className="bg-black text-white p-6 flex flex-col justify-between shadow-xl shadow-gray-200">
          <span className="text-[10px] uppercase tracking-[0.2em] opacity-50">Core Tech</span>
                  <div className="text-xl italic font-serif">
                      React + TS <br />
                      + Shadcn
                  </div>
        </div>

        {/* GitHub Link */}
        <a href="https://github.com/SammieHuang/sameow_monorepo" className="bg-white border border-gray-200 p-6 flex flex-col justify-between hover:bg-gray-50 transition-colors cursor-pointer group">
          <span className="text-[10px] uppercase tracking-[0.2em] text-gray-400 group-hover:text-black transition-colors">Source</span>
          <div className="text-sm underline decoration-gray-300 group-hover:decoration-black transition-all underline-offset-4">
            View Repository →
          </div>
        </a>

        {/* Medium Card: Component Stats */}
        <div className="md:col-span-1 md:row-span-1 border border-dashed border-gray-300 p-6 flex items-center justify-center bg-transparent">
          <div className="text-center">
            <div className="text-4xl font-light tracking-tighter">10+</div>
            <div className="text-[10px] uppercase tracking-widest text-gray-400 mt-1">Assets Ready</div>
          </div>
        </div>

        {/* Code Block Card */}
        <div className="md:col-span-2 md:row-span-1 bg-gray-900 text-green-400 p-8 rounded-sm overflow-hidden text-xs shadow-inner">
          <div className="mb-2 text-gray-500 opacity-50 font-sans tracking-widest uppercase text-[9px]">// lib_manifest.json</div>
          <pre className="font-mono leading-relaxed">
            {`{
  "principle": "Aesthetic over Commercial",
  "focus": ["Typography", "Grid", "A11y"],
  "status": "Production_Ready"
}`}
          </pre>
        </div>
      </main>

      <footer className="max-w-6xl mx-auto mt-24 text-[9px] uppercase tracking-[0.4em] text-gray-400 flex justify-between items-center">
        <span>© 2025 DESIGNED BY SAMMIE HUANG. NO RIGHTS RESERVED.</span>
      </footer>
    </div>
  );
};

export default Welcome;