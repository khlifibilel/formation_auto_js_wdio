describe('Page d \'acceuil IN command in webdriverio', () => {
it('Parcours bouton carrousel 1 (ANTS ) ',async ()=> {

    const btn_agricole = await $("//div[@data-index='5']//img [@class='card-img-top'])")
        await browser.url("https://pprod.lidentitenumerique.laposte.fr/") 
        browser.pause(5000)
        await $("//button[@id='popin_tc_privacy_button']").click()
        
        for (let i = 0; i < 15; i++) {
            
            if ( btn_agricole.isDisplayed()) {
              
                await btn_agricole.click()                             
                
                break;                          
            }
            //await btn_accepter.click();
        
        }

    })
})