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
    this.conversation=this.message.messages;
  }


}
