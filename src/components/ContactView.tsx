import React, { useState, useEffect } from 'react';
import { InquiryFormData } from '../types';

interface ContactViewProps {
  initialPropertyTitle?: string;
  onClearPropertyTitle?: () => void;
  onOpenWeChat?: () => void;
  onOpenLine?: () => void;
}

export const ContactView: React.FC<ContactViewProps> = ({
  initialPropertyTitle,
  onClearPropertyTitle,
  onOpenWeChat,
  onOpenLine,
}) => {
  const formContainerRef = React.useRef<HTMLDivElement>(null);
  const [formData, setFormData] = useState<InquiryFormData>({
    name: '',
    furigana: '',
    email: '',
    phone: '',
    category: initialPropertyTitle ? '物件購入のご相談' : '物件売却・無料査定のご相談',
    message: initialPropertyTitle ? `以下の物件について詳細情報や見学日程をお伺いしたいです：\n${initialPropertyTitle}` : '',
    propertyTitle: initialPropertyTitle || '',
    agree: false,
  });

  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSubmitted, setIsSubmitted] = useState(false);
  const [errorMessage, setErrorMessage] = useState('');

  useEffect(() => {
    if (initialPropertyTitle) {
      setFormData((prev) => ({
        ...prev,
        propertyTitle: initialPropertyTitle,
        category: '物件購入のご相談',
        message: `以下の物件について詳細情報や見学日程をお伺いしたいです：\n${initialPropertyTitle}`,
      }));
    }
  }, [initialPropertyTitle]);

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    const { name, value, type } = e.target;
    if (type === 'checkbox') {
      const checked = (e.target as HTMLInputElement).checked;
      setFormData((prev) => ({ ...prev, [name]: checked }));
    } else {
      setFormData((prev) => ({ ...prev, [name]: value }));
    }
    setErrorMessage('');
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!formData.name.trim()) {
      setErrorMessage('お名前を入力してください。');
      return;
    }
    if (!formData.email.trim() && !formData.phone.trim()) {
      setErrorMessage('ご連絡先（メールアドレスまたはお電話番号）を入力してください。');
      return;
    }
    if (!formData.message.trim()) {
      setErrorMessage('お問い合わせ内容を入力してください。');
      return;
    }
    if (!formData.agree) {
      setErrorMessage('個人情報保護方針への同意にチェックを入れてください。');
      return;
    }

    setIsSubmitting(true);
    // Simulate real submission
    setTimeout(() => {
      setIsSubmitting(false);
      setIsSubmitted(true);
    }, 800);
  };

  const handleReset = () => {
    setFormData({
      name: '',
      furigana: '',
      email: '',
      phone: '',
      category: '物件売却・無料査定のご相談',
      message: '',
      propertyTitle: '',
      agree: false,
    });
    setIsSubmitted(false);
    if (onClearPropertyTitle) {
      onClearPropertyTitle();
    }
  };

  return (
    <main className="flex-1 max-w-7xl mx-auto w-full px-4 sm:px-6 lg:px-8 py-8 sm:py-12">
      {/* Section Header Title */}
      <div className="mb-12 text-center">
        <div className="inline-flex items-center gap-2 mb-2">
          <span className="h-0.5 w-6 bg-[#FF9900]" />
          <span className="text-xs sm:text-sm font-bold uppercase tracking-wider text-[#FF9900]">Contact &amp; Inquiry</span>
          <span className="h-0.5 w-6 bg-[#FF9900]" />
        </div>
        <h1 className="text-2xl sm:text-3xl lg:text-4xl font-black text-gray-900 tracking-tight mb-3">
          お問い合わせ
        </h1>
        <div className="w-16 h-1 bg-[#FF9900] mx-auto rounded-full mb-4" />
        <p className="text-xs sm:text-sm text-gray-600 max-w-2xl mx-auto leading-relaxed">
          不動産の売買・無料査定・ご来店予約など、どんなことでもお気軽にご相談ください。担当者より迅速にご返信いたします。
        </p>
      </div>

      {/* Main Inquiry Form Container */}
      <div ref={formContainerRef} className="max-w-6xl mx-auto bg-white rounded-2xl shadow-sm border border-gray-200 overflow-hidden mb-16">
        <div className="border-b border-gray-100 bg-amber-50/40 px-6 sm:px-8 py-5 flex items-center justify-between">
          <div className="flex items-center gap-3">
            <span className="w-2.5 h-2.5 rounded-full bg-[#FF9900]" />
            <h2 className="text-base sm:text-lg font-bold text-gray-800 tracking-tight">お問い合わせフォーム</h2>
          </div>
          <span className="text-xs text-gray-500 font-medium">※必須項目は必ずご記入ください</span>
        </div>

        <div className="p-6 sm:p-10">
          {isSubmitted ? (
            <div className="py-12 text-center flex flex-col items-center">
              <div className="w-16 h-16 rounded-full bg-green-100 text-[#06C755] flex items-center justify-center mb-4">
                <svg className="w-8 h-8" fill="none" stroke="currentColor" strokeWidth="2.5" viewBox="0 0 24 24">
                  <path d="M5 13l4 4L19 7" strokeLinecap="round" strokeLinejoin="round" />
                </svg>
              </div>
              <h3 className="text-xl sm:text-2xl font-bold text-gray-900 mb-2">お問い合わせを受け付けました</h3>
              <p className="text-sm text-gray-600 max-w-md mx-auto mb-8 leading-relaxed">
                この度はお問い合わせいただき誠にありがとうございます。内容を確認のうえ、担当者より1営業日以内にご連絡差し上げます。
              </p>
              <button
                type="button"
                onClick={handleReset}
                className="px-6 py-2.5 rounded-xl bg-gray-100 hover:bg-gray-200 text-gray-700 font-bold text-xs sm:text-sm transition cursor-pointer"
              >
                別のお問い合わせを送信する
              </button>
            </div>
          ) : (
            <form onSubmit={handleSubmit} className="space-y-6">
              {/* Pre-selected property notice */}
              {formData.propertyTitle && (
                <div className="p-4 rounded-xl bg-orange-50 border border-orange-200 flex items-start justify-between gap-3">
                  <div className="flex items-center gap-2 text-sm text-[#B85E1A]">
                    <svg className="w-5 h-5 shrink-0 text-[#FF9900]" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path d="M19 21V5a2 2 0 00-2-2H7a2 2 0 00-2 2v16m14 0h2m-2 0h-5m-9 0H3m2 0h5M9 7h1m-1 4h1m4-4h1m-1 4h1m-5 10v-5a1 1 0 011-1h2a1 1 0 011 1v5m-4 0h4" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" />
                    </svg>
                    <div>
                      <span className="font-bold text-xs uppercase tracking-wide block text-[#FF9900]">対象物件</span>
                      <span className="font-bold">{formData.propertyTitle}</span>
                    </div>
                  </div>
                  <button
                    type="button"
                    onClick={() => {
                      setFormData((prev) => ({ ...prev, propertyTitle: '' }));
                      if (onClearPropertyTitle) onClearPropertyTitle();
                    }}
                    className="text-xs text-gray-400 hover:text-gray-700 underline shrink-0 cursor-pointer"
                  >
                    解除
                  </button>
                </div>
              )}

              {/* Inquiry Category */}
              <div>
                <label className="block text-xs sm:text-sm font-bold text-gray-800 mb-2">
                  お問い合わせ項目 <span className="text-red-500 text-xs">［必須］</span>
                </label>
                <select
                  name="category"
                  value={formData.category}
                  onChange={handleChange}
                  className="w-full px-4 py-3 bg-gray-50 border border-gray-200 rounded-xl text-sm text-gray-800 focus:outline-none focus:ring-2 focus:ring-[#FF9900] focus:border-transparent transition"
                >
                  <option value="物件売却・無料査定のご相談">物件売却・無料査定のご相談</option>
                  <option value="物件購入のご相談">物件購入・見学のご相談</option>
                  <option value="ご来店予約">ご来店予約・アクセスについて</option>
                  <option value="リフォーム・その他相談">リフォーム・建築・その他ご相談</option>
                </select>
              </div>

              {/* Name & Furigana Grid */}
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                <div>
                  <label className="block text-xs sm:text-sm font-bold text-gray-800 mb-2">
                    お名前 <span className="text-red-500 text-xs">［必須］</span>
                  </label>
                  <input
                    type="text"
                    name="name"
                    required
                    placeholder="例：山田 太郎"
                    value={formData.name}
                    onChange={handleChange}
                    className="w-full px-4 py-3 bg-gray-50 border border-gray-200 rounded-xl text-sm text-gray-800 placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-[#FF9900] focus:border-transparent transition"
                  />
                </div>
                <div>
                  <label className="block text-xs sm:text-sm font-bold text-gray-800 mb-2">
                    フリガナ <span className="text-gray-400 text-xs">［任意］</span>
                  </label>
                  <input
                    type="text"
                    name="furigana"
                    placeholder="例：ヤマダ タロウ"
                    value={formData.furigana}
                    onChange={handleChange}
                    className="w-full px-4 py-3 bg-gray-50 border border-gray-200 rounded-xl text-sm text-gray-800 placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-[#FF9900] focus:border-transparent transition"
                  />
                </div>
              </div>

              {/* Email & Phone Grid */}
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                <div>
                  <label className="block text-xs sm:text-sm font-bold text-gray-800 mb-2">
                    メールアドレス <span className="text-red-500 text-xs">［必須］</span>
                  </label>
                  <input
                    type="email"
                    name="email"
                    required
                    placeholder="例：example@domain.com"
                    value={formData.email}
                    onChange={handleChange}
                    className="w-full px-4 py-3 bg-gray-50 border border-gray-200 rounded-xl text-sm text-gray-800 placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-[#FF9900] focus:border-transparent transition"
                  />
                </div>
                <div>
                  <label className="block text-xs sm:text-sm font-bold text-gray-800 mb-2">
                    お電話番号 <span className="text-red-500 text-xs">［必須］</span>
                  </label>
                  <input
                    type="tel"
                    name="phone"
                    required
                    placeholder="例：06-6777-4124"
                    value={formData.phone}
                    onChange={handleChange}
                    className="w-full px-4 py-3 bg-gray-50 border border-gray-200 rounded-xl text-sm text-gray-800 placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-[#FF9900] focus:border-transparent transition"
                  />
                </div>
              </div>

              {/* Message Content */}
              <div>
                <label className="block text-xs sm:text-sm font-bold text-gray-800 mb-2">
                  お問い合わせ内容 <span className="text-red-500 text-xs">［必須］</span>
                </label>
                <textarea
                  name="message"
                  required
                  rows={5}
                  placeholder="ご希望の条件、売却査定の詳細、ご来店希望日時などをご自由にご記入ください。"
                  value={formData.message}
                  onChange={handleChange}
                  className="w-full px-4 py-3 bg-gray-50 border border-gray-200 rounded-xl text-sm text-gray-800 placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-[#FF9900] focus:border-transparent transition leading-relaxed"
                />
              </div>

              {/* Privacy agreement */}
              <div className="p-4 rounded-xl bg-gray-50 border border-gray-200">
                <label className="flex items-start gap-3 cursor-pointer">
                  <input
                    type="checkbox"
                    name="agree"
                    checked={formData.agree}
                    onChange={handleChange}
                    className="mt-1 w-4 h-4 text-[#FF9900] rounded focus:ring-[#FF9900] border-gray-300"
                  />
                  <span className="text-xs text-gray-600 leading-relaxed">
                    当社の「個人情報保護方針」に同意のうえ送信します。入力いただいた個人情報は、お問い合わせに対するご回答および不動産情報のご案内にのみ利用いたします。
                  </span>
                </label>
              </div>

              {/* Error Alert */}
              {errorMessage && (
                <div className="p-4 rounded-xl bg-red-50 text-red-600 text-xs font-bold border border-red-200 flex items-center gap-2">
                  <svg className="w-4 h-4 shrink-0" fill="currentColor" viewBox="0 0 20 20">
                    <path fillRule="evenodd" d="M18 10a8 8 0 11-16 0 8 8 0 0116 0zm-7 4a1 1 0 11-2 0 1 1 0 012 0zm-1-9a1 1 0 00-1 1v4a1 1 0 102 0V6a1 1 0 00-1-1z" clipRule="evenodd" />
                  </svg>
                  <span>{errorMessage}</span>
                </div>
              )}

              {/* Submit Button */}
              <div className="pt-2">
                <button
                  type="submit"
                  disabled={isSubmitting}
                  className="w-full py-4 px-6 rounded-xl bg-gradient-to-r from-[#FF9900] to-[#E68A00] text-white font-bold text-base shadow-md hover:shadow-lg hover:brightness-105 transition active:scale-95 flex items-center justify-center space-x-2 disabled:opacity-50 cursor-pointer"
                >
                  {isSubmitting ? (
                    <>
                      <svg className="animate-spin h-5 w-5 text-white" fill="none" viewBox="0 0 24 24">
                        <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4"></circle>
                        <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8v8H4z"></path>
                      </svg>
                      <span>送信中...</span>
                    </>
                  ) : (
                    <>
                      <svg className="w-5 h-5 text-white shrink-0" fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewBox="0 0 24 24">
                        <rect height="16" rx="2" width="20" x="2" y="4"></rect>
                        <path d="m22 7-8.97 5.7a1.94 1.94 0 0 1-2.06 0L2 7"></path>
                      </svg>
                      <span>送信する</span>
                    </>
                  )}
                </button>
              </div>
            </form>
          )}
        </div>
      </div>



      {/* Contact Card (Same as Home and other pages) */}
      <div className="w-full max-w-6xl mx-auto bg-orange-50/60 rounded-2xl border border-orange-100 p-6 sm:p-8 lg:p-10 shadow-sm grid grid-cols-1 lg:grid-cols-12 gap-8 items-center">
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
            <p className="text-sm text-gray-600 flex items-center space-x-1.5">
              <svg className="w-4 h-4 text-[#FF9900] shrink-0" fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewBox="0 0 24 24">
                <path d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z"></path>
                <path d="M15 11a3 3 0 11-6 0 3 3 0 016 0z"></path>
              </svg>
              <span>大阪府大阪市東住吉区杭全4丁目12-6</span>
            </p>
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
              <svg className="w-4 h-4 text-gray-400 shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <circle cx="12" cy="12" r="10" strokeWidth="2"></circle>
                <polyline points="12 6 12 12 16 14" strokeWidth="2"></polyline>
              </svg>
              <span>営業時間 09:00〜17:00 (定休日: 水曜日)</span>
            </p>
          </div>

          {/* 1. お問い合わせ (Mail) Button - Smooth scroll to form */}
          <button
            type="button"
            onClick={() => formContainerRef.current?.scrollIntoView({ behavior: 'smooth', block: 'start' })}
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
          <a
            href="https://maps.google.com/?q=%E5%A4%A7%E9%98%AA%E5%BA%9C%E5%A4%A7%E9%98%AA%E5%B8%82%E6%9D%B1%E4%BD%8F%E5%90%89%E5%8C%BA%E6%9D%AD%E5%85%A84%E4%B8%81%E7%9B%AE12-5"
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center justify-center space-x-3 w-full py-4 px-6 rounded-xl bg-white border-2 border-gray-300 hover:border-[#FF9900] text-gray-800 hover:text-[#FF9900] font-bold text-base shadow-sm hover:shadow transition active:scale-95 cursor-pointer text-center"
          >
            <svg className="w-6 h-6 text-red-500 shrink-0" fill="currentColor" viewBox="0 0 24 24">
              <path d="M12 2C8.13 2 5 5.13 5 9c0 5.25 7 13 7 13s7-7.75 7-13c0-3.87-3.13-7-7-7zm0 9.5a2.5 2.5 0 1 1 0-5 2.5 2.5 0 0 1 0 5z"></path>
            </svg>
            <span>ご来店予約・アクセス</span>
          </a>
        </div>
      </div>
    </main>
  );
};
