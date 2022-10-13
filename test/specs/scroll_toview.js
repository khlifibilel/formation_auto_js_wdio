describe('ScrollIntoView Command in WebDriverIO',() => {



    it('should scroll to footer of the webpage',async () => {        
          await browser.url('http://omayo.blogspot.com/')
           const Footer = await $('.footer-cap-top');                   //$ web driver io 
           // scroll to specific element
           await browser.pause(7000)
           await Footer.scrollIntoView();
          await browser.pause(7000)
    });
});