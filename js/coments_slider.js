(() => {
  "use strict";
  var __webpack_require__ = {};
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
  __webpack_require__.r(__webpack_exports__);
  __webpack_require__.d(__webpack_exports__, {
    default: () => initCommentsSlider
  });
  function initCommentsSlider() {
    const sliderEl = document.querySelector(".coments_slider-slider");
    if (!sliderEl) return;
    new Swiper(sliderEl, {
      slidesPerView: 3,
      spaceBetween: 20,
      speed: 600,
      loopAdditionalSlides: 2,
      loopPreventsSliding: false,
      navigation: {
        nextEl: ".coments_slider-button-next",
        prevEl: ".coments_slider-button-prev"
      },
      touchStartPreventDefault: false,
      pagination: {
        el: ".coments_slider-pagination",
        clickable: true
      },
      grabCursor: true,
      resistanceRatio: .6,
      watchOverflow: true,
      observer: true,
      observeParents: true,
      resizeObserver: true,
      breakpoints: {
        320: {
          slidesPerView: 3
        },
        550: {
          slidesPerView: 4
        },
        900: {
          slidesPerView: 5
        }
      }
    });
  }
  var __webpack_export_target__ = window;
  for (var __webpack_i__ in __webpack_exports__) __webpack_export_target__[__webpack_i__] = __webpack_exports__[__webpack_i__];
  if (__webpack_exports__.__esModule) Object.defineProperty(__webpack_export_target__, "__esModule", {
    value: true
  });
})();