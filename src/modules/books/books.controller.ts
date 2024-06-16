import { Body, Controller, Delete, Get, Param, ParseIntPipe, Post, Put } from '@nestjs/common';
import { BooksService } from './books.service';

@Controller('books')
export class BooksController {
    constructor(private booksService : BooksService){}

    @Get()
    getManyBooks(){
        return this.booksService.getManyBooks()
    }

    @Get("/:id")
    getUniqueBook(@Param("id", new ParseIntPipe()) id){
        return this.booksService.getUniqueBook(id)
    }

    @Post()
    registerNewBook(@Body() body){
        return this.booksService.registerNewBook(body)
    }

    @Put()
    updateBook(@Body() body){
        return this.booksService.updateBook(body)
    }

    @Delete("/:id")
    deleteBook(@Param("id", new ParseIntPipe()) id){
        return this.booksService.deleteBook(id)
    }


}
