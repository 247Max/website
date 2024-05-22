(function () {
  'use strict';

  function getBrowserLocales(options = {}) {
    const defaultOptions = {
      languageCodeOnly: false,
    };
    const opt = {
      ...defaultOptions,
      ...options,
    };
    const browserLocales =
      navigator.languages === undefined
        ? [navigator.language]
        : navigator.languages;
    if (!browserLocales) {
      return undefined;
    }
    return browserLocales.map(locale => {
      const trimmedLocale = locale.trim();
      return opt.languageCodeOnly
        ? trimmedLocale.split(/-|_/)[0]
        : trimmedLocale;
    });
  }

  function displayLangBanner() {
    const local = getBrowserLocales({languageCodeOnly:true})[0];
    const langMode = localStorage.getItem('lang-mode');
    
    if (local == document.documentElement.lang || langMode === "manual") {
      return;
    } else if (local == "en") {
      const bannerEn = document.querySelector('[data-lang="fr"]');
      bannerEn.classList.add("is-active");
    } else if (local == "fr") {
      const bannerFr = document.querySelector('[data-lang="en"]');
      bannerFr.classList.add("is-active");
    }
  }


  function dismissLangBanner() {
    const langBanner = document.querySelector('.lang-banner');

    langBanner.addEventListener("click", (event) => {
      if(event.target.closest('[data-lang-dismiss]')) {
        localStorage.setItem('lang-mode', 'manual');
        const banner = document.querySelector('[data-lang].is-active');
        banner.classList.remove("is-active");
      }
    });
  }

  displayLangBanner();
  dismissLangBanner();

})();
