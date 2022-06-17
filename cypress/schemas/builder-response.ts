import { ObjectSchema, VersionedSchema, versionSchemas, SchemaCollection, extend } from '@cypress/schema-tools'

import { contactResponse100} from './contact-response'

const builderResponse100: ObjectSchema = {
    version: {
      major: 1,
      minor: 0,
      patch: 0,
    },
    schema: {
      type: 'object',
      title: 'Status',
      description: 'Contact of project',
      properties: {
        id: {
            type: ['string'],
          description: 'GUID for status id',
        },
        name: {
            type: ['string',null],
          description: 'display name',
        },
        primaryAddressSuburb: {
            type: ['string',null],
            description: '',
        },
        primaryAddressState: {
            type: ['string',null],
            description: '',
        },
        primaryAddressPostcode: {
          type: ['string',null],
          description: '',
        },
        primaryAddressHouseNumber: {
            type: ['string',null],
            description: '',
        },
        primaryAddressStreet: {
          type: ['string',null],
          description: '',
        },
        logo: {
          type: ['string',null],
          description: '',
        },
        isActive: {
          type: ['string',null],
          description: '',
        },
        createdDateTimeUtc: {
          type: ['string',null],
          description: '',
        },
        contactUser:{
          ...contactResponse100.schema,
          see: contactResponse100
        }
      },
      required: ['id','name','primaryAddressSuburb','primaryAddressState','primaryAddressPostcode','primaryAddressHouseNumber','primaryAddressStreet','isActive','createdDateTimeUtc'],
      additionalProperties: false,
    },
    example: {
      id : "6c49957a-c879-4f8f-abc1-6ed15eba7d53",
      name : "John Hammond",
      primaryAddressSuburb : "Melbourne",
      primaryAddressState : "NSW",
      primaryAddressPostcode : "3212",
      primaryAddressHouseNumber : "test",
      primaryAddressStreet : "r5wetew",
      logo : null,
      isActive : true,
      contactUser : null,
      createdDateTimeUtc : "20200707T034231Z"
    },
  }

export {builderResponse100}
