import { makeSchema } from 'nexus'
import { join } from 'path'
import ENUMS from './graphql/ENUMS'
import SCALARS from './graphql/SCALARS'
import User from "./graphql/User/index"
import Todo from "./graphql/Todo/index"



export const schema = makeSchema({
  types: [User, ENUMS, SCALARS, Todo],
  outputs: {
    typegen: join(__dirname, '..', 'nexus-typegen.ts'), // 2
    schema: join(__dirname, '..', 'schema.graphql'), // 3
  },
})

// export const schema = builder.toSchema()
