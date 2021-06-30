import { Selector } from "testcafe";

export class BasePage {

    baseUrl = 'http://www.ericrochester.com/name-game/';

    title = Selector(".header")
    photo = Selector(".photo")
    attempts = Selector(".attempts")
    nameToGuess = Selector("[id=name]");
    streak = Selector(".streak")
}