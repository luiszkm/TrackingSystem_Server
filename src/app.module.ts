import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { RoutesModule } from './routes/routes.module';
import { PrismaModule } from './prisma/prisma.module';
import { ConfigModule } from '@nestjs/config';
import { MapsModule } from './maps/maps.module';
import { BullModule } from '@nestjs/bull';

@Module({
  imports: [
    ConfigModule.forRoot({isGlobal:true}),
    RoutesModule,
    BullModule.forRoot({
      redis: {
        host: 'redis',
        port: 6379,
      },
    }),
     PrismaModule, 
     MapsModule,],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
