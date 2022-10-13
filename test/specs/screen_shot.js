describe('save screenshot command takes screenshot in WebDriverIO',() => {
    it('should take screenshot of page view of webpage',async () => {        
           await  browser.url('http://omayo.blogspot.com/')
           await $('.footer-cap-top').scrollIntoView()
           await browser.pause(3000)
           await browser.saveScreenshot('./test/Screenshot/pageview.png')
           await browser.pause(3000)
    });
});