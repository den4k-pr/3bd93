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
  var __webpack_export_target__ = window;
  for (var __webpack_i__ in __webpack_exports__) __webpack_export_target__[__webpack_i__] = __webpack_exports__[__webpack_i__];
  if (__webpack_exports__.__esModule) Object.defineProperty(__webpack_export_target__, "__esModule", {
    value: true
  });
})();