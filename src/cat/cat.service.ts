import { Injectable } from '@nestjs/common';

@Injectable()
export class CatService {
    public getHello(): string {
      return 'Myov'
    }


    public introduce(): string {
      return 'my name is tom'
    }
}
