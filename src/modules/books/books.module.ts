import { Module } from '@nestjs/common';
import { BooksService } from './books.service';
import { BooksController } from './books.controller';
import { PrismaService } from '../prisma/prisma.service';
import { PrismaModule } from '../prisma/prisma.module';

@Module({
  imports : [PrismaModule],
  providers: [BooksService],
  controllers: [BooksController],
})
export class BooksModule {}
