//import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

/*
  Generated class for the MessageProvider provider.

  See https://angular.io/guide/dependency-injection for more info on providers
  and Angular DI.
*/
//needs this tag to be used in components
@Injectable()
export class MessageProvider {

 constructor() {

    console.log('Hello MessageProvider Provider');
  }

  messages: string[] = [];

  add(message: string) {
    this.messages.push(message);
  }
 
}
