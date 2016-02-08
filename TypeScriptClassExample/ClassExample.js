var Hello = (function () {
    function Hello(message) {
        this.greeting = message;
    }
    Hello.prototype.greet = function () {
        return "Hello, " + this.greeting;
    };
    return Hello;
})();

window.onload = function () {
    var hello = new Hello(".. you are watching Typescript CLASS Example!!");
    var buttonDiv = document.getElementById("classExample");
    var button = document.createElement('button');
    button.textContent = "I am TypeScript class!";
    button.onclick = function () {
        alert(hello.greet());
    };
    buttonDiv.appendChild(button);
    document.body.appendChild(buttonDiv);
};
//# sourceMappingURL=ClassExample.js.map
