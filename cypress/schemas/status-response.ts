import { ObjectSchema, VersionedSchema, versionSchemas, SchemaCollection, extend } from '@cypress/schema-tools'

const statusResponse100: ObjectSchema = {
    version: {
      major: 1,
      minor: 0,
      patch: 0,
    },
    schema: {
      type: 'object',
      title: 'Status',
      description: 'Status of project',
      properties: {
        id: {
            type: 'string',
          description: 'GUID for status id',
        },
        displayName: {
            type: ['string',null],
          description: 'display name',
        },
        displayValue: {
            type: ['string',null],
            description: 'display value',
        },
        codeName: {
            type: ['string',null],
            description: 'code name',
        }
      },
      required: ['id','displayName','displayValue','codeName'],
      additionalProperties: false,
    },
    example: {
        id: "5d78c41e-4231-4fef-ab3d-f21d0d7d5502",
        displayName: "Created",
        displayValue: "Created",
        codeName: "InProgress"
    },
  }

export {statusResponse100}
