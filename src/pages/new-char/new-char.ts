import { Component } from '@angular/core';
import {Character} from '../../character';
import {Storage} from '@ionic/storage';

@Component({
  selector: 'page-new-char',
  templateUrl: 'new-char.html'
})
export class NewCharacterPage {

  //may not need this after swapping to external class (character.ts)
  charName: string = "default name";
  class: string = "default name";
  race: string = "default name";
  charJSON: string = "asdf"

  //newChar: Character = new Character('john','gnome','bard');
  newChar: Character;
  //= {name ='gnome',race ='also gnome', charClass='bard'}

  constructor(private storage: Storage) {

  }
// json ex : { "name":"John", "age":30, "car":null };
  createCharacter(){
    //this is tedious and prone to error, there may be a better way with JSON.stringify({classname})
   // this.charJSON = '{"'+charName+'":"'+this.charName+'",'

   this.newChar = new Character('john','gnome','bard');
   this.charJSON = JSON.stringify(this.newChar);
   console.log(this.charJSON);
   //https://ionicframework.com/docs/storage/
   this.storage.set(this.newChar.name,this.charJSON);

   this.storage.get(this.newChar.name).then((data) => {
    console.log('stored:'+data);
  });
  }


}
