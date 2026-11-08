import React from 'react';
import { PropertyItem } from '../types';

interface VideoModalProps {
  property: PropertyItem | null;
  onClose: () => void;
  onInquiry: (propertyTitle: string) => void;
}

export const VideoModal: React.FC<VideoModalProps> = ({
  property,
  onClose,
  onInquiry,
}) => {
  if (!property) return null;

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4">
      {/* Backdrop */}
      <div
        className="absolute inset-0 bg-black/80 backdrop-blur-sm transition-opacity"
        onClick={onClose}
      />

      {/* Modal Dialog Content */}
      <div className="relative w-full max-w-sm sm:max-w-md bg-white rounded-3xl shadow-2xl overflow-hidden flex flex-col z-10 animate-in fade-in zoom-in-95 duration-200">
        {/* Top Bar */}
        <div className="p-3 bg-gray-900 text-white flex items-center justify-between">
          <div className="flex items-center space-x-2 truncate pr-2">
            <span className="w-2.5 h-2.5 rounded-full bg-red-600 animate-pulse" />
            <span className="text-xs font-bold truncate">YouTube Shorts ルームツアー</span>
          </div>
          <button
            type="button"
            onClick={onClose}
            aria-label="閉じる"
            className="p-1 rounded-full text-gray-400 hover:text-white hover:bg-white/10 transition cursor-pointer"
          >
            <svg className="w-5 h-5" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24">
              <path d="M6 18L18 6M6 6l12 12" strokeLinecap="round" strokeLinejoin="round" />
            </svg>
          </button>
        </div>

        {/* 9:16 Video Player Iframe */}
        <div className="relative w-full aspect-[9/16] bg-black">
          <iframe
            title={property.title}
            src={`https://www.youtube.com/embed/${property.shortsId}?autoplay=1&rel=0&playsinline=1`}
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
            allowFullScreen
            className="w-full h-full border-0"
          />
        </div>

        {/* Property Info in Modal */}
        <div className="p-4 sm:p-5 bg-white space-y-3">
          <div className="flex items-center justify-between gap-2">
            <span className="text-xs font-bold text-gray-500">{property.location}</span>
            <span className="text-base font-black text-[#FF9900]">{property.price}</span>
          </div>
          <h3 className="font-bold text-sm text-gray-900 leading-snug line-clamp-2">
            {property.title}
          </h3>
          {/*
          <div className="pt-1 flex gap-2">
            <button
              type="button"
              onClick={() => {
                onInquiry(property.title);
                onClose();
              }}
              className="flex-1 py-3 px-4 rounded-xl bg-gradient-to-r from-[#FF9900] to-[#E68A00] text-white font-bold text-xs sm:text-sm shadow-md hover:brightness-105 transition flex items-center justify-center space-x-2 cursor-pointer"
            >
              <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <rect height="16" rx="2" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" width="20" x="2" y="4"></rect>
                <path d="m22 7-8.97 5.7a1.94 1.94 0 0 1-2.06 0L2 7" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2"></path>
              </svg>
              <span>この物件について問い合わせる</span>
            </button>
          </div>
          */}
        </div>
      </div>
    </div>
  );
};
