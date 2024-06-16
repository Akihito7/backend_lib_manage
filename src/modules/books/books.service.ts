import { Injectable } from '@nestjs/common';
import { PrismaService } from '../prisma/prisma.service';

@Injectable()
export class BooksService {

    constructor(private prismaService: PrismaService) { }

    getManyBooks() {
        return this.prismaService.books.findMany()
    }

    getUniqueBook(id: number) {
        return this.prismaService.books.findUnique({
            where: { id }
        })
    }

    registerNewBook(data){
        return this.prismaService.books.create({
            data
        })
    }

    updateBook(data){
        return this.prismaService.books.update({
            data,
            where : { id : data.id }
        })
    }

    deleteBook(bookId : number){
        return this.prismaService.books.delete({
            where : { id : bookId}
        })
    }
}
