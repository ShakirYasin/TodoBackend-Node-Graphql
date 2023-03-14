import {objectType} from "nexus"
import { GENDER, ROLE } from "../ENUMS"
import { DateScalar } from "../SCALARS"

const User = objectType({
    name: 'User',
    definition(t) {
      t.string('id')
      t.nullable.string('name')
      t.string('email')
      t.nullable.field('emailVerified', { type: DateScalar })
      t.nullable.string('image')
      t.field('gender', { type: GENDER })
      t.field('role', { type: ROLE })
      t.nullable.field('dob', { type: DateScalar })
      t.nullable.string('phone')
      t.nullable.boolean('active')
      t.nullable.string('password')
      t.nullable.field('createdAt', { type: DateScalar })
      t.field('updatedAt', { type: DateScalar })
      t.nullable.string('passwordResetCode')
      t.nullable.string('verificationCode')
    },
  })


export {
    User
}