import React, { useState, useEffect } from 'react';
import { PageTab, PropertyItem } from '../types';
import { PROPERTIES } from '../data/properties';

interface HomeViewProps {
  onSelectTab: (tab: PageTab) => void;
  onOpenVideo: (property: PropertyItem) => void;
  onSearchFilter?: (category?: string) => void;
}

export const HomeView: React.FC<HomeViewProps> = ({
  onSelectTab,
  onOpenVideo,
}) => {
  const [currentSlide, setCurrentSlide] = useState(0);

  const slides = [
    {
      img: 'https://lh3.googleusercontent.com/aida-public/AB6AXuBpLn6GiAQ83TxJMPzsJHUkwNa-iP5hApbdofxApyRQXbjGs0aauVNiG75mhDkFjVeN9mJYMXqlnlbRTketKXpkKdRG7xRjuHVFAcApAqrbhWojB2-n8-7Zviytag7XB57U08Np9JLtjJDifmKbnIWdXauYRZ9OaHMooqfhKwg0NImaqp8PsObh0WXZYTBmrU8hzN_0Xj3qYJ38OT4cO4kXNqxkfantPJmeZdrv_Q4p',
      tag: 'LIFESTYLE & RESIDENCE',
      titleHighlight: '理想の暮らしを。',
      titlePrefix: '住まい探しのその先に、',
      desc: 'Discover Your Dream Lifestyle with Reiwa Real Estate. 大阪府下の戸建て・中古マンション、地域密着だから見つかる未公開物件まで幅広くご提案いたします。',
      btnPrimary: '物件情報を見る',
      btnSecondary: '無料査定・ご相談',
      actionPrimary: () => onSelectTab('properties'),
      actionSecondary: () => onSelectTab('sell'),
    },
    {
      img: 'https://lh3.googleusercontent.com/aida-public/AB6AXuBVSLGXlXgL6ciD5wmb9jOHB0dmUPBUC3RA4jLP-aJ3l9RzxA39zntUPG3HpXC4hlh4J4WLhUTg9deCqKB6mvKO6yu5UpRAiBhT4naIwW9B0SdifN5Ew5VzTTsfvqMhFkfwf0G4cpkOnlTSg0qYiCcSMzSxug6wNNgTx3y9XnkRLHeKBV-jytm3K0CsZyBMZJO_RhS2-Ci5gbY-SHk9QQMLB8wJu-LhPDRwvNMbfE6i',
      tag: 'VALUATION & ASSET MANAGEMENT',
      titleHighlight: '資産の新たな価値を見出す。',
      titlePrefix: '確かな専門性で、',
      desc: 'Professional Property Appraisal & Real Estate Solutions. 大切なお住まいの売却・買換・無料査定。大阪を知り尽くしたプロフェッショナルが全力でサポートします。',
      btnPrimary: '売却相談・査定依頼',
      btnSecondary: '会社概要を見る',
      actionPrimary: () => onSelectTab('sell'),
      actionSecondary: () => onSelectTab('company'),
    },
  ];

  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentSlide((prev) => (prev + 1) % slides.length);
    }, 6000);
    return () => clearInterval(timer);
  }, [slides.length]);

  const featuredProperties = PROPERTIES.slice(0, 3);

  return (
    <div className="w-full flex flex-col">
      {/* ==================== HERO IMAGE CAROUSEL SECTION ==================== */}
      <section
        aria-label="ヒーローカルーセル"
        className="relative w-full h-[460px] sm:h-[560px] md:h-[620px] lg:h-[680px] bg-gray-900 overflow-hidden select-none"
      >
        {slides.map((slide, index) => {
          const isActive = index === currentSlide;
          return (
            <div
              key={index}
              className={`absolute inset-0 transition-all duration-700 ease-out ${
                isActive ? 'opacity-100 scale-100 z-10' : 'opacity-0 scale-105 z-0 pointer-events-none'
              }`}
            >
              <img
                alt={slide.titlePrefix}
                className="w-full h-full object-cover object-center filter brightness-[0.88]"
                src={slide.img}
              />
              {/* Gradient Overlay */}
              <div className="absolute inset-0 bg-gradient-to-r from-black/80 via-black/45 to-transparent" />
              <div className="absolute inset-0 flex items-center">
                <div className="max-w-7xl mx-auto w-full px-6 sm:px-10 lg:px-14">
                  <div className="max-w-2xl text-white">
                    <div className="inline-flex items-center space-x-2 bg-white/20 backdrop-blur-md px-3.5 py-1.5 rounded-full border border-white/30 text-xs sm:text-sm font-semibold tracking-wider mb-4 sm:mb-6 text-amber-200">
                      <span className="w-2 h-2 rounded-full bg-[#FF9900] animate-pulse" />
                      <span>{slide.tag}</span>
                    </div>
                    <h1 className="text-3xl sm:text-5xl lg:text-6xl font-black leading-tight tracking-tight drop-shadow-md mb-4 text-white">
                      {slide.titlePrefix}
                      <br />
                      <span className="text-transparent bg-clip-text bg-gradient-to-r from-amber-200 via-orange-300 to-amber-100">
                        {slide.titleHighlight}
                      </span>
                    </h1>
                    <p className="text-sm sm:text-base md:text-lg text-gray-200 mb-8 max-w-xl font-normal drop-shadow">
                      {slide.desc}
                    </p>
                    <div className="flex flex-wrap items-center gap-4">
                      <button
                        type="button"
                        onClick={slide.actionPrimary}
                        className="px-6 py-3.5 rounded-xl bg-gradient-to-r from-[#FF9900] to-[#E68A00] text-white font-bold text-sm sm:text-base shadow-lg hover:shadow-xl hover:brightness-105 transition transform active:scale-95 cursor-pointer"
                      >
                        {slide.btnPrimary}
                      </button>
                      <button
                        type="button"
                        onClick={slide.actionSecondary}
                        className="px-6 py-3.5 rounded-xl bg-white/20 hover:bg-white/30 backdrop-blur-md text-white font-bold text-sm sm:text-base border border-white/40 shadow-sm transition transform active:scale-95 cursor-pointer"
                      >
                        {slide.btnSecondary}
                      </button>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          );
        })}

        {/* Left / Right Carousel Controls */}
        <button
          type="button"
          aria-label="前のスライドへ"
          className="absolute left-4 sm:left-8 top-1/2 -translate-y-1/2 z-20 w-12 h-12 sm:w-14 sm:h-14 rounded-full bg-black/30 hover:bg-[#FF9900] text-white backdrop-blur-md border border-white/30 flex items-center justify-center transition-all duration-200 hover:scale-110 active:scale-95 group focus:outline-none cursor-pointer"
          onClick={() => setCurrentSlide((prev) => (prev - 1 + slides.length) % slides.length)}
        >
          <svg className="w-6 h-6 text-white group-hover:-translate-x-0.5 transition-transform" fill="none" stroke="currentColor" strokeWidth="2.5" viewBox="0 0 24 24">
            <path d="M15 19l-7-7 7-7" strokeLinecap="round" strokeLinejoin="round" />
          </svg>
        </button>
        <button
          type="button"
          aria-label="次のスライドへ"
          className="absolute right-4 sm:right-8 top-1/2 -translate-y-1/2 z-20 w-12 h-12 sm:w-14 sm:h-14 rounded-full bg-black/30 hover:bg-[#FF9900] text-white backdrop-blur-md border border-white/30 flex items-center justify-center transition-all duration-200 hover:scale-110 active:scale-95 group focus:outline-none cursor-pointer"
          onClick={() => setCurrentSlide((prev) => (prev + 1) % slides.length)}
        >
          <svg className="w-6 h-6 text-white group-hover:translate-x-0.5 transition-transform" fill="none" stroke="currentColor" strokeWidth="2.5" viewBox="0 0 24 24">
            <path d="M9 5l7 7-7 7" strokeLinecap="round" strokeLinejoin="round" />
          </svg>
        </button>

        {/* Indicators */}
        <div className="absolute bottom-6 left-1/2 -translate-x-1/2 z-20 flex items-center space-x-3 bg-black/40 backdrop-blur-md px-4 py-2 rounded-full border border-white/20">
          {slides.map((_, i) => (
            <button
              key={i}
              type="button"
              aria-label={`スライド ${i + 1}`}
              className={`h-2.5 transition-all duration-300 rounded-full cursor-pointer ${
                i === currentSlide ? 'w-8 bg-[#FF9900]' : 'w-2.5 bg-white/60 hover:bg-white'
              }`}
              onClick={() => setCurrentSlide(i)}
            />
          ))}
        </div>
      </section>

      {/* ==================== 2. FEATURED PROPERTIES (ピックアップ物件情報) ==================== */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-10 sm:pt-14 mb-20 w-full">
        <div className="flex flex-col sm:flex-row sm:items-end justify-between mb-8 gap-4">
          <div>
            <div className="inline-flex items-center gap-2 mb-2">
              <span className="h-0.5 w-6 bg-[#FF9900]"></span>
              <span className="text-xs sm:text-sm font-bold uppercase tracking-wider text-[#FF9900]">Featured Videos</span>
            </div>
            <h2 className="text-2xl sm:text-3xl font-black text-gray-900 tracking-tight">
              おすすめルームツアー動画
            </h2>
            <p className="text-xs sm:text-sm text-gray-600 mt-1">
              実際のお部屋の雰囲気やこだわりポイントをYouTubeショート動画でわかりやすくご覧いただけます
            </p>
          </div>
          <button
            type="button"
            onClick={() => onSelectTab('properties')}
            className="inline-flex items-center gap-1.5 px-4 py-2 bg-orange-50 hover:bg-[#FF9900] text-[#FF9900] hover:text-white font-bold text-xs rounded-xl border border-orange-200 hover:border-[#FF9900] transition self-start sm:self-auto cursor-pointer"
          >
            <span>物件動画をすべて見る（7件）</span>
            <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path d="M9 5l7 7-7 7" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2"></path>
            </svg>
          </button>
        </div>

        {/* 3 Featured Cards */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 lg:gap-8">
          {featuredProperties.map((prop) => (
            <div
              key={prop.id}
              className="bg-white rounded-2xl border border-gray-200 shadow-sm hover:shadow-xl transition-all duration-300 overflow-hidden flex flex-col group"
            >
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

                <button
                  type="button"
                  onClick={() => onSelectTab('contact')}
                  className="inline-flex items-center justify-center gap-2 w-full py-2.5 px-4 rounded-xl bg-orange-50 hover:bg-[#FF9900] text-[#FF9900] hover:text-white font-bold text-xs border border-orange-200 hover:border-[#FF9900] transition duration-200 cursor-pointer"
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
      </section>

      {/* ==================== 3. OUR STRENGTHS (レイワ不動産の強み) ==================== */}
      <section className="w-full bg-gradient-to-b from-white to-gray-100 py-16 sm:py-20 border-t border-gray-200">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center max-w-3xl mx-auto mb-12 sm:mb-16">
            <span className="inline-block px-3 py-1 bg-amber-100 text-[#FF9900] text-xs font-bold rounded-full mb-3 tracking-wide">
              WHY CHOOSE US
            </span>
            <h2 className="text-2xl sm:text-4xl font-black text-gray-900 tracking-tight">
              レイワ不動産が選ばれる3つの強み
            </h2>
            <p className="text-sm sm:text-base text-gray-600 mt-2">
              大阪に根ざした売買専門の不動産会社だからこそできる、確実で安心のサポート体制。
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {/* Feature 1 */}
            <div className="bg-white rounded-2xl p-8 shadow-sm hover:shadow-md transition border border-gray-200/80 flex flex-col relative overflow-hidden group">
              <span className="absolute -right-4 -bottom-6 text-8xl font-black text-gray-100/80 pointer-events-none select-none group-hover:text-orange-50 transition">
                01
              </span>
              <div className="w-14 h-14 rounded-xl bg-orange-100 text-[#FF9900] flex items-center justify-center mb-6 group-hover:scale-110 transition-transform">
                <svg className="w-7 h-7" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24">
                  <path d="M19 21V5a2 2 0 00-2-2H7a2 2 0 00-2 2v16m14 0h2m-2 0h-5m-9 0H3m2 0h5M9 7h1m-1 4h1m4-4h1m-1 4h1m-5 10v-5a1 1 0 011-1h2a1 1 0 011 1v5m-4 0h4" strokeLinecap="round" strokeLinejoin="round"></path>
                </svg>
              </div>
              <h3 className="text-lg sm:text-xl font-bold text-gray-900 mb-3">地域密着のネットワーク</h3>
              <p className="text-xs sm:text-sm text-gray-600 leading-relaxed">
                大阪府東住吉区・阿倍野区・平野区を中心とした地元特化の情報網により、ポータルサイトに掲載される前の未公開物件や好条件物件もいち早くご提案可能です。
              </p>
            </div>

            {/* Feature 2 */}
            <div className="bg-white rounded-2xl p-8 shadow-sm hover:shadow-md transition border border-gray-200/80 flex flex-col relative overflow-hidden group">
              <span className="absolute -right-4 -bottom-6 text-8xl font-black text-gray-100/80 pointer-events-none select-none group-hover:text-orange-50 transition">
                02
              </span>
              <div className="w-14 h-14 rounded-xl bg-orange-100 text-[#FF9900] flex items-center justify-center mb-6 group-hover:scale-110 transition-transform">
                <svg className="w-7 h-7" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24">
                  <path d="M11 4a2 2 0 114 0v1a1 1 0 001 1h3a1 1 0 011 1v3a1 1 0 01-1 1h-1a2 2 0 100 4h1a1 1 0 011 1v3a1 1 0 01-1 1h-3a1 1 0 01-1-1v-1a2 2 0 10-4 0v1a1 1 0 01-1 1H7a1 1 0 01-1-1v-3a1 1 0 00-1-1H4a2 2 0 110-4h1a1 1 0 001-1V7a1 1 0 011-1h3a1 1 0 001-1V4z" strokeLinecap="round" strokeLinejoin="round"></path>
                </svg>
              </div>
              <h3 className="text-lg sm:text-xl font-bold text-gray-900 mb-3">建築・リフォームの専門知見</h3>
              <p className="text-xs sm:text-sm text-gray-600 leading-relaxed">
                中古物件の購入にあたって欠かせないリノベーション費用や構造診断を自社でトータルワンストップ査定。購入から改修まで無駄のない資金計画を実現します。
              </p>
            </div>

            {/* Feature 3 */}
            <div className="bg-white rounded-2xl p-8 shadow-sm hover:shadow-md transition border border-gray-200/80 flex flex-col relative overflow-hidden group">
              <span className="absolute -right-4 -bottom-6 text-8xl font-black text-gray-100/80 pointer-events-none select-none group-hover:text-orange-50 transition">
                03
              </span>
              <div className="w-14 h-14 rounded-xl bg-orange-100 text-[#FF9900] flex items-center justify-center mb-6 group-hover:scale-110 transition-transform">
                <svg className="w-7 h-7" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24">
                  <path d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z" strokeLinecap="round" strokeLinejoin="round"></path>
                </svg>
              </div>
              <h3 className="text-lg sm:text-xl font-bold text-gray-900 mb-3">迅速・丁寧な無料査定</h3>
              <p className="text-xs sm:text-sm text-gray-600 leading-relaxed">
                戸建て・マンション・土地の売却をお考えの方へ、最新の周辺成約事例をもとに最短即日で適正な査定価格をご提示。秘密厳守で安心してご相談いただけます。
              </p>
            </div>
          </div>

          {/* Banner */}
          <div className="mt-12 p-6 sm:p-8 rounded-2xl bg-orange-50/80 border border-amber-200/80 flex flex-col sm:flex-row items-center justify-between gap-6">
            <div className="flex items-center space-x-4">
              <div className="w-12 h-12 rounded-xl bg-[#FF9900] text-white flex items-center justify-center shrink-0 shadow-sm">
                <svg className="w-6 h-6" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24">
                  <path d="M12 8c-1.657 0-3 .895-3 2s1.343 2 3 2 3 .895 3 2-1.343 2-3 2m0-8c1.11 0 2.08.402 2.599 1M12 8V7m0 1v8m0 0v1m0-1c-1.11 0-2.08-.402-2.599-1M21 12a9 9 0 11-18 0 9 9 0 0118 0z" strokeLinecap="round" strokeLinejoin="round" />
                </svg>
              </div>
              <div>
                <h4 className="text-base sm:text-lg font-bold text-gray-900">不動産の売却・住み替えをご検討中の方へ</h4>
                <p className="text-xs sm:text-sm text-gray-600">地域密着のネットワークと丁寧なサポートで、ご納得の売却をお手伝いいたします。</p>
              </div>
            </div>
            <button
              type="button"
              onClick={() => onSelectTab('sell')}
              className="px-6 py-3 bg-[#FF9900] hover:bg-[#E68A00] text-white font-bold text-sm rounded-xl shadow transition whitespace-nowrap active:scale-95 cursor-pointer"
            >
              売却サービスのご案内へ
            </button>
          </div>
        </div>
      </section>
    </div>
  );
};
