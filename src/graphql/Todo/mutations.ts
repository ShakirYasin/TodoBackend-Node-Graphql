import { GraphQLError } from "graphql";
import {extendType, nonNull, stringArg, arg, booleanArg, nullable} from "nexus"
import { GraphQLContext } from "../../main";
import {createTodo, deleteTodo, updateTodo, completeTodo} from "./service"
import { Todo } from "./types";

export const TodoMutations = extendType({
    type: "Mutation",
        definition(t) {
        t.nonNull.field('CreateTodo', {
            type: "Todo",
            args: {
                title: nullable(stringArg()),
                description: nullable(stringArg()),
            },
            resolve: async (_, args, ctx: GraphQLContext) => {
                
                if(!ctx.user?.id) {
                    throw new GraphQLError("Please Authenticate to continue...")
                }

                const data = await createTodo(args);
                return data ?? {}
            }
        })

        t.nonNull.field('UpdateTodo', {
            type: "Todo",
            args: {
                id: nonNull(stringArg()),
                title: nullable(stringArg()),
                description: nullable(stringArg()),
            },
            resolve: async (_, args, ctx: GraphQLContext) => {
                                
                if(!ctx.user?.id) {
                    throw new GraphQLError("Please Authenticate to continue...")
                }
                const data = await updateTodo(args);
                return data ?? {}
            },
        })

        // t.nonNull.field('UpdateTodo', {
        //     type: "Todo",
        //     args: {
        //         id: nonNull(stringArg()),
        //         todo: nonNull(arg({type: 'Todo'}))
        //     },
        //     resolve: async (_, args) => {
        //         const data = await updateTodo(args);
        
        //         return data ?? {}
        //     },
        // })

        t.nonNull.field('CompleteTodo', {
            type: "Todo",
            args: {
                id: nonNull(stringArg()),
                completed: nonNull(booleanArg()),
            },
            resolve: async (_, args, ctx: GraphQLContext) => {
               
                if(!ctx.user?.id) {
                    throw new GraphQLError("Please Authenticate to continue...")
                }
                const data = await completeTodo(args);

                return data ?? {}
            },
        })

        t.nonNull.field('DeleteTodo', {
            type: "Todo",
            args: {
                id: nonNull(stringArg()),
            },
            resolve: async (_, args, ctx: GraphQLContext) => {
                                
                if(!ctx.user?.id) {
                    throw new GraphQLError("Please Authenticate to continue...")
                }
                const data = await deleteTodo(args);

                return data ?? {}
            },
        })
    },
})