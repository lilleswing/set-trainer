import React from 'react';
import {render, unmountComponentAtNode} from "react-dom";
import App, {BoardRandomizer} from './App';

import {act} from "react-dom/test-utils";

let container = null;
beforeEach(() => {
    // setup a DOM element as a render target
    container = document.createElement("div");
    document.body.appendChild(container);
});

afterEach(() => {
    // cleanup on exiting
    unmountComponentAtNode(container);
    container.remove();
    container = null;
});

test('Test Random Two Cards Are Different', () => {
    let updateRight = function () {
    };
    let updateWrong = function () {
    };

    let br = new BoardRandomizer(updateRight, updateWrong);
    for (let i = 0; i < 10; i++) {
        let [c1, c2] = br.randomTwoCards();
        let areCardMatch = c1.props.fname === c2.props.fname;
        expect(areCardMatch).toEqual(false);
    }
});

test('Test GetOtherCards', () => {
    let updateRight = function () {
    };
    let updateWrong = function () {
    };

    let br = new BoardRandomizer(updateRight, updateWrong);
    let [c1, c2] = br.randomTwoCards();
    let otherCards = br.getOtherCards(c1, c2);
    expect(otherCards.length).toEqual(6);

    // Test That it isn't One Of The Query Cards
    for (const card of otherCards) {
        let cardMatch = card.props.fname !== c1.props.fname;
        expect(cardMatch).toBeTruthy();

        cardMatch = card.props.fname !== c2.props.fname;
        expect(cardMatch).toBeTruthy();
    }

    // Test No Duplicates In Other Cards
    let mySet = new Set([c1.props.fname, c2.props.fname]);
    for (const card of otherCards) {
        mySet.add(card.props.fname);
    }
    expect(mySet.size).toEqual(8);
});

test('Test App Renders', () => {
    act(() => {
        render(<App/>, container);
    });
    // Check There Are 8 Cards On The Screen
    expect(document.querySelectorAll(".card").length)
        .toEqual(8);
});
