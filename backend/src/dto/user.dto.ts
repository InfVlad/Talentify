import { IsEmail, IsOptional, IsString, IsEnum, IsInt } from 'class-validator';
// import { Roles } from '@prisma/client';
import { Roles } from '../enums/roles.enum'

export class UserDto {
    @IsOptional()  
    @IsInt()
    id: number;

    @IsString()
    fullName: string;

    @IsEmail()
    email: string;

    @IsOptional()
    password?: string;

    @IsEnum(Roles)
    role: Roles;

    @IsOptional()
    @IsInt()
    companyId?: number;

    @IsOptional()
    profile?: any;

    @IsOptional()
    applications?: any[];

    constructor(id: number, fullName: string, email: string, role: Roles, companyId?: number, password?: string) {
        this.id = id;
        this.fullName = fullName;
        this.email = email;
        this.role = role;
        this.companyId = companyId;
        this.password = password;
    }
}
