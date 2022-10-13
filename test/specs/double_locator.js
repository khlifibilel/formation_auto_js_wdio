describe('This Example show usage of $$ command in webdriverio', () => {

    it('should fetch multiple element based on the locator passed and perform actions accordingly',async ()=> {

   await browser.url('http://omayo.blogspot.com');

    const text = await $$('//*[@id="HTML25"]/div[1]/ol/li');

    console.log(await text[2].getText());

    });

});