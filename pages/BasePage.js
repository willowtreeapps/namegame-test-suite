import { Selector } from "testcafe";

export class BasePage {

    baseUrl = 'https://willowtreeapps.github.io/TE-namegame-interview/';

    title = Selector(".header")
    photo = Selector(".photo")
    attempts = Selector(".attempts")
    nameToGuess = Selector("[id=name]");
    streak = Selector(".streak")
}