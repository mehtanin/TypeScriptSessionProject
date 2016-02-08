class Hello {
    greeting: string;
    constructor(message: string) {
        this.greeting = message;
    }
    greet() {
        return "Hello, " + this.greeting;
    }
}

window.onload = () => {

    var hello = new Hello(".. you are watching Typescript CLASS Example!!");
    var buttonDiv = document.getElementById("classExample");
    var button = document.createElement('button');
    button.textContent = "I am TypeScript class!";
    button.onclick = function () {
        alert(hello.greet());
    }
    buttonDiv.appendChild(button);
    document.body.appendChild(buttonDiv);

};
