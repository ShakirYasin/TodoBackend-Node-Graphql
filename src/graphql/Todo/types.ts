import {objectType} from "nexus"
import { GENDER, ROLE } from "../ENUMS"
import { DateScalar } from "../SCALARS"

const Todo = objectType({
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


export {
    Todo
}