module Sayings {
    export class ModuleClass {
        greeting: string;
        constructor(message: string) {
            this.greeting = message;
        }
        greet() {
            return "Hello, " + this.greeting;
        }
    }
}

window.onload = () => {

    var moduleClass = new Sayings.ModuleClass(".. you are watching Typescript MODULE Example!!");
    var buttonModuleDiv = document.getElementById("moduleExample");
    var buttonModule = document.createElement('button');
    buttonModule.textContent = "Module Example!";
    buttonModule.onclick = function () {
        alert(moduleClass.greet());
    };
    buttonModuleDiv.appendChild(buttonModule);
    document.body.appendChild(buttonModuleDiv);

};