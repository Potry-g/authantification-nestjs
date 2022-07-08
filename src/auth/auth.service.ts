import { ForbiddenException, Injectable } from "@nestjs/common";
import { PrismaService } from "src/prisma/prisma.service";
import { AuthLoginDto, AuthRegisterDto } from "./dto";
import * as argon from "argon2";
import { PrismaClientKnownRequestError } from "@prisma/client/runtime";

@Injectable()
export class AuthService{
    constructor(private prisma: PrismaService) {

    }

    async register(dto: AuthRegisterDto){
        const hash = await argon.hash(dto.password);

        try{
            const user = await this.prisma.user.create({
                data: {
                    email: dto.email,
                    name: dto.name,
                    password: hash
                }
            });
            user.password = dto.password;
            return user;
        }
        catch(error){
            if(error instanceof PrismaClientKnownRequestError){
                if(error.code === "P2002"){
                    throw new ForbiddenException("Email is already used.");
                }
            }
            throw error;
        }
    }

    async login(dto: AuthLoginDto){
        const user = await this.prisma.user.findFirst({
            where:{
                 email: dto.email
                }
            });

        if(!user){
            throw new ForbiddenException("Incorrect credentials.");
        }

        const pass_match = await argon.verify(user.password, dto.password);

        if(!pass_match){
            throw new ForbiddenException("Incorrect Password.");
        }
        user.password = dto.password;
        return user;
    }
}