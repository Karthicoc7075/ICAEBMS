import React, { useEffect } from 'react';

const QuickBar = () => {
  useEffect(() => {
    window.googleTranslateElementInit = () => {
      new window.google.translate.TranslateElement(
        {
          pageLanguage: 'en',
          includedLanguages:
            'en,hi,ta,te,ml,kn,bn,gu,mr,pa,ur,zh-CN,zh-TW,ja,ko,ar,fr,de,es,it,pt,ru,tr,vi,th,id,ms,fa,he,pl,nl,sv,da,fi,no,cs,sk,ro,hu,el,uk,bg,hr,sr,sl,lt,lv,et,sq,mk,bs,ca,af,sw,am,ne,si,km,lo,my,mn,ka,hy,az,kk,uz,tg,tk,ky,ps,sd,ug,yi,eu,gl,mt,cy,ga,is,lb,fo,eo',
          layout: window.google.translate.TranslateElement.InlineLayout.SIMPLE,
          autoDisplay: false,
          multilanguagePage: true,
        },
        'google_translate_element'
      );
    };

    if (!document.querySelector('#google-translate-script')) {
      const script = document.createElement('script');
      script.id = 'google-translate-script';
      script.src =
        '//translate.google.com/translate_a/element.js?cb=googleTranslateElementInit';
      script.async = true;
      document.body.appendChild(script);
    }

    const style = document.createElement('style');
    style.id = 'gt-style-override';
    style.innerHTML = `
      .goog-te-banner-frame.skiptranslate { display: none !important; }
      body { top: 0 !important; position: static !important; }

      .goog-te-gadget { font-size: 0 !important; line-height: 0 !important; }
      .goog-te-gadget-icon { display: none !important; }

      .goog-te-gadget-simple {
        border: none !important;
        background: transparent !important;
        padding: 0 !important;
        margin: 0 !important;
      }

      .goog-te-gadget-simple .goog-te-menu-value {
        display: flex !important;
        align-items: center !important;
        gap: 6px !important;
        background: #f0f4ff !important;
        border: 1.5px solid #c7d9f8 !important;
        border-radius: 8px !important;
        padding: 5px 12px !important;
        font-size: 13px !important;
        font-weight: 600 !important;
        color: #1a52b0 !important;
        cursor: pointer !important;
        transition: background 0.15s !important;
        white-space: nowrap !important;
      }

      .goog-te-gadget-simple .goog-te-menu-value:hover {
        background: #dbeafe !important;
      }

      .goog-te-gadget-simple .goog-te-menu-value span {
        color: #1a52b0 !important;
        font-size: 13px !important;
        font-weight: 600 !important;
        border: none !important;
      }

      .goog-te-gadget-simple .goog-te-menu-value span:last-child {
        color: #93b4e0 !important;
        font-size: 11px !important;
      }

      .goog-te-gadget-simple img { display: none !important; }

      .goog-te-menu-frame {
        border-radius: 10px !important;
        border: 1px solid #e2ecfa !important;
        box-shadow: 0 8px 30px rgba(26,82,176,0.12) !important;
        overflow: hidden !important;
      }
    `;
    if (!document.querySelector('#gt-style-override')) {
      document.head.appendChild(style);
    }
  }, []);

  return (
    <div className="hidden lg:flex w-full justify-center bg-white border-b border-gray-200 text-sm font-semibold text-gray-700">
      <div className="flex flex-wrap items-center justify-between px-4 py-2 gap-4">

      
        <div className="flex items-center gap-1.5">
          <span className="text-gray-400 text-xs font-normal">🌐</span>
          <div id="google_translate_element" />
        </div>

        <a href="#submit" className="p-2 hover:bg-blue-50 rounded transition-colors">
          📝 Register Now
        </a>

        <a href="mailto:info@cerada.in" className="p-2 hover:bg-blue-50 rounded transition-colors">
          ✉️ info@cerada.in
        </a>

        <a href="tel:+918072381719" className="p-2 hover:bg-blue-50 rounded transition-colors">
          📱 +91 8072381719
        </a>

        <a href="#" className="p-2 hover:bg-blue-50 rounded transition-colors">
          🤝 Academic Partner
        </a>

      </div>
    </div>
  );
};

export default QuickBar;