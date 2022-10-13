describe('My Login application', () => {
    it('should login with valid credentials', async () => {
        await browser.url(`https://the-internet.herokuapp.com/login`);

        await $('#username').setValue('tomsmith');
        await $('#password').setValue('SuperSecretPassword!');
        await $('button[type="submit"]').click();

        await expect($('#flash')).toBeExisting();
        await expect($('#flash')).toHaveTextContaining(
            'You logged into a secure area!');
    });

    it.skip('IT numéro 2', async () => {
        await browser.url(`https://the-internet.herokuapp.com/login`);

        await $('#username').setValue('tomsmith');
        await $('#password').setValue('SuperSecretPassword!');
        await $('button[type="submit"]').click();

        await expect($('#flash')).toBeExisting();
        await expect($('#flash')).toHaveTextContaining(
            'You logged into a secure area!');
    });

    it('IT numéro 3', async () => {
        await browser.url(`https://the-internet.herokuapp.com/login`);

        await $('#username').setValue('tomsmith');
        await $('#password').setValue('SuperSecretPassword!');
        await $('button[type="submit"]').click();

        await expect($('#flash')).toBeExisting();
        await expect($('#flash')).toHaveTextContaining(
            'You logged into a secure area!');
    });


    it('IT numéro 4', async () => {
        await browser.url(`https://the-internet.herokuapp.com/login`);

        await $('#username').setValue('tomsmith');
        await $('#password').setValue('SuperSecretPassword!');
        await $('button[type="submit"]').click();

        await expect($('#flash')).toBeExisting();
        await expect($('#flash')).toHaveTextContaining(
            'You logged into a secure area!');
    });

});

