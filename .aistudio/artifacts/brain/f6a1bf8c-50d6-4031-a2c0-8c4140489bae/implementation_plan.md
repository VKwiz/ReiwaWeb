# レイワ不動産 (Reiwa Real Estate) - Official Website Implementation Plan

Comprehensive implementation blueprint for the official website of **レイワ不動産（合同会社麗和）** based on the provided Stitch designs and your latest specifications, establishing a unified responsive master framework, multi-view navigation, and interactive real estate workflows.

---

### User Review & Critical Decisions

> [!IMPORTANT]
> The plan has been revised to incorporate your exact page layout requirements:
> - **Contact Page ("お問い合わせ")**: Features a dedicated, user-friendly inquiry form (name, email, phone, inquiry category, message, submit button with validation) followed directly by the embedded Google Map section and access directions (matching the styling from the company info page).
> - **Property Sale Page ("物件売却")**: Clean, focused presentation featuring an elegant section title and dedicated copy on our comprehensive and attentive services helping customers sell their properties with confidence, maximum valuation, and local Osaka market expertise.
> - **Home View ("ホーム")**: Hero carousel with auto-play, quick property search bar, 3 key strengths (*地域密着のネットワーク*, *建築・リフォームの専門知見*, *迅速・丁寧な無料査定*), and direct quick access.
> - **Property Info View ("物件情報")**: 9:16 YouTube Shorts video room tour cards for the 7 properties with tags, pricing badges, 6-per-page pagination, and interactive video playback modal.
> - **Company Profile ("会社概要")**: Complete corporate disclosure table (合同会社麗和, 免許番号 大阪府知事(1)第65743号, business scope, languages) and Google Maps access section.
> - **Master Framework**: Unified sticky header, language switcher (日本語 / 中文 / EN), desktop quick contact bar, dark global menubar, mobile drawer, contact section, and floating scroll-to-top button.
> - **Execution Gate**: As requested, **no code will be executed until you confirm and say "start building"**.

---

### 1. Overview & Core Concept

- **What It Does**: A high-performance, responsive web application for Reiwa Real Estate (レイワ不動産), Osaka's real estate brokerage specializing in residential houses, pre-owned condominiums, commercial buildings, and land transactions.
- **Target Audience / Persona**:
  1. *Domestic Buyers & Renters in Osaka*: Seeking houses, apartments, and land with room tour videos.
  2. *Property Owners & Sellers*: Seeking professional, reliable, and attentive assistance to sell their properties smoothly at the highest possible value.
  3. *Inbound / Foreign Investors*: Looking for commercial buildings and high-yield properties with multilingual support in Japanese, Chinese, and English.
- **Key Value**: Delivers complete corporate transparency, convenient multi-channel communication (Phone, Contact Form, LINE, WeChat, Store Visit), and immersive YouTube Shorts room tours in an authentic Japanese real estate design aesthetic.

---

### 2. User Experience & Visual Design

#### Key User Flows & Page Structures
1. **Home ("ホーム")**:
   - 2-slide hero carousel (LIFESTYLE & RESIDENCE / VALUATION & ASSET MANAGEMENT) with auto-play and manual controls.
   - Quick property search bar (area, property type, price range).
   - "Why Choose Us" 3 key strengths with clean numbered design.
2. **Company Info ("会社概要")**:
   - Company title and introduction.
   - Comprehensive corporate data table (Company name, Address, Phone, FAX, Email, License number, Business description, Supported languages).
   - Embedded Google Map with "Googleマップで開く" external button.
   - Consultation notice banner.
3. **Property Info ("物件情報")**:
   - Property listing headline and room tour overview.
   - 7 YouTube Shorts cards with 9:16 portrait video thumbnails, red play button hover, price badge, tags, location, and inquiry button.
   - Paginated controls (1-6 of 7 and 7 of 7) with active page indicator.
   - In-app interactive video playback modal.
4. **Property Sale ("物件売却")**:
   - Dedicated title: "物件売却のご相談" / "Property Selling Services".
   - Clear and reassuring editorial text detailing our premium service helping clients sell their real estate:
     - Accurate local valuation based on current Osaka market data.
     - Proactive multi-channel marketing (online portals, video room tours, direct investor network).
     - Full-spectrum support from initial assessment, contract preparation, to settlement and tax advisory.
     - High privacy confidentiality and speedy transactions.
   - Direct CTA button guiding owners to the inquiry form or direct consultation.
5. **Contact Page ("お問い合わせ")**:
   - Lead capture form:
     - Name (お名前) & Furigana (フリガナ)
     - Email address (メールアドレス) & Phone number (お電話番号)
     - Inquiry Type (お問い合わせ項目: 物件の購入相談 / 物件の売却・査定 / ご来店予約 / その他)
     - Message content (お問い合わせ内容)
     - Privacy policy agreement check
     - Immediate submission feedback with success confirmation state
   - Followed immediately by the **Map Section** (ACCESS & LOCATION, Address: 〒546-0002 大阪府大阪市東住吉区杭全4丁目12-5, Google Maps external button, and full-width embedded interactive Google Map iframe) matching the styling of the Company Info page.

#### Visual Theme & Color Palette
- `Primary Orange`: `#FF9900` (Hover: `#E68A00`, Deep: `#B85E1A`, Light Tint: `#FFF8F0`)
- `Dark Neutral Accent`: `#2D2A26` (Global menubar, footer)
- `Messaging Accents`: LINE Green `#06C755`, WeChat Green `#07C160`, Google Maps Pin Red `#EF4444`
- `Typography`: `"Noto Sans JP"`, sans-serif with `tabular-nums` for prices and phone numbers

---

### 3. Key Product Decisions & Trade-Offs

- **Decision 1: Dedicated Inquiry Form + Map on Contact Page**:
  - *Chosen Approach*: On the Contact page, render a full interactive form with field validation and immediate feedback, seamlessly followed by the embedded Google Map card identical in fidelity to the Company Info page.
  - *Why*: Gives users immediate ability to submit detailed written inquiries while simultaneously seeing physical access information and store location in one cohesive view.
- **Decision 2: Focused Editorial Styling for "物件売却"**:
  - *Chosen Approach*: Deliver high-trust, persuasive copywriting emphasizing Reiwa Real Estate's attentive customer-first sales support, local Osaka sales velocity, and renovation synergy, without distracting clutter.
  - *Why*: Directly fulfills the user requirement to provide warm, authoritative copy on our quality seller services while keeping the UI clean and focused.
- **Decision 3: Zero-Reload Tab & Hash Navigation**:
  - *Chosen Approach*: Support both direct URL hash links (`#home`, `#company`, `#properties`, `#sell`, `#contact`) and internal active state switching so the header and footer remain smooth and instant without browser reloads.

---

### 4. Technical Architecture & Data Strategy *(Technical Reference)*

#### System Architecture & Component Hierarchy

```
┌────────────────────────────────────────────────────────────────────────┐
│                        App.tsx (Root Controller)                       │
│  State: activeTab, currentLang, isDrawerOpen, isContactModalOpen, ...  │
└───────────────────────────────────┬────────────────────────────────────┘
                                    │
       ┌────────────────────────────┼───────────────────────────┐
       ▼                            ▼                           ▼
┌───────────────┐           ┌───────────────┐           ┌───────────────┐
│ Header.tsx    │           │ Active Views  │           │ ContactArea   │
│ - Brand Logo  │           │ - HomeView    │           │ & Footer.tsx  │
│ - Announcement│           │ - CompanyView │           │ - Office Pic  │
│ - Lang Dropdown           │ - PropertyView│           │ - Action CTAs │
│ - Action Strip│           │ - SellView    │           │ - Google Maps │
│ - Menubar Nav │           │ - ContactView │           │ - Copyright   │
└───────┬───────┘           │   (Form + Map)│           └───────────────┘
        │                   └───────┬───────┘
        ▼                           │
┌───────────────┐                   ▼
│ Drawer.tsx    │           ┌───────────────────────────────────────────┐
│ - Quick CTAs  │           │ Interactive Overlays & Modals             │
│ - Mobile Menu │           │ - VideoModal (YouTube Shorts 9:16 player) │
│ - Lang Switch │           │ - WeChatModal (QR Code & ID)              │
│ - Active Links│           │ - ScrollToTop Floating Button             │
└───────────────┘           └───────────────────────────────────────────┘
```

---

### Ready for Confirmation
Please review the revised implementation plan above. When you are satisfied with this plan, simply reply **"start building"** and I will construct the complete website right away!
