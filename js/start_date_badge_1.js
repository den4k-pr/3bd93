(() => {
  var __webpack_exports__ = {};
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
  var __webpack_export_target__ = window;
  for (var __webpack_i__ in __webpack_exports__) __webpack_export_target__[__webpack_i__] = __webpack_exports__[__webpack_i__];
  if (__webpack_exports__.__esModule) Object.defineProperty(__webpack_export_target__, "__esModule", {
    value: true
  });
})();