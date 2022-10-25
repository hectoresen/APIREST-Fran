import {
    Entity,
    PrimaryGeneratedColumn,
    Column,
    CreateDateColumn,
    UpdateDateColumn,
    DeleteDateColumn
} from "typeorm"

export enum UserRoles {
    admin = 'admin',
    instructor = 'instructor',
    user = 'user'
}

@Entity('user')
export default class UserEntity {
    @PrimaryGeneratedColumn('uuid')
    id: string

    @Column({unique: true})
    email: string

    @Column({ unique: true, nullable: false})
    username: string

    @Column({nullable: false})
    password: string

    @Column({nullable: false})
    height: string

    @Column({
        type: 'simple-array',
        default: UserRoles.user
    })
    roles: UserRoles[]

    @CreateDateColumn()
    createdAt: Date

    @UpdateDateColumn()
    updatedAt: Date

    @DeleteDateColumn()
    deletedAt: Date
}
