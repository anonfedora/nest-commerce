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
    
    @ApiProperty()
    @IsNotEmpty()
    password: string;
    
    @ApiProperty()
    roles: string[];
}
