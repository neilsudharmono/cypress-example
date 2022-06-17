import { SchemaCollection, combineSchemas, bind } from "@cypress/schema-tools";
// Import new schemas below, and include in combineSchemas in export statement
import { productVersions } from './products-response'

import { productInclusionVersions } from './products-inclusion'

import {projectVersions} from './projectlist-reponse'

// export statement - allows usage of the schema in validation tests
export const schemas: SchemaCollection = combineSchemas(productVersions,productInclusionVersions, projectVersions)
export const api = bind({ schemas })