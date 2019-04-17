import { BasePage } from "../pages/BasePage";
import { Selector } from "testcafe";

export class HomePage extends BasePage {

    title = Selector(".header")
    firstPhoto = Selector(".photo")
    attempts = Selector(".attempts")

}