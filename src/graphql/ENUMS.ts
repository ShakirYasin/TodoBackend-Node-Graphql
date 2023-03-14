import { enumType } from "nexus";

export const GENDER = enumType({
    name: "GENDER",
    members: ['MALE', 'FEMALE'],
    description: "Gender for the registered User"
})

export const ROLE = enumType({
    name: "ROLE",
    members: ['ADMIN', 'USER'],
    description: "ROLE for the registered User"
})

export default {
    GENDER,
    ROLE
}
