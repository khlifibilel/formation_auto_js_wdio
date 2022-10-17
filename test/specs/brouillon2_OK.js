const { generateTestFiles } = require("@wdio/cli/build/utils");

describe('Page d \'acceuil IN command in webdriverio', () => {


it('should detect if an element is clickable', async () => {
    await browser.url("https://pprod.lidentitenumerique.laposte.fr/") 
       
    await $("//button[@id='popin_tc_privacy_button']").click();  // pour le boutton continuer sans accepter




    const el = await $("(//div[@data-index='7']//img [@class='card-img-top'])")
    let clickable = await el.isClickable();
    console.log("message de cliquer "+clickable); // outputs: true or false

    // wait for element to be clickable
    await browser.waitUntil(() => el.isClickable())         // méthode anonyme 

     await  el.click();
    console.log("reussit")
///  OK 
   await browser.pause(10000) 
    await browser.switchWindow("particuliers.engie.fr")
    $("//span[text()='Tout accepter']").click()   //bouton accepter enedis
    
    await expect(browser).toHaveTitle("ENGIE Particuliers : Gaz Naturel et Électricité Verte");
    console.log("hamdoullah" +browser.getTitle())

});

});