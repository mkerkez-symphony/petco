import { IsEmail, IsNotEmpty } from 'class-validator';

export class CreateOwnerDto {
  @IsNotEmpty()
  name: string;
  @IsEmail()
  email: string;
}
