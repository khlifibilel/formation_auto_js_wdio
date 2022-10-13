describe('This Example show usage of Keys command in webdriverio', () => {
    it('should use Enter Key of Keyboard rather than clicking on search button',async ()=> {
    await browser.url('http://omayo.blogspot.com');
    await $('td.gsc-input > input').setValue('Random'); //Writing in Search Bar 
    await browser.keys('Enter')//Hitting Enter Key from Keyboard for Searching Random Word on web Application
    await   browser.pause(10000);
    });
});