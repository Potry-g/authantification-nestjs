import { Body, Controller, Post } from "@nestjs/common";
import { AuthService } from "./auth.service";
import { AuthLoginDto, AuthRegisterDto } from "./dto";

@Controller('auth')
export class AuthController{

    constructor(private authservice: AuthService) {}

    @Post('register')
    register(@Body() dto: AuthRegisterDto){
        return this.authservice.register(dto);
    }

    @Post('login')
    login(@Body() dto: AuthLoginDto){
        return this.authservice.login(dto);
    }

}