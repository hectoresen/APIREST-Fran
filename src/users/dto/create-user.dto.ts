import { IsEmail, IsNotEmpty } from "class-validator"
import { UserRoles } from "../entities/user.entity"

export class CreateUserDto {
    @IsNotEmpty({
        message: 'El email es requerido'
    })
    @IsEmail(
        {},
        {
            message: 'El email no es valido'
        })
    email: string

    @IsNotEmpty({
        message: 'El nombre de usuario es requerido'
    })
    username: string

    @IsNotEmpty({
        message: 'La contraseña es requerido'
    })
    password: string

    @IsNotEmpty({
        message: 'La altura es requerido'
    })
    height: string

    @IsNotEmpty({
        message: 'El rol es requerido'
    })
    roles?: UserRoles

}
