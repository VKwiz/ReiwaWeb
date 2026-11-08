import React from 'react';

interface WeChatModalProps {
  isOpen: boolean;
  onClose: () => void;
}

export const WeChatModal: React.FC<WeChatModalProps> = ({ isOpen, onClose }) => {
  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4">
      {/* Backdrop */}
      <div
        className="absolute inset-0 bg-black/70 backdrop-blur-sm transition-opacity"
        onClick={onClose}
      />

      {/* Modal Card */}
      <div className="relative w-full max-w-sm bg-white rounded-3xl shadow-2xl overflow-hidden p-6 text-center z-10 animate-in fade-in zoom-in-95 duration-200">
        <button
          type="button"
          onClick={onClose}
          aria-label="閉じる"
          className="absolute top-4 right-4 p-1.5 rounded-full text-gray-400 hover:text-gray-700 hover:bg-gray-100 transition cursor-pointer"
        >
          <svg className="w-5 h-5" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24">
            <path d="M6 18L18 6M6 6l12 12" strokeLinecap="round" strokeLinejoin="round" />
          </svg>
        </button>

        <div className="w-14 h-14 mx-auto mb-4 bg-green-50 border border-green-200 rounded-2xl flex items-center justify-center">
          <img
            alt="WeChat"
            className="w-8 h-8 object-contain"
            src="/src/assets/wechat.png"
          />
        </div>

        <h3 className="text-xl font-bold text-gray-900 mb-1">WeChat公式窓口</h3>
        <p className="text-xs text-gray-500 mb-6">微信扫码或添加专属客服微信号，快速咨询日本房产与看房</p>

        {/* QR Code Mockup Frame */}
        <div className="w-48 h-48 mx-auto bg-gray-50 border-2 border-dashed border-[#07C160]/40 rounded-2xl flex flex-col items-center justify-center p-3 mb-6 relative">
          <img
            alt="レイワ不動産 WeChat QR"
            className="w-36 h-36 object-contain"
            src="https://api.qrserver.com/v1/create-qr-code/?size=200x200&data=reiwagodo_realestate_osaka"
          />
          <span className="text-[10px] text-gray-400 mt-1 font-mono">ID: reiwagodo</span>
        </div>

        <div className="p-3 bg-gray-50 rounded-xl border border-gray-100 text-xs text-gray-600 mb-6 space-y-1">
          <p className="font-bold text-gray-800">微信客服ID: <span className="font-mono text-[#07C160] selection:bg-green-100">reiwagodo</span></p>
          <p>営業時間：09:00〜17:00（日本時間）</p>
        </div>

        <button
          type="button"
          onClick={onClose}
          className="w-full py-3 bg-[#07C160] hover:bg-[#06ad56] text-white font-bold rounded-xl text-sm transition shadow-sm cursor-pointer"
        >
          閉じる
        </button>
      </div>
    </div>
  );
};
