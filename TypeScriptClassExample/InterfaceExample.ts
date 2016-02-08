interface ISports {
    _sportsName: string;
    getSportsName(): string;
    getNumberOfPlayers(): number;
} 

class Cricket implements ISports {
    _sportsName: string;

    constructor(sportsName: string) {
        this._sportsName = sportsName;
    }

    getSportsName(): string {
        return this._sportsName;
    }

    getNumberOfPlayers(): number {
        var playerCount = this._sportsName.length * 2;
        return playerCount;
    }
}

class Football implements ISports {
    _sportsName: string;

    constructor(sportsName: string) {
        this._sportsName = sportsName;
    }

    getSportsName(): string {
        var stringToAdd = " This is another implementation";
        return this._sportsName + stringToAdd;
    }

    getNumberOfPlayers(): number {
        var playerCount = this._sportsName.length * 5;
        return playerCount;
    }
}

var cricketSports: ISports;
cricketSports = new Cricket("CRICKET");
var cricketNameText = cricketSports.getSportsName();
var cricketPlayerCount = cricketSports.getNumberOfPlayers();

var footballSports: ISports;
footballSports = new Football("FOOTBALL");
var footballNameText = footballSports.getSportsName();
var footballPlayerCount = footballSports.getNumberOfPlayers();

window.onload = () => {

    console.log("Cricket object:\n");
    console.log("Name: " + cricketNameText + "\n");
    console.log("Player Count: " + cricketPlayerCount + "\n");
    console.log("Football object:\n");
    console.log("Name: " + footballNameText + "\n");
    console.log("Player Count: " + footballPlayerCount + "\n");

};