import React, { useState, useRef, useEffect } from 'react';
import { PageTab, Language } from '../types';
import { TRANSLATIONS } from '../data/translations';

interface HeaderProps {
  activeTab: PageTab;
  onSelectTab: (tab: PageTab) => void;
  currentLang: Language;
  onSelectLang: (lang: Language) => void;
  onOpenDrawer: () => void;
  onOpenWeChat: () => void;
  onOpenLine: () => void;
}

export const Header: React.FC<HeaderProps> = ({
  activeTab,
  onSelectTab,
  currentLang,
  onSelectLang,
  onOpenDrawer,
  onOpenWeChat,
  onOpenLine,
}) => {
  const [isLangMenuOpen, setIsLangMenuOpen] = useState(false);
  const langMenuRef = useRef<HTMLDivElement>(null);
  const t = TRANSLATIONS[currentLang];

  useEffect(() => {
    const handleClickOutside = (e: MouseEvent) => {
      if (langMenuRef.current && !langMenuRef.current.contains(e.target as Node)) {
        setIsLangMenuOpen(false);
      }
    };
    document.addEventListener('mousedown', handleClickOutside);
    return () => document.removeEventListener('mousedown', handleClickOutside);
  }, []);

  const getLangDisplayName = (lang: Language) => {
    switch (lang) {
      case 'ja': return '日本語';
      case 'zh': return '中文';
      case 'en': return 'EN';
    }
  };

  return (
    <header className="w-full bg-white shadow-sm border-b border-gray-200 sticky top-0 z-40">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-stretch">
          {/* 1. Unified Brand Logo */}
          <button
            type="button"
            onClick={() => onSelectTab('home')}
            className="flex items-center justify-center py-2 pr-4 sm:pr-6 shrink-0 group border-r border-gray-100 cursor-pointer text-left"
            title="レイワ不動産 ホームへ"
          >
            <img
              alt="レイワ不動産 ロゴ"
              className="h-14 sm:h-16 md:h-20 lg:h-24 w-auto object-contain transition-transform group-hover:scale-[1.02] shrink-0"
              src="https://lh3.googleusercontent.com/aida-public/AB6AXuC13lCwtqM5KArFgiSzXBUfcGnVNBEsaX9h4OhqrAd1Y6da_j52xJQHYZKTzgdUvR4pvgxxbYueJwm8gq36p3JxTuCuWnPOEdBIOJCQCcrXNfSSVHW2TNHukDi9GbgCeYFiQG7PXVwy3jb2mFvv7nCm7i6v7GXm7SyFp2vjbMmq3Z3ScqWUtacuJcBnVpIL4e8COzwR0AFJyWhjJPIMQgwAmVJBLW0aSABNWXWo90_EfPRsi6CBoi974Q"
            />
          </button>

          {/* 2. Right Side: Top Announcement Row + Main Action Row */}
          <div className="flex-1 flex flex-col justify-between min-w-0">
            {/* Top Announcement Bar (Desktop) */}
            <div className="border-b border-amber-200/60 py-1.5 px-3 sm:px-4 text-xs md:text-sm text-gray-700 items-center justify-between rounded-bl-sm hidden lg:flex">
              <div className="flex items-center space-x-2 truncate">
                <span className="inline-flex items-center justify-center px-1.5 py-0.5 text-[10px] font-bold bg-[#FF9900] text-white rounded shrink-0">
                  大阪専門
                </span>
                <p className="font-medium tracking-wide truncate">
                  {t.announcement}
                </p>
              </div>
              <div className="flex items-center space-x-4 text-xs text-gray-500 shrink-0 pl-4">
                <span className="whitespace-nowrap">営業時間 09:00〜17:00</span>
              </div>
            </div>

            {/* Action Buttons Row */}
            <div className="flex items-center px-2 sm:px-4 py-2 sm:py-2.5 justify-between h-full">
              {/* Language Switcher Dropdown */}
              <div className="flex items-center pr-2 shrink-0">
                <div className="relative inline-block text-left" ref={langMenuRef}>
                  <button
                    type="button"
                    onClick={() => setIsLangMenuOpen(!isLangMenuOpen)}
                    aria-expanded={isLangMenuOpen}
                    className="inline-flex items-center gap-1 sm:gap-1.5 px-2.5 sm:px-3 py-1 sm:py-1.5 rounded-full bg-gray-100 hover:bg-gray-200/80 border border-gray-200 text-gray-700 hover:text-gray-900 text-xs font-bold transition shadow-sm cursor-pointer shrink-0"
                  >
                    <svg className="w-3.5 h-3.5 text-[#FF9900] shrink-0" fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.8" viewBox="0 0 24 24">
                      <circle cx="12" cy="12" r="10"></circle>
                      <line x1="2" x2="22" y1="12" y2="12"></line>
                      <path d="M12 2a15.3 15.3 0 0 1 4 10 15.3 15.3 0 0 1-4 10 15.3 15.3 0 0 1-4-10 15.3 15.3 0 0 1 4-10z"></path>
                    </svg>
                    <span className="tracking-wide whitespace-nowrap">{getLangDisplayName(currentLang)}</span>
                    <svg className={`w-3 h-3 text-gray-400 transition-transform duration-200 shrink-0 ${isLangMenuOpen ? 'rotate-180' : ''}`} fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewBox="0 0 24 24">
                      <path d="M19 9l-7 7-7-7"></path>
                    </svg>
                  </button>

                  {isLangMenuOpen && (
                    <div className="absolute left-0 mt-1.5 w-28 bg-white rounded-xl shadow-xl border border-gray-100 py-1 z-50 overflow-hidden divide-y divide-gray-50">
                      {(['ja', 'zh', 'en'] as Language[]).map((lang) => (
                        <button
                          key={lang}
                          type="button"
                          onClick={() => {
                            onSelectLang(lang);
                            setIsLangMenuOpen(false);
                          }}
                          className={`w-full flex items-center justify-between px-3 py-2 text-xs text-left transition ${
                            currentLang === lang
                              ? 'font-bold text-[#FF9900] bg-orange-50'
                              : 'font-medium text-gray-700 hover:bg-gray-50'
                          }`}
                        >
                          <span>{getLangDisplayName(lang)}</span>
                          {currentLang === lang && (
                            <svg className="w-3.5 h-3.5 text-[#FF9900]" fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewBox="0 0 24 24">
                              <path d="M5 13l4 4L19 7"></path>
                            </svg>
                          )}
                        </button>
                      ))}
                    </div>
                  )}
                </div>
              </div>

              {/* Desktop Quick Action Buttons (Visible on xl screens) */}
              <div className="hidden xl:flex items-center space-x-2 xl:space-x-3">
                {/* 来店 (Google Map Icon) */}
                <button
                  type="button"
                  onClick={() => onSelectTab('company')}
                  className="flex flex-col items-center justify-center h-16 w-24 rounded-lg border border-gray-200 hover:border-[#FF9900] hover:bg-orange-50/60 transition group text-gray-700 shrink-0 text-center cursor-pointer"
                >
                  <svg className="w-5 h-5 text-red-500 mb-1 group-hover:scale-110 transition-transform" fill="currentColor" viewBox="0 0 24 24">
                    <path d="M12 2C8.13 2 5 5.13 5 9c0 5.25 7 13 7 13s7-7.75 7-13c0-3.87-3.13-7-7-7zm0 9.5a2.5 2.5 0 1 1 0-5 2.5 2.5 0 0 1 0 5z"></path>
                  </svg>
                  <span className="text-xs font-bold tracking-tight">{t.actions.visit}</span>
                </button>

                {/* 問い合わせ (Mail Icon) */}
                <button
                  type="button"
                  onClick={() => onSelectTab('contact')}
                  className="flex flex-col items-center justify-center h-16 w-24 rounded-lg border border-gray-200 hover:border-[#FF9900] hover:bg-orange-50/60 transition group text-gray-700 shrink-0 text-center cursor-pointer"
                >
                  <svg className="w-5 h-5 text-[#FF9900] mb-1 group-hover:scale-110 transition-transform" fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewBox="0 0 24 24">
                    <rect height="16" rx="2" width="20" x="2" y="4"></rect>
                    <path d="m22 7-8.97 5.7a1.94 1.94 0 0 1-2.06 0L2 7"></path>
                  </svg>
                  <span className="text-xs font-bold tracking-tight">{t.actions.inquiry}</span>
                </button>

                {/* LINE Icon */}
                <button
                  type="button"
                  onClick={onOpenLine}
                  className="flex flex-col items-center justify-center h-16 w-24 rounded-lg border border-green-200 bg-green-50/50 hover:bg-[#06C755] hover:border-[#06C755] transition group text-gray-800 hover:text-white shrink-0 text-center cursor-pointer"
                >
                  <img
                    alt="LINE"
                    className="w-5 h-5 object-contain mb-1 group-hover:scale-110 transition-transform"
                    src="https://lh3.googleusercontent.com/aida-public/AB6AXuDfbmYgK8csFGK0K662r7eue_CGa7pRCYw1jzzAObTSTA9XqIFgCTrxmVhGeQpRIp34-En2BaFW5DzfAvTZBfez4jSXXjFK1o6M-zIRgtRg8MrKStq1jgiQ8zEf1Z86YrARar4ydjsyPlZqgf77tlMs_2MfNx0xb7wGuMBNp2qvfOT03CUpA_FtcEEM5hXlkhfwme3lt78sxs1j9wREXS1pn4OOd4FPb60-2SqDfBxRjIGoRMX1PLsjPw"
                  />
                  <span className="text-xs font-bold tracking-tight">{t.actions.lineConsult}</span>
                </button>

                {/* WeChat Icon */}
                <button
                  type="button"
                  onClick={onOpenWeChat}
                  className="flex flex-col items-center justify-center h-16 w-24 rounded-lg border border-green-200 bg-green-50/50 hover:bg-[#07C160] hover:border-[#07C160] transition group text-gray-800 hover:text-white shrink-0 text-center cursor-pointer"
                >
                  <img
                    alt="WeChat"
                    className="w-6 h-6 object-contain mb-1 group-hover:scale-110 transition-transform"
                    src="/src/assets/wechat.png"
                  />
                  <span className="text-xs font-bold tracking-tight">{t.actions.wechatConsult}</span>
                </button>

                {/* TEL: 06-6777-4124 */}
                <a
                  className="flex items-center justify-center space-x-2.5 h-16 px-4 rounded-lg bg-gradient-to-r from-[#FF9900] to-[#E68A00] text-white shadow-sm hover:shadow-md hover:brightness-105 transition group ml-1 shrink-0"
                  href="tel:06-6777-4124"
                >
                  <div className="bg-white/20 p-1.5 rounded-full flex items-center justify-center shrink-0">
                    <svg className="w-4 h-4 text-white animate-pulse" fill="currentColor" viewBox="0 0 24 24">
                      <path d="M6.62 10.79a15.053 15.053 0 0 0 6.59 6.59l2.2-2.2c.27-.27.67-.36 1.02-.24 1.12.37 2.33.57 3.57.57.55 0 1 .45 1 1V20c0 .55-.45 1-1 1-9.39 0-17-7.61-17-17 0-.55.45-1 1-1h3.5c.55 0 1 .45 1 1 0 1.25.2 2.45.57 3.57.11.35.03.74-.25 1.02l-2.2 2.2z"></path>
                    </svg>
                  </div>
                  <div className="text-left">
                    <span className="text-base font-extrabold tracking-tight leading-none whitespace-nowrap">
                      TEL: 06-6777-4124
                    </span>
                  </div>
                </a>
              </div>

              {/* Mobile / Narrow Screen Menu Controls */}
              <div className="flex xl:hidden items-center space-x-2 ml-auto">
                <a
                  aria-label="電話をかける"
                  className="hidden p-2 sm:p-2.5 rounded-lg bg-orange-100 text-[#FF9900] hover:bg-orange-200 transition"
                  href="tel:06-6777-4124"
                >
                  <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
                    <path d="M6.62 10.79a15.053 15.053 0 0 0 6.59 6.59l2.2-2.2c.27-.27.67-.36 1.02-.24 1.12.37 2.33.57 3.57.57.55 0 1 .45 1 1V20c0 .55-.45 1-1 1-9.39 0-17-7.61-17-17 0-.55.45-1 1-1h3.5c.55 0 1 .45 1 1 0 1.25.2 2.45.57 3.57.11.35.03.74-.25 1.02l-2.2 2.2z"></path>
                  </svg>
                </a>
                <button
                  type="button"
                  onClick={onOpenDrawer}
                  aria-label="カテゴリ一覧を開く"
                  className="flex items-center space-x-1.5 px-3 py-2 bg-[#FF9900] hover:bg-[#E68A00] text-white rounded-lg font-bold text-xs sm:text-sm shadow-sm transition active:scale-95 cursor-pointer"
                >
                  <svg className="w-4 h-4 sm:w-5 sm:h-5" fill="none" stroke="currentColor" strokeWidth="2.5" viewBox="0 0 24 24">
                    <path d="M4 6h16M4 12h16M4 18h16" strokeLinecap="round" strokeLinejoin="round"></path>
                  </svg>
                  <span>{t.actions.drawerTitle.split('・')[0]}</span>
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* 3. Menubar (Global Navigation) */}
      <nav className="bg-[#2D2A26] text-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <ul className="grid grid-cols-5 text-xs sm:text-sm font-bold divide-x divide-white/10 w-full">
            {/* ホーム */}
            <li className="flex">
              <button
                type="button"
                onClick={() => onSelectTab('home')}
                className={`flex-1 flex items-center justify-center space-x-1.5 py-3.5 px-2 transition text-center cursor-pointer ${
                  activeTab === 'home'
                    ? 'border-b-2 border-[#FF9900] bg-black/20 text-[#FF9900]'
                    : 'border-b-2 border-transparent hover:border-[#FF9900] hover:text-[#FF9900] text-gray-200'
                }`}
              >
                <svg className="w-4 h-4 shrink-0" fill="currentColor" viewBox="0 0 20 20">
                  <path d="M10.707 2.293a1 1 0 00-1.414 0l-7 7a1 1 0 001.414 1.414L4 10.414V17a1 1 0 001 1h2a1 1 0 001-1v-2a1 1 0 011-1h2a1 1 0 011 1v2a1 1 0 001 1h2a1 1 0 001-1v-6.586l.293.293a1 1 0 001.414-1.414l-7-7z"></path>
                </svg>
                <span className="truncate">{t.nav.home}</span>
              </button>
            </li>

            {/* 会社概要 */}
            <li className="flex">
              <button
                type="button"
                onClick={() => onSelectTab('company')}
                className={`flex-1 flex items-center justify-center py-3.5 px-2 transition text-center cursor-pointer ${
                  activeTab === 'company'
                    ? 'border-b-2 border-[#FF9900] bg-black/20 text-[#FF9900]'
                    : 'border-b-2 border-transparent hover:border-[#FF9900] hover:text-[#FF9900] text-gray-200'
                }`}
              >
                <span className="truncate">{t.nav.company}</span>
              </button>
            </li>

            {/* 物件売却 */}
            <li className="flex">
              <button
                type="button"
                onClick={() => onSelectTab('sell')}
                className={`flex-1 flex items-center justify-center space-x-1 py-3.5 px-2 transition text-center cursor-pointer ${
                  activeTab === 'sell'
                    ? 'border-b-2 border-[#FF9900] bg-black/20 text-[#FF9900]'
                    : 'border-b-2 border-transparent hover:border-[#FF9900] hover:text-[#FF9900] text-gray-200'
                }`}
              >
                <span className="truncate">{t.nav.sell}</span>
              </button>
            </li>

            {/* 物件情報 */}
            <li className="flex">
              <button
                type="button"
                onClick={() => onSelectTab('properties')}
                className={`flex-1 flex items-center justify-center py-3.5 px-2 transition text-center cursor-pointer ${
                  activeTab === 'properties'
                    ? 'border-b-2 border-[#FF9900] bg-black/20 text-[#FF9900]'
                    : 'border-b-2 border-transparent hover:border-[#FF9900] hover:text-[#FF9900] text-gray-200'
                }`}
              >
                <span className="truncate">{t.nav.properties}</span>
              </button>
            </li>

            {/* お問い合わせ */}
            <li className="flex">
              <button
                type="button"
                onClick={() => onSelectTab('contact')}
                className={`flex-1 flex items-center justify-center py-3.5 px-2 transition text-center cursor-pointer ${
                  activeTab === 'contact'
                    ? 'border-b-2 border-[#FF9900] bg-black/20 text-[#FF9900]'
                    : 'border-b-2 border-transparent hover:border-[#FF9900] hover:text-[#FF9900] text-gray-200'
                }`}
              >
                <span className="truncate">{t.nav.contact}</span>
              </button>
            </li>
          </ul>
        </div>
      </nav>
    </header>
  );
};
