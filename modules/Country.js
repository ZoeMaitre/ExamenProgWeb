class Country {
    data;
    answers;
    flag;
    constructor(data) {
        this.data = data;
        this.answers = this.generateAnswer();
        this.flag = this.data.flag;
    }

    generateAnswer() {
        const traductions = this.data.translations;
        const setTraduction = new Set(Object.values(traductions));

        console.log(setTraduction);

    }

    checkAnswer(reponse) {
        const reponseNormalisee = String.toLowerCase(reponse);
        if (this.answers.has(reponseNormalisee)) {
            return true;
        }
        else {
            return false;
        }
    }


    renderFlag() {
        const flag = this.data.flag;
        const affichage = `<h1>${flag}</h1>`;
        document.querySelector("#flag").appendChild(affichage);
    }
}


export default Country;