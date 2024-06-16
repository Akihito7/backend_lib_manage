import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { BooksModule } from './modules/books/books.module';
import { LoansController } from './modules/loans/loans.controller';
import { LoansService } from './modules/loans/loans.service';
import { LoansModule } from './modules/loans/loans.module';

import { PrismaModule } from './modules/prisma/prisma.module';
import { AuthModule } from './modules/auth/auth.module';
import { AuthController } from './modules/auth/auth.controller';
import { UsersModule } from './modules/users/users.module';
import { UsersController } from './modules/users/users.controller';


@Module({
  imports: [UsersModule, BooksModule, LoansModule, AuthModule, PrismaModule],
  controllers: [AppController, UsersController, LoansController, AuthController],
  providers: [AppService, LoansService],
})
export class AppModule {}
