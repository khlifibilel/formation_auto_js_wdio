describe('Page d \'acceuil IN command in webdriverio', () => {

    it('Parcours bouton carrousel 1 (ANTS ) ',async ()=> {

        const btn_suivant = $("//span[contains(@class,'icon-chevron-right ')]")
        const btn_accepter = $("//button[@id='popin_tc_privacy_button']")
        const btn_agence_national = $("//div[@data-index='0']//img [@class='card-img-top'])")
        const btn_impot = $("//div[@data-index='1']//img [@class='card-img-top'])")
        const btn_assurance_maladie = $("//div[@data-index='2']//img [@class='card-img-top'])")
        const btn_assurance_retraite = $("//div[@data-index='3']//img [@class='card-img-top'])")
        const btn_laposte = $("//div[@data-index='4']//img [@class='card-img-top'])")
        const btn_agricole = $("//div[@data-index='5']//img [@class='card-img-top'])")
        const btn_harmoniemuteulle = $("//div[@data-index='6']//img [@class='card-img-top'])")
        const btn_engie = $("//div[@data-index='7']//img [@class='card-img-top'])")
        const btn_enedis = $("//div[@data-index='8']//img [@class='card-img-top'])")
        const btn_mes_droit_sociaux = $("//div[@data-index='9']//img [@class='card-img-top'])")
        const btn_mon_compte_formation = $("//div[@data-index='10']//img [@class='card-img-top'])")
        const btn_diplome_gouv = $("//div[@data-index='11']//img [@class='card-img-top'])")
        const btn_humanis = $("//div[@data-index='12']//img [@class='card-img-top'])")
        const btn_la_banque_postal = $("//div[@data-index='13']//img [@class='card-img-top'])")
        const btn_kelsia = $("//div[@data-index='14']//img [@class='card-img-top'])")
        





        

        await browser.url("https://pprod.lidentitenumerique.laposte.fr/") 
        await btn_accepter.click();
        
        for (let i = 0; i < 15; i++) {
            
            if ( btn_suivant.isDisplayed()) {           //bouton droite
  
                btn_suivant.click()  // click c'est une fonction = méthode 

                btn_engie.click()
                await browser.switchWindow("particuliers.engie.fr")
                $("//span[text()='Tout accepter']").click()
                await expect(browser).toHaveTitle("ENGIE Particuliers : Gaz Naturel et Électricité Verte");
                console.log("hamdoullah" +browser.getTitle())

                


               // console.log ("####################### a l'intrieur de IF "+i)

               // break;                                     // pour sortir quand tu as fait la condition 
             
          

            }
           // console.log ("####################### a l'exterieur de IF "+i)

    
        
        }

    })

})