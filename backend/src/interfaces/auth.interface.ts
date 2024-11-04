// import { RoleType } from "../dto/user.dto"
import { Roles } from "../enums/roles.enum";

export interface PayloadToken {
    role: Roles,
    sub: string
}
