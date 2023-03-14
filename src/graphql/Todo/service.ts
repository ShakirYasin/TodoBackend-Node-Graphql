import prisma from "../../lib/prisma"
import { GraphQLError } from "graphql"
import { signJwt } from "../../utils/jwt.utils"
import { comparePassword, hashPassword } from "../../utils/auth.utils"
import { NexusGenAllTypes } from "../../../nexus-typegen"


export const getTodos = async () => {

    try {
        const todos = await prisma.todo.findMany()
        
        return todos

    } catch (error) {   
        throw new GraphQLError('Todos not Found.!!')
    }
    
}


export const getSingleTodo = async (id: string) => {

    const todo = await prisma.todo.findFirst({where: {id}})

    if(!todo) {
        throw new GraphQLError('Todo not Found.!!')
    }
    
    return todo
}

export const createTodo = async ({title, description}: {title?: string | null, description?: string | null}) => {
    try {
        const todo = await prisma.todo.create({data: {
            title: title || undefined,
            description: description || undefined,
        }})

        return todo
        
    } catch (error) {
        throw new GraphQLError('Some Error Occurred. Idiot!!')
    }
}

export const completeTodo = async ({id, completed}: {id: string, completed: boolean}) => {

    const todo = await prisma.todo.findFirst({where: { id }})
    
    if(!todo) {
        throw new GraphQLError(`Couldn't find todo of id ${id}!!`)
    }

    const completedTodo = await prisma.todo.update({where: { id: todo.id }, data: {completed}})
    
    return completedTodo

}

export const deleteTodo = async ({id}: {id: string}) => {

    const todo = await prisma.todo.findFirst({where: { id }})
    
    if(!todo) {
        throw new GraphQLError(`Couldn't find todo of id ${id}!!`)
    }

    const deletedTodo = await prisma.todo.delete({where: { id: todo.id }})

    return deletedTodo
}


export const updateTodo = async ({id, title, description}: {id: string, title?: string | null, description?: string | null}) => {

    const existingTodo = await prisma.todo.findFirst({where: { id }})
    
    if(!existingTodo) {
        throw new GraphQLError(`Couldn't find todo of id ${id}!!`)
    }

    const updatedTodo = await prisma.todo.update({where: { id: existingTodo.id, }, data: {
        title: title || undefined,
        description: description || undefined,
    }})
    
    return updatedTodo
}

// export const updateTodo = async ({id, todo}: {id: string, todo: NexusGenAllTypes['Todo']}) => {

//     const existingTodo = await prisma.todo.findFirst({where: { id }})
    
//     if(!existingTodo) {
//         throw new GraphQLError(`Couldn't find todo of id ${id}!!`)
//     }

//     const updatedTodo = await prisma.todo.update({where: { id: existingTodo.id }, data: {
//         title: todo.title,
//         description: todo.description,
//     }})
    
//     return updatedTodo
// }