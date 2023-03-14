import {arg, extendType, nonNull, stringArg} from "nexus"
import {getTodos, getSingleTodo} from "./service"

export const TodoQueries = extendType({
    type: "Query",
        definition(t) {
        t.nonNull.list.field('GetTodos', {
            type: "Todo",
            resolve: async () => {
                const data = await getTodos();

                return data ?? {}
            },
        })
        t.nonNull.field('GetSingleTodo', {
            type: "Todo",
            args: {id: nonNull(stringArg())},
            resolve: async (_, {id}) => {
                const data = await getSingleTodo(id);

                return data ?? {}
            },
        })
    },
})