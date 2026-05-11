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
  var __webpack_export_target__ = window;
  for (var __webpack_i__ in __webpack_exports__) __webpack_export_target__[__webpack_i__] = __webpack_exports__[__webpack_i__];
  if (__webpack_exports__.__esModule) Object.defineProperty(__webpack_export_target__, "__esModule", {
    value: true
  });
})();