
      {/* ContactView.tsx Main Inquiry Form Container */}
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