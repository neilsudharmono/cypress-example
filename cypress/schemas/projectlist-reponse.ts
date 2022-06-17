import { ObjectSchema, VersionedSchema, versionSchemas, SchemaCollection, extend } from '@cypress/schema-tools'

import {imageResponse100} from './images-reponse'
import {statusResponse100} from './status-response'
import {builderResponse100} from './builder-response'
import {contactResponse100} from './contact-response'

const ProjectsResponse100: ObjectSchema = {
    version: {
        major: 1,
        minor: 0,
        patch: 0
    },
    schema: {
        title: 'ProjectListResponse',
        type: 'object',
        description: 'Clipspec V3 Projects provided from Azure Search indexes',
        properties: {
            id: {
                type: 'string',
                description: 'GUID for Product'
            },
            name: {
                type: 'string',
            },
            buildingType: {
                type: ['string',null]
            },
            style: {
                type: 'string'
            },
            suburb: {
                type: ['string',null]
            },
            state: {
                type: 'string'
            },
            inclusionCredit: {
                type: 'number'
            },
            inclusionValue: {
                type: 'number'
            },
            variationValue: {
                type: 'number'
            },
            totalInclusion: {
                type: 'number'
            },
            totalVariation: {
                type: 'number'
            },
            totalElectrical: {
                type: 'number'
            },
            totalFee: {
                type: 'number'
            },
            createdDateTimeUtc: {
                type: 'string'
            },
            lastModifiedDateTimeUtc: {
                type: 'string'
            },
            lastModifiedBy: {
                type: 'string'
            },
            image: {
                ...imageResponse100.schema,
                see: imageResponse100,
            },
            status: {
                ...statusResponse100.schema,
                see: statusResponse100
            },
            primaryContact:{
                ...contactResponse100.schema,
                see: contactResponse100
            },
            consultant: {
                type: ['string',null]
            },
            builder:{
                ...builderResponse100.schema,
                see: builderResponse100
            }
            
        },
        required: ['id','name','buildingType','suburb','state','projectType','createdDateTimeUtc','lastModifiedDateTimeUtc','lastModifiedBy'],
        additionalProperties: true
    },
    example: {
        id: "033b9b31-b8cb-4719-979f-0093c80ed0cd",
        name: "UPDATED Automation Test Edit Project Metadata",
        buildingType: "House",
        suburb: "george town",
        state: "VIC",
        projectType: "NewBuild",
        inclusionCredit: 0,
        inclusionValue: 0,
        variationValue: 0,
        totalInclusion: 0,
        totalVariation: 0,
        totalElectrical: 0,
        totalFee: 0,
        builder: {
          id: "eb792d4b-3ab4-45d2-a8a0-037be1249fbb",
          name: "test builder 15 july",
          primaryAddressSuburb: "Bellfield",
          primaryAddressState: "ACT",
          primaryAddressPostcode: "2345",
          primaryAddressHouseNumber: "97",
          primaryAddressStreet: "Swanston Street",
          logo: null,
          isActive: true,
          contactUser: {
            id: "9c9e2715-c5d0-4755-f464-08d819646e0e",
            federatedId: null,
            firstName: "filya",
            lastName: "mustikawati",
            fullName: "filya mustikawati",
            state: null,
            phoneNumber: "0400000000",
            emailAddress: "filya@luminary.com",
            userStatus: 0,
            isActive: false,
            createdDateTimeUtc: "00010101T000000Z",
            lastModifiedDateTimeUtc: "20200804T085018Z",
            roles: null
          },
          createdDateTimeUtc: "20200715T025226Z"
        },
        primaryContact: {
          id: "d8b06230-f747-482c-8084-c0336aac017a",
          federatedId: null,
          firstName: "AT First - UP",
          lastName: "AT Last name -UP",
          fullName: "AT First - UP AT Last name -UP",
          state: null,
          phoneNumber: "0412345678",
          emailAddress: "sefizece@mailinator.com",
          userStatus: 0,
          isActive: false,
          createdDateTimeUtc: "20200720T090702Z",
          lastModifiedDateTimeUtc: "20200721T020335Z",
          roles: []
        },
        consultant: null,
        status: {
          id: "5d78c41e-4231-4fef-ab3d-f21d0d7d5503",
          displayName: "Preparation",
          displayValue: "Preparation",
          codeName: "Preparation"
        },
        image: {
          large: null,
          medium: null,
          small: null,
          url: null
        },
        createdDateTimeUtc: "20200720T090702Z",
        lastModifiedDateTimeUtc: "20200721T020335Z",
        lastModifiedBy: "Test User"
    }
}


export const projectVersions: VersionedSchema = versionSchemas(ProjectsResponse100);

