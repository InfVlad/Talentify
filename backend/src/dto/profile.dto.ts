import { IsString, IsInt, IsNotEmpty } from "class-validator";

export class CreateProfileDto {
    @IsInt()
    id: number

    @IsInt()
    @IsNotEmpty()
    userId: number

    @IsString()
    @IsNotEmpty()
    about: string

    @IsString()
    @IsNotEmpty()
    address: string

    @IsString()
    @IsNotEmpty()
    phone: string

    @IsString()
    @IsNotEmpty()
    resume: string


    constructor(id: number, userId: number, about: string, phone: string, resume: string, address: string) {
        this.id = id;
        this.userId = userId;
        this.about = about;
        this.address = address;
        this.phone = phone;
        this.resume = resume;
        this.address = address;
    }
}
