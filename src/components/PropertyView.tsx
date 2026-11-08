import React, { useState, useRef, useEffect } from 'react';
import { PropertyItem, PageTab } from '../types';
import { PROPERTIES } from '../data/properties';

interface PropertyViewProps {
  onSelectTab: (tab: PageTab) => void;
  onOpenVideo: (property: PropertyItem) => void;
  onSelectPropertyForInquiry: (propertyTitle: string) => void;
  initialCategory?: string;
}

export const PropertyView: React.FC<PropertyViewProps> = ({
  onSelectTab,
  onOpenVideo,
  onSelectPropertyForInquiry,
  initialCategory,
}) => {
  const [currentPage, setCurrentPage] = useState<number>(1);
  const [activeCategory, setActiveCategory] = useState<string>(initialCategory || 'all');
  const gridTopRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (initialCategory) {
      setActiveCategory(initialCategory);
      setCurrentPage(1);
    }
  }, [initialCategory]);

  const filteredProperties = PROPERTIES.filter((p) => {
    if (activeCategory === 'all') return true;
    return p.category === activeCategory;
  });

  const itemsPerPage = 6;
  const totalPages = Math.ceil(filteredProperties.length / itemsPerPage) || 1;
  const startIndex = (currentPage - 1) * itemsPerPage;
  const currentProperties = filteredProperties.slice(startIndex, startIndex + itemsPerPage);

  const handlePageChange = (page: number) => {
    if (page < 1 || page > totalPages) return;
    setCurrentPage(page);
    if (gridTopRef.current) {
      gridTopRef.current.scrollIntoView({ behavior: 'smooth', block: 'start' });
    }
  };

  const handleInquiryClick = (propertyTitle: string) => {
    onSelectPropertyForInquiry(propertyTitle);
    onSelectTab('contact');
  };

  return (
    <main className="flex-1 max-w-7xl mx-auto w-full px-4 sm:px-6 lg:px-8 py-8 sm:py-12" ref={gridTopRef}>
      {/* Section Header Title */}
      <div className="mb-10 text-center">
        <div className="inline-flex items-center gap-2 mb-2">
          <span className="h-0.5 w-6 bg-[#FF9900]" />
          <span className="text-xs sm:text-sm font-bold uppercase tracking-wider text-[#FF9900]">Property Info</span>
          <span className="h-0.5 w-6 bg-[#FF9900]" />
        </div>
        <h1 className="text-2xl sm:text-3xl lg:text-4xl font-black text-gray-900 tracking-tight mb-3">
          物件情報
        </h1>
        <div className="w-16 h-1 bg-[#FF9900] mx-auto rounded-full mb-4" />
        <p className="text-xs sm:text-sm text-gray-600 max-w-2xl mx-auto leading-relaxed">
          ルームツアー・物件紹介ショート動画一覧。実際のお部屋の雰囲気やこだわりポイントを動画でわかりやすくご覧いただけます。
        </p>

        {/* Category Filter Tabs */}
        <div className="flex flex-wrap items-center justify-center gap-2 mt-6">
          {[
            { id: 'all', label: 'すべての物件' },
            { id: 'house', label: '一戸建て' },
            { id: 'commercial', label: '事業用・収益ビル・店舗' },
            { id: 'land', label: '土地・用地' },
          ].map((cat) => (
            <button
              key={cat.id}
              type="button"
              onClick={() => {
                setActiveCategory(cat.id);
                setCurrentPage(1);
              }}
              className={`px-4 py-2 rounded-xl text-xs sm:text-sm font-bold transition cursor-pointer ${
                activeCategory === cat.id
                  ? 'bg-[#FF9900] text-white shadow-md'
                  : 'bg-white text-gray-700 hover:bg-gray-100 border border-gray-200'
              }`}
            >
              {cat.label}
            </button>
          ))}
        </div>
      </div>

      {/* Responsive YouTube Shorts Grid */}
      {currentProperties.length === 0 ? (
        <div className="bg-white rounded-2xl border border-gray-200 p-12 text-center text-gray-500">
          <p className="font-bold text-base">該当する物件が見つかりませんでした。</p>
          <button
            type="button"
            onClick={() => {
              setActiveCategory('all');
              setCurrentPage(1);
            }}
            className="mt-4 px-4 py-2 bg-orange-100 text-[#FF9900] font-bold rounded-xl text-xs hover:bg-orange-200 transition cursor-pointer"
          >
            すべての物件を表示
          </button>
        </div>
      ) : (
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 lg:gap-8" id="propertiesGrid">
          {currentProperties.map((prop) => (
            <div
              key={prop.id}
              className="property-card bg-white rounded-2xl border border-gray-200 shadow-sm hover:shadow-xl transition-all duration-300 overflow-hidden flex flex-col group"
            >
              {/* Video Thumbnail Area */}
              <div
                onClick={() => onOpenVideo(prop)}
                className="relative w-full aspect-[9/16] bg-black overflow-hidden block group/thumb cursor-pointer"
              >
                <img
                  src={`https://img.youtube.com/vi/${prop.shortsId}/hqdefault.jpg`}
                  alt={prop.title}
                  className="w-full h-full object-cover transition-transform duration-300 group-hover:scale-105"
                />
                <div className="absolute inset-0 bg-black/20 group-hover:bg-black/40 transition-colors flex items-center justify-center">
                  <div className="w-16 h-16 rounded-full bg-red-600/90 text-white flex items-center justify-center shadow-lg transform transition-transform duration-300 group-hover:scale-110 group-hover:bg-red-600">
                    <svg className="w-8 h-8 ml-1 fill-current" viewBox="0 0 24 24">
                      <path d="M8 5v14l11-7z"></path>
                    </svg>
                  </div>
                </div>
                <div className="absolute top-3 left-3 bg-[#FF9900] text-white text-xs font-bold px-2.5 py-1 rounded shadow-md">
                  {prop.price}
                </div>
                <div className="absolute bottom-3 right-3 bg-black/70 text-white text-[10px] font-bold px-2 py-0.5 rounded flex items-center gap-1">
                  <span>YouTube Shorts</span>
                </div>
              </div>

              {/* Property Details */}
              <div className="p-5 flex-1 flex flex-col justify-between space-y-4 bg-white">
                <div>
                  <div className="flex flex-wrap gap-1.5 mb-2.5">
                    {prop.tags.map((tag, idx) => (
                      <span
                        key={idx}
                        className={`inline-block px-2.5 py-0.5 text-[11px] rounded-full ${
                          idx === 0
                            ? 'font-bold bg-orange-100 text-[#FF9900]'
                            : 'font-medium bg-gray-100 text-gray-700'
                        }`}
                      >
                        {tag}
                      </span>
                    ))}
                  </div>
                  <h3
                    onClick={() => onOpenVideo(prop)}
                    className="text-base font-bold text-gray-900 group-hover:text-[#FF9900] transition line-clamp-2 cursor-pointer"
                  >
                    {prop.title}
                  </h3>
                  <p className="text-xs text-gray-500 mt-1.5 flex items-center gap-1">
                    <svg className="w-3.5 h-3.5 text-gray-400 shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2"></path>
                      <path d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2"></path>
                    </svg>
                    <span>{prop.specs}</span>
                  </p>
                </div>

                {/* Inquiry Action */}
                <button
                  type="button"
                  onClick={() => handleInquiryClick(prop.title)}
                  className="inline-flex items-center justify-center gap-2 w-full py-2.5 px-4 rounded-xl bg-orange-50 hover:bg-[#FF9900] text-[#FF9900] hover:text-white font-bold text-xs border border-orange-200 hover:border-[#FF9900] transition duration-200 group/btn cursor-pointer"
                >
                  <svg className="w-4 h-4 shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <rect height="16" rx="2" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" width="20" x="2" y="4"></rect>
                    <path d="m22 7-8.97 5.7a1.94 1.94 0 0 1-2.06 0L2 7" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2"></path>
                  </svg>
                  <span>この物件について問い合わせる</span>
                </button>
              </div>
            </div>
          ))}
        </div>
      )}

      {/* Pages Navigator Section */}
      {totalPages > 1 && (
        <div className="mt-12 flex flex-col items-center gap-4">
          {/* Counter text */}
          <div className="text-xs sm:text-sm font-semibold text-gray-500">
            {currentPage === 1
              ? `1-${Math.min(itemsPerPage, filteredProperties.length)} of ${filteredProperties.length}`
              : `${startIndex + 1}-${Math.min(startIndex + itemsPerPage, filteredProperties.length)} of ${filteredProperties.length}`}
          </div>

          {/* Pagination Buttons Controls */}
          <div className="flex items-center gap-1.5 sm:gap-2 select-none">
            {/* 1st (First) button */}
            <button
              type="button"
              disabled={currentPage === 1}
              onClick={() => handlePageChange(1)}
              title="最初へ"
              className="flex items-center justify-center w-9 h-9 sm:w-10 sm:h-10 rounded-xl border border-gray-200 bg-white text-gray-700 hover:text-[#FF9900] hover:border-[#FF9900] text-xs font-bold transition disabled:opacity-40 disabled:pointer-events-none cursor-pointer"
            >
              <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path d="M11 19l-7-7 7-7m8 14l-7-7 7-7" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2"></path>
              </svg>
            </button>

            {/* Previous button */}
            <button
              type="button"
              disabled={currentPage === 1}
              onClick={() => handlePageChange(currentPage - 1)}
              title="前へ"
              className="flex items-center justify-center w-9 h-9 sm:w-10 sm:h-10 rounded-xl border border-gray-200 bg-white text-gray-700 hover:text-[#FF9900] hover:border-[#FF9900] text-xs font-bold transition disabled:opacity-40 disabled:pointer-events-none cursor-pointer"
            >
              <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path d="M15 19l-7-7 7-7" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2"></path>
              </svg>
            </button>

            {/* Page buttons */}
            {Array.from({ length: totalPages }, (_, i) => i + 1).map((pageNum) => (
              <button
                key={pageNum}
                type="button"
                onClick={() => handlePageChange(pageNum)}
                className={`flex items-center justify-center w-9 h-9 sm:w-10 sm:h-10 rounded-xl font-bold text-xs sm:text-sm transition cursor-pointer ${
                  currentPage === pageNum
                    ? 'shadow-sm bg-[#FF9900] text-white border border-[#FF9900]'
                    : 'border border-gray-200 bg-white text-gray-700 hover:border-[#FF9900] hover:text-[#FF9900]'
                }`}
              >
                {pageNum}
              </button>
            ))}

            {/* Next button */}
            <button
              type="button"
              disabled={currentPage === totalPages}
              onClick={() => handlePageChange(currentPage + 1)}
              title="次へ"
              className="flex items-center justify-center w-9 h-9 sm:w-10 sm:h-10 rounded-xl border border-gray-200 bg-white text-gray-700 hover:text-[#FF9900] hover:border-[#FF9900] text-xs font-bold transition disabled:opacity-40 disabled:pointer-events-none cursor-pointer"
            >
              <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path d="M9 5l7 7-7 7" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2"></path>
              </svg>
            </button>

            {/* Last button */}
            <button
              type="button"
              disabled={currentPage === totalPages}
              onClick={() => handlePageChange(totalPages)}
              title="最後へ"
              className="flex items-center justify-center w-9 h-9 sm:w-10 sm:h-10 rounded-xl border border-gray-200 bg-white text-gray-700 hover:text-[#FF9900] hover:border-[#FF9900] text-xs font-bold transition disabled:opacity-40 disabled:pointer-events-none cursor-pointer"
            >
              <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path d="M13 5l7 7-7 7M5 5l7 7-7 7" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2"></path>
              </svg>
            </button>
          </div>
        </div>
      )}

      {/* Notice Banner with Eye Icon */}
      <div className="w-full max-w-4xl mx-auto mt-12 px-6 py-6 sm:px-8 sm:py-8 rounded-2xl bg-orange-50/60 border border-amber-200/60 flex flex-col sm:flex-row items-center justify-center gap-4 text-center sm:text-left text-gray-800 shadow-sm">
        <svg className="w-10 h-10 text-[#FF9900] shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path d="M15 12a3 3 0 11-6 0 3 3 0 016 0z" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2"></path>
          <path d="M2.458 12C3.732 7.943 7.523 5 12 5c4.478 0 8.268 2.943 9.542 7-1.274 4.057-5.064 7-9.542 7-4.477 0-8.268-2.943-9.542-7z" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2"></path>
        </svg>
        <span className="text-base sm:text-xl font-bold leading-relaxed text-gray-800">
          気になる物件やお探しの物件がございましたら、お気軽にお問い合わせください。
        </span>
      </div>
    </main>
  );
};
