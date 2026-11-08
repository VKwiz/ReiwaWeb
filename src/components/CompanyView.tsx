import React from 'react';

export const CompanyView: React.FC = () => {
  return (
    <main className="flex-1 max-w-7xl mx-auto w-full px-4 sm:px-6 lg:px-8 py-8 sm:py-12">
      {/* Section Header Title */}
      <div className="mb-12 text-center">
        <div className="inline-flex items-center gap-2 mb-2">
          <span className="h-0.5 w-6 bg-[#FF9900]" />
          <span className="text-xs sm:text-sm font-bold uppercase tracking-wider text-[#FF9900]">Company Info</span>
          <span className="h-0.5 w-6 bg-[#FF9900]" />
        </div>
        <h1 className="text-2xl sm:text-3xl lg:text-4xl font-black text-gray-900 tracking-tight mb-3">
          会社概要
        </h1>
        <div className="w-16 h-1 bg-[#FF9900] mx-auto rounded-full mb-4" />
        <p className="text-xs sm:text-sm text-gray-600 max-w-2xl mx-auto leading-relaxed">
          レイワ不動産（合同会社麗和）の企業情報・所在地のご案内です。大阪府を中心に信頼の不動産売買・仲介サービスを提供しております。
        </p>
      </div>

      {/* Company Information Table */}
      <div className="max-w-6xl mx-auto mb-16 bg-white rounded-2xl shadow-sm border border-gray-200 overflow-hidden">
        <div className="border-b border-gray-100 bg-amber-50/40 px-6 py-4 flex items-center gap-3">
          <span className="w-2.5 h-2.5 rounded-full bg-[#FF9900]" />
          <h2 className="text-base font-bold text-gray-800 tracking-tight">企業基本情報</h2>
        </div>
        <div className="divide-y divide-gray-100 text-sm">
          {/* 会社名 */}
          <div className="flex flex-col sm:flex-row">
            <div className="sm:w-1/3 bg-gray-50/80 font-bold text-gray-700 py-4 px-6 shrink-0 flex items-center">
              会社名
            </div>
            <div className="sm:w-2/3 text-gray-800 py-4 px-6 flex items-center font-medium">
              合同会社麗和 <span className="text-gray-500 font-normal ml-2">（屋号：レイワ不動産）</span>
            </div>
          </div>

          {/* 所在地 */}
          <div className="flex flex-col sm:flex-row">
            <div className="sm:w-1/3 bg-gray-50/80 font-bold text-gray-700 py-4 px-6 shrink-0 flex items-center">
              所在地
            </div>
            <div className="sm:w-2/3 text-gray-800 py-4 px-6 leading-relaxed">
              〒546-0002 大阪府大阪市東住吉区杭全4丁目12-6
            </div>
          </div>

          {/* TEL */}
          <div className="flex flex-col sm:flex-row">
            <div className="sm:w-1/3 bg-gray-50/80 font-bold text-gray-700 py-4 px-6 shrink-0 flex items-center">
              TEL
            </div>
            <div className="sm:w-2/3 text-gray-800 py-4 px-6 flex items-center font-bold text-base text-[#FF9900]">
              <a className="hover:underline flex items-center gap-1.5" href="tel:06-6777-4124">
                <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M6.62 10.79a15.053 15.053 0 0 0 6.59 6.59l2.2-2.2c.27-.27.67-.36 1.02-.24 1.12.37 2.33.57 3.57.57.55 0 1 .45 1 1V20c0 .55-.45 1-1 1-9.39 0-17-7.61-17-17 0-.55.45-1 1-1h3.5c.55 0 1 .45 1 1 0 1.25.2 2.45.57 3.57.11.35.03.74-.25 1.02l-2.2 2.2z"></path>
                </svg>
                06-6777-4124
              </a>
            </div>
          </div>

          {/* FAX */}
          <div className="flex flex-col sm:flex-row">
            <div className="sm:w-1/3 bg-gray-50/80 font-bold text-gray-700 py-4 px-6 shrink-0 flex items-center">
              FAX
            </div>
            <div className="sm:w-2/3 text-gray-800 py-4 px-6 font-medium">
              06-6777-9124
            </div>
          </div>

          {/* E-MAIL */}
          <div className="flex flex-col sm:flex-row">
            <div className="sm:w-1/3 bg-gray-50/80 font-bold text-gray-700 py-4 px-6 shrink-0 flex items-center">
              E-MAIL
            </div>
            <div className="sm:w-2/3 text-gray-800 py-4 px-6">
              <a className="text-[#FF9900] hover:underline font-medium" href="mailto:reiwagodo@gmail.com">
                reiwagodo@gmail.com
              </a>
            </div>
          </div>

          {/* 免許証番号 */}
          <div className="flex flex-col sm:flex-row">
            <div className="sm:w-1/3 bg-gray-50/80 font-bold text-gray-700 py-4 px-6 shrink-0 flex items-center">
              免許証番号
            </div>
            <div className="sm:w-2/3 text-gray-800 py-4 px-6 font-medium">
              大阪府知事(1)第65743号
            </div>
          </div>

          {/* 事業内容 */}
          <div className="flex flex-col sm:flex-row">
            <div className="sm:w-1/3 bg-gray-50/80 font-bold text-gray-700 py-4 px-6 shrink-0 flex items-start pt-4">
              事業内容
            </div>
            <div className="sm:w-2/3 text-gray-800 py-4 px-6 space-y-1.5">
              <p className="flex items-center gap-2">
                <span className="w-1.5 h-1.5 rounded-full bg-[#FF9900]" />
                不動産の売買・仲介・開発
              </p>
              <p className="flex items-center gap-2">
                <span className="w-1.5 h-1.5 rounded-full bg-[#FF9900]" />
                収益物件の企画・設計
              </p>
              <p className="flex items-center gap-2">
                <span className="w-1.5 h-1.5 rounded-full bg-[#FF9900]" />
                不動産のコンサルティング
              </p>
            </div>
          </div>

          {/* 対応言語 */}
          <div className="flex flex-col sm:flex-row">
            <div className="sm:w-1/3 bg-gray-50/80 font-bold text-gray-700 py-4 px-6 shrink-0 flex items-center">
              対応言語
            </div>
            <div className="sm:w-2/3 text-gray-800 py-4 px-6 flex flex-wrap items-center gap-2">
              <span className="px-3 py-1 bg-orange-100 text-[#FF9900] font-bold text-xs rounded-full border border-orange-200">
                日本語
              </span>
              <span className="px-3 py-1 bg-green-50 text-[#07C160] font-bold text-xs rounded-full border border-green-200">
                中国語（中文）
              </span>
              <span className="px-3 py-1 bg-blue-50 text-blue-600 font-bold text-xs rounded-full border border-blue-200">
                English
              </span>
            </div>
          </div>
        </div>
      </div>

      {/* Google Map & Access Section */}
      <div className="max-w-6xl mx-auto mb-12">
        <div className="flex flex-col sm:flex-row sm:items-end justify-between gap-4 mb-4">
          <div>
            <div className="inline-flex items-center gap-1.5 text-xs font-bold text-[#FF9900] uppercase tracking-wider mb-1">
              <svg className="w-4 h-4 text-red-500" fill="currentColor" viewBox="0 0 24 24">
                <path d="M12 2C8.13 2 5 5.13 5 9c0 5.25 7 13 7 13s7-7.75 7-13c0-3.87-3.13-7-7-7zm0 9.5a2.5 2.5 0 1 1 0-5 2.5 2.5 0 0 1 0 5z"></path>
              </svg>
              ACCESS &amp; LOCATION
            </div>
            <h2 className="text-xl sm:text-2xl font-bold text-gray-900 tracking-tight">
              アクセス・所在地マップ
            </h2>
            <p className="text-xs sm:text-sm text-gray-600 mt-1 flex items-center gap-1">
              〒546-0002 大阪府大阪市東住吉区杭全4丁目12-5
            </p>
          </div>
          <a
            className="inline-flex items-center justify-center gap-2 px-4 py-2.5 rounded-xl bg-white border border-gray-300 hover:border-[#FF9900] text-gray-700 hover:text-[#FF9900] text-xs font-bold shadow-sm transition active:scale-95 shrink-0"
            href="https://maps.google.com/?q=%E5%A4%A7%E9%98%AA%E5%BA%9C%E5%A4%A7%E9%98%AA%E5%B8%82%E6%9D%B1%E4%BD%8F%E5%90%89%E5%8C%BA%E6%9D%AD%E5%85%A84%E4%B8%81%E7%9B%AE12-5"
            rel="noopener noreferrer"
            target="_blank"
          >
            <svg className="w-4 h-4 text-red-500" fill="currentColor" viewBox="0 0 24 24">
              <path d="M12 2C8.13 2 5 5.13 5 9c0 5.25 7 13 7 13s7-7.75 7-13c0-3.87-3.13-7-7-7zm0 9.5a2.5 2.5 0 1 1 0-5 2.5 2.5 0 0 1 0 5z"></path>
            </svg>
            Googleマップで開く
            <svg className="w-3.5 h-3.5 text-gray-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2"></path>
            </svg>
          </a>
        </div>

        {/* Embedded Google Maps */}
        <div className="w-full rounded-2xl shadow-md border border-gray-200 overflow-hidden bg-gray-100">
          <iframe
            title="レイワ不動産 所在地マップ"
            allowFullScreen
            height="450"
            loading="lazy"
            referrerPolicy="no-referrer-when-downgrade"
            src="https://maps.google.com/maps?q=%E5%A4%A7%E9%98%AA%E5%BA%9C%E5%A4%A7%E9%98%AA%E5%B8%82%E6%9D%B1%E4%BD%8F%E5%90%89%E5%8C%BA%E6%9D%AD%E5%85%A84%E4%B8%81%E7%9B%AE12-5&t=&z=16&ie=UTF8&iwloc=&output=embed"
            style={{ border: 0, display: 'block' }}
            width="100%"
          />
        </div>
      </div>

      {/* Notice Banner */}
      <div className="w-full max-w-6xl mx-auto px-6 py-6 sm:px-8 sm:py-8 rounded-2xl bg-orange-50/60 border border-amber-200/60 flex flex-col sm:flex-row items-center justify-center gap-4 text-center sm:text-left text-gray-800 shadow-sm">
        <svg className="w-10 h-10 text-[#FF9900] shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path d="M19 21V5a2 2 0 00-2-2H7a2 2 0 00-2 2v16m14 0h2m-2 0h-5m-9 0H3m2 0h5M9 7h1m-1 4h1m4-4h1m-1 4h1m-5 10v-5a1 1 0 011-1h2a1 1 0 011 1v5m-4 0h4" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2"></path>
        </svg>
        <span className="text-base sm:text-lg font-bold leading-relaxed text-gray-800">
          不動産に関するご相談・査定依頼・ご来店の予約など、お気軽にお問い合わせください。
        </span>
      </div>
    </main>
  );
};
