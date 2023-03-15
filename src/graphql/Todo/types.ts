import {inputObjectType, objectType} from "nexus"
import { GENDER, ROLE } from "../ENUMS"
import { DateScalar } from "../SCALARS"

export const Todo = objectType({
    name: 'Todo',
    definition(t) {
      t.string('id')
      t.nullable.string('title')
      t.nullable.string('description')
      t.nullable.boolean('completed')
      t.nullable.field('createdAt', { type: DateScalar })
      t.field('updatedAt', { type: DateScalar })
    },
  })
export const TodoInputType = inputObjectType({
    name: 'TodoInputType',
    definition(t) {
      t.nullable.string('title')
      t.nullable.string('description')
      t.nullable.boolean('completed')
    },
  })


export default {
    Todo,
    TodoInputType
}