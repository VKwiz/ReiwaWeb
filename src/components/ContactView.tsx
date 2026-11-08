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
      {/*
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
           不動産の売買・無料査定・ご来店予約など、どんなことでもお気軽にご相談ください。
           担当者より迅速にご返信いたします。
        </p>
      </div>
      */}

      {/* Main Inquiry Form Container */}
      {/* Constructing Query Form */}




    </main>
  );
};
