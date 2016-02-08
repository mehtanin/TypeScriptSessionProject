class GenericClass<T> {
    greeting: T;
    constructor(message: T) {
        this.greeting = message;
    }
    greet() {
        return this.greeting;
    }
}

window.onload = () => {

    var genericClass = new GenericClass<string>("Hello, .. you are watching Typescript GENERIC Example!!!");
    var buttonGenericDiv = document.getElementById("genericExample");
    var buttonGeneric = document.createElement('button');
    buttonGeneric.textContent = "Generic Example!";
    buttonGeneric.onclick = function () {
        alert(genericClass.greet());
    }
    buttonGenericDiv.appendChild(buttonGeneric);
    document.body.appendChild(buttonGenericDiv);

};