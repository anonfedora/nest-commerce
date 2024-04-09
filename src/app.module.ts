import { Module } from "@nestjs/common";
import { MongooseModule } from "@nestjs/mongoose";
import { AppController } from "./app.controller";
import { AppService } from "./app.service";
import { ProductModule } from "./product/product.module";
import { ConfigModule, ConfigService } from "@nestjs/config";
import "dotenv/config";
import { DatabaseModule } from "./database/database.module";

@Module({
    imports: [
        MongooseModule.forRootAsync({
            imports: [ConfigModule],
            inject: [ConfigService],
            useFactory: async (config: ConfigService) => ({
                uri: config.get<string>("MONGO_URI") // Loaded from .ENV
            })
        }),
        ProductModule,
        DatabaseModule
    ],
    controllers: [AppController],
    providers: [AppService]
})
export class AppModule {}
