import { AuthService } from "./auth.service";
import { AuthLoginDto, AuthRegisterDto } from "./dto";
export declare class AuthController {
    private authservice;
    constructor(authservice: AuthService);
    register(dto: AuthRegisterDto): Promise<import(".prisma/client").User>;
    login(dto: AuthLoginDto): Promise<import(".prisma/client").User>;
}
