import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';

async function bootstrap() {
  const app = await NestFactory.create(AppModule);
  const port: number = +process.env.PORT || 3003; // + is a shortcut for parseInt
  await app.listen(port);

  
  console.info(`👋\nWelcome to the server. \nVisit ${await app.getUrl()}/graphql`); //apollo playground
}
bootstrap();
