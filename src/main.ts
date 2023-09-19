import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';
import { ValidationPipe } from '@nestjs/common';

async function bootstrap() {
  const app = await NestFactory.create(AppModule);
  app.useGlobalPipes(
    // Validation Pipe để validate trường trong form
    new ValidationPipe({
      whitelist: true, // nếu form truyền thêm trường ngoài dto thì sẽ loại các trường đó ra khi nhận
    }),
  );
  await app.listen(3333);
}

bootstrap();
