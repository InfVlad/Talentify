import { IsString, IsInt, IsNotEmpty, IsEnum, IsDate } from "class-validator";
import { Type } from "class-transformer";
import { PrismaClient } from "@prisma/client"; 
import { OfferStatus } from '../enums/offer.enum'
import { ApplicationStatus } from '../enums/application.enum';  

const prisma = new PrismaClient(); 

export class CreateOfferDto {
  @IsInt()
  id: number;

  @IsString()
  @IsNotEmpty()
  title: string;

  @IsString()
  @IsNotEmpty()
  description: string;

  @IsInt()
  ownerId: number;

  @IsString()
  @IsNotEmpty()
  salary: string;

  @IsString()
  @IsNotEmpty()
  requirements: string;

  @IsString()
  @IsNotEmpty()
  location: string;

  @IsString()
  @IsNotEmpty()
  modality: string;

  @IsString()
  @IsNotEmpty()
  contractType: string;

  @IsString()
  @IsNotEmpty()
  workDay: string;

  @IsString()
  @IsNotEmpty()
  companyName: string;

  @IsString()
  @IsNotEmpty()
  companyDescription: string;

  @IsEnum(OfferStatus)
  @IsNotEmpty()
  status: OfferStatus;

  @Type(() => Date)
  @IsDate()
  creationDate: Date;

//   @IsOptional()
  applications: {
      userId: number;
      status: ApplicationStatus;
  }[]; 

  constructor(
    id: number, title: string, description: string, ownerId: number, salary: string, requirements: string, location: string, modality: string, contractType: string, workDay: string, companyName: string, companyDescription: string, status: OfferStatus, creationDate: Date, applications: { userId: number, status: ApplicationStatus }[]) {
    this.id = id;
    this.title = title;
    this.description = description;
    this.ownerId = ownerId;
    this.salary = salary;
    this.requirements = requirements;
    this.location = location;
    this.modality = modality;
    this.contractType = contractType;
    this.workDay = workDay;
    this.companyName = companyName;
    this.companyDescription = companyDescription;
    this.status = status;
    this.creationDate = creationDate;
    this.applications = applications;
  }
}
