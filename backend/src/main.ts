import { NestFactory } from "@nestjs/core";
import { ValidationPipe } from "@nestjs/common";
import { AppModule } from "./app.module";
import { GlobalExceptionFilter } from "./common/global-exception.filter";

async function bootstrap() {
  const app = await NestFactory.create(AppModule);

  app.setGlobalPrefix("api");
  app.useGlobalFilters(new GlobalExceptionFilter());
  app.useGlobalPipes(
    new ValidationPipe({
      whitelist: true,
      transform: true,
      forbidNonWhitelisted: true,
    }),
  );

  const frontendUrl = process.env.FRONTEND_URL ?? "http://localhost:3700";
  const adminUrl = process.env.ADMIN_URL ?? "http://localhost:3702";

  app.enableCors({
    origin: [frontendUrl, adminUrl],
    credentials: true,
  });

  const port = Number(process.env.PORT ?? 3701);
  await app.listen(port);
  console.log(`MB Stack API running on http://localhost:${port}/api`);
}

bootstrap();
