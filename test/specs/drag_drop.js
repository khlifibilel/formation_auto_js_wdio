describe('Drag and Drop command moves Drag Box from its position to Destination i.e., Drop Box',()=> {
    it('should make Drag Box to reach out to Drop Box', async () => {
    await browser.url('https://jqueryui.com/droppable/')
    const frame1 = await $('/html/body/div[1]/div[2]/div/div[1]/iframe')
    await browser.switchToFrame(frame1)
    const drag = await $('#draggable')
    await drag.waitForExist(5000)    // attendre jusqu'a elle existe
    console.log(drag)
    const drop = await $('#droppable')
    console.log(drop)
    await browser.pause(8000);
    await drag.dragAndDrop(drop, 5000)
    await browser.pause(8000);
  })
})