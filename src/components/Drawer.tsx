import React from 'react';
import { PageTab, Language } from '../types';
import { TRANSLATIONS } from '../data/translations';

interface DrawerProps {
  isOpen: boolean;
  onClose: () => void;
  activeTab: PageTab;
  onSelectTab: (tab: PageTab) => void;
  currentLang: Language;
  onSelectLang: (lang: Language) => void;
  onOpenWeChat: () => void;
  onOpenLine: () => void;
}

export const Drawer: React.FC<DrawerProps> = ({
  isOpen,
  onClose,
  activeTab,
  onSelectTab,
  currentLang,
  onSelectLang,
  onOpenWeChat,
  onOpenLine,
}) => {
  const t = TRANSLATIONS[currentLang];

  const handleNavClick = (tab: PageTab) => {
    onSelectTab(tab);
    onClose();
  };

  return (
    <div
      aria-hidden={!isOpen}
      className={`fixed inset-0 z-50 transition-all duration-300 ${
        isOpen ? 'pointer-events-auto' : 'pointer-events-none'
      }`}
    >
      {/* Backdrop / Scrim */}
      <div
        className={`absolute inset-0 bg-black/60 transition-opacity duration-300 ${
          isOpen ? 'opacity-100' : 'opacity-0'
        }`}
        onClick={onClose}
      />

      {/* Drawer Content Panel */}
      <div
        className={`absolute top-0 right-0 w-[85%] max-w-sm h-full bg-white shadow-2xl flex flex-col transition-transform duration-300 ease-in-out overflow-y-auto ${
          isOpen ? 'translate-x-0' : 'translate-x-full'
        }`}
      >
        {/* Drawer Top Bar */}
        <div className="p-4 border-b border-gray-200 flex items-center justify-between bg-amber-50/50 shrink-0">
          <div className="flex items-center space-x-2">
            <span className="w-2.5 h-2.5 rounded-full bg-[#FF9900]" />
            <h2 className="font-bold text-gray-800 text-base">{t.actions.drawerTitle}</h2>
          </div>
          <button
            type="button"
            aria-label="閉じる"
            className="p-2 rounded-lg text-gray-500 hover:text-gray-900 hover:bg-gray-100 transition cursor-pointer"
            onClick={onClose}
          >
            <svg className="w-6 h-6" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24">
              <path d="M6 18L18 6M6 6l12 12" strokeLinecap="round" strokeLinejoin="round" />
            </svg>
          </button>
        </div>

        {/* Language Switcher Bar */}
        <div className="px-4 py-2.5 bg-white border-b border-gray-100 flex items-center justify-between shrink-0">
          <span className="text-xs font-bold text-gray-500 flex items-center gap-1.5">
            <svg className="w-3.5 h-3.5 text-[#FF9900]" fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewBox="0 0 24 24">
              <circle cx="12" cy="12" r="10" />
              <line x1="2" x2="22" y1="12" y2="12" />
              <path d="M12 2a15.3 15.3 0 0 1 4 10 15.3 15.3 0 0 1-4 10 15.3 15.3 0 0 1-4-10 15.3 15.3 0 0 1 4-10z" />
            </svg>
            言語切替
          </span>
          <div className="inline-flex items-center gap-1 bg-gray-100 p-1 rounded-lg border border-gray-200">
            {(['ja', 'zh', 'en'] as Language[]).map((lang) => {
              const label = lang === 'ja' ? '日本語' : lang === 'zh' ? '中文' : 'EN';
              const isActive = currentLang === lang;
              return (
                <button
                  key={lang}
                  type="button"
                  onClick={() => onSelectLang(lang)}
                  className={`px-2 py-0.5 rounded text-xs transition cursor-pointer ${
                    isActive
                      ? 'font-bold bg-white text-[#FF9900] shadow-sm'
                      : 'font-medium text-gray-600 hover:text-gray-900'
                  }`}
                >
                  {label}
                </button>
              );
            })}
          </div>
        </div>

        {/* Action Buttons Layer (Mobile Reconstructed) */}
        <div className="p-4 space-y-3 bg-gray-50 border-b border-gray-200 shrink-0">
          <p className="text-xs font-bold text-gray-500 uppercase tracking-wider">{t.actions.quickInquiry}</p>

          {/* TEL */}
          <a
            className="flex items-center justify-between p-3.5 bg-gradient-to-r from-[#FF9900] to-[#E68A00] text-white rounded-xl shadow-sm font-bold"
            href="tel:06-6777-4124"
          >
            <div className="flex items-center space-x-3">
              <div className="bg-white/20 p-2 rounded-full">
                <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M6.62 10.79a15.053 15.053 0 0 0 6.59 6.59l2.2-2.2c.27-.27.67-.36 1.02-.24 1.12.37 2.33.57 3.57.57.55 0 1 .45 1 1V20c0 .55-.45 1-1 1-9.39 0-17-7.61-17-17 0-.55.45-1 1-1h3.5c.55 0 1 .45 1 1 0 1.25.2 2.45.57 3.57.11.35.03.74-.25 1.02l-2.2 2.2z"></path>
                </svg>
              </div>
              <div>
                <span className="block text-[10px] text-orange-100">{t.actions.callNow}</span>
                <span className="text-sm font-extrabold">TEL: 06-6777-4124</span>
              </div>
            </div>
            <span className="text-xs bg-white text-[#FF9900] font-black px-2 py-1 rounded">発信</span>
          </a>

          {/* LINE */}
          <button
            type="button"
            onClick={() => {
              onOpenLine();
              onClose();
            }}
            className="w-full flex items-center justify-between p-3 bg-white border border-[#06C755] text-gray-800 rounded-xl hover:bg-green-50 transition text-left cursor-pointer"
          >
            <div className="flex items-center space-x-3">
              <div className="bg-[#06C755] p-2 rounded-full text-white">
                <svg className="w-5 h-5 fill-current" viewBox="0 0 24 24">
                  <path d="M24 10.3c0-4.6-4.9-8.3-11-8.3C6.9 2 2 5.7 2 10.3c0 4.1 3.6 7.6 8.7 8.2.4.1.9.3 1 .6.1.4 0 .9-.1 1.4l-.3 1.6c-.1.5-.2 1.1.2 1.4.3.2.7.1 1.2-.2 2.3-1.4 6.2-4.1 8.5-7 1.8-1.7 2.8-3.7 2.8-5.6z"></path>
                </svg>
              </div>
              <div>
                <span className="block font-bold text-sm text-gray-800">{t.actions.lineConsult}</span>
                <span className="text-xs text-gray-500">{t.actions.lineAccount}</span>
              </div>
            </div>
            <svg className="w-5 h-5 text-gray-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path d="M9 5l7 7-7 7" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2"></path>
            </svg>
          </button>

          {/* WeChat */}
          <button
            type="button"
            onClick={() => {
              onOpenWeChat();
              onClose();
            }}
            className="w-full flex items-center justify-between p-3 bg-white border border-[#07C160] text-gray-800 rounded-xl hover:bg-green-50 transition text-left cursor-pointer"
          >
            <div className="flex items-center space-x-3">
              <div className="bg-[#07C160] p-2 rounded-full text-white flex items-center justify-center">
                <img
                  alt="WeChat"
                  className="w-5 h-5 object-contain brightness-0 invert"
                  src="./assets/wechat.png"
                />
              </div>
              <div>
                <span className="block font-bold text-sm text-gray-800">{t.actions.wechatConsult}</span>
                <span className="text-xs text-gray-500">{t.actions.wechatAccount}</span>
              </div>
            </div>
            <svg className="w-5 h-5 text-gray-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path d="M9 5l7 7-7 7" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2"></path>
            </svg>
          </button>

          {/* 問い合わせ (Mail) */}
          <button
            type="button"
            onClick={() => handleNavClick('contact')}
            className="w-full flex items-center justify-between p-3 bg-white border border-gray-200 text-gray-800 rounded-xl hover:bg-orange-50 transition text-left cursor-pointer"
          >
            <div className="flex items-center space-x-3">
              <div className="bg-orange-100 p-2 rounded-full text-[#FF9900]">
                <svg className="w-5 h-5" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24">
                  <rect height="16" rx="2" width="20" x="2" y="4"></rect>
                  <path d="m22 7-8.97 5.7a1.94 1.94 0 0 1-2.06 0L2 7"></path>
                </svg>
              </div>
              <div>
                <span className="block font-bold text-sm text-gray-800">{t.actions.inquiry}</span>
                <span className="text-xs text-gray-500">{t.actions.formContact}</span>
              </div>
            </div>
            <svg className="w-5 h-5 text-gray-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path d="M9 5l7 7-7 7" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2"></path>
            </svg>
          </button>

          {/* 来店 (Google Map) */}
          <button
            type="button"
            onClick={() => handleNavClick('company')}
            className="w-full flex items-center justify-between p-3 bg-white border border-gray-200 text-gray-800 rounded-xl hover:bg-orange-50 transition text-left cursor-pointer"
          >
            <div className="flex items-center space-x-3">
              <div className="bg-red-100 p-2 rounded-full text-red-500">
                <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M12 2C8.13 2 5 5.13 5 9c0 5.25 7 13 7 13s7-7.75 7-13c0-3.87-3.13-7-7-7zm0 9.5a2.5 2.5 0 1 1 0-5 2.5 2.5 0 0 1 0 5z"></path>
                </svg>
              </div>
              <div>
                <span className="block font-bold text-sm text-gray-800">{t.actions.visit}</span>
                <span className="text-xs text-gray-500">{t.actions.visitAccess}</span>
              </div>
            </div>
            <svg className="w-5 h-5 text-gray-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path d="M9 5l7 7-7 7" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2"></path>
            </svg>
          </button>
        </div>

        {/* Navigation Links in Drawer */}
        <div className="p-4 flex-1">
          <p className="text-xs font-bold text-gray-500 uppercase tracking-wider mb-2">メニュー</p>
          <nav className="space-y-1">
            <button
              type="button"
              onClick={() => handleNavClick('home')}
              className={`w-full flex items-center justify-between p-3 rounded-lg font-bold text-left transition cursor-pointer ${
                activeTab === 'home' ? 'bg-orange-50 text-[#FF9900]' : 'hover:bg-gray-100 text-gray-800'
              }`}
            >
              <span>{t.nav.home}</span>
              <svg className="w-4 h-4 text-gray-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path d="M9 5l7 7-7 7" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2"></path>
              </svg>
            </button>

            <button
              type="button"
              onClick={() => handleNavClick('company')}
              className={`w-full flex items-center justify-between p-3 rounded-lg font-bold text-left transition cursor-pointer ${
                activeTab === 'company' ? 'bg-orange-50 text-[#FF9900]' : 'hover:bg-gray-100 text-gray-800'
              }`}
            >
              <span>{t.nav.company}</span>
              <svg className="w-4 h-4 text-gray-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path d="M9 5l7 7-7 7" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2"></path>
              </svg>
            </button>

            <button
              type="button"
              onClick={() => handleNavClick('sell')}
              className={`w-full flex items-center justify-between p-3 rounded-lg font-bold text-left transition cursor-pointer ${
                activeTab === 'sell' ? 'bg-orange-50 text-[#FF9900]' : 'hover:bg-gray-100 text-gray-800'
              }`}
            >
              <span>{t.nav.sell}</span>
              <svg className="w-4 h-4 text-gray-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path d="M9 5l7 7-7 7" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2"></path>
              </svg>
            </button>

            <button
              type="button"
              onClick={() => handleNavClick('properties')}
              className={`w-full flex items-center justify-between p-3 rounded-lg font-bold text-left transition cursor-pointer ${
                activeTab === 'properties' ? 'bg-orange-50 text-[#FF9900]' : 'hover:bg-gray-100 text-gray-800'
              }`}
            >
              <span>{t.nav.properties}</span>
              <svg className="w-4 h-4 text-gray-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path d="M9 5l7 7-7 7" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2"></path>
              </svg>
            </button>

            <button
              type="button"
              onClick={() => handleNavClick('contact')}
              className={`w-full flex items-center justify-between p-3 rounded-lg font-bold text-left transition cursor-pointer ${
                activeTab === 'contact' ? 'bg-orange-50 text-[#FF9900]' : 'hover:bg-gray-100 text-gray-800'
              }`}
            >
              <span>{t.nav.contact}</span>
              <svg className="w-4 h-4 text-gray-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path d="M9 5l7 7-7 7" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2"></path>
              </svg>
            </button>
          </nav>
        </div>

        {/* Drawer Footer */}
        <div className="mt-auto p-4 bg-gray-100 border-t border-gray-200 text-center text-xs text-gray-500 shrink-0">
          <p className="font-bold text-gray-700">レイワ不動産</p>
          <p className="mt-1">大阪府を中心とした戸建て・マンションの売買専門</p>
        </div>
      </div>
    </div>
  );
};
