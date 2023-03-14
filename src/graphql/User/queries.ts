import {arg, extendType, nonNull, stringArg} from "nexus"
import {getUser} from "./service"

export const UserQueries = extendType({
    type: "Query",
        definition(t) {
        t.nonNull.field('GetUser', {
            type: "User",
            args: {id: nonNull(stringArg())},
            resolve: async (_, {id}) => {
                const data = await getUser(id);

                return data ?? {}
            },
        })
    },
})