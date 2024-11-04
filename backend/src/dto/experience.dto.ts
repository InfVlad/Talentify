import { IsString, IsNotEmpty, IsInt, IsDate, IsOptional } from 'class-validator'
import { Type } from 'class-transformer'

export class CreateExperienceDto {

    @IsInt()
    id: number

    @IsInt()
    profileId: number

    @IsString()
    @IsNotEmpty()
    company_name: string

    @IsString()
    @IsNotEmpty()
    position: string

    @Type(() => Date)
    @IsDate({ message:'must be a format ISO8601: 2022-03-06T11:00:00.000Z'})
    start_date: Date;

    @Type(() => Date)
    @IsDate({ message:'must be a format ISO8601: 2022-03-06T11:00:00.000Z'})
    @IsOptional()
    end_date?: Date

    constructor(id: number, profileId: number, company_name: string, position: string, start_date: Date, end_date: Date) {
        this.id = id
        this.profileId = profileId
        this.company_name = company_name
        this.position = position
        this.start_date = start_date
        this.end_date = end_date
    }
}
