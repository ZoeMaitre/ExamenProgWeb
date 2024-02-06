import Country from "./modules/Country";

class Game {
    #score;
    pays;
    indexPays;
    currentCountry;
    getScore;

    constructor(tabPays) {
        this.score = 0;
        this.pays = tabPays;
        this.indexPays = 0;
        this.currentCountry = new Country(this.pays[this.indexPays]);
        this.getScore = this.getScore();
    }

    addScore() {
        this.#score++;
    }

    gameOver() {
        if (this.indexPays >= this.pays.length) {
            return true;
        }
        else {
            return false;
        }
    }

    nextCountry() {
        const partieTerminee = this.gameOver();

        if (partieTerminee === true) {

        }
        else if (partieTerminee === false) {
            this.indexPays++;
            this.currentCountry = new Country(this.pays[this.indexPays]);
            this.currentCountry.renderFlag();
        }
    }

    getScore() {

    }
}