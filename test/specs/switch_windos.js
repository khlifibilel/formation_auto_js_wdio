describe('Handling Multiple Windows switching to child window and then switching to parent window back',()=> {
    it('should make switching from parent to child and child to parent window', async () => {    
    await browser.url('http://omayo.blogspot.com/')
    var parentWindow = await browser.getWindowHandle()
    await $('#HTML37 > div:nth-child(2) > p:nth-child(2) > a:nth-child(1)').click()
    await browser.pause(3000)
    var ID = await browser.getWindowHandles()
    
    for(var i = 0; i< ID.length; i++){
        if( ID[i]!= parentWindow){
            browser.switchToWindow(ID[i])
            browser.maximizeWindow()
            break;
        }
    }
    await browser.pause(3000)
    await browser.switchToWindow(parentWindow)
    await  browser.pause(3000)
})
})