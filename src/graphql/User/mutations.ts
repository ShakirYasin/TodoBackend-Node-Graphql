import {extendType, nonNull, stringArg, arg} from "nexus"
import {createUser, login} from "./service"



export const UserMutations = extendType({
    type: "Mutation",
        definition(t) {
        t.nonNull.field('CreateUser', {
            type: "User",
            args: {
                name: nonNull(stringArg()),
                email: nonNull(arg({type: "Email"})),
                password: nonNull(stringArg()),
            },
            resolve: async (_, args) => {
                const data = await createUser(args);
                
                return data ?? {}
            }
        })

        t.nonNull.field('LoginUser', {
            type: "User",
            args: {
                email: nonNull(arg({type: "Email"})),
                password: nonNull(stringArg()),
            },
            resolve: async (_, args) => {
                const data = await login(args);
                return data ?? {}
            },
        })
    },
})