import { ApiProperty } from "@nestjs/swagger";
import { IsNotEmpty, IsNumber, IsString } from "class-validator";

export class ItemDTO {
    @ApiProperty()
    productId: string;
    
    @ApiProperty()
    name: string;
    
    @ApiProperty()
    quantity: number;
    
    @ApiProperty()
    price: number;
}
