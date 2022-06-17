import { ObjectSchema, VersionedSchema, versionSchemas, SchemaCollection, extend } from '@cypress/schema-tools'

const imageResponse100: ObjectSchema = {
    version: {
      major: 1,
      minor: 0,
      patch: 0,
    },
    schema: {
      type: 'object',
      title: 'Image',
      description: 'Physical image of product',
      properties: {
        large: {
            type: ['string',null],
          description: 'large URL',
        },
        medium: {
            type: ['string',null],
          description: 'medium URL',
        },
        small: {
            type: ['string',null],
            description: 'small URL',
        },
        url: {
            type: ['string',null],
            description: 'primary URL',
        },
        name: {
            type: ['string',null],
            description: 'image name',
        },
        size: {
            type: ['string',null],
            description: 'image size',
        },
      },
      additionalProperties: false,
    },
    example: {
        large: "https://clipspecassetsuat.blob.core.windows.netSingle Icon",
        medium: "https://clipspecassetsuat.blob.core.windows.netSingle Icon",
        small: "https://clipspecassetsuat.blob.core.windows.netSingle Icon",
        url: "Single Icon",
        name: null,
        size: 0
    },
  }

const consumerIconResponse100: ObjectSchema = {
    version: {
        major: 1,
        minor: 0,
        patch: 0,
    },
    schema: {
        type: 'object',
        title: 'Image',
        description: 'Physical image of product',
        properties: {
        large: {
            type: ['string',null],
            description: 'large URL',
        },
        medium: {
            type: ['string',null],
            description: 'medium URL',
        },
        small: {
            type: ['string',null],
            description: 'small URL',
        },
        url: {
            type: ['string',null],
            description: 'primary URL',
        },
        name: {
            type: ['string',null],
            description: 'image name',
        },
        size: {
            type: ['string',null],
            description: 'image size',
        },
        },
        additionalProperties: false,
    },
    example: {
        large: "https://clipspecassetsuat.blob.core.windows.netSingle Icon",
        medium: "https://clipspecassetsuat.blob.core.windows.netSingle Icon",
        small: "https://clipspecassetsuat.blob.core.windows.netSingle Icon",
        url: "Single Icon",
        name: null,
        size: 0
    },
}

const tradeIconResponse100: ObjectSchema = {
    version: {
        major: 1,
        minor: 0,
        patch: 0,
    },
    schema: {
        type: 'object',
        title: 'Image',
        description: 'Physical image of product',
        properties: {
        large: {
            type: ['string',null],
            description: 'large URL',
        },
        medium: {
            type: ['string',null],
            description: 'medium URL',
        },
        small: {
            type: ['string',null],
            description: 'small URL',
        },
        url: {
            type: ['string',null],
            description: 'primary URL',
        },
        name: {
            type: ['string',null],
            description: 'image name',
        },
        size: {
            type: ['string',null],
            description: 'image size',
        },
        },
        additionalProperties: false,
    },
    example: {
        large: "https://clipspecassetsuat.blob.core.windows.netSingle Icon",
        medium: "https://clipspecassetsuat.blob.core.windows.netSingle Icon",
        small: "https://clipspecassetsuat.blob.core.windows.netSingle Icon",
        url: "Single Icon",
        name: null,
        size: 0
    },
}

export {imageResponse100,consumerIconResponse100,tradeIconResponse100}
