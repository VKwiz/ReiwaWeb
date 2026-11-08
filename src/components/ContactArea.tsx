import React from 'react';
import { PageTab } from '../types';

interface ContactAreaProps {
  onSelectTab: (tab: PageTab) => void;
  onOpenWeChat: () => void;
  onOpenLine: () => void;
}

export const ContactArea: React.FC<ContactAreaProps> = ({
  onSelectTab,
  onOpenWeChat,
  onOpenLine,
}) => {
  return (
    <section className="w-full bg-white border-t border-gray-200 py-12" id="contact-section">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-8">
          <span className="inline-block px-3 py-1 bg-orange-100 text-[#FF9900] text-xs font-bold rounded-full mb-2 tracking-wide">
            CONTACT &amp; ACCESS
          </span>
          <h2 className="text-2xl sm:text-3xl font-bold text-gray-900">お問い合わせ・ご相談</h2>
          <p className="text-sm text-gray-500 mt-1">不動産の売買・査定など、まずはお気軽にご連絡ください</p>
        </div>

        <div className="bg-orange-50/60 rounded-2xl border border-orange-100 p-6 sm:p-8 lg:p-10 shadow-sm grid grid-cols-1 lg:grid-cols-12 gap-8 items-center">
          {/* Left Part: Office Picture & Company Details */}
          <div className="lg:col-span-7 flex flex-col space-y-4">
            <div className="overflow-hidden rounded-xl shadow-sm aspect-[4/3] w-full bg-gray-100">
              <img
                alt="レイワ不動産 店内相談カウンター"
                className="w-full h-full object-cover transition-transform duration-300 hover:scale-105"
                src="https://lh3.googleusercontent.com/aida-public/AB6AXuCKy1sMzUK6V9z-PhslYbmxm_TE4Z5rQBuFV_ZIEQMqnq5yiHYlQF_fhK-hDw5cmpXrBKzyKjvUcSs1v80z7SLvuOC__zcTPwtk7G-LAP2JoIMYDyrX1ycdnew0OYRfAl_cNWTS910J-HuMsrArrkaydP2YUbWg5hkrmC4-QJYSSoWxTrYisijALFwhW9iW5dXZuwQ3SWutHMkzu-OtQ_dunfbPdMJfMoXSyTufuGuqJsX6vbdbtI6x-fUPddsWYwkcsyfH81un2jm-JBE"
              />
            </div>
          </div>

          {/* Right Part: Three Action Buttons */}
          <div className="lg:col-span-5 flex flex-col gap-4 justify-center">
            <div className="space-y-2 pb-2 border-b border-orange-100">
              <h3 className="text-2xl font-bold text-gray-900 tracking-tight">レイワ不動産</h3>
              <div className="flex items-center space-x-2">
                <a
                  className="inline-flex items-center space-x-2 text-xl sm:text-2xl font-black text-[#FF9900] hover:text-[#E68A00] transition"
                  href="mailto:reiwagodo@gmail.com"
                >
                  <span className="p-1.5 rounded-full bg-[#FF9900] text-white flex items-center justify-center shrink-0">
                    <svg className="w-5 h-5" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24">
                      <rect height="16" rx="2" width="20" x="2" y="4"></rect>
                      <path d="m22 7-8.97 5.7a1.94 1.94 0 0 1-2.06 0L2 7"></path>
                    </svg>
                  </span>
                  <span>reiwagodo@gmail.com</span>
                </a>
              </div>
              <div className="flex items-center space-x-2">
                <a
                  className="inline-flex items-center space-x-2 text-xl sm:text-2xl font-black text-[#FF9900] hover:text-[#E68A00] transition"
                  href="tel:06-6777-4124"
                >
                  <span className="p-1.5 rounded-full bg-[#FF9900] text-white flex items-center justify-center shrink-0">
                    <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 24 24">
                      <path d="M6.62 10.79a15.053 15.053 0 0 0 6.59 6.59l2.2-2.2c.27-.27.67-.36 1.02-.24 1.12.37 2.33.57 3.57.57.55 0 1 .45 1 1V20c0 .55-.45 1-1 1-9.39 0-17-7.61-17-17 0-.55.45-1 1-1h3.5c.55 0 1 .45 1 1 0 1.25.2 2.45.57 3.57.11.35.03.74-.25 1.02l-2.2 2.2z"></path>
                    </svg>
                  </span>
                  <span>TEL: 06-6777-4124</span>
                </a>
              </div>
              <p className="text-sm text-gray-600 flex items-center space-x-1.5">
                <svg className="w-4 h-4 text-[#FF9900] shrink-0" fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewBox="0 0 24 24">
                  <path d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z"></path>
                  <path d="M15 11a3 3 0 11-6 0 3 3 0 016 0z"></path>
                </svg>
                <span>大阪府大阪市東住吉区杭全4丁目12-6</span>
              </p>
              <p className="text-sm text-gray-600 flex items-center space-x-1.5">
                <svg className="w-4 h-4 text-gray-400 shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <circle cx="12" cy="12" r="10" strokeWidth="2"></circle>
                  <polyline points="12 6 12 12 16 14" strokeWidth="2"></polyline>
                </svg>
                <span>営業時間 09:00〜17:00</span>
              </p>
            </div>

            {/* 1. お問い合わせ (Mail) Button */}
            <button
              type="button"
              onClick={() => onSelectTab('contact')}
              className="flex items-center justify-center space-x-3 w-full py-4 px-6 rounded-xl bg-gradient-to-r from-[#FF9900] to-[#E68A00] text-white font-bold text-base shadow-sm hover:shadow-md hover:brightness-105 transition active:scale-95 cursor-pointer text-center"
            >
              <svg className="w-6 h-6 text-white shrink-0" fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewBox="0 0 24 24">
                <rect height="16" rx="2" width="20" x="2" y="4"></rect>
                <path d="m22 7-8.97 5.7a1.94 1.94 0 0 1-2.06 0L2 7"></path>
              </svg>
              <span>お問い合わせ</span>
            </button>

            {/* 2. Lineで相談 Button */}
            <button
              type="button"
              onClick={onOpenLine}
              className="flex items-center justify-center space-x-3 w-full py-4 px-6 rounded-xl bg-[#06C755] hover:bg-[#05b34c] text-white font-bold text-base shadow-sm hover:shadow-md transition active:scale-95 cursor-pointer text-center"
            >
              <svg className="w-6 h-6 fill-current text-white shrink-0" viewBox="0 0 24 24">
                <path d="M24 10.3c0-4.6-4.9-8.3-11-8.3C6.9 2 2 5.7 2 10.3c0 4.1 3.6 7.6 8.7 8.2.4.1.9.3 1 .6.1.4 0 .9-.1 1.4l-.3 1.6c-.1.5-.2 1.1.2 1.4.3.2.7.1 1.2-.2 2.3-1.4 6.2-4.1 8.5-7 1.8-1.7 2.8-3.7 2.8-5.6z"></path>
              </svg>
              <span>Lineで相談</span>
            </button>

            {/* 3. WeChatで相談 Button */}
            <button
              type="button"
              onClick={onOpenWeChat}
              className="flex items-center justify-center space-x-3 w-full py-4 px-6 rounded-xl bg-[#07C160] hover:bg-[#06ad56] text-white font-bold text-base shadow-sm hover:shadow-md transition active:scale-95 cursor-pointer text-center"
            >
              <img
                alt="WeChat"
                className="w-6 h-6 object-contain shrink-0 brightness-0 invert"
                src="https://lh3.googleusercontent.com/aida/AEtjO1UiGUR_ZM2MrA1PnZ-2K_djtPnERHmRpZLktJ2i5jBKKn4w36v789y-_t4ILLLrTQfbzT7-YGFNoziUhScDTm_UzGZu2hP9SVxd2W-8QiTWClhcEOiuPkhfCcUxAAMUfNvEfCbUklhm6OA4Y4wPyEzX1EPrCsA6kOEsUwYXZI3x8vPj6Hz80QVBjb0guDaXpUo94M9IBqoWC1F6IkW6MVm34ACeGmgoU33DV_wAdt8xZg"
              />
              <span>WeChatで相談</span>
            </button>

            {/* 4. ご来店 Button */}
            <button
              type="button"
              onClick={() => onSelectTab('company')}
              className="flex items-center justify-center space-x-3 w-full py-4 px-6 rounded-xl bg-white border-2 border-gray-300 hover:border-[#FF9900] text-gray-800 hover:text-[#FF9900] font-bold text-base shadow-sm hover:shadow transition active:scale-95 cursor-pointer text-center"
            >
              <svg className="w-6 h-6 text-red-500 shrink-0" fill="currentColor" viewBox="0 0 24 24">
                <path d="M12 2C8.13 2 5 5.13 5 9c0 5.25 7 13 7 13s7-7.75 7-13c0-3.87-3.13-7-7-7zm0 9.5a2.5 2.5 0 1 1 0-5 2.5 2.5 0 0 1 0 5z"></path>
              </svg>
              <span>ご来店予約・アクセス</span>
            </button>
          </div>
        </div>
      </div>
    </section>
  );
};
