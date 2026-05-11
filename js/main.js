(() => {
  var __webpack_modules__ = {
    326() {
      const observer = new IntersectionObserver(entries => {
        entries.forEach(entry => {
          if (entry.isIntersecting) {
            entry.target.classList.add("active");
          }
        });
      }, {
        threshold: .2
      });
      document.querySelectorAll(".beyond_component-content").forEach(section => {
        observer.observe(section);
      });
    },
    822(__unused_webpack_module, __webpack_exports__, __webpack_require__) {
      "use strict";
      __webpack_require__.r(__webpack_exports__);
      __webpack_require__.d(__webpack_exports__, {
        default: () => initCommentsSlider
      });
      function initCommentsSlider() {
  const sliderEl = document.querySelector(".coments_slider-slider");
  if (!sliderEl) return;

  new Swiper(sliderEl, {
    // 1. Включаємо циклічність
    loop: true, 

    // 2. Вирішуємо проблему "тільки в одну сторону":
    // Swiper за замовчуванням клонує лише 1 слайд. Для 5 slidesPerView 
    // йому не вистачає контенту зліва, щоб крутити назад.
    loopedSlides: 10, // Клонуємо достатньо слайдів для обох сторін
    centeredSlides: false,

    slidesPerView: 3,
    spaceBetween: 20,
    speed: 600,
    
    // Прибираємо конфліктні параметри і додаємо стабільність
    grabCursor: true,
    watchSlidesProgress: true,
    
    navigation: {
      nextEl: ".coments_slider-button-next",
      prevEl: ".coments_slider-button-prev"
    },

    pagination: {
      el: ".coments_slider-pagination",
      clickable: true,
      // ВАЖЛИВО: цей параметр змушує пагінацію ігнорувати клони
      // і рахувати лише "реальні" слайди
      dynamicBullets: false, 
    },

    // Оновлена логіка брейкпоінтів
    breakpoints: {
      320: { slidesPerView: 3, spaceBetween: 10 },
      550: { slidesPerView: 4, spaceBetween: 15 },
      900: { slidesPerView: 5, spaceBetween: 20 }
    },

    // Додаткові налаштування для стабільності DOM
    observer: true,
    observeParents: true,
    resizeObserver: true,
  });

      }
    },
    342(__unused_webpack_module, __webpack_exports__, __webpack_require__) {
      "use strict";
      __webpack_require__.r(__webpack_exports__);
      __webpack_require__.d(__webpack_exports__, {
        default: () => __WEBPACK_DEFAULT_EXPORT__
      });
      function __WEBPACK_DEFAULT_EXPORT__() {
  const sliderEl = document.querySelector(".delivered_component-slider");
  if (!sliderEl) return;

  new Swiper(sliderEl, {
    // 1. Вмикаємо нескінченність
    loop: true,

    // 2. Ключовий момент для 1.5 slidesPerView:
    // Нам потрібно зациклити достатньо слайдів, щоб "половинка" завжди мала продовження
    loopedSlides: 6, 
    
    // 3. Плавність та швидкість
    slidesPerView: 1.5,
    centeredSlides: false, // Якщо хочеш, щоб перший слайд був зліва, а половинка справа
    spaceBetween: 20,
    speed: 500,

    // 4. Пагінація (буде показувати тільки реальну кількість слайдів)
    pagination: {
      el: ".delivered_component-slider-pagination",
      clickable: true,
    },

    // 5. Налаштування для десктопа
    breakpoints: {
      900: {
        slidesPerView: 3,
        spaceBetween: 30, // Можна трохи збільшити відступ на великих екранах
      }
    },

    // 6. Оптимізація та стабільність
    grabCursor: true,
    touchStartPreventDefault: false,
    
    // Важливо для Webpack-збірок та динамічного контенту
    observer: true,
    observeParents: true,
    watchSlidesProgress: true,
    
    // Запобігає багу, коли слайдер "стрибає" при натисканні
    loopPreventsSliding: false 
  });
}
    },
    486(__unused_webpack_module, __webpack_exports__, __webpack_require__) {
      "use strict";
      __webpack_require__.r(__webpack_exports__);
      __webpack_require__.d(__webpack_exports__, {
        default: () => __WEBPACK_DEFAULT_EXPORT__
      });
      const footer__timer = () => {
        const init = () => {
          const footer = document.getElementById("footer");
          if (!footer) return;
          const handleScroll = () => {
            if (window.scrollY >= 200) footer.classList.add("active"); else footer.classList.remove("active");
          };
          window.addEventListener("scroll", handleScroll);
          handleScroll();
          const hoursEl = footer.querySelector(".footer-timer-item:nth-child(1) .footer-timer-value");
          const minutesEl = footer.querySelector(".footer-timer-item:nth-child(2) .footer-timer-value");
          const secondsEl = footer.querySelector(".footer-timer-item:nth-child(3) .footer-timer-value");
          if (!hoursEl || !minutesEl || !secondsEl) return;
          const STORAGE_KEY = "footer_timer_end";
          const FULL_DURATION = 24 * 60 * 60 * 1e3;
          const startTimer = () => {
            let endTime = parseInt(localStorage.getItem(STORAGE_KEY), 10);
            if (isNaN(endTime) || endTime < Date.now()) {
              endTime = Date.now() + FULL_DURATION;
              localStorage.setItem(STORAGE_KEY, endTime);
            }
            const update = () => {
              let remaining = Math.max(0, endTime - Date.now());
              if (remaining <= 0) {
                endTime = Date.now() + FULL_DURATION;
                localStorage.setItem(STORAGE_KEY, endTime);
                remaining = FULL_DURATION;
              }
              const hrs = Math.floor(remaining / (1e3 * 60 * 60));
              const mins = Math.floor(remaining % (1e3 * 60 * 60) / (1e3 * 60));
              const secs = Math.floor(remaining % (1e3 * 60) / 1e3);
              hoursEl.textContent = String(hrs).padStart(2, "0");
              minutesEl.textContent = String(mins).padStart(2, "0");
              secondsEl.textContent = String(secs).padStart(2, "0");
              requestAnimationFrame(update);
            };
            update();
          };
          startTimer();
        };
        if (document.readyState === "loading") {
          document.addEventListener("DOMContentLoaded", init);
        } else {
          init();
        }
      };
      const __WEBPACK_DEFAULT_EXPORT__ = footer__timer;
    },
    788() {
      document.addEventListener("DOMContentLoaded", () => {
        const video = document.getElementById("hero-video");
        const playButton = document.getElementById("play-button");
        video.controls = false;
        const playVideo = () => {
          video.play().catch(err => {
            console.warn("Video play failed:", err);
          });
          playButton.style.display = "none";
          video.controls = true;
        };
        const pauseVideo = () => {
          video.pause();
          video.controls = false;
          playButton.style.display = "flex";
        };
        playButton.addEventListener("click", playVideo);
        video.addEventListener("pause", pauseVideo);
        video.addEventListener("play", () => {
          video.controls = true;
          playButton.style.display = "none";
        });
        video.muted = true;
        const burderButton = document.getElementById("burger-button");
        const burderButtonClose = document.getElementById("burger-close");
        const burgerMenu = document.querySelector(".burger-menu");
        const burgerLinks = document.querySelectorAll(".burger-menu-list-link");
        if (burderButton && burderButtonClose && burgerMenu && burgerLinks) {
          burderButton.addEventListener("click", () => {
            burgerMenu.classList.add("active");
          });
          burderButtonClose.addEventListener("click", () => {
            burgerMenu.classList.remove("active");
          });
          burgerLinks.forEach(el => {
            el.addEventListener("click", () => {
              burgerMenu.classList.remove("active");
            });
          });
        }
        const navLinks = document.querySelectorAll(".content-navigations-list-link");
        function updateActiveLink() {
          let fromTop = window.scrollY + window.innerHeight / 2;
          navLinks.forEach(link => {
            const section = document.querySelector(link.getAttribute("href"));
            if (section) {
              const sectionTop = section.offsetTop;
              const sectionBottom = sectionTop + section.offsetHeight;
              if (fromTop >= sectionTop && fromTop < sectionBottom) {
                link.classList.add("active");
              } else {
                link.classList.remove("active");
              }
            }
          });
        }
        window.addEventListener("scroll", updateActiveLink);
        updateActiveLink();
        const hoursEl = document.getElementById("header-hours");
        const minEl = document.getElementById("header-min");
        const secEl = document.getElementById("header-sec");
        if (!hoursEl || !minEl || !secEl) return;
        const TIMER_KEY = "timer24h_end";
        let endTime = localStorage.getItem(TIMER_KEY);
        if (!endTime) {
          endTime = Date.now() + 24 * 60 * 60 * 1e3;
          localStorage.setItem(TIMER_KEY, endTime);
        } else {
          endTime = parseInt(endTime);
        }
        function updateTimer() {
          const now = Date.now();
          let diff = endTime - now;
          if (diff <= 0) {
            endTime = Date.now() + 24 * 60 * 60 * 1e3;
            localStorage.setItem(TIMER_KEY, endTime);
            diff = endTime - now;
          }
          const hours = Math.floor(diff / (1e3 * 60 * 60));
          const minutes = Math.floor(diff % (1e3 * 60 * 60) / (1e3 * 60));
          const seconds = Math.floor(diff % (1e3 * 60) / 1e3);
          hoursEl.textContent = String(hours).padStart(2, "0");
          minEl.textContent = String(minutes).padStart(2, "0");
          secEl.textContent = String(seconds).padStart(2, "0");
        }
        updateTimer();
        setInterval(updateTimer, 1e3);
      });
    },
    102(__unused_webpack_module, __webpack_exports__, __webpack_require__) {
      "use strict";
      __webpack_require__.r(__webpack_exports__);
      __webpack_require__.d(__webpack_exports__, {
        default: () => __WEBPACK_DEFAULT_EXPORT__
      });
      function __WEBPACK_DEFAULT_EXPORT__() {
  const sliderEl = document.querySelector(".modules_component-slider");
  if (!sliderEl) return;

  new Swiper(sliderEl, {
    // 1. Активуємо вічний цикл
    loop: true,

    // 2. Для 2 слайдів на екрані потрібно мінімум 4-6 клонів, 
    // щоб перехід "кінець-початок" був безшовним
    loopedSlides: 6, 
    
    slidesPerView: 2,
    spaceBetween: 20,
    speed: 500,

    // 3. Навігація
    navigation: {
      nextEl: ".modules_component-button-next",
      prevEl: ".modules_component-button-prev"
    },

    // 4. Пагінація (буде показувати реальну кількість точок)
    pagination: {
      el: ".modules_component-slider-pagination",
      clickable: true,
      // Якщо раптом точок забагато, додаємо: 
      // dynamicBullets: true (але зазвичай loop сам справляється)
    },

    // 5. Критичні параметри для стабільності
    grabCursor: true,
    touchStartPreventDefault: false,
    
    // Щоб слайдер не "тупив" при швидких кліках на стрілки
    loopPreventsSliding: false, 
    
    // Автоматичне оновлення, якщо контент додається динамічно
    observer: true,
    observeParents: true,
    
    // Оптимізація рендеру (актуально для мобільних)
    watchSlidesProgress: true
  });
}
    },
    910(__unused_webpack_module, __webpack_exports__, __webpack_require__) {
      "use strict";
      __webpack_require__.r(__webpack_exports__);
      __webpack_require__.d(__webpack_exports__, {
        default: () => __WEBPACK_DEFAULT_EXPORT__
      });
      const questions__main = () => {
        const init = () => {
          const items = document.querySelectorAll(".questionsContainer-item");
          if (!items.length) return;
          items.forEach(item => {
            const top = item.querySelector(".questionsContainer-item-top");
            const bottom = item.querySelector(".questionsContainer-item-bottom");
            const label = item.querySelector(".q-arrow");
            if (!top || !bottom || !label) return;
            bottom.style.maxHeight = "0";
            bottom.style.overflow = "hidden";
            bottom.style.transition = "max-height 0.4s ease";
            top.addEventListener("click", () => {
              const isActive = item.classList.contains("active");
              items.forEach(el => {
                el.classList.remove("active");
                const elBottom = el.querySelector(".questionsContainer-item-bottom");
                const elLabel = el.querySelector(".q-arrow");
                if (elBottom) elBottom.style.maxHeight = "0";
                if (elLabel) elLabel.style.transform = "rotate(0deg)";
              });
              if (!isActive) {
                item.classList.add("active");
                bottom.style.maxHeight = bottom.scrollHeight + "px";
                label.style.transform = "rotate(180deg)";
              }
            });
          });
        };
        if (document.readyState === "loading") {
          document.addEventListener("DOMContentLoaded", init);
        } else {
          init();
        }
      };
      const __WEBPACK_DEFAULT_EXPORT__ = questions__main;
    },
    416(__unused_webpack_module, __webpack_exports__, __webpack_require__) {
      "use strict";
      __webpack_require__.r(__webpack_exports__);
      __webpack_require__.d(__webpack_exports__, {
        default: () => initRoadmapFade
      });
      function initRoadmapFade() {
        const container = document.querySelector(".roadmap365_component-content");
        if (!container) return;
        const iconElems = container.querySelectorAll(".elements-icons-img");
        const infoDivs = container.querySelectorAll(".roadmap365_component-info > div");
        const observer = new IntersectionObserver((entries, obs) => {
          entries.forEach(entry => {
            if (entry.isIntersecting) {
              iconElems.forEach((icon, i) => {
                setTimeout(() => {
                  icon.classList.add("show");
                }, i * 200);
              });
              infoDivs.forEach((div, i) => {
                setTimeout(() => {
                  div.classList.add("show");
                }, iconElems.length * 200 + i * 200);
              });
              obs.disconnect();
            }
          });
        }, {
          threshold: .2
        });
        observer.observe(container);
      }
    },
    422() {
      document.addEventListener("DOMContentLoaded", () => {
        const dateBlock = document.querySelector(".badge_1_date-block");
        const months = [ "January", "February", "March", "April", "May", "June", "July", "August", "September", "October", "November", "December" ];
        if (dateBlock) {
          const tomorrow = new Date;
          tomorrow.setDate(tomorrow.getDate() + 1);
          const day = tomorrow.getDate();
          const month = months[tomorrow.getMonth()];
          dateBlock.textContent = `${day} ${month}`;
        }
      });
    },
    534(__unused_webpack_module, __webpack_exports__, __webpack_require__) {
      "use strict";
      __webpack_require__.r(__webpack_exports__);
      __webpack_require__.d(__webpack_exports__, {
        default: () => initRoadmapItemsFade
      });
      function initRoadmapItemsFade() {
        const container = document.querySelector(".tableCards_component-first");
        if (!container) return;
        const items = container.querySelectorAll(":scope > div");
        const observer = new IntersectionObserver((entries, obs) => {
          if (!entries[0].isIntersecting) return;
          items.forEach((el, index) => {
            setTimeout(() => {
              el.classList.add("show");
            }, index * 300);
          });
          obs.disconnect();
        }, {
          threshold: .3
        });
        observer.observe(container);
      }
    },
    147(module, __unused_webpack_exports, __webpack_require__) {
      var map = {
        "./beyond_component/beyond_component.js": 326,
        "./coments_slider/coments_slider.js": 822,
        "./delivered_component/delivered_component.js": 342,
        "./footer__timer/footer__timer.js": 486,
        "./header_component_4/header_component_4.js": 788,
        "./modules_component/modules_component.js": 102,
        "./questions__main/questions__main.js": 910,
        "./roadmap365_component/roadmap365_component.js": 416,
        "./start_date_badge_1/start_date_badge_1.js": 422,
        "./tableCards_component/tableCards_component.js": 534
      };
      function webpackContext(req) {
        var id = webpackContextResolve(req);
        return __webpack_require__(id);
      }
      function webpackContextResolve(req) {
        if (!__webpack_require__.o(map, req)) {
          var e = new Error("Cannot find module '" + req + "'");
          e.code = "MODULE_NOT_FOUND";
          throw e;
        }
        return map[req];
      }
      webpackContext.keys = function webpackContextKeys() {
        return Object.keys(map);
      };
      webpackContext.resolve = webpackContextResolve;
      module.exports = webpackContext;
      webpackContext.id = 147;
    },
    980(__unused_webpack_module, __unused_webpack_exports, __webpack_require__) {
      function importAll(r) {
        r.keys().forEach(key => {
          const module = r(key);
          if (module.default) module.default();
        });
      }
      importAll(__webpack_require__(147));
    }
  };
  var __webpack_module_cache__ = {};
  function __webpack_require__(moduleId) {
    var cachedModule = __webpack_module_cache__[moduleId];
    if (cachedModule !== undefined) {
      return cachedModule.exports;
    }
    var module = __webpack_module_cache__[moduleId] = {
      exports: {}
    };
    __webpack_modules__[moduleId](module, module.exports, __webpack_require__);
    return module.exports;
  }
  (() => {
    __webpack_require__.n = module => {
      var getter = module && module.__esModule ? () => module["default"] : () => module;
      __webpack_require__.d(getter, {
        a: getter
      });
      return getter;
    };
  })();
  (() => {
    __webpack_require__.d = (exports, definition) => {
      for (var key in definition) {
        if (__webpack_require__.o(definition, key) && !__webpack_require__.o(exports, key)) {
          Object.defineProperty(exports, key, {
            enumerable: true,
            get: definition[key]
          });
        }
      }
    };
  })();
  (() => {
    __webpack_require__.o = (obj, prop) => Object.prototype.hasOwnProperty.call(obj, prop);
  })();
  (() => {
    __webpack_require__.r = exports => {
      if (typeof Symbol !== "undefined" && Symbol.toStringTag) {
        Object.defineProperty(exports, Symbol.toStringTag, {
          value: "Module"
        });
      }
      Object.defineProperty(exports, "__esModule", {
        value: true
      });
    };
  })();
  var __webpack_exports__ = {};
  (() => {
    "use strict";
    __webpack_require__.r(__webpack_exports__);
    var _components__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(980);
    var _components__WEBPACK_IMPORTED_MODULE_0___default = __webpack_require__.n(_components__WEBPACK_IMPORTED_MODULE_0__);
    const CACHE_KEY = "loaded-components-v1";
    document.addEventListener("DOMContentLoaded", async () => {
      console.log("🚀 System initialized");
      initSpecificComponents();
      const cached = getCache();
      const mainComponent = document.querySelector('[data-component="main"]');
      const otherComponents = Array.from(document.querySelectorAll('[data-component]:not([data-component="main"])'));
      if (mainComponent) {
        const id = getComponentId(mainComponent);
        if (!cached[id]) {
          await waitUntilReady(mainComponent);
          cached[id] = true;
          saveCache(cached);
        }
        mainComponent.classList.add("is-ready");
        loadedComponentsCache.set(mainComponent, true);
      }
      requestAnimationFrame(() => {
        revealSequentially(otherComponents, {
          minDelay: 30
        }, cached);
      });
    });
    const loadedComponentsCache = new WeakMap;
    function getCache() {
      try {
        return JSON.parse(localStorage.getItem(CACHE_KEY)) || {};
      } catch {
        return {};
      }
    }
    function saveCache(cache) {
      localStorage.setItem(CACHE_KEY, JSON.stringify(cache));
    }
    function getComponentId(el) {
      return el.dataset.component;
    }
    function initSpecificComponents() {}
    async function revealSequentially(components, {minDelay = 50} = {}, cached) {
      for (const component of components) {
        const id = getComponentId(component);
        if (!cached[id] && !loadedComponentsCache.has(component)) {
          await waitUntilReady(component);
          loadedComponentsCache.set(component, true);
          cached[id] = true;
          saveCache(cached);
        }
        component.classList.add("is-ready");
        await delay(minDelay);
      }
    }
    function waitUntilReady(component) {
      return new Promise(resolve => {
        const images = Array.from(component.querySelectorAll("img"));
        const videos = Array.from(component.querySelectorAll("video"));
        const total = images.length + videos.length;
        if (total === 0) {
          waitForFonts().then(resolve);
          return;
        }
        let loaded = 0;
        const timeout = setTimeout(resolve, 3e3);
        const check = () => {
          loaded++;
          if (loaded >= total) {
            clearTimeout(timeout);
            waitForFonts().then(resolve);
          }
        };
        images.forEach(img => {
          if (img.complete && img.naturalHeight !== 0) check(); else {
            img.addEventListener("load", check);
            img.addEventListener("error", check);
          }
        });
        videos.forEach(video => {
          if (video.readyState >= 3) check(); else {
            video.addEventListener("loadeddata", check);
            video.addEventListener("error", check);
          }
        });
      });
    }
    function waitForFonts() {
      return document.fonts ? document.fonts.ready : Promise.resolve();
    }
    function delay(ms) {
      return new Promise(resolve => setTimeout(resolve, ms));
    }
  })();
  var __webpack_export_target__ = window;
  for (var __webpack_i__ in __webpack_exports__) __webpack_export_target__[__webpack_i__] = __webpack_exports__[__webpack_i__];
  if (__webpack_exports__.__esModule) Object.defineProperty(__webpack_export_target__, "__esModule", {
    value: true
  });
})();