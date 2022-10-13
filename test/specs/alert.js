describe('This Example show usage of acceptAlert() command in webdriverio', () => {
    it('should accept Alert Box',async ()=> {
     browser.url('http://omayo.blogspot.com')
     browser.pause(5000);
     $('#alert1').click(); //Click on Alert Button 
     browser.pause(5000);
     browser.acceptAlert(); //Accept the Alert/Dialogue Box
     browser.pause(5000);
    });
});