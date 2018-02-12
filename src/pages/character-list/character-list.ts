import { Component } from '@angular/core';
import {Storage} from '@ionic/storage';

@Component({
  selector: 'page-character-list',
  templateUrl: 'character-list.html'
})
export class CharacterListPage {


  constructor(private storage: Storage) {

    //just prints to console for now
    storage.forEach( (value, key, index) => {
      console.log("This is the value"+ value)
      console.log("from the key"+ key)
      console.log("Index is"+index)
    })

  }
// json ex : { "name":"John", "age":30, "car":null };



}
