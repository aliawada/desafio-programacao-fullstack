import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { ConfigModule } from '@nestjs/config';
import { TransactionModule } from './transaction/transaction.module';

@Module({
  imports: [ConfigModule, ConfigModule.forRoot({ envFilePath: ['.env'] }), TransactionModule],
  controllers: [AppController],
  providers: [AppService],

})
export class AppModule { }
