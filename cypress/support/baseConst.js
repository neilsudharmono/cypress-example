// this file contains of global constant variables

const dayjs = require('dayjs')

const LOGIN_URL = "https://uiux.clipsal.com.wip.gs/admin";
const DASHBOARD_URL = "http://feature-nav-prototype.clipspec-develop.fed.wip.gs/app.html"
const POC_URL = "http://feature-jointjs-demo.clipspec-develop.fed.wip.gs/app.html#/joint-js"
const PROJECT_LIST_URL = "http://feature-showcase.clipspec-develop.fed.wip.gs/app.html#/project-listing"
const DEFAULT_ITEM_PER_PAGE = 12;
const PROJECT_API_LINK = Cypress.env('projectAPI') + "/projects?type=active";
const PROJECT_API_LINK_2 = Cypress.env('projectAPI') + "/projects";
const PROJECT_API_LINK_EDIT = Cypress.env('projectAPI');
const BUILDER_API_LINK = Cypress.env('api') + "/builders";
const BUILDER_API_LINK_2 = Cypress.env('projectAPI') + "/builders";
const BUSSINESS_API_LINK = Cypress.env('api') + "/businessaccounts";
const BUSSINESS_API_LINK_2 = Cypress.env('projectAPI') + "/businessaccounts";
const SURCHARGES_API_LINK = Cypress.env('api') + "mastersurcharges/search";
const SURCHARGES_API_LINK_2 = Cypress.env('projectAPI') + "/mastersurcharges/search";
// NEED TO UPDATE THIS HARDCODED BUILDER ID LATER
const PRODUCT_BUILDER_API_LINK = Cypress.env('projectAPI')+"builderproducts/387646a9-f590-4b2e-bfbd-05a6b95813a7/products/";
const PRODUCT_BUILDER_OVERVIEW_API_LINK =  Cypress.env('projectAPI')+"/builderproducts/#/products";
const PRODUCT_BUILDER_OVERVIEW_API_LINK_2 =  Cypress.env('api')+"builderproducts/#/products/";
const PRODUCT_INCLUSION_API_LINK = Cypress.env('api')+"builderproducts/builderId/products";
const PRODUCT_INCLUSION_API_LINK_2 = Cypress.env('projectAPI')+"/builderproducts/builderId/products";
const PRODUCT_CATALOGUE_API_LINK = Cypress.env('api')+"catalogueproducts/builderId/products";
const PRODUCT_CATALOGUE_API_LINK_2 = Cypress.env('projectAPI')+"/catalogueproducts/builderId/products";
const PRODUCT_API_LINK = Cypress.env('api')+"masterproducts";
const PRODUCT_API_LINK_2 = Cypress.env('projectAPI')+"/masterproducts";
//const GETTODAYSDATE = Cypress.moment().format('DD/MM/YYYY');
const CLEANUP_PROJECT_API_LINK = Cypress.env('api')+"/CleanUpData/projects";

// fake changes

export {
    LOGIN_URL, DASHBOARD_URL, POC_URL,
    PROJECT_LIST_URL, DEFAULT_ITEM_PER_PAGE,
    PROJECT_API_LINK, BUILDER_API_LINK,
    BUSSINESS_API_LINK, PRODUCT_API_LINK,
    PRODUCT_BUILDER_API_LINK,
    PRODUCT_BUILDER_OVERVIEW_API_LINK,
    PRODUCT_INCLUSION_API_LINK,
    PRODUCT_CATALOGUE_API_LINK,
    //GETTODAYSDATE,
    SURCHARGES_API_LINK,
    PROJECT_API_LINK_2,
    CLEANUP_PROJECT_API_LINK,
    BUILDER_API_LINK_2,
    PRODUCT_API_LINK_2,
    BUSSINESS_API_LINK_2,
    SURCHARGES_API_LINK_2,
    PRODUCT_BUILDER_OVERVIEW_API_LINK_2,
    PRODUCT_INCLUSION_API_LINK_2,
    PRODUCT_CATALOGUE_API_LINK_2,
};

