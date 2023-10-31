export default class toolTipPopup {
   constructor() {
      const { $ToolTipPopup, $tokenCode, $tokenDetail } = this.$init();
      this.Popup = $ToolTipPopup;
      this.tokenCode = $tokenCode;
      this.tokenDetail = $tokenDetail;
   }
   $init() {
      const $ToolTipPopup = tag("section", {
         id: "tooltip_popup",
      });
      const $ToollTipContainer = tag("div", { className: "toolTipContainer" });
      const $tokenCode = tag("div", {
         className: "tokenCode",
      });
      const $tokenDetail = tag("div", {
         className: "tokenDetail",
      });
      $ToollTipContainer.append($tokenCode, $tokenDetail);
      $ToolTipPopup.append($ToollTipContainer);
      app.get("main").append($ToolTipPopup);
      return { $ToolTipPopup, $tokenCode, $tokenDetail };
   }
   addData(element) {
      if (!element) return;
      if (element.code) {
         this.tokenCode.innerHTML = "";
         const small = tag("small", { textContent: element.code });
         this.tokenCode.append(small);
      }
      if (element.description) {
         this.tokenDetail.innerHTML = "";
         const small = tag("small", { textContent: element.description });
         this.tokenDetail.append(small);
      }
   }
   show() {
      this.Popup.style.display = "flex";
   }
   hide() {
      thia.Popup.style.display = "none";
   }
}
