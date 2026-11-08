import { Language } from '../types';

export interface TranslationDict {
  brandName: string;
  announcement: string;
  hours: string;
  nav: {
    home: string;
    company: string;
    sell: string;
    properties: string;
    contact: string;
  };
  actions: {
    visit: string;
    inquiry: string;
    lineConsult: string;
    wechatConsult: string;
    phone: string;
    drawerTitle: string;
    quickInquiry: string;
    callNow: string;
    lineAccount: string;
    wechatAccount: string;
    formContact: string;
    visitAccess: string;
  };
  contactSection: {
    kicker: string;
    heading: string;
    subheading: string;
    companyTitle: string;
    address: string;
    phone: string;
    hours: string;
    inquiryBtn: string;
    lineBtn: string;
    wechatBtn: string;
    visitBtn: string;
  };
}

export const TRANSLATIONS: Record<Language, TranslationDict> = {
  ja: {
    brandName: 'レイワ不動産',
    announcement: 'レイワ不動産・不動産の売買 大阪府を中心とした戸建て、マンションの売買専門',
    hours: '営業時間 09:00〜17:00 (定休日: 水曜日)',
    nav: {
      home: 'ホーム',
      company: '会社概要',
      sell: '物件売却',
      properties: '物件情報',
      contact: 'お問い合わせ',
    },
    actions: {
      visit: 'ご来店',
      inquiry: 'お問い合わせ',
      lineConsult: 'ご気軽に相談',
      wechatConsult: 'WeChat',
      phone: 'TEL: 06-6777-4124',
      drawerTitle: 'カテゴリ・メニュー一覧',
      quickInquiry: 'クイックお問い合わせ',
      callNow: '電話で相談する',
      lineAccount: 'LINE公式アカウントで相談',
      wechatAccount: 'WeChat公式アカウントで相談',
      formContact: '専用フォームからのお問い合わせ',
      visitAccess: 'Googleマップ・店舗への道順',
    },
    contactSection: {
      kicker: 'CONTACT & ACCESS',
      heading: 'お問い合わせ・ご相談',
      subheading: '不動産の売買・査定など、まずはお気軽にご連絡ください',
      companyTitle: 'レイワ不動産',
      address: '大阪府大阪市東住吉区杭全4丁目12-6',
      phone: 'TEL: 06-6777-4124',
      hours: '営業時間 09:00〜17:00 (定休日: 水曜日)',
      inquiryBtn: 'お問い合わせ',
      lineBtn: 'Lineで相談',
      wechatBtn: 'WeChatで相談',
      visitBtn: 'ご来店予約・アクセス',
    },
  },
  zh: {
    brandName: '令和不动产',
    announcement: '令和不动产・日本房产买卖 专注于大阪府独栋一户建、公寓、商用投资楼买卖',
    hours: '营业时间 09:00〜17:00 (周三定休)',
    nav: {
      home: '首页',
      company: '公司概要',
      sell: '房产出售',
      properties: '房源信息',
      contact: '联系我们',
    },
    actions: {
      visit: '到店咨询',
      inquiry: '在线咨询',
      lineConsult: 'LINE咨询',
      wechatConsult: '微信咨询',
      phone: '电话: 06-6777-4124',
      drawerTitle: '分类与菜单',
      quickInquiry: '快捷咨询',
      callNow: '电话直拨',
      lineAccount: 'LINE官方账号咨询',
      wechatAccount: '微信官方客服在线咨询',
      formContact: '提交专属咨询表单',
      visitAccess: '谷歌地图・来店路线',
    },
    contactSection: {
      kicker: 'CONTACT & ACCESS',
      heading: '联系我们・咨询洽谈',
      subheading: '不动产买卖、投资收益评估等，欢迎随时与我们联系',
      companyTitle: '令和不动产（合同会社丽和）',
      address: '大阪府大阪市东住吉区杭全4丁目12-6',
      phone: 'TEL: 06-6777-4124',
      hours: '营业时间 09:00〜17:00 (周三公休)',
      inquiryBtn: '立即咨询',
      lineBtn: 'LINE咨询',
      wechatBtn: '微信扫码咨询',
      visitBtn: '预约到店・交通导航',
    },
  },
  en: {
    brandName: 'REIWA Real Estate',
    announcement: 'Reiwa Real Estate - Houses, Condominiums & Commercial Real Estate Specialists in Osaka',
    hours: 'Business Hours 09:00 - 17:00 (Closed on Wednesdays)',
    nav: {
      home: 'Home',
      company: 'Company',
      sell: 'Sell Property',
      properties: 'Properties',
      contact: 'Contact Us',
    },
    actions: {
      visit: 'Store Visit',
      inquiry: 'Inquiry',
      lineConsult: 'LINE Chat',
      wechatConsult: 'WeChat',
      phone: 'TEL: 06-6777-4124',
      drawerTitle: 'Menu & Navigation',
      quickInquiry: 'Quick Contact',
      callNow: 'Direct Phone Call',
      lineAccount: 'Contact via Official LINE',
      wechatAccount: 'Contact via WeChat Official',
      formContact: 'Online Inquiry Form',
      visitAccess: 'Google Map & Directions',
    },
    contactSection: {
      kicker: 'CONTACT & ACCESS',
      heading: 'Contact & Inquiries',
      subheading: 'Feel free to contact us regarding property sales, purchase, or free valuations',
      companyTitle: 'REIWA Real Estate Co., Ltd.',
      address: '4-12-6 Kumata, Higashisumiyoshi-ku, Osaka-shi, Osaka 546-0002',
      phone: 'TEL: 06-6777-4124',
      hours: 'Business Hours: 09:00 - 17:00 (Closed Wednesdays)',
      inquiryBtn: 'Send Inquiry',
      lineBtn: 'Chat on LINE',
      wechatBtn: 'Chat on WeChat',
      visitBtn: 'Book Store Visit',
    },
  },
};
