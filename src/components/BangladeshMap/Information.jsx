const Information = () => {
  return (
    <div className="container mx-auto text-center">
      <h1 className="text-3xl flex flex-wrap pt-4 px-2 md:text-5xl justify-center items-center font-black text-teal-900 mb-4 tracking-tighter ">
        BANGLADESH
        <span className="text-teal-500 not-italic mx-4">EXPLORER</span>
      </h1>
      <p className="text-xl md:text-2xl text-gray-600 mb-8 font-medium">
        আপনার জেলার ইতিহাস ও ঐতিহ্য এখন এক ক্লিকেই।
      </p>

      <div className="mt-5 mb-6 flex items-center justify-center gap-3">
        <span className="text-gray-700 text-[10px] uppercase tracking-widest font-bold">
          Developed By
        </span>

        <a
          href="https://www.linkedin.com/in/abdur-rashid-sawom-3379a0262/"
          target="_blank"
          rel="noopener noreferrer"
          className="group flex items-center gap-2 px-4 py-1.5 bg-white/50 backdrop-blur-sm border border-teal-100 rounded-full shadow-sm hover:shadow-teal-100 hover:border-teal-400 transition-all duration-300"
        >
          <svg
            className="w-4 h-4 text-[#0077b5]"
            fill="currentColor"
            viewBox="0 0 24 24"
          >
            <path d="M19 0h-14c-2.761 0-5 2.239-5 5v14c0 2.761 2.239 5 5 5h14c2.762 0 5-2.239 5-5v-14c0-2.761-2.238-5-5-5zm-11 19h-3v-11h3v11zm-1.5-12.268c-.966 0-1.75-.79-1.75-1.764s.784-1.764 1.75-1.764 1.75.79 1.75 1.764-.783 1.764-1.75 1.764zm13.5 12.268h-3v-5.604c0-3.368-4-3.113-4 0v5.604h-3v-11h3v1.765c1.396-2.586 7-2.777 7 2.476v6.759z" />
          </svg>
          <span className="text-gray-700 text-sm font-bold group-hover:text-teal-600 transition-colors">
            Abdur Rashid Sawom
          </span>
          <span className="text-teal-500 opacity-0 group-hover:opacity-100 group-hover:translate-x-1 transition-all">
            →
          </span>
        </a>
      </div>
    </div>
  );
};

export default Information;
