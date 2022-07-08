import { IsEmail, IsNotEmpty, IsString } from "class-validator";

export class AuthRegisterDto {
    @IsEmail()
    @IsNotEmpty()
    email: string;

    @IsNotEmpty()
    name: string;

    @IsString()
    @IsNotEmpty()
    password: string;
}

export class AuthLoginDto{
    @IsEmail()
    @IsNotEmpty()
    email: string;

    @IsNotEmpty()
    password: string;
}