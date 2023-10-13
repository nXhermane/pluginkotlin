export default function coloration(editor, line,type) {
   const lineContainer = editor.container.querySelector(
      "div.ace_text-layer.ace_layer"
   ).childNodes;
   const lineNumberContainer = editor.container.querySelector(
      "div.ace_layer.ace_gutter-layer"
   ).childNodes;

   for (let i = 0; i < lineNumberContainer.length; i++) {
      const lineNumber = lineNumberContainer[i].innerText;
      if (parseInt(lineNumber) === line + 1) {
        const scopeLine=lineContainer[i]
        const color=  window.getComputedStyle(scopeLine.querySelector('.ace_lparen')).color
        const style=tag("style")
        style.innerHTML=`
         .kotlin-plugin-scope{
			text-decoration:underline;
			text-decoration-color:${color};
			text-underline-offset: 4px;
			text-decoration-thickness: 0.5px;
        }
        `
        
        console.log(color)
        document.head.append(style)
        scopeLine.classList.add("kotlin-plugin-scope")
      }
   }
}
