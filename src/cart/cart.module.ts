import { Module } from "@nestjs/common";
import { CartService } from "./cart.service";
import { CartController } from "./cart.controller";
import { CartSchema } from "./schemas/cart.schema";
import { MongooseModule } from "@nestjs/mongoose";

@Module({
    imports: [
        MongooseModule.forFeature([{ name: "Cart", schema: CartSchema }])
    ],
    providers: [CartService],
    controllers: [CartController]
})
export class CartModule {}
