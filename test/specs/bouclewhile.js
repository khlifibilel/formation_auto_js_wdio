describe('Page d \'acceuil IN command in webdriverio', () => {

    it('Parcours bouton carrousel 1 (ANTS ) ',async ()=> {

        const btn_suivant = $("//span[contains(@class,'icon-chevron-right ')]")
        let btn_accepter = $("//button[@id='popin_tc_privacy_button']")


        await browser.url("https://pprod.lidentitenumerique.laposte.fr/") 
        await btn_accepter.click();
        
        for (let i = 0; i < 15; i++) {
            
            if ( btn_suivant.isDisplayed()) {
              
                btn_suivant.click()                             // click c'est une fonction = méthode 
                console.log ("####################### a l'intrieur de IF "+i)

                break;                                     // pour sortir 
             
          

            }
            console.log ("####################### a l'exterieur de IF "+i)

    
        
        }





    })

})