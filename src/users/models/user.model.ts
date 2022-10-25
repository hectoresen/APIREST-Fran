import {AggregateRoot} from '@nestjs/cqrs'

interface UserAttributes {
    id: string
    email: string
    username: string
    height: string
    roles: string[]
    avatar?: string
}

export default class User extends AggregateRoot {
    constructor(
        private readonly id: string,
        readonly email: string,
        readonly username: string,
        readonly password: string,
        readonly height: string,
        readonly roles: string[],
        readonly avatar?:string
    ) {
        super()
    }

    attributes(): UserAttributes {
        const {id, email, username, height, roles, avatar} = this

        return {
            id,
            email,
            username,
            height,
            roles,
            avatar
        }
    }
}