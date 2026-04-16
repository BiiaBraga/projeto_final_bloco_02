//importações
import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';
import { ValidationPipe } from '@nestjs/common';

//função de inicialização
async function bootstrap() {
  const app = await NestFactory.create(AppModule);
  process.env.TZ = '-03:00';  // configuração do timezone
  app.useGlobalPipes(new ValidationPipe);  //configuração de validação de dados de entrada
  app.enableCors();  //configuração de cors para permitir requisições de outras origens
  await app.listen(process.env.PORT ?? 3000);  //execução da aplicação nest, configuração da porta do servidor
}
bootstrap();
