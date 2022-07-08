import { PrismaService } from "src/prisma/prisma.service";
import { AuthLoginDto, AuthRegisterDto } from "./dto";
export declare class AuthService {
    private prisma;
    constructor(prisma: PrismaService);
    register(dto: AuthRegisterDto): Promise<import(".prisma/client").User>;
    login(dto: AuthLoginDto): Promise<import(".prisma/client").User>;
}
