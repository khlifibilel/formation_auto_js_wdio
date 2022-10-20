describe('Page d \'acceuil IN command in webdriverio', () => {


    // it('Parcours bouton engie  ',async ()=> {

    //     const btn_suivant = await $("//span[contains(@class,'icon-chevron-right ')]")
    //     let btn_accepter_cookies_laposte = await $("//button[@id='popin_tc_privacy_button_2']")
    //     const btn_engie = await $("(//div[@data-index='7']//img [@class='card-img-top'])")

    //     await browser.url("https://pprod.lidentitenumerique.laposte.fr/") 
    //     await btn_accepter_cookies_laposte.click();
        
    //     for (let i = 0; i < 15; i++) {    // il doit tourné 14 fois 
            
    //         if ( await btn_engie.isDisplayed())    //  1 seul instruciton complexe () : partier de verification et le corp de verification 
    //         {


    //             await browser.waitUntil(() => btn_engie.isClickable())         // méthode anonyme 
    //             await  btn_engie.click()

    //           // await  btn_suivant.click()                             // click c'est une fonction = méthode 
    //             console.log ("####################### a l'intrieur de IF "+i)

    //             break;                                     // pour sortir quand tu as fait la condition 
             
    //         }
    //         console.log ("####################### a l'exterieur de IF "+i)

    //         await btn_suivant.click()     // 
    //     }
    //       await browser.pause(10000)
    // })





//     it('Parcours bouton carrousel 1 (ANTS ) ',async ()=> {

//         const btn_suivant = await $("//span[contains(@class,'icon-chevron-right ')]")
//         let btn_accepter = await $("//button[@id='popin_tc_privacy_button_2']")
//         const btn_agence_national = await $("(//img[@alt='Agence Nationale des Titres Sécurisés'])[1]")

//         await browser.url("https://pprod.lidentitenumerique.laposte.fr/") 
//         await btn_accepter.click();
        
//         for (let i = 0; i < 15; i++) {
            
//             if ( await btn_agence_national.isDisplayed()) {
//               await  btn_agence_national.click()

//               // await  btn_suivant.click()                             // click c'est une fonction = méthode 
//                 console.log ("####################### a l'intrieur de IF "+i)

//                 break;                                     // pour sortir quand tu as fait la condition 
             
//             }
//             console.log ("####################### a l'exterieur de IF "+i)
//             await btn_suivant.click()
//         }
//           await browser.pause(10000)

// })


it('Parcours bouton carrousel 1 (ANTS ) ',async ()=> {

    const btn_suivant = await $("//span[contains(@class,'icon-chevron-right ')]")
    let btn_accepter = await $("//button[@id='popin_tc_privacy_button_2']")
    const btn_cpf = await $("(//div[@data-index='10']//img [@class='card-img-top'])")

    await browser.url("https://pprod.lidentitenumerique.laposte.fr/") 
    await btn_accepter.click();
    
    for (let i = 0; i < 15; i++) {
        
        if ( await btn_cpf.isDisplayed()) {
            await browser.waitUntil(() => btn_cpf.isClickable())
          await  btn_cpf.click()

          // await  btn_suivant.click()                             // click c'est une fonction = méthode 
            console.log ("####################### a l'intrieur de IF "+i)

            break;                                     // pour sortir quand tu as fait la condition 
         
        }
        console.log ("####################### a l'exterieur de IF "+i)
        await btn_suivant.click()
    }
      await browser.pause(10000)

})    





})





