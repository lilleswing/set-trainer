import React, {useState} from 'react';
import './App.css';
import Card from "./Card";

let ALL_CARDS = [
    "green-double-outline-capsule.jpg",
    "green-double-outline-diamond.jpg",
    "green-double-outline-squiggle.jpg",
    "green-double-solid-capsule.jpg",
    "green-double-solid-diamond.jpg",
    "green-double-solid-squiggle.jpg",
    "green-double-stripes-capsule.jpg",
    "green-double-stripes-diamond.jpg",
    "green-double-stripes-squiggle.jpg",
    "green-single-outline-capsule.jpg",
    "green-single-outline-diamond.jpg",
    "green-single-outline-squiggle.jpg",
    "green-single-solid-capsule.jpg",
    "green-single-solid-diamond.jpg",
    "green-single-solid-squiggle.jpg",
    "green-single-stripes-capsule.jpg",
    "green-single-stripes-diamond.jpg",
    "green-single-stripes-squiggle.jpg",
    "green-triple-outline-capsule.jpg",
    "green-triple-outline-diamond.jpg",
    "green-triple-outline-squiggle.jpg",
    "green-triple-solid-capsule.jpg",
    "green-triple-solid-diamond.jpg",
    "green-triple-solid-squiggle.jpg",
    "green-triple-stripes-capsule.jpg",
    "green-triple-stripes-diamond.jpg",
    "green-triple-stripes-squiggle.jpg",
    "purple-double-outline-capsule.jpg",
    "purple-double-outline-diamond.jpg",
    "purple-double-outline-squiggle.jpg",
    "purple-double-solid-capsule.jpg",
    "purple-double-solid-diamond.jpg",
    "purple-double-solid-squiggle.jpg",
    "purple-double-stripes-capsule.jpg",
    "purple-double-stripes-diamond.jpg",
    "purple-double-stripes-squiggle.jpg",
    "purple-single-outline-capsule.jpg",
    "purple-single-outline-diamond.jpg",
    "purple-single-outline-squiggle.jpg",
    "purple-single-solid-capsule.jpg",
    "purple-single-solid-diamond.jpg",
    "purple-single-solid-squiggle.jpg",
    "purple-single-stripes-capsule.jpg",
    "purple-single-stripes-diamond.jpg",
    "purple-single-stripes-squiggle.jpg",
    "purple-triple-outline-capsule.jpg",
    "purple-triple-outline-diamond.jpg",
    "purple-triple-outline-squiggle.jpg",
    "purple-triple-solid-capsule.jpg",
    "purple-triple-solid-diamond.jpg",
    "purple-triple-solid-squiggle.jpg",
    "purple-triple-stripes-capsule.jpg",
    "purple-triple-stripes-diamond.jpg",
    "purple-triple-stripes-squiggle.jpg",
    "red-double-outline-capsule.jpg",
    "red-double-outline-diamond.jpg",
    "red-double-outline-squiggle.jpg",
    "red-double-solid-capsule.jpg",
    "red-double-solid-diamond.jpg",
    "red-double-solid-squiggle.jpg",
    "red-double-stripes-capsule.jpg",
    "red-double-stripes-diamond.jpg",
    "red-double-stripes-squiggle.jpg",
    "red-single-outline-capsule.jpg",
    "red-single-outline-diamond.jpg",
    "red-single-outline-squiggle.jpg",
    "red-single-solid-capsule.jpg",
    "red-single-solid-diamond.jpg",
    "red-single-solid-squiggle.jpg",
    "red-single-stripes-capsule.jpg",
    "red-single-stripes-diamond.jpg",
    "red-single-stripes-squiggle.jpg",
    "red-triple-outline-capsule.jpg",
    "red-triple-outline-diamond.jpg",
    "red-triple-outline-squiggle.jpg",
    "red-triple-solid-capsule.jpg",
    "red-triple-solid-diamond.jpg",
    "red-triple-solid-squiggle.jpg",
    "red-triple-stripes-capsule.jpg",
    "red-triple-stripes-diamond.jpg",
    "red-triple-stripes-squiggle.jpg"
];
let CATEGORIES = [
    ['red', 'green', 'purple'],
    ['single', 'double', 'triple'],
    ['solid', 'stripes', 'outline'],
    ['diamond', 'squiggle', 'capsule']
];

export class BoardRandomizer {
    constructor(updateRight, updateWrong) {
        this.updateRight = updateRight;
        this.updateWrong = updateWrong;
    }

    randomCard() {
        const i = Math.floor(Math.random() * ALL_CARDS.length);
        return <Card img={"labeled/" + ALL_CARDS[i]}
                     fname={ALL_CARDS[i]}
                     key={ALL_CARDS[i]}
                     onClick={this.updateWrong}/>
    };

    removeDuplicates(queryCard1, queryCard2, answer, decoys) {
        let d = {};
        let tableCards = {};
        for (const card of [queryCard1, queryCard2, answer]) {
            tableCards[card.props.fname] = true;
        }
        decoys = shuffle(decoys);
        d[answer.props.fname] = answer;
        for (const decoyCard of decoys) {
            if (Object.keys(d).length >= 6) {
                continue
            }
            if (decoyCard.props.fname in tableCards) {
                continue
            }
            tableCards[decoyCard.props.fname] = true;
            d[decoyCard.props.fname] = decoyCard;
        }
        while (Object.keys(d).length < 6) {
            let decoyCard = this.randomCard();
            if (decoyCard.props.fname in tableCards) {
                continue
            }
            tableCards[decoyCard.props.fname] = true;
            d[decoyCard.props.fname] = decoyCard;
        }
        return shuffle(Object.values(d));
    };

    answerFromArray(arr) {
        let retval = "";
        for (let i = 0; i < arr.length; i++) {
            if (i !== 0) {
                retval += "-";
            }
            retval += arr[i];
        }
        retval += ".jpg";
        return retval;
    };


    getCloseAnswers(arr) {
        let allAnswers = [];
        for (let i = 0; i < arr.length; i++) {
            let thisAnswer = [];
            for (let j = 0; j < arr.length; j++) {
                if (i !== j) {
                    thisAnswer.push(arr[j]);
                } else {
                    let curVal = arr[j];
                    let piece = getOther(CATEGORIES[i], curVal);
                    thisAnswer.push(piece);
                }
            }
            allAnswers.push(thisAnswer);
        }
        let cards = [];
        for (let i = 0; i < allAnswers.length; i++) {
            let myCard = <Card img={"labeled/" + this.answerFromArray(allAnswers[i])}
                               fname={this.answerFromArray(allAnswers[i])}
                               onClick={this.updateWrong}
                               key={this.answerFromArray(allAnswers[i])}/>;
            cards.push(myCard);
        }
        return cards;
    };


    randomTwoCards() {
        let c1 = this.randomCard();
        let c2 = this.randomCard();
        while (c1.props.fname === c2.props.fname) {
            c2 = this.randomCard();
        }
        return [c1, c2];
    };


    getOtherCards(c1, c2) {
        let fname1 = c1.props.fname.slice(0, -4);
        let fname2 = c2.props.fname.slice(0, -4);
        let vars1 = fname1.split('-');
        let vars2 = fname2.split('-');

        let answer = [];
        for (let i = 0; i < 4; i++) {
            if (vars1[i] === vars2[i]) {
                answer.push(vars1[i]);
                continue
            }
            let piece = pickDifferent(CATEGORIES[i], vars1[i], vars2[i]);
            answer.push(piece);
        }
        let answerCard = <Card img={"labeled/" + this.answerFromArray(answer)}
                               fname={this.answerFromArray(answer)}
                               onClick={this.updateRight}
                               key={"correctAnswer"}/>;
        let closeCards = this.getCloseAnswers(answer);
        closeCards = closeCards.concat([this.randomCard(),
            this.randomCard(), this.randomCard()]);
        return this.removeDuplicates(c1, c2, answerCard, closeCards);
    }

}

function pickDifferent(category, v1, v2) {
    for (let i = 0; i < category.length; i++) {
        let myCat = category[i];
        if (myCat !== v1 && myCat !== v2) {
            return myCat
        }
    }
}


function deepCopy(o) {
    return JSON.parse(JSON.stringify(o))
}


let shuffle = function (array) {
    let currentIndex = array.length;
    let temporaryValue, randomIndex;

    // While there remain elements to shuffle...
    while (0 !== currentIndex) {
        // Pick a remaining element...
        randomIndex = Math.floor(Math.random() * currentIndex);
        currentIndex -= 1;

        // And swap it with the current element.
        temporaryValue = array[currentIndex];
        array[currentIndex] = array[randomIndex];
        array[randomIndex] = temporaryValue;
    }

    return array;
};

function getOther(categories, curVal) {
    let chances = [];
    for (let i = 0; i < categories.length; i++) {
        if (categories[i] !== curVal) {
            chances.push(categories[i])
        }
    }
    chances = shuffle(chances);
    return chances[0]
}

function App() {
    const [scoreboard, setScoreboard] = useState({
        "correct": 0,
        "wrong": 0,
        "startTime": new Date().getTime() / 1000,
        "solveTime": -1,
    });


    let updateRight = function () {
        let newScoreboard = deepCopy(scoreboard);
        newScoreboard['correct'] = newScoreboard['correct'] + 1;
        if (newScoreboard['correct'] === 1) {
            newScoreboard["startTime"] = new Date().getTime() / 1000;
        }
        if (newScoreboard['correct'] === 20) {
            let now = new Date().getTime() / 1000;
            newScoreboard['solveTime'] = now - newScoreboard['startTime'];
        }
        setScoreboard(newScoreboard);
    };

    let updateWrong = function () {
        let newScoreboard = deepCopy(scoreboard);
        alert("DWIGHT YOU IGNORANT SLUT");
        newScoreboard['wrong'] = newScoreboard['wrong'] + 1;
        setScoreboard(newScoreboard);
    };

    let br = new BoardRandomizer(updateRight, updateWrong);
    const [myCard1, myCard2] = br.randomTwoCards();
    const possibleAnswers = br.getOtherCards(myCard1, myCard2);

    return (
        <div className="App">
            <div className="board">
                <div className='rowC'>
                    {myCard1}
                    {myCard2}
                    <div className={"scoreBoard"}>
                        <h1 className={"hr"}> Race To 20! </h1>
                        <h5>Match The Top Two Cards</h5>
                        <p>
                            Correct: {scoreboard['correct']}
                            <br/>
                            Wrong: {scoreboard['wrong']}
                            {scoreboard['solveTime'] !== -1 &&
                            <h1>Total Time: {scoreboard['solveTime']}</h1>
                            }
                        </p>
                    </div>
                </div>
                <div className='rowC'>
                    {[possibleAnswers[0], possibleAnswers[1], possibleAnswers[2]]}
                </div>
                <div className='rowC'>
                    {[possibleAnswers[3], possibleAnswers[4], possibleAnswers[5]]}
                </div>
            </div>
        </div>
    );
}

export default App;
