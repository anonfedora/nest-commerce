import { Module } from "@nestjs/common";
import { MongooseModule } from "@nestjs/mongoose";
import { AppController } from "./app.controller";
import { AppService } from "./app.service";
import { ProductModule } from "./product/product.module";
import { CartModule } from "./cart/cart.module";
import { UserModule } from './user/user.module';
import { AuthModule } from './auth/auth.module';

import "dotenv/config";

@Module({
    imports: [
        MongooseModule.forRoot(process.env.MONGO_URI),
        ProductModule,
        CartModule, UserModule, AuthModule
    ],
    controllers: [AppController],
    providers: [AppService]
})
export class AppModule {}
