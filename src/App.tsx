import { useState, useEffect } from 'react';
import { PageTab, Language, PropertyItem } from './types';
import { Header } from './components/Header';
import { Drawer } from './components/Drawer';
import { HomeView } from './components/HomeView';
import { CompanyView } from './components/CompanyView';
import { SellView } from './components/SellView';
import { PropertyView } from './components/PropertyView';
import { ContactView } from './components/ContactView';
import { ContactArea } from './components/ContactArea';
import { Footer } from './components/Footer';
import { VideoModal } from './components/VideoModal';
import { WeChatModal } from './components/WeChatModal';
import { LineModal } from './components/LineModal';
import { ScrollToTop } from './components/ScrollToTop';

export default function App() {
  const [activeTab, setActiveTab] = useState<PageTab>('home');
  const [currentLang, setCurrentLang] = useState<Language>('ja');
  const [isDrawerOpen, setIsDrawerOpen] = useState(false);
  const [selectedVideo, setSelectedVideo] = useState<PropertyItem | null>(null);
  const [isWeChatOpen, setIsWeChatOpen] = useState(false);
  const [isLineOpen, setIsLineOpen] = useState(false);
  const [inquiryPropertyTitle, setInquiryPropertyTitle] = useState<string>('');
  const [propertyCategoryFilter, setPropertyCategoryFilter] = useState<string | undefined>(undefined);

  // Sync hash routing
  useEffect(() => {
    const handleHashChange = () => {
      const hash = window.location.hash.toLowerCase().replace('#', '');
      if (hash === 'home' || hash === '') {
        setActiveTab('home');
      } else if (hash === 'company' || hash === 'store-visit') {
        setActiveTab('company');
      } else if (hash === 'sell') {
        setActiveTab('sell');
      } else if (hash === 'properties') {
        setActiveTab('properties');
      } else if (hash === 'contact' || hash === 'inquiry' || hash === 'contact-section') {
        setActiveTab('contact');
      } else if (hash === 'line-consult') {
        setIsLineOpen(true);
      } else if (hash === 'wechat-consult') {
        setIsWeChatOpen(true);
      }
    };

    handleHashChange();
    window.addEventListener('hashchange', handleHashChange);
    return () => window.removeEventListener('hashchange', handleHashChange);
  }, []);

  const handleSelectTab = (tab: PageTab) => {
    setActiveTab(tab);
    window.location.hash = tab;
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  const handleOpenVideo = (property: PropertyItem) => {
    setSelectedVideo(property);
  };

  const handleSelectPropertyForInquiry = (propertyTitle: string) => {
    setInquiryPropertyTitle(propertyTitle);
    setActiveTab('contact');
    window.location.hash = 'contact';
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  const handleSearchFilter = (category?: string) => {
    setPropertyCategoryFilter(category);
    setActiveTab('properties');
    window.location.hash = 'properties';
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <div className="min-h-screen flex flex-col bg-gray-50 text-[#333333] relative">
      {/* Master Framework Header */}
      <Header
        activeTab={activeTab}
        onSelectTab={handleSelectTab}
        currentLang={currentLang}
        onSelectLang={setCurrentLang}
        onOpenDrawer={() => setIsDrawerOpen(true)}
        onOpenWeChat={() => setIsWeChatOpen(true)}
        onOpenLine={() => setIsLineOpen(true)}
      />

      {/* Main Content Area by Active Tab */}
      <div className="flex-1 flex flex-col">
        {activeTab === 'home' && (
          <HomeView
            onSelectTab={handleSelectTab}
            onOpenVideo={handleOpenVideo}
            onSearchFilter={handleSearchFilter}
          />
        )}

        {activeTab === 'company' && <CompanyView />}

        {activeTab === 'sell' && <SellView onSelectTab={handleSelectTab} />}

        {activeTab === 'properties' && (
          <PropertyView
            onSelectTab={handleSelectTab}
            onOpenVideo={handleOpenVideo}
            onSelectPropertyForInquiry={handleSelectPropertyForInquiry}
            initialCategory={propertyCategoryFilter}
          />
        )}

        {activeTab === 'contact' && (
          <ContactView
            initialPropertyTitle={inquiryPropertyTitle}
            onClearPropertyTitle={() => setInquiryPropertyTitle('')}
            onOpenWeChat={() => setIsWeChatOpen(true)}
            onOpenLine={() => setIsLineOpen(true)}
          />
        )}

        {/* Global Contact & Access Area (shown on Home, Company, and Sell pages for easy conversion) */}
        {activeTab !== 'contact' && (
          <ContactArea
            onSelectTab={handleSelectTab}
            onOpenWeChat={() => setIsWeChatOpen(true)}
            onOpenLine={() => setIsLineOpen(true)}
          />
        )}
      </div>

      {/* Master Framework Footer */}
      <Footer onSelectTab={handleSelectTab} />

      {/* Mobile Slide-in Drawer Menu */}
      <Drawer
        isOpen={isDrawerOpen}
        onClose={() => setIsDrawerOpen(false)}
        activeTab={activeTab}
        onSelectTab={handleSelectTab}
        currentLang={currentLang}
        onSelectLang={setCurrentLang}
        onOpenWeChat={() => setIsWeChatOpen(true)}
        onOpenLine={() => setIsLineOpen(true)}
      />

      {/* YouTube Shorts Video Modal */}
      <VideoModal
        property={selectedVideo}
        onClose={() => setSelectedVideo(null)}
        onInquiry={handleSelectPropertyForInquiry}
      />

      {/* WeChat QR & Account Modal */}
      <WeChatModal isOpen={isWeChatOpen} onClose={() => setIsWeChatOpen(false)} />

      {/* LINE Official Account Modal */}
      <LineModal isOpen={isLineOpen} onClose={() => setIsLineOpen(false)} />

      {/* Floating Scroll-to-Top Button */}
      <ScrollToTop />
    </div>
  );
}
