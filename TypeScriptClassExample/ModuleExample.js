var Sayings;
(function (Sayings) {
    var ModuleClass = (function () {
        function ModuleClass(message) {
            this.greeting = message;
        }
        ModuleClass.prototype.greet = function () {
            return "Hello, " + this.greeting;
        };
        return ModuleClass;
    })();
    Sayings.ModuleClass = ModuleClass;
})(Sayings || (Sayings = {}));

window.onload = function () {
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
//# sourceMappingURL=ModuleExample.js.map
