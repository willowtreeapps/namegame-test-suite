import { ClientFunction, t } from "testcafe";

export class BasePage {
    baseUrl = 'http://www.ericrochester.com/name-game/';
    
    getPageUrl = ClientFunction(() => window.location.href);

    clickClientBackButton = ClientFunction(() => window.history.back());

    reloadPage = async() => {
        await t.eval(() => location.reload(true));
    };

    waitFor = async(selector) => {
        try {
            await selector();
        } catch (error) {
            console.log(error);
        }
    }
}