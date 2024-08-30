import { Body, Controller, Get, Post} from '@nestjs/common';
import { CatsService } from './cats.service';
import { Cat } from './interfaces/cat.interface';


@Controller('cats')
export class CatsController {

    constructor(private catsService: CatsService) {}

    @Post()
    create(@Body() cat: Cat) {
        //console.log(cat)
        return this.catsService.create(cat);
    }
  @Get()
  findAll() {
    return this.catsService.findAll();
  }

}
