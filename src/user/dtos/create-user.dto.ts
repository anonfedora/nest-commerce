import { ApiProperty } from "@nestjs/swagger";
import { IsNotEmpty, IsNumber, IsString } from "class-validator";

export class CreateUserDTO {
    @ApiProperty({ type: String, example: "anonfedora" })
    @IsNotEmpty()
    @IsString()
    username: string;

    @ApiProperty({ type: String, example: "anonfedora@mail.com" })
    @IsNotEmpty()
    @IsString()
    email: string;
    
    @ApiProperty({type: String, example: "password"})
    @IsNotEmpty()
    password: string;
    
    @ApiProperty({example: "admin"})
    roles: string[];
}
