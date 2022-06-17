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
            builderCatCode: {
                type: ['string',null]
            },
            builderProductDescription: {
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
                type: 'string'
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
              },
              quantity: {
                type: 'int'
            },
            iconDisplay: {
                type: 'boolean'
            },link: {
                type: ['string',null]
            },itemIndex: {
                type: 'int'
            },isImportCompleted: {
                type: 'boolean'
            }

        },
        required: ['id','defaultDescription','catCode','style','commercialReference'],
        additionalProperties: true
    },
    example: {
        id: "xxxx-yyyy-aaaa-bbbb",
        defaultDescription: 'PowerPoint test unit',
        catCode: "Cat Code",
        style: "Iconic",
        colour: "Vivid White",
        commercialReference: "303808-DRUM",
        isActive: true,
        image: {
            large: "https://clipspecassetsuat.blob.core.windows.netSingle Icon",
            medium: "https://clipspecassetsuat.blob.core.windows.netSingle Icon",
            small: "https://clipspecassetsuat.blob.core.windows.netSingle Icon",
            url: "Single Icon",
            name: null,
            size: 0
        },
        consumerIcon: {
            large: "https://clipspecassetsuat.blob.core.windows.netSingle Icon",
            medium: "https://clipspecassetsuat.blob.core.windows.netSingle Icon",
            small: "https://clipspecassetsuat.blob.core.windows.netSingle Icon",
            url: "Single Icon",
            name: null,
            size: 0
        },
        tradeIcon: {
            large: "https://clipspecassetsuat.blob.core.windows.netSingle Icon",
            medium: "https://clipspecassetsuat.blob.core.windows.netSingle Icon",
            small: "https://clipspecassetsuat.blob.core.windows.netSingle Icon",
            url: "Single Icon",
            name: null,
            size: 0
        },
    }
}


export const productVersions: VersionedSchema = versionSchemas(ProductsResponse100);

