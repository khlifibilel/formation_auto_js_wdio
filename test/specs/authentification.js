describe('Authentification sur france connect  ', () => {  //suite des tests    

    it('valider authentification sur la mire FC ',async () => {    // cas de test
        
                await browser.url ("https://authent.recette.lidentitenumerique.laposte.fr/auth/realms/partenaire/protocol/openid-connect/auth?client_id=e63ecfcec78e4d60aaff95a95c8e5813&response_type=code&prompt=consent&redirect_uri=https://www.laposte.fr&scope=openid")
                await  $("//button[@id='popin_tc_privacy_button']").click();  // pour le boutton continuer sans accepter
                await browser.pause(6000)
                let champ_numero = $("//input[@id='username']")
                await champ_numero.click()
                await champ_numero.setValue('0600000039');
                await $("//input[@class='id-button homepage-auth-btn']").click();
                await browser.pause(6000)
                // let le_titre = browser.getTitle()
                // expect(browser).toHaveTitle("L’Identité Numérique La Poste dans l’App Store");
                // browser.switchWindow("recette.lidentitenumerique.laposte.fr")
                //  $("//img[@src='/img/home/badges-google-play.svg']").click()
                //  browser.switchWindow("play.google.com")
                // expect(browser).toHaveTitle("L'Identité Numérique La Poste – Applications sur Google Play");
                // console.log("le titre de la derniere page " +browser.getTitle())   
                //console.log(resource.entryType);
            })
            //console.log(window.performance.getEntriesByType("resource"))
        
        })



