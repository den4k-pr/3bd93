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
  var __webpack_export_target__ = window;
  for (var __webpack_i__ in __webpack_exports__) __webpack_export_target__[__webpack_i__] = __webpack_exports__[__webpack_i__];
  if (__webpack_exports__.__esModule) Object.defineProperty(__webpack_export_target__, "__esModule", {
    value: true
  });
})();