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
         childElement.classList.remove("kotlin-plugin-paren");
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
        .kotlin-plugin-paren{
			border:none;
			border:solid gray 1px;
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
               "kotlin-plugin-paren"
            );
            tableOfVeriatableChildElement[1].classList.add(
               "kotlin-plugin-paren"
            );
            const startIndex = Array.from(sameLineChild).indexOf(
               tableOfVeriatableChildElement[0]
            );
            const endIndex = Array.from(sameLineChild).indexOf(
               tableOfVeriatableChildElement[1]
            );

            for (let y = 0; y < sameLineChild.length; y++) {
               if (y > startIndex && y < endIndex) {
                  sameLineChild[y].classList.add("kotlin-plugin-scope");
               }
            }
         } else {
            scopeLine.classList.add("kotlin-plugin-scope");
            let tableBlockNode = [];
            let element = null;
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
                  element = tableBlockNode[i];
               }
            }
            const endIndex = Array.from(sameLineChild).indexOf(element);
            for (let y = 0; y < sameLineChild.length; y++) {
               if (y < endIndex) {
                  sameLineChild[y].classList.add("kotlin-plugin-scope");
               } else {
                  sameLineChild[y].classList.remove("kotlin-plugin-scope");
               }
            }
            element.classList.add("kotlin-plugin-paren");
         }
      }
   }
}

/*export default function appliquerColorationSyntaxique(
   editor,
   line,
   type,
   typeIndex,
   associateType,
   associateTypeIndex,
   sameLine,
   tableOfBlock
) {
   // Récupérer les éléments du conteneur de ligne et de numéro de ligne
   const lineContainer = editor.container.querySelector(
      "div.ace_text-layer.ace_layer"
   ).children;
   const lineNumberContainer = editor.container.querySelector(
      "div.ace_layer.ace_gutter-layer"
   ).children;

   console.log(type, typeIndex, associateType, associateTypeIndex, sameLine);

   // Parcourir les numéros de ligne
   for (let i = 0; i < lineNumberContainer.length; i++) {
      const lineNumber = lineNumberContainer[i].innerText;
      const lineElement = lineContainer[i].querySelector("div.ace_line");
      const childElements = lineElement.children;

      // Réinitialiser les classes CSS pour chaque ligne
      lineElement.classList.remove("kotlin-plugin-scope");

      // Réinitialiser les classes CSS pour chaque élément enfant
      for (let j = 0; j < childElements.length; j++) {
         const childElement = childElements[j];
         childElement.classList.remove("kotlin-plugin-scope");
         childElement.classList.remove("kotlin-plugin-paren");
      }

      if (parseInt(lineNumber) === line + 1) {
         const scopeLine = lineContainer[i];
         const color = window.getComputedStyle(
            scopeLine.querySelector(".ace_paren")
         ).color;

         // Ajouter les styles CSS pour la coloration syntaxique
         const style = document.createElement("style");
         style.innerHTML = `
        .kotlin-plugin-scope {
          text-decoration: underline;
          text-decoration-color: ${color};
          text-underline-offset: 4px;
          text-decoration-thickness: 0.5px;
        }

        .kotlin-plugin-paren {
          border: none;
          border: solid gray 1px;
        }
      `;
         document.head.append(style);

         if (sameLine) {
            const sameLineChild =
               scopeLine.querySelector("div.ace_line").children;
            const tableBlockNodes = sameLineChild.filter(
               (child) =>
                  child.innerText === type || child.innerText === associateType
            );
            const tableOfVeriatableChildElements = [];

            for (let i = 0; i < tableBlockNodes.length; i++) {
               if (tableOfBlock[i].state) {
                  tableOfVeriatableChildElements.push(tableBlockNodes[i]);
               }
            }

            // Appliquer la classe CSS "kotlin-plugin-paren" aux éléments du tableau
            tableOfVeriatableChildElements.forEach((element) => {
               element.classList.add("kotlin-plugin-paren");
            });

            const startIndex = Array.from(sameLineChild).indexOf(
               tableOfVeriatableChildElements[0]
            );
            const endIndex = Array.from(sameLineChild).indexOf(
               tableOfVeriatableChildElements[1]
            );

            // Appliquer la classe CSS "kotlin-plugin-scope" aux éléments entre startIndex et endIndex
            for (let y = 0; y < sameLineChild.length; y++) {
               if (y > startIndex && y < endIndex) {
                  sameLineChild[y].classList.add("kotlin-plugin-scope");
               }
            }
         } else {
            let tableBlockNodes = [];
            let targetElement = null;
            const sameLineChild =
               scopeLine.querySelector("div.ace_line").children;

            // Filtrer les éléments ayant les types spécifiés
            for (let i = 0; i < sameLineChild.length; i++) {
               const child = sameLineChild[i];
               if (child.innerText === type) {
                  tableBlockNodes.push(child);
               } else if (child.innerText === associateType) {
                  tableBlockNodes.push(child);
               }
            }

            // Trouver l'élément cible en fonction de l'état dans le tableau de blocs
            for (let i = 0; i < tableBlockNodes.length; i++) {
               if (tableOfBlock[i].state) {
                  targetElement = tableBlockNodes[i];
               }
            }

            const endIndex = Array.from(sameLineChild).indexOf(targetElement);

            // Appliquer la classe CSS "kotlin-plugin-scope" à tous les éléments avant endIndex
            for (let y = 0; y < sameLineChild.length; y++) {
               if (y < endIndex) {
                  sameLineChild[y].classList.add("kotlin-plugin-scope");
               }
            }

            // Appliquer la classe CSS "kotlin-plugin-paren" à l'élément cible
            targetElement.classList.add("kotlin-plugin-paren");
         }
      }
   }
}*/
