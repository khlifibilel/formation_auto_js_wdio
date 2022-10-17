describe('Page d \'acceuil IN command in webdriverio', () => {
 
    it('Parcours bouton carrousel 7 (Impot.gouv ) ',async ()=> {
        // Variable 
           //et btn_enedis = await $("(//div[@data-index='7']//img [@class='card-img-top'])")   // bouton 2 de la carrousel 
           let titre_page7 = await browser.getTitle()      // titre de la page ouvert tab 2
           let btn_accepter = $("//button[@id='popin_tc_privacy_button']")
       
       // Fin variable
           await browser.url("https://pprod.lidentitenumerique.laposte.fr/") 
       
           await btn_accepter.click();  // pour le boutton continuer sans accepter

           const btn_enedis = $("(//div[@data-index='7']//img [@class='card-img-top'])")

           browser.waitUntil(() => btn_enedis.isClickable())

           console.log('intercable')
           await $("(//div[@data-index='7']//img [@class='card-img-top'])").click()
       
           await browser.switchWindow("particuliers.engie.fr")
           $("//span[@class='c-baseBtn__content'][contains(.,'Tout accepter')]").click()   //bouton accepter enedis
           
           await expect(browser).toHaveTitle("ENGIE Particuliers : Gaz Naturel et Électricité Verte");
       
           console.log("le titre de la page " +await browser.getTitle()) 
               
           //console.log("le titre de la page " +browser.getTitle())   
           })
       
         })