import { IsInt, IsString, IsNotEmpty, IsDate } from "class-validator";
import { Type } from "class-transformer";
//     @@map("studies")
//   }

class CreateStudiesDto {
  @IsInt()
  id: number; // @id @default(autoincrement())

  // @IsNotEmpty()
  // profile: number // @relation(fields: [profileId], references: [id])

  @IsInt()
  @IsNotEmpty()
  profileId: number;

  @IsString()
  @IsNotEmpty()
  institution_name: string;

  @IsString()
  @IsNotEmpty()
  degree: string;

  @Type(() => Date)
  @IsDate()
  @IsNotEmpty()
  graduation_date: Date; // ?

  constructor(
    id: number,
    //profile: number,
    profileId: number,
    institution_name: string,
    degree: string,
    graduation_date: Date
  ) {
    this.id = id;
    //this.profile = profile;
    this.profileId = profileId;
    this.institution_name = institution_name;
    this.degree = degree;
    this.graduation_date = graduation_date;
  }
}

export default CreateStudiesDto;
