export default function coloration(
   editor,
   line,
   type,
   typeIndex,
   associateType,
   associateTypeIndex,
   sameLine,
   tableOfBlock
) {
   const lineContainer = editor.container.querySelector(
      "div.ace_text-layer.ace_layer"
   ).children;
   const lineNumberContainer = editor.container.querySelector(
      "div.ace_layer.ace_gutter-layer"
   ).children;

   console.log(type, typeIndex, associateType, associateTypeIndex, sameLine);
   for (let i = 0; i < lineNumberContainer.length; i++) {
      const lineNumber = lineNumberContainer[i].innerText;
      lineContainer[i].classList.remove("kotlin-plugin-scope");

      for (
         let j = 0;
         j < lineContainer[i].querySelector("div.ace_line").children.length;
         j++
      ) {
         const childElement =
            lineContainer[i].querySelector("div.ace_line").children[j];
         childElement.classList.remove("kotlin-plugin-scope");
      }

      if (parseInt(lineNumber) === line + 1) {
         const scopeLine = lineContainer[i];
         const color = window.getComputedStyle(
            scopeLine.querySelector(".ace_paren")
         ).color;
         const style = tag("style");
         style.innerHTML = `
         .kotlin-plugin-scope{
			text-decoration:underline;
			text-decoration-color:${color};
			text-underline-offset: 4px;
			text-decoration-thickness: 0.5px;
        }
        `;
         document.head.append(style);

         if (sameLine) {
            let tableBlockNode = [];
            let tableOfVeriatableChildElement = [];
            const sameLineChild =
               scopeLine.querySelector("div.ace_line").children;
            for (let i = 0; i < sameLineChild.length; i++) {
               const child = sameLineChild[i];
               if (child.innerText === type) {
                  tableBlockNode.push(child);
               } else if (child.innerText === associateType) {
                  tableBlockNode.push(child);
               }
            }
            for (let i = 0; i < tableBlockNode.length; i++) {
               if (tableOfBlock[i].state == true) {
                  tableOfVeriatableChildElement.push(tableBlockNode[i]);
               }
            }
            tableOfVeriatableChildElement[0].classList.add(
               "kotlin-plugin-scope"
            );
            tableOfVeriatableChildElement[1].classList.add(
               "kotlin-plugin-scope"
            );
            const startIndex=Array.from(sameLineChild).indexOf(tableOfVeriatableChildElement[0]);
            const endIndex=Array.from(sameLineChild).indexOf(tableOfVeriatableChildElement[1]);
            
            for(let y=0;y<sameLineChild.length;y++){
					if(y>startIndex && y<endIndex){
						sameLineChild[y].classList.add('kotlin-plugin-scope');
					}
            }

         } else {
            scopeLine.classList.add("kotlin-plugin-scope");
         }
      }
   }
}
