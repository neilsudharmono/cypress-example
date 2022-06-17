import { ObjectSchema, VersionedSchema, versionSchemas, SchemaCollection, extend } from '@cypress/schema-tools'

import {imageResponse100,consumerIconResponse100,tradeIconResponse100} from './images-reponse'

const ProductsInclusionResponse100: ObjectSchema = {
    version: {
        major: 1,
        minor: 0,
        patch: 0
    },
    schema: {
        title: 'ProductsInclusionResponse',
        type: 'object',
        description: 'Clipspec V3 Inclusion Products provided from Azure Search indexes',
        properties: {
            builderPrice:{
                type: ['string',null]
            },
            builderProductDescription : {
                type:  ['string',null]
            },
            catCode : {
                type: 'string'
            },
            colourFullName : {

            },
            colourGroupName : {

            },
            commercialReference: {
                type: 'string'
            },
            consumerIcon:{
                ...consumerIconResponse100.schema,
                see: consumerIconResponse100,
            },
            contractorPrices : {

            },
            defaultDescription: {
                type: 'string',
            },
            id: {
                type: 'string',
                description: 'GUID for Product'
            },
            image: {
                ...imageResponse100.schema,
                see: imageResponse100,
              },
              isActive: {
                type: 'boolean'
            },
            isIncluded: {
                type: 'boolean'
            },
            quantity : {
                type: ['string',null]
            },
            stdCategory : {
                type: ['string',null]
            },
            stdSubcategory : {
                type: ['string',null]
            },            
            style: {
                type: 'string'
            },
            colour: {
                type: ['string',null]
            },
            tradeIcon : {
                  ...tradeIconResponse100.schema,
                  see: tradeIconResponse100,
            },
            tradePrice : {
            type: ['string',null]
            }
        },
        required: ['id','defaultDescription','catCode','style','commercialReference'],
        additionalProperties: true
    },
    example: {        
            builderPrice: null,
            builderProductDescription: null,
            catCode: "Cat Code",
            colour: "VW",
            colourFullName: "Vivid White",
            colourGroupName: "Whites",
            commercialReference: "S40STR-SV",
            consumerIcon: {
                large: "https://clipspecassetsuat.blob.core.windows.netSingle Icon",
                medium: "https://clipspecassetsuat.blob.core.windows.netSingle Icon",
                small: "https://clipspecassetsuat.blob.core.windows.netSingle Icon",
                url: "Single Icon"
                },
            contractorPrices: null,
            defaultDescription: "Default Description",
            id: "b5bce121-a712-4c72-a449-5818df5b48ed",
            image: {
                large: null,
                medium: null,
                small: null,
                url: null
                },
            isActive: true,
            isIncluded: false,
            quantity: null,
            stdCategory: "STD Category",
            stdSubcategory: "STD Sub-Category",
            style: "Iconic",
            tradeIcon: {
                large: null,
                medium: null,
                small: null,
                url: null
                },
            tradePrice: null            
    }
}

export const productInclusionVersions: VersionedSchema = versionSchemas(ProductsInclusionResponse100);