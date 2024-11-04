import { IsInt } from 'class-validator'

export class CreateFavoriteDto {

    @IsInt()
    userId: number

    @IsInt()
    offerId: number

    constructor(userId: number, offerId: number) {
        this.userId = userId
        this.offerId = offerId
    }
}
