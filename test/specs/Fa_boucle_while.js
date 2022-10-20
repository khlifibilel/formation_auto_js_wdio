describe('Page d \'acceuil IN command in webdriverio', () => {

it('Parcours bouton carrousel 1 (ANTS ) ',async ()=> {
    const btn_engie = await $("(//img[@alt='Engie'])[1]")
    let btn_accepter_cookies_in = await $("//button[@id='popin_tc_privacy_button']")
    const_btn_accepter_cookies_engie = await $("//span[@class='c-baseBtn__content'][contains(.,'Tout accepter')]")
    const btn_suivant_chevron = await $("//span[contains(@class,'icon-chevron-right ')]")

    await browser.url("https://pprod.lidentitenumerique.laposte.fr/") 
    await btn_accepter_cookies_in.click()

    for (let i = 0; i < 15; i++) {              // il faut décller i  pour i ça ma donne une variable 
        
       await btn_suivant_chevron.scrollIntoView();
       await btn_suivant_chevron.click()

        if ( btn_engie.isDisplayed()) {
           console.log("trace ############ 1 ################ ")
           await browser.pause(10000)
            await btn_engie.click() 
            console.log("trace ############ 2 ################ ")  
           await browser.pause(30000)
            //  await browser.switchWindow("particuliers.engie.fr")
            //  console.log("trace ############ 3 ################ ")
            // await  const_btn_accepter_cookies_engie.click();  
            // console.log("trace ############ 4 ################ ")
            // await expect(browser).toHaveTitle("ENGIE Particuliers : Gaz Naturel et Électricité Verte");
            // console.log("trace ############ 5 ################ ")
            // console.log("le titre de la page " +await browser.getTitle()) 
            // break;                          
        }
        
        
    
    }

})

})