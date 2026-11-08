import React from 'react';
import { PageTab } from '../types';

interface SellViewProps {
  onSelectTab: (tab: PageTab) => void;
}

export const SellView: React.FC<SellViewProps> = ({ onSelectTab }) => {
  return (
    <main className="flex-1 max-w-7xl mx-auto w-full px-4 sm:px-6 lg:px-8 py-8 sm:py-12">
      {/* Section Header Title */}
      <div className="mb-12 text-center">
        <div className="inline-flex items-center gap-2 mb-2">
          <span className="h-0.5 w-6 bg-[#FF9900]" />
          <span className="text-xs sm:text-sm font-bold uppercase tracking-wider text-[#FF9900]">Property Selling</span>
          <span className="h-0.5 w-6 bg-[#FF9900]" />
        </div>
        <h1 className="text-2xl sm:text-3xl lg:text-4xl font-black text-gray-900 tracking-tight mb-3">
          物件売却のご相談
        </h1>
        <div className="w-16 h-1 bg-[#FF9900] mx-auto rounded-full mb-4" />
        <p className="text-xs sm:text-sm text-gray-600 max-w-2xl mx-auto leading-relaxed">
          大切な資産だからこそ、安心と納得のいくお取引を。レイワ不動産はお客様お一人おひとりのご要望に寄り添い、確かな売却サポートをご提供いたします。
        </p>
      </div>

      {/* Main Editorial Article Box */}
      <div className="max-w-6xl mx-auto bg-white rounded-2xl shadow-sm border border-gray-200 p-8 sm:p-12 mb-12">
        <div className="border-b border-gray-100 pb-6 mb-8 text-center sm:text-left">
          <span className="inline-block px-3 py-1 bg-orange-100 text-[#FF9900] text-xs font-bold rounded-full mb-2">
            OUR COMMITMENT
          </span>
          <h2 className="text-xl sm:text-2xl font-black text-gray-900 leading-snug">
            お客様の大切な不動産を、確かな安心と最高の納得で売却サポートいたします。
          </h2>
        </div>

        {/* Text Sections */}
        <div className="space-y-8 text-sm sm:text-base text-gray-700 leading-relaxed">
          <div className="p-6 rounded-xl bg-orange-50/50 border border-orange-100/80">
            <h3 className="text-base sm:text-lg font-bold text-gray-900 mb-2 flex items-center gap-2">
              <span className="w-2 h-2 rounded-full bg-[#FF9900]" />
              お客様第一の丁寧なヒアリングと売却戦略
            </h3>
            <p className="text-gray-600 leading-relaxed text-sm">
              不動産の売却には、「住み替えのための資金を作りたい」「相続した不動産を適切に処分したい」「急ぎで現金化したい」「周りに知られずに売却したい」など、お客様ごとに多様なご事情や希望がございます。
              レイワ不動産では、まずはお客様のご事情を親身に伺い、無理のない最適な売却スケジュールと価格戦略をご提案いたします。
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <div className="p-6 rounded-xl border border-gray-100 bg-gray-50/60 flex flex-col justify-between">
              <div>
                <h4 className="font-bold text-gray-900 text-base mb-2 flex items-center gap-2">
                  <span className="w-1.5 h-1.5 rounded-full bg-[#FF9900]" />
                  地域密着のデータに基づいた適正査定
                </h4>
                <p className="text-xs sm:text-sm text-gray-600 leading-relaxed">
                  大阪市東住吉区・阿倍野区・平野区をはじめ、大阪府下全域の直近成約事例や市場トレンドをリアルタイムで分析。高すぎる設定で売れ残るリスクや、安すぎる価格で損をすることを防ぎ、市場で最も評価される価格をご提示します。
                </p>
              </div>
            </div>

            <div className="p-6 rounded-xl border border-gray-100 bg-gray-50/60 flex flex-col justify-between">
              <div>
                <h4 className="font-bold text-gray-900 text-base mb-2 flex items-center gap-2">
                  <span className="w-1.5 h-1.5 rounded-full bg-[#FF9900]" />
                  充実のメディア発信力と顧客網
                </h4>
                <p className="text-xs sm:text-sm text-gray-600 leading-relaxed">
                  主要ポータルサイトへの掲載はもちろん、YouTubeショート動画を活用したルームツアー撮影や、国内外の投資家・購入希望者ネットワークへ迅速に物件情報をアプローチ。早期かつ好条件でのマッチングを実現します。
                </p>
              </div>
            </div>

            <div className="p-6 rounded-xl border border-gray-100 bg-gray-50/60 flex flex-col justify-between">
              <div>
                <h4 className="font-bold text-gray-900 text-base mb-2 flex items-center gap-2">
                  <span className="w-1.5 h-1.5 rounded-full bg-[#FF9900]" />
                  建築・リフォームの知見を活かした提案
                </h4>
                <p className="text-xs sm:text-sm text-gray-600 leading-relaxed">
                  築年数の経過した建物や修繕が必要な物件でも、リフォームプランやリノベーション費用とセットで購入検討者にご提案できるため、物件本来のポテンシャルを最大限に評価して売却へと繋げます。
                </p>
              </div>
            </div>

            <div className="p-6 rounded-xl border border-gray-100 bg-gray-50/60 flex flex-col justify-between">
              <div>
                <h4 className="font-bold text-gray-900 text-base mb-2 flex items-center gap-2">
                  <span className="w-1.5 h-1.5 rounded-full bg-[#FF9900]" />
                  秘密厳守・お引き渡しまでの安心対応
                </h4>
                <p className="text-xs sm:text-sm text-gray-600 leading-relaxed">
                  査定やご相談の内容は厳格に秘密を保持いたします。複雑な契約書類の作成、境界確定、残置物処理、税務や登記に関するご相談まで、専門スタッフがワンストップで伴走いたします。
                </p>
              </div>
            </div>
          </div>

          {/* Reassurance Callout */}
          <div className="p-6 rounded-xl bg-amber-50/70 border border-amber-200/60 text-center sm:text-left flex flex-col sm:flex-row items-center justify-between gap-6">
            <div>
              <p className="font-bold text-gray-900 text-base sm:text-lg">
                「まずは概算の相場を知りたい」「将来の売却相談がしたい」といった段階でも大歓迎です。
              </p>
              <p className="text-xs sm:text-sm text-gray-600 mt-1">
                机上査定・訪問査定ともに無料で行っております。お気軽にご相談ください。
              </p>
            </div>
            <button
              type="button"
              onClick={() => onSelectTab('contact')}
              className="px-6 py-3.5 rounded-xl bg-gradient-to-r from-[#FF9900] to-[#E68A00] text-white font-bold text-sm shadow-md hover:brightness-105 transition whitespace-nowrap active:scale-95 cursor-pointer"
            >
              無料売却査定・ご相談はこちら
            </button>
          </div>
        </div>
      </div>
    </main>
  );
};
