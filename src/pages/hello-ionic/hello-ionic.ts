import { Component, OnInit } from '@angular/core';
import { MessageProvider } from '../../providers/message/message';

@Component({
  selector: 'page-hello-ionic',
  templateUrl: 'hello-ionic.html'
})
export class HelloIonicPage implements OnInit{
  constructor(public message: MessageProvider) {
    
  }

  conversation:  string[];

  ngOnInit() { 
    this.conversation=this.message.messages;
  }

  count: number = 1;

  addMessage(){
    this.message.add("test "+this.count);
    this.count++;
    this.conversation=this.message.messages; //this doesn't work as one might expect, the data binding does not instantly reflect in the ui when accessing this service variable. Not 100% sure why, think probably async behavior, might need to use observables
  }

  testCount(){
    this.count++;
  }


}
