import { BasePage } from "../pages/BasePage";

const page = new BasePage();

fixture`Home`.page(page.baseUrl);

test("Correct title displays", async (t) => {
  await t.expect(page.title.textContent).eql("name game");
});

test("Attempts counter increments after selecting a photo", async (t) => {
  const initialAttemptsCount = Number(await page.attempts.textContent);

  await t.click(page.photo);

  const finalAttemptsCount = Number(await page.attempts.textContent);

  await t.expect(finalAttemptsCount).eql(initialAttemptsCount + 1);
});
