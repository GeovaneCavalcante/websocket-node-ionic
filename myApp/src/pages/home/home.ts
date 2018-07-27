import { ListPage } from './../list/list';
import { NavController } from 'ionic-angular';
import { Component } from '@angular/core';

import { Socket } from 'ng-socket-io';

@Component({
  selector: 'page-home',
  templateUrl: 'home.html'
})
export class HomePage {
  
  username: string

  constructor(private socket: Socket, public  navCtrl :NavController) { 
   
  }

  conect(){
    console.log(this.username)
    this.socket.connect()
    this.socket.emit('chat', this.username)
    this.navCtrl.setRoot(ListPage)
  }

}
