import nightmare from 'nightmare';

let postsUrl = 'http://localhost:3100';

describe('When visit the homepage', () => {

  it('welcomes the user', async () => {
    let page = nightmare().goto(postsUrl);
    let text = await page.evaluate(() => (document.body.textContent)).end();

    expect(text).toContain('Powered by dpro');
  });

  it('likes the post', async () => {
    let page = nightmare().goto(postsUrl);
    let likesCount = await page.evaluate(
      () => (document.querySelector('#like_button_1').innerText)
    ).end();

    page.click('.ui.green.button.button');
    page.evaluate(
        () => (document.querySelector('#like_button_1').innerText)
    ).then((newLikesCount) => {
      expect(+newLikesCount).toEqual(+likesCount + 1);
    });
  });

  it('should redirect to multiple pages', async () => {
    let page = nightmare({ show: true }).goto(`${postsUrl}/about`);
    const url = await page.click('#root')
      .wait()
      .click('#post_id_1')
      .end()
      .url();
    expect(url).toEqual(`${postsUrl}/post/1`);
  });
});
