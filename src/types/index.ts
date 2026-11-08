export type PageTab = 'home' | 'company' | 'sell' | 'properties' | 'contact';

export type Language = 'ja' | 'zh' | 'en';

export interface PropertyItem {
  id: string;
  shortsId: string;
  title: string;
  price: string;
  priceNumber: number;
  location: string;
  specs: string;
  tags: string[];
  category: 'house' | 'condo' | 'commercial' | 'land';
  roomTourNumber: number;
  page: number;
}

export interface InquiryFormData {
  name: string;
  furigana: string;
  email: string;
  phone: string;
  category: string;
  message: string;
  propertyTitle?: string;
  agree: boolean;
}
