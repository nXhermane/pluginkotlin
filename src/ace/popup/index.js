import SuggestionPopup from "./suggestionPopup/suggestionPopup.js";
import TooltipPopup from "./tooltipPopup/tooltipPopup.js";
let dom = ace.require("ace/lib/dom");
export default class popup {
   constructor(baseUrl, editor, instance) {
      this.baseUrl = baseUrl;
      this.editor = editor;
      this.Popup = this.$initSuggeationPopup();
      this.ToolTip = this.$initToolTip();
      this.instance = instance;
      let Popup = this.Popup;
      /* editor.renderer.on("afterRender", () => {
         let selected = Popup.Popup.querySelector("div.Option.active");
         if (Popup.isOpen) dom.removeCssClass(selected, "active");
      });*/
      // this.keyboardHandler=this.bindCommands();

      this.Popup.on("show", this.onShow.bind(this));
      this.Popup.on("hide", this.onHide.bind(this));
      this.Popup.on("select", this.onSelect.bind(this));
   }
   $initSuggeationPopup() {
      const suggestionPopup = new SuggestionPopup(this.baseUrl, this.editor);
      return suggestionPopup;
   }
   $initToolTip() {
      const tooltip = new TooltipPopup();
      return tooltip;
   }
   getPopup() {
      return this.Popup || this.$initSuggeationPopup();
   }
   setData(data) {
      this.Popup.addOptionToPopup(data);
   }
   showPopup() {
      this.Popup.show();
   }
   goTo(direction) {
      this.Popup.goTo(direction);
   }
   hidePopup() {
      this.Popup.hide();
   }
   get isBlocked() {
      return this.Popup.isBlocked;
   }
   get isOpen() {
      return this.Popup.isOpen;
   }
   set isBlocked(boolean) {
      this.Popup.isBlocked = boolean;
   }
   set isOpen(boolean) {
      this.Popup.isOpen = boolean;
   }
   move() {
      this.Popup.move();
   }
   bindCommands() {
      const commands = {
         "Up": function (editor) {
            editor.popup.goTo("up");
         },
         "Down": function (editor) {
            editor.popup.goTo("down");
         },
         "Enter": (editor) => {
            editor.popup.Popup.insertInEditor();
         },
         "Tab": function(editor){
				editor.popup.Popup.insertInEditor();
         }
      };
      this.instance.hashHandler.bindKeys(commands);
      return this.instance.hashHandler;
   }

   onShow() {
      this.keyboardHandler = this.bindCommands();
      this.editor.keyBinding.addKeyboardHandler(this.keyboardHandler);
   }
   onHide() {
      this.editor.keyBinding.removeKeyboardHandler(this.keyboardHandler);
   }
   onSelect() {
      var container = this.Popup.OptionContainer;
      var activeEl =
         this.Popup.OptionContainer.querySelector("div.Option.active");
      const dataInfo = JSON.parse(activeEl.dataset.info);
      if (dataInfo.code)
         activeEl.querySelector("div.tokenInfo>span").innerText = dataInfo.code;
      var containerRect = container.getBoundingClientRect();
      var activeElRect = activeEl.getBoundingClientRect();
      container.scrollTop = activeEl.offsetTop;
   }
}
