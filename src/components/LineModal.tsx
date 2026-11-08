import React from 'react';

interface LineModalProps {
  isOpen: boolean;
  onClose: () => void;
}

export const LineModal: React.FC<LineModalProps> = ({ isOpen, onClose }) => {
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
            alt="LINE"
            className="w-8 h-8 object-contain"
            src="https://lh3.googleusercontent.com/aida-public/AB6AXuDfbmYgK8csFGK0K662r7eue_CGa7pRCYw1jzzAObTSTA9XqIFgCTrxmVhGeQpRIp34-En2BaFW5DzfAvTZBfez4jSXXjFK1o6M-zIRgtRg8MrKStq1jgiQ8zEf1Z86YrARar4ydjsyPlZqgf77tlMs_2MfNx0xb7wGuMBNp2qvfOT03CUpA_FtcEEM5hXlkhfwme3lt78sxs1j9wREXS1pn4OOd4FPb60-2SqDfBxRjIGoRMX1PLsjPw"
          />
        </div>

        <h3 className="text-xl font-bold text-gray-900 mb-1">LINE公式アカウント</h3>
        <p className="text-xs text-gray-500 mb-6">友だち追加で最新の未公開物件情報や売却査定をチャットでご相談いただけます</p>

        {/* QR Code Frame */}
        <div className="w-48 h-48 mx-auto bg-gray-50 border-2 border-dashed border-[#06C755]/40 rounded-2xl flex flex-col items-center justify-center p-3 mb-6 relative">
          <img
            alt="レイワ不動産 LINE QR"
            className="w-36 h-36 object-contain"
            src="https://api.qrserver.com/v1/create-qr-code/?size=200x200&data=https://line.me/R/ti/p/@reiwa-fudosan"
          />
          <span className="text-[10px] text-gray-400 mt-1 font-mono">@reiwa-fudosan</span>
        </div>

        <div className="space-y-3">
          <a
            href="https://line.me"
            target="_blank"
            rel="noopener noreferrer"
            className="w-full py-3 bg-[#06C755] hover:bg-[#05b34c] text-white font-bold rounded-xl text-sm transition shadow-sm flex items-center justify-center space-x-2"
          >
            <span>LINEアプリで友だち追加</span>
          </a>
          <button
            type="button"
            onClick={onClose}
            className="w-full py-2.5 text-gray-500 hover:text-gray-800 text-xs font-bold transition cursor-pointer"
          >
            閉じる
          </button>
        </div>
      </div>
    </div>
  );
};
