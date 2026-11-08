import React, { useState, useEffect } from 'react';

export const ScrollToTop: React.FC = () => {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 200) {
        setIsVisible(true);
      } else {
        setIsVisible(false);
      }
    };

    window.addEventListener('scroll', handleScroll, { passive: true });
    handleScroll();
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: 'smooth',
    });
  };

  return (
    <button
      type="button"
      onClick={scrollToTop}
      aria-label="ページトップへ戻る"
      title="ページトップへ"
      className={`fixed bottom-6 sm:bottom-8 right-6 sm:right-8 z-40 w-12 h-12 sm:w-14 sm:h-14 rounded-full bg-[#FF9900] text-white flex flex-col items-center justify-center shadow-xl hover:shadow-2xl border-2 border-white/50 transition-all duration-300 transform hover:-translate-y-1 hover:brightness-105 active:scale-95 cursor-pointer ${
        isVisible ? 'opacity-100 pointer-events-auto scale-100' : 'opacity-0 pointer-events-none scale-75'
      }`}
    >
      <svg className="w-5 h-5 -mb-0.5" fill="none" stroke="currentColor" strokeWidth="2.5" viewBox="0 0 24 24">
        <path d="M5 15l7-7 7 7" strokeLinecap="round" strokeLinejoin="round" />
      </svg>
      <span className="text-[10px] font-black tracking-tight leading-none">TOP</span>
    </button>
  );
};
