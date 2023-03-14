import { scalarType } from "nexus"
import { DateTimeResolver, EmailAddressResolver } from "graphql-scalars"

export const DateScalar = scalarType({
    name: 'DateTime',
    description: 'Date custom scalar type',
    parseValue: DateTimeResolver.parseValue,
    serialize: DateTimeResolver.serialize,
    parseLiteral: DateTimeResolver.parseLiteral
  })

export const EmailScalar = scalarType({
    name: 'Email',
    description: 'Date custom scalar type',
    parseValue: EmailAddressResolver.parseValue,
    serialize: EmailAddressResolver.serialize,
    parseLiteral: EmailAddressResolver.parseLiteral
  })

export default {
    DateScalar,
    EmailScalar
}