import { Injectable } from '@nestjs/common';

@Injectable()
export class AppService {
  public getHello(): string {
    return 'Hello World! zxc';
  }

  public getDetail(): string {
    return 'Here zoo details';
  }
}
