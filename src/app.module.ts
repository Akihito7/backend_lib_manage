import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { AuthorsModule } from './authors/authors.module';
import { AuthorsModule } from './src/modules/authors/authors.module';
import { AuthorsModule } from './modules/authors/authors.module';
import { AuthorsxController } from './modules/authorsx/authorsx.controller';
import { BooksModule } from './modules/books/books.module';
import { LoansController } from './modules/loans/loans.controller';
import { LoansService } from './modules/loans/loans.service';
import { LoansModule } from './modules/loans/loans.module';
import { AuthModule } from './modules/auth/auth.module';
import { AuthController } from './modules/auth/auth.controller';
import { LoansModule } from './modules/loans/loans.module';

@Module({
  imports: [AuthorsModule, BooksModule, LoansModule, AuthModule],
  controllers: [AppController, AuthorsxController, LoansController, AuthController],
  providers: [AppService, LoansService],
})
export class AppModule {}
