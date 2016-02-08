var GenericClass = (function () {
    function GenericClass(message) {
        this.greeting = message;
    }
    GenericClass.prototype.greet = function () {
        return this.greeting;
    };
    return GenericClass;
})();

window.onload = function () {
    var genericClass = new GenericClass("Hello, .. you are watching Typescript GENERIC Example!!!");
    var buttonGenericDiv = document.getElementById("genericExample");
    var buttonGeneric = document.createElement('button');
    buttonGeneric.textContent = "Generic Example!";
    buttonGeneric.onclick = function () {
        alert(genericClass.greet());
    };
    buttonGenericDiv.appendChild(buttonGeneric);
    document.body.appendChild(buttonGenericDiv);
};
//# sourceMappingURL=GenericExample.js.map
