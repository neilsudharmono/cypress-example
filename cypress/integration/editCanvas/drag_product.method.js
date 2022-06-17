

var dragMultipleProducts= ()=> {

    
    cy.log("clear filter");
    clearAllFilter();
    cy.wait(5000)
    cy.log("drag multiple product");

    // dragging items into several coordinates
    cy.get('[data-testroot=cprot]')
    .first()
    .doDragIntoElement('#v-2',{
                                offsetX:409,offsetY:648});
    cy.wait(Cypress.env("floorplanWaitForLoading"));

    
    cy.get('[data-testroot=cprot]')
    .eq(1)
    .doDragIntoElement('#v-2',{
                                 offsetX:932,offsetY:648});
    cy.wait(Cypress.env("floorplanWaitForLoading"));
    
    cy.get('[data-testroot=cprot]')
    .eq(2)
    .doDragIntoElement('#v-2',{
                                    offsetX:932,offsetY:244});
    cy.wait(Cypress.env("floorplanWaitForLoading"));

    cy.get('[data-testroot=cprot]')
    .eq(3)
    .doDragIntoElement('#v-2',{
                                    offsetX:932,offsetY:400});
    cy.wait(Cypress.env("floorplanWaitForLoading"));

}


let clearAllFilter=()=>{
    /*cy.get('[class="sprcf-active-filter no-cross"]')
    .its('length').then(clearall=>{
        if(clearall>0)
        {
            cy.get('[class="sprcf-active-filter no-cross"]')
            .contains("Clear all")
            .click();
        }

    }
     
    );*/

    cy.get("body").then($body => {
        if ($body.find('[class="sprcf-active-filter no-cross"]').length > 0) {   //evaluates as true
            cy.get('[class="sprcf-active-filter no-cross"]')
            .contains("Clear all")
            .click();
    
        }
        
      });


}

var clickAndDrawLine=()=>{
    cy.get('#v-2')
        .trigger("mousedown", { which: 1, pageX: 100 })
        .trigger("mousemove", { which: 1, pageX: 300 });

}

var clickSelectTool=()=>{
    cy.clearCookies();

    cy.get('button[data-tip="Select Tool (V)"]')
    .click();
}

var selectProduct=()=>{

    cy.get('[data-type=Product]').then($products => {

         for(let i = 0; i <  $products.length ; i++) {
            cy.get('[data-type=Product]')
            .eq(i)
            .click({force:true});
    
            cy.get('[class=c-product-modal]')
            .should('exist');
    
            /*cy.get('[class=c-product-modal]')
            .find('[data-testid=defaultDescription]')
            .should('exist');
    
            cy.get('[class=c-product-modal]')
            .find(' [data-testid=catCode]')
            .should('exist');
    
            cy.get('[class=c-product-modal]')
            .find(' [class=cprom-label]')
            .should('exist');
    
            cy.get('[class=c-product-modal]')
            .find(' [data-testid=snapshotPrice]')
            .should('exist');
    
            cy.get('[class=c-product-modal]')
            .find(' [data-testid=consumerIcon]')
            .should('exist');*/
    
        }
        
    })

   
}

var clickTextTool=()=>{
    cy.clearCookies();

    cy.get('button[data-tip="Text"]')
    .click();
}

var putTextInCanvas=()=>{
    cy.clearCookies();

    cy.get("body").then($body => {
        // check if the username or password textbox appear
        if ($body.find('[data-type="standard.Rectangle"]').length > 0) {   //evaluates as true
            cy.get('[data-type="standard.Rectangle"]').then(texts => {

                for(var i = 0; i < texts.length ; i++)
                {
                    cy.get("[data-type='standard.Rectangle']",{force:true})
                    .first()
                    .click({force:true}).trigger('keydown', {
                        keyCode: 46, 
                        which: 46,
                        force:true 
                     }); 
                     cy.wait(3000);
                }
        
            })
        }
      });

    cy.get('button[data-tip="Text"]')
    .click();

    cy.get('#v-2')
        .dblclick(400,200)
        .wait(1000)
        .find('[class=v-line]')
        .should('exist');

    cy.get('#v-2')
        .dblclick(400,100)
        .wait(1000)
        .find('[class=v-line]')
        .should('exist');

     cy.get('#v-2')
        .dblclick(400,900)
        .wait(1000)
        .find('[class=v-line]')
        .should('exist');

}

var changeTextsInCanvas=()=>{
    cy.clearCookies();

    clickSelectTool();

    cy.get("[data-type='standard.Rectangle']",{force:true}).then($texts => {

        for(let i = 0; i < $texts.length ; i++) {

           cy.get("[data-type='standard.Rectangle']",{force:true})
           .eq(i)
           //.click({force:true})
           //.wait(1000)
           .dblclick({force:true})
           .type('{selectall}{backspace} Text No ' + i.toString(),{delay:500});
   
       }
       
   })

}

var deleteText =()=>{
    cy.clearCookies();

    clickSelectTool();

    
cy.get('[data-type="standard.Rectangle"]').then(texts => {

    for(var i = 0; i < texts.length ; i++)
    {
        cy.get("[data-type='standard.Rectangle']",{force:true})
        .first()
        .click({force:true}).trigger('keydown', {
            keyCode: 46, 
            which: 46,
            force:true 
         }); 
         cy.wait(3000);
    }

})

}


var clickStraightLineTool=()=>{

    cy.clearCookies();
    cy.wait(3000);
    cy.get('[data-testroot="cflto"]').within(() => {

    cy.get('button[data-tip="Line (L)"]')
    .trigger("mousedown")
    .wait(1000);

    cy.get('span')
    .contains('Straight Line')
    .click();

    });

    


}

var clickCurvedLineTool=()=>{

    cy.clearCookies();
    cy.wait(3000);
    cy.get('[data-testroot="cflto"]').within(() => {

    cy.get('button[data-tip="Line (L)"]')
    .trigger("mousedown")
    .wait(1000);

    cy.get('span')
    .contains('Curved Line')
    .click();

    });


}

var putLineInCanvas=()=>{

    cy.get("body").then($body => {
        // check if the username or password textbox appear
        if ($body.find('[data-type="standard.Link"]').length > 0) {   //evaluates as true
            cy.get('[data-type="standard.Link"]').then(lines => {

                for(var i = 0; i < lines.length ; i++)
                {
                    cy.get("[data-type='standard.Link']",{force:true})
                    .first()
                    .click({force:true}).trigger('keydown', {
                        keyCode: 46, 
                        which: 46,
                        force:true 
                     }); 
                     cy.wait(3000);
                }
        
            })
        }
      });


   

    cy.get('#v-2')
    .trigger("mousedown", { which: 1, clientX: 350, clientY: 200})
    .trigger("mousemove", { which: 1, clientX: 400, clientY: 500 })
    .trigger("mouseup",{ which: 1, clientX: 400, clientY: 500 });
    cy.wait(3000);
    
    cy.get('#v-2')
    .trigger("mousedown", { which: 1, clientX: 550, clientY: 200})
    .trigger("mousemove", { which: 1,  clientX: 670, clientY: 500 })
    .trigger("mouseup");
    cy.wait(3000);
    cy.get('#v-2')
    .trigger("mousedown", { which: 1,  clientX: 1200, clientY: 200})
    .trigger("mousemove", { which: 1,  clientX: 1400, clientY: 500 })
    .trigger("mouseup");

    cy.wait(3000);
    
    clickSelectTool();

    cy.get('[data-type="standard.Link"]').then(lines => {

        for(var i = 0; i < lines.length ; i++)
        {
            cy.get("[data-type='standard.Link']",{force:true})
            .first()
            .click({force:true}).trigger('keydown', {
                keyCode: 46, 
                which: 46,
                force:true 
             }); 
             cy.wait(3000);
        }

    })

     cy.get('[data-testid="bom-save-close-btn"]')
     .click();
     
}

var clickCurveConnector=()=>{

    cy.clearCookies();
    cy.get('[data-testroot="cflto"]').within(() => {

    cy.get('button[data-tip="Link"]')
    .trigger("mousedown")
    .wait(1000);

    cy.get('span')
    .contains('Curve Connector')
    .click();

    });




}

var curveConnectProduct=()=>{

    cy.get('[data-type=Product]')
    .first()
    .trigger("mousedown", { which: 1})

    cy.get('[data-type=Product]')
    .eq(1)
    .trigger("mousemove")
    .trigger("mouseup");
    cy.wait(2000);
    cy.get('[data-type=Product]')
    .eq(2)
    .trigger("mousedown", { which: 1})

    cy.get('[data-type=Product]')
    .eq(2)
    .trigger("mousemove")
    .trigger("mouseup");
    cy.wait(2000);
    cy.get('[data-type=Product]')
    .eq(2)
    .trigger("mousedown", { which: 1})

    cy.get('[data-type=Product]')
    .eq(3)
    .trigger("mousemove")
    .trigger("mouseup");
    cy.wait(2000);

    clickSelectTool()
    cy.wait(2000);
    deleteProducts();
    cy.wait(2000);
    deleteProducts();
    cy.wait(2000);
    deleteProducts();
    cy.wait(2000);
    deleteProducts();
    



}


var clickElbowConnector=()=>{

    cy.clearCookies();
    cy.get('[data-testroot="cflto"]').within(() => {

    cy.get('button[data-tip="Link"]')
    .trigger("mousedown")
    .wait(1000);

    cy.get('span')
    .contains('Elbow Connector')
    .click();

    });




}

var elbowConnectProduct=()=>{

    cy.get('[data-type=Product]')
    .first()
    .trigger("mousedown", { which: 1})

    cy.get('[data-type=Product]')
    .eq(1)
    .trigger("mousemove")
    .trigger("mouseup");
    cy.wait(2000);
    cy.get('[data-type=Product]')
    .eq(2)
    .trigger("mousedown", { which: 1})

    cy.get('[data-type=Product]')
    .eq(2)
    .trigger("mousemove")
    .trigger("mouseup");
    cy.wait(2000);
    cy.get('[data-type=Product]')
    .eq(2)
    .trigger("mousedown", { which: 1})

    cy.get('[data-type=Product]')
    .eq(3)
    .trigger("mousemove")
    .trigger("mouseup");
    cy.wait(2000);


    clickSelectTool()
    cy.wait(2000);
    deleteProducts();
    cy.wait(2000);
    deleteProducts();
    cy.wait(2000);
    deleteProducts();
    cy.wait(2000);
    deleteProducts();



}

var deleteProducts=()=>{

   ;

    cy.get('[data-type=Product]')
    .first()
    .rightclick({force:true})

    cy.get('[class=ctxmi-button-inner]')
    .contains('Delete')
    .click();
    
}

export{
    dragMultipleProducts,
    clickAndDrawLine,
    clickSelectTool,
    selectProduct,
    clickTextTool,
    putTextInCanvas,
    changeTextsInCanvas,
    clickStraightLineTool,
    clickCurvedLineTool,
    putLineInCanvas,
    clickCurveConnector,
    curveConnectProduct,
    clickElbowConnector,
    elbowConnectProduct,
    deleteProducts,
    deleteText

    
}