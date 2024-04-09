import { Module } from "@nestjs/common";
import { AuthService } from "./auth.service";
import { UserService } from "../user/user.service";
import { AuthController } from "./auth.controller";
import { LocalStrategy } from "./strategies/local.strategy";
import { JwtStrategy } from "./strategies/jwt.strategy";
import { UserModule } from "src/user/user.module";
import { PassportModule } from "@nestjs/passport";
import { JwtModule } from "@nestjs/jwt";
import "dotenv/config";

@Module({
    imports: [
        JwtModule.register({
            secret: process.env.JWT_SECRET,
            signOptions: { expiresIn: "3600s" }
        })
    ],
    providers: [AuthService, LocalStrategy, JwtStrategy, UserService],
    controllers: [AuthController]
})
export class AuthModule {}
