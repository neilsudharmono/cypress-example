const testingInput = {
    builder_name : "Automation",
    first_name: "Automation", 
    last_name: "Testing", 
    full_name : "Automation Testing",
    phone: "0412345678", 
    email: "tester@mail.com",
    address_line1: "123 Test road",
    prefered_contact_method:"Phone",
    prefered_contact_time:"Morning",
    notes:"This is automation test running",
    Template_name:"Automation Test Template " + Cypress.moment().format('DDMMYYYY'),
    country:"Australia",
    state:"VIC",
    postcode:"3000",
    house_number:"home 01",
    suburb:"george town",
    Template_type:"NewBuild",
    size:"1000",
    number_of_floor:"One",
    building_type:"House"

};

const testingInvalidInput = {
    builder_name : "Clever Homes",
    first_name: "Automation", 
    last_name: "Testing", 
    phone: "0412345678", 
    email: "tester@mail.com",
    address_line1: "123 Test road",
    prefered_contact_method:"Phone",
    prefered_contact_time:"Morning",
    notes:"This is automation test running",
    Template_name:"Automation Test Template",
    country:"Australia",
    state:"VIC",
    postcode:"3000",
    house_number:"home 01",
    suburb:"george town",
    Template_type:"New build",
    size:"1000",
    number_of_floor:"1",
    building_type:"House",
    invalid_email:"abc-sadasd-.sdasdsd",
    invalid_phone:"!213sfsdf",
    error_invalid_email:"Provide valid email",
    error_invalid_phone:"Provide valid phone number",
    second_contact_name:"second contact name",
    second_contact_email:"second@mail.com"
}

const inputInProgress = {
    builder_name : "Auto",
    first_name: "Test BOM No Product", 
    last_name: "Testing", 
    full_name : "Test BOM No Product",
    phone: "0412345678", 
    email: "tester@mail.com",
    address_line1: "123 Test road",
    prefered_contact_method:"Phone",
    prefered_contact_time:"Morning",
    notes:"This is automation test running",
    Template_name:"Automation Test BOM No Product Template " + Cypress.moment().format('DDMMYYYY'),
    country:"Australia",
    state:"VIC",
    postcode:"3000",
    house_number:"home 01",
    suburb:"george town",
    Template_type:"NewBuild",
    size:"1000",
    number_of_floor:"One",
    building_type:"House"

}

const projectInput={
    projectName : "Automation Test Edit Project Metadata",
    buildingSize : "250",
    project_type : "NewBuild",
    num_of_floor : "One",
    build_type : "House",
    country : "Australia", 
    postcode : "3166", 
    state : "VIC",
    house_number : "NUMBER 1",
    street : "Level 1, 195 Little Collins St",
    suburb : "george town",
    use_storage_price : true,
    firstname : "AT First",
    lastname : "AT Last name", 
    email : "filya@luminary.com",
    phone : "123456789",
    prefered_contact_method : "Phone",
    contact_time : "Morning",
    notes : "this information for automation test"
}

export { testingInput, inputInProgress, testingInvalidInput, projectInput} ;