import { IsInt, IsEnum, IsOptional } from 'class-validator';
import { ApplicationStatus } from '../enums/application.enum'

export class CreateApplicationDto {
  @IsInt()
  userId: number;

  @IsInt()
  offerId: number;

  @IsEnum(ApplicationStatus)
  status: ApplicationStatus;

  constructor(userId: number, offerId: number, status: ApplicationStatus) {
    this.userId = userId;
    this.offerId = offerId;
    this.status = status;
  }
}
