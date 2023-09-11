import { Injectable } from '@nestjs/common';
const fs = require('fs');

@Injectable()
export class AppService {
  async getHello() {
    const jsonString = await fs.readFileSync('./data.json', 'utf-8');
    const data = JSON.parse(jsonString);
    return data;
  }
}
