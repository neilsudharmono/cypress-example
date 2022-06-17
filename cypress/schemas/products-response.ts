import { ObjectSchema, VersionedSchema, versionSchemas, SchemaCollection, extend } from '@cypress/schema-tools'

import {imageResponse100,consumerIconResponse100,tradeIconResponse100} from './images-reponse'

const ProductsResponse100: ObjectSchema = {
    version: {
        major: 1,
        minor: 0,
        patch: 0
    },
    schema: {
        title: 'ProductsResponse',
        type: 'object',
        description: 'Clipspec V3 Products provided from Azure Search indexes',
        properties: {            
            tradePrice: {
                type: ['string',null]
            },
            builderProductDescription: {
                type: ['string',null]
            },
            builderCatCode: {
                type: ['string',null]
            },
            builderCategory: {
                type: ['string',null]
            },
            builderSubcategory: {
                type: ['string',null]
            },
            builderSubcategoryId: {
                type: ['string',null]
            },
            builderCategoryHexCode: {
                type: ['string',null]
            },
            id: {
                type: 'string',
                description: 'GUID for Product'
            },
            defaultDescription: {
                type: 'string',
            },
            productDescription: {
                type: 'string',
            },
            catCode: {
                type: ['string',null]
            },
            style: {
                type:  ['string',null]
            },
            styleCode: {
                type: ['string',null]
            },
            colour: {
                type: ['string',null]
            },
            colourFullName: {
                type: ['string',null]
            },
            stdCategory: {
                type: 'string'
            },
            stdSubcategory: {
                type: 'string'
            },
            commercialReference: {
                type: 'string'
            },
            isDeleted: {
                type: 'boolean'
            },
            image: {
                ...imageResponse100.schema,
                see: imageResponse100,
              },
              consumerIcon:{
                  ...consumerIconResponse100.schema,
                  see: consumerIconResponse100,
              },
              tradeIcon : {
                  ...tradeIconResponse100.schema,
                  see: tradeIconResponse100,
              }
        },
        required: ['id','defaultDescription','catCode','style','commercialReference'],
        additionalProperties: true
    },
    example: {
        tradePrice: null,
        builderProductDescription : "1 Gang Switch 1/2way 10AX 250V with LED",
        builderCatCode : "3041VAL",
        builderCategory : "Switches",
        builderSubcategory : "Switch",
        builderSubcategoryId : "5ccfa299-540c-4591-931f-eb55e7a0488b",
        builderCategoryHexCode : "#F00081",
        builderCategoryRanking : null,
        isIncluded : true,
        builderPrice : 39.39,
        quantity : 1,
        productChildItems : [],
        contractorData : [
            {
            id : "119bbf96-ec02-4fcb-b380-d76b2553c3bf",
            name : "Default Contractor",
            price : 30.3
            }
        ],
        productReplacement : null,
        id : "e25433e2-97d1-4235-916d-9562a58b76b8",
        defaultDescription : "Switch, 1 LED",
        catCode : "3041VAL",
        style : "Iconic",
        styleCode : "Ic",
        colour : "VW",
        colourFullName : "Vivid White",
        stdCategory : null,
        stdSubcategory : null,
        commercialReference : "3041VAL-VW",
        isDeleted : false,
        isDiscontinued : false,
        isImportCompleted : true,
        discontinuedDateTimeUtc : null,
        replacementCommercialReference : "",
        colourGroupName : "White",
        productDataType : "FinishedProduct",
        productType : null,
        crossReferenceGroup : null,
        image : {
            large : "https://clipspecclientassests.blob.core.windows.net/products/images/3041VA_VW.jpg",
            medium : "https://clipspecclientassests.blob.core.windows.net/products/images/3041VA_VW.jpg",
            small : "https://clipspecclientassests.blob.core.windows.net/products/images/3041VA_VW.jpg",
            url : "/products/images/3041VA_VW.jpg"
        },
        consumerIcon : {
            large : "https://clipspecclientassests.blob.core.windows.net/products/icons/I_1Sled.svg",
            medium : "https://clipspecclientassests.blob.core.windows.net/products/icons/I_1Sled.svg",
            small : "https://clipspecclientassests.blob.core.windows.net/products/icons/I_1Sled.svg",
            url : "/products/icons/I_1Sled.svg"
        },
        tradeIcon : {
            large : "https://clipspecclientassests.blob.core.windows.net/products/icons/I_1Sled.svg",
            medium : "https://clipspecclientassests.blob.core.windows.net/products/icons/I_1Sled.svg",
            small : "https://clipspecclientassests.blob.core.windows.net/products/icons/I_1Sled.svg",
            url : "/products/icons/I_1Sled.svg"
        }
    }
}


export const productVersions: VersionedSchema = versionSchemas(ProductsResponse100);

