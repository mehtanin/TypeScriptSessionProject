var Cricket = (function () {
    function Cricket(sportsName) {
        this._sportsName = sportsName;
    }
    Cricket.prototype.getSportsName = function () {
        return this._sportsName;
    };

    Cricket.prototype.getNumberOfPlayers = function () {
        var playerCount = this._sportsName.length * 2;
        return playerCount;
    };
    return Cricket;
})();

var Football = (function () {
    function Football(sportsName) {
        this._sportsName = sportsName;
    }
    Football.prototype.getSportsName = function () {
        var stringToAdd = " This is another implementation";
        return this._sportsName + stringToAdd;
    };

    Football.prototype.getNumberOfPlayers = function () {
        var playerCount = this._sportsName.length * 5;
        return playerCount;
    };
    return Football;
})();

var cricketSports;
cricketSports = new Cricket("CRICKET");
var cricketNameText = cricketSports.getSportsName();
var cricketPlayerCount = cricketSports.getNumberOfPlayers();

var footballSports;
footballSports = new Football("FOOTBALL");
var footballNameText = footballSports.getSportsName();
var footballPlayerCount = footballSports.getNumberOfPlayers();

window.onload = function () {
    console.log("Cricket object:\n");
    console.log("Name: " + cricketNameText + "\n");
    console.log("Player Count: " + cricketPlayerCount + "\n");
    console.log("Football object:\n");
    console.log("Name: " + footballNameText + "\n");
    console.log("Player Count: " + footballPlayerCount + "\n");
};
//# sourceMappingURL=InterfaceExample.js.map
