import { NestFactory } from "@nestjs/core";
import { AppModule } from "./app.module";
import { SwaggerModule, DocumentBuilder } from "@nestjs/swagger";

async function bootstrap() {
    const app = await NestFactory.create(AppModule);

    // Use DocumentBuilder to create a new Swagger document configuration
    const config = new DocumentBuilder()
        .setTitle("Commerce")
        .setDescription("Commerce API description")
        .setVersion("0.1") 
        .build(); // Build the document

    // Create a Swagger document using the application instance and the document configuration
    const document = SwaggerModule.createDocument(app, config);

    // Setup Swagger module with the application instance and the Swagger document
    SwaggerModule.setup("api", app, document);

    await app.listen(3000);
}
bootstrap();
