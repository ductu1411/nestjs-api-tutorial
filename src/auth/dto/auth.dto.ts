import { IsEmail, IsNotEmpty, IsString } from 'class-validator';

// Dùng class để định dạng kiểu request cần phải validate
export class AuthDto {
  @IsEmail()
  @IsNotEmpty()
  email: string;

  @IsString()
  @IsNotEmpty()
  password: string;
}
