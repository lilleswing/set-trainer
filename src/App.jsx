import React, {useState} from 'react';
import './App.css';
import Card from "./Card";
import ScoreboardModal from "./ScoreboardModal";

let TOTAL_SOLVES = 20;

let ALL_CARDS = [
    "green-double-outline-capsule.svg",
    "green-double-outline-diamond.svg",
    "green-double-outline-squiggle.svg",
    "green-double-solid-capsule.svg",
    "green-double-solid-diamond.svg",
    "green-double-solid-squiggle.svg",
    "green-double-stripes-capsule.svg",
    "green-double-stripes-diamond.svg",
    "green-double-stripes-squiggle.svg",
    "green-single-outline-capsule.svg",
    "green-single-outline-diamond.svg",
    "green-single-outline-squiggle.svg",
    "green-single-solid-capsule.svg",
    "green-single-solid-diamond.svg",
    "green-single-solid-squiggle.svg",
    "green-single-stripes-capsule.svg",
    "green-single-stripes-diamond.svg",
    "green-single-stripes-squiggle.svg",
    "green-triple-outline-capsule.svg",
    "green-triple-outline-diamond.svg",
    "green-triple-outline-squiggle.svg",
    "green-triple-solid-capsule.svg",
    "green-triple-solid-diamond.svg",
    "green-triple-solid-squiggle.svg",
    "green-triple-stripes-capsule.svg",
    "green-triple-stripes-diamond.svg",
    "green-triple-stripes-squiggle.svg",
    "purple-double-outline-capsule.svg",
    "purple-double-outline-diamond.svg",
    "purple-double-outline-squiggle.svg",
    "purple-double-solid-capsule.svg",
    "purple-double-solid-diamond.svg",
    "purple-double-solid-squiggle.svg",
    "purple-double-stripes-capsule.svg",
    "purple-double-stripes-diamond.svg",
    "purple-double-stripes-squiggle.svg",
    "purple-single-outline-capsule.svg",
    "purple-single-outline-diamond.svg",
    "purple-single-outline-squiggle.svg",
    "purple-single-solid-capsule.svg",
    "purple-single-solid-diamond.svg",
    "purple-single-solid-squiggle.svg",
    "purple-single-stripes-capsule.svg",
    "purple-single-stripes-diamond.svg",
    "purple-single-stripes-squiggle.svg",
    "purple-triple-outline-capsule.svg",
    "purple-triple-outline-diamond.svg",
    "purple-triple-outline-squiggle.svg",
    "purple-triple-solid-capsule.svg",
    "purple-triple-solid-diamond.svg",
    "purple-triple-solid-squiggle.svg",
    "purple-triple-stripes-capsule.svg",
    "purple-triple-stripes-diamond.svg",
    "purple-triple-stripes-squiggle.svg",
    "red-double-outline-capsule.svg",
    "red-double-outline-diamond.svg",
    "red-double-outline-squiggle.svg",
    "red-double-solid-capsule.svg",
    "red-double-solid-diamond.svg",
    "red-double-solid-squiggle.svg",
    "red-double-stripes-capsule.svg",
    "red-double-stripes-diamond.svg",
    "red-double-stripes-squiggle.svg",
    "red-single-outline-capsule.svg",
    "red-single-outline-diamond.svg",
    "red-single-outline-squiggle.svg",
    "red-single-solid-capsule.svg",
    "red-single-solid-diamond.svg",
    "red-single-solid-squiggle.svg",
    "red-single-stripes-capsule.svg",
    "red-single-stripes-diamond.svg",
    "red-single-stripes-squiggle.svg",
    "red-triple-outline-capsule.svg",
    "red-triple-outline-diamond.svg",
    "red-triple-outline-squiggle.svg",
    "red-triple-solid-capsule.svg",
    "red-triple-solid-diamond.svg",
    "red-triple-solid-squiggle.svg",
    "red-triple-stripes-capsule.svg",
    "red-triple-stripes-diamond.svg",
    "red-triple-stripes-squiggle.svg"
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

    randomCard(isActive = true) {
        const i = Math.floor(Math.random() * ALL_CARDS.length);
        return <Card img={"labeled/" + ALL_CARDS[i]}
                     fname={ALL_CARDS[i]}
                     key={ALL_CARDS[i]}
                     onClick={isActive ? this.updateWrong : null}/>
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
        retval += ".svg";
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
        for (const myAnswer of allAnswers) {
            let myCard = <Card img={"labeled/" + this.answerFromArray(myAnswer)}
                               fname={this.answerFromArray(myAnswer)}
                               onClick={this.updateWrong}
                               key={this.answerFromArray(myAnswer)}/>;
            cards.push(myCard);
        }
        return cards;
    };


    randomTwoCards() {
        let c1 = this.randomCard(false);
        let c2 = this.randomCard(false);
        while (c1.props.fname === c2.props.fname) {
            c2 = this.randomCard(false);
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
    for (const myCat of category) {
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
    for (const myCategory of categories) {
        if (myCategory !== curVal) {
            chances.push(myCategory)
        }
    }
    chances = shuffle(chances);
    return chances[0]
}

function App() {
    const [scoreboard, setScoreboard] = useState({
        "correct": 0,
        "wrong": 0,
        "startTime": new Date().getTime(),
        "solveTime": -1,
    });
    const [showModal, setShowModal] = useState(false);

    let selectErrorMessage = function () {
        let messages = [
            "Do Better",
            "Wrong Choice",
            "You are bad at this game"
        ];
        let index = Math.floor(Math.random() * messages.length);
        return messages[index]
    }


    let updateRight = function () {
        let newScoreboard = deepCopy(scoreboard);
        newScoreboard['correct'] = newScoreboard['correct'] + 1;
        if (newScoreboard['correct'] === 1) {
            newScoreboard["startTime"] = new Date().getTime();
        }
        if (newScoreboard['correct'] === TOTAL_SOLVES) {
            let now = new Date().getTime();
            newScoreboard['solveTime'] = now - newScoreboard['startTime'];
            setShowModal(true);
        }
        setScoreboard(newScoreboard);
    };

    let updateWrong = function () {
        let newScoreboard = deepCopy(scoreboard);
        alert(selectErrorMessage());
        newScoreboard['wrong'] = newScoreboard['wrong'] + 1;
        setScoreboard(newScoreboard);
    };

    let br = new BoardRandomizer(updateRight, updateWrong);
    const [myCard1, myCard2] = br.randomTwoCards();
    const possibleAnswers = br.getOtherCards(myCard1, myCard2);

    const handleCloseModal = () => {
        setShowModal(false);
        setScoreboard({
            "correct": 0,
            "wrong": 0,
            "startTime": new Date().getTime(),
            "solveTime": -1,
        });
    };

    return (
        <div className="App">
            <div className="AppContainer">
                {myCard1}
                {myCard2}
                <div className={"cell"}>
                    <div style={{
                        display: "flex",
                        flexDirection: "column", alignItems: "center"
                    }}>
                        <h1> Race To 20! </h1>
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
                {possibleAnswers}
            </div>
            <ScoreboardModal
                isOpen={showModal}
                onClose={handleCloseModal}
                currentTime={scoreboard['solveTime']}
                wrongCount={scoreboard['wrong']}
            />
        </div>
    );
}

export default App;
