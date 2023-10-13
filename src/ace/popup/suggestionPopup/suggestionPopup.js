


export default class suggestionPopup {
	maxlines = 8
	lineHeigth = 15
	borderSize = 1
	constructor(baseUrl, editor) {
		this.baseUrl = baseUrl;
		this.editor = editor;

		this.$Popup = tag("section", { className: "kotlin_suggestion_popup" })
		this.$PopupOptionContainer = tag("div", { className: "kotlin_suggestion_popup_container" });
		this.$Popup.append(this.$PopupOptionContainer)
		app.get('main').append(this.$Popup)
	}
}
