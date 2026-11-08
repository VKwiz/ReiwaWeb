import React from 'react';
import { PageTab } from '../types';

interface FooterProps {
  onSelectTab: (tab: PageTab) => void;
}

export const Footer: React.FC<FooterProps> = ({ onSelectTab }) => {
  return (
    <footer className="bg-[#2D2A26] text-white border-t border-gray-800">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-10">
        <div className="flex flex-col md:flex-row items-center justify-between gap-6 pb-8 border-b border-white/10">
          <div className="text-center md:text-left">
            <p className="text-lg font-bold tracking-wider text-white">レイワ不動産</p>
            <p className="text-xs text-gray-400 mt-1">大阪府大阪市東住吉区杭全4丁目12-6</p>
          </div>
          <nav className="flex flex-wrap items-center justify-center gap-4 sm:gap-6 text-xs sm:text-sm text-gray-300 font-medium">
            <button
              type="button"
              onClick={() => onSelectTab('home')}
              className="hover:text-[#FF9900] transition cursor-pointer"
            >
              ホーム
            </button>
            <span className="text-white/20 hidden sm:inline">|</span>
            <button
              type="button"
              onClick={() => onSelectTab('company')}
              className="hover:text-[#FF9900] transition cursor-pointer"
            >
              会社概要
            </button>
            <span className="text-white/20 hidden sm:inline">|</span>
            <button
              type="button"
              onClick={() => onSelectTab('sell')}
              className="hover:text-[#FF9900] transition cursor-pointer"
            >
              物件売却
            </button>
            <span className="text-white/20 hidden sm:inline">|</span>
            <button
              type="button"
              onClick={() => onSelectTab('properties')}
              className="hover:text-[#FF9900] transition cursor-pointer"
            >
              物件情報
            </button>
            <span className="text-white/20 hidden sm:inline">|</span>
            <button
              type="button"
              onClick={() => onSelectTab('contact')}
              className="hover:text-[#FF9900] transition cursor-pointer"
            >
              お問い合わせ
            </button>
          </nav>
        </div>
        {/* Copyright Area */}
        <div className="pt-6 text-center text-xs text-gray-400">
          <p>Copyright © REIWA Real Estate Co., Ltd. All Rights Reserved.</p>
        </div>
      </div>
    </footer>
  );
};
