import { ObjectSchema, VersionedSchema, versionSchemas, SchemaCollection, extend } from '@cypress/schema-tools'

const contactResponse100: ObjectSchema = {
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
        federatedId: {
            type: ['string',null],
          description: 'display name',
        },
        firstName: {
            type: ['string',null],
            description: '',
        },
        lastName: {
            type: ['string',null],
            description: '',
        },
        fullName: {
          type: ['string',null],
          description: '',
        },
        state: {
            type: ['string',null],
            description: '',
        },
        phoneNumber: {
          type: ['string',null],
          description: '',
        },
        emailAddress: {
          type: ['string',null],
          description: '',
        },
        userStatus: {
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
        lastModifiedDateTimeUtc: {
          type: ['string',null],
          description: '',
        },
        roles: {
          type: ['string',null],
          description: '',
        }
      },
      required: ['id','federatedId','firstName','lastName','fullName','phoneNumber','emailAddress','isActive','createdDateTimeUtc','lastModifiedDateTimeUtc'],
      additionalProperties: false,
    },
    example: {
      id: "c656a863-7f2a-4614-beed-0cbd24ff96ff",
			federatedId: null,
			firstName: "FILYA",
			lastName: "TESTER",
			fullName: "FILYA TESTER",
			state: "VIC",
			phoneNumber: "0403111222",
			emailAddress: "FILYA@LUMINARY.COM",
			userStatus: 0,
			isActive: false,
			createdDateTimeUtc: "20200630T011910Z",
			lastModifiedDateTimeUtc: "20200707T040730Z",
			roles: null
    }
  }

export {contactResponse100}
