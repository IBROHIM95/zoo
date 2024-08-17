import { Injectable } from '@nestjs/common';

@Injectable()
export class DogService {

    public getHello(): string {
        return 'wow'
      }
  
  
      public introduce(): string {
        return 'my name is rokki'
      }
  
      public modifyDetail(): string {
        return 'Succesfully modified'
      }
}
