const settings = acode.require("settings");
function cssStyle() {
   const fontSize = settings.get("fontSize");

   let style = `
section#kotlin_popup_completion {
  font-size:${fontSize};
  background: var(--primary-color);
  width: 280px;
  height: auto;
  z-index: 20000;
  box-shadow: 2px 3px 5px var(--box-shadow-color);
  line-height: 1.4;
  color: var(--popup-text-color);
  padding: 0px;
  margin: 0px;
  position: fixed;
  user-select: none;
  transition: ease-in-out 0.1s height;
  overflow: hidden;
  border-radius: var(--border-radius);
  border: 0.5px solid var(--border-color);
  font-family: Monospace;
  letter-spacing: -0.4px;
}
section#kotlin_popup_completion p {
  padding: 0px;
  margin: 0px;
}
section#kotlin_popup_completion div.optionContainer {
  display: block;
  width: 100%;
  height: 100%;
  background: transparent;
  transition: ease-in-out 0.1s height;
  overflow-y: scroll;
  max-height: 10.4em;
}
section#kotlin_popup_completion div.optionContainer div.Option {
  background: transparent;
  display: flex;
  justify-content: space-between;
  align-items: center;
  width: 100%;
  cursor: pointer;
  padding: 0px;
  margin: 0px;
  height: 1.3em;
  overflow: hidden;
  transition: 0.1s background ease-in-out;
} 
section#kotlin_popup_completion div.optionContainer div.Option div.token {
  display: flex;
  justify-content: flex-start;
  align-content: center;
  row-gap: 1px;
  height: 100%;
}
section#kotlin_popup_completion div.optionContainer div.Option div.token div.tokenIcone {
  height: 100%;
  width: 1em;
  background: transparent;
  margin-right: 0.2em;
  display: flex;
  justify-content: center;
  align-items: center;
}
section#kotlin_popup_completion div.optionContainer div.Option div.token div.tokenIcone svg {
  height: 95%;
  width: 95%;
  display:flex;
  justify-content:center;
  align-content:center;
  
}

section#kotlin_popup_completion div.optionContainer div.Option div.token div.tokenText {
  font-family: Monospace;
  font-size: 1em;
  font-weight: 700;
  display: flex;
  justify-content: center;
  align-items: center;
  color: var(--primary-text-color);
  opacity: 0.9;
}
section#kotlin_popup_completion div.optionContainer div.Option div.tokenInfo {
  padding-right: 2px;
  color: var(--secondary-text-color);
  font-size: 0.9em;
  text-align: right;
  padding-left: 5px;
  opacity: 0.7;
}
section#kotlin_popup_completion div.optionContainer div.Option.active {
  z-index: 2;
  background: var(--active-color);
  transition: 0.1s background ease-in-out;
  color: var(--popup-text-color);
}
section#kotlin_popup_completion div.optionContainer div.Option.active div.token div.tokenIcone svg{
	fill:var(--popup-text-color);
}
section#kotlin_popup_completion div.optionContainer div.Option.active div.token > div.tokenText {
  opacity: 1;
}
section#kotlin_popup_completion div.optionContainer div.Option.active div.tokenInfo {
  display: flex;
  padding-right: 2px;
  color: var(--popup-text-color);
  font-size: 0.9em;
  text-align: right;
  padding-left: 5px;
  opacity: 0.9;
}

`;
   return style;
}

export default cssStyle;
