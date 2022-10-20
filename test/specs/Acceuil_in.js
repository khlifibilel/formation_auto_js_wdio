describe('Page d \'acceuil IN command in webdriverio', () => {

    

    it('Parcours bouton carrousel 1 (ANTS ) ',async ()=> {
        // Variable 
           let btn_agence_national = await $("(//div[@data-index='0']//img [@class='card-img-top'])")   // bouton 2 de la carrousel 
           //let titre_page1 = browser.getTitle()      // titre de la page ouvert tab 1
           let btn_accepter = $("//button[@id='popin_tc_privacy_button']")
       
       // Fin variable
           await browser.url("https://pprod.lidentitenumerique.laposte.fr/") 
       
           await btn_accepter.click();  // pour le boutton continuer sans accepter
       
           await btn_agence_national.click()
       
           await browser.switchWindow("ants.gouv.fr")
           $("//i[@class='fal fa-long-arrow-right'][1]").click()    //cliquer accéder au site
            
           await expect(browser).toHaveTitle("ANTS- Accueil particulier");
       
           console.log("le titre de la page "+browser.getTitle())   
               
           //console.log("le titre de la page " +browser.getTitle())   
           
           })
       

    it('Parcours bouton carrousel 2 (Impot.gouv ) ',async ()=> {
 // Variable 
    let btn_agence_national = await $("(//div[@data-index='1']//img [@class='card-img-top'])")   // bouton 2 de la carrousel 
    let titre_page2 = await browser.getTitle()      // titre de la page ouvert tab 2
    let btn_accepter = $("//button[@id='popin_tc_privacy_button']")

// Fin variable
    await browser.url("https://pprod.lidentitenumerique.laposte.fr/") 

    //await btn_accepter.click();  // pour le boutton continuer sans accepter

    await btn_agence_national.click()

    await browser.switchWindow("Accueil | impots.gouv.fr")
    
    await expect(browser).toHaveTitle("Accueil | impots.gouv.fr");

    console.log("le titre de la page " +titre_page2)   
        
    //console.log("le titre de la page " +browser.getTitle())   
    })

    it('Parcours bouton carrousel 7 (Impot.gouv ) ',async ()=> {
        // Variable 
           let btn_enedis = await $("(//div[@data-index='7']//img [@class='card-img-top'])")   // bouton 2 de la carrousel 
           let titre_page7 = await browser.getTitle()      // titre de la page ouvert tab 2
           let btn_accepter = $("//button[@id='popin_tc_privacy_button']")
       
       // Fin variable
           await browser.url("https://pprod.lidentitenumerique.laposte.fr/") 
       
           //await btn_accepter.click();  // pour le boutton continuer sans accepter
       
           await btn_enedis.click()
       
           await browser.switchWindow("particuliers.engie.fr")
           $("//span[@class='c-baseBtn__content'][contains(.,'Tout accepter')]").click()
           
           await expect(browser).toHaveTitle("ENGIE Particuliers : Gaz Naturel et Électricité Verte");
       
           console.log("le titre de la page " +await browser.getTitle()) 
               
           //console.log("le titre de la page " +browser.getTitle())   
           })
       
       












})