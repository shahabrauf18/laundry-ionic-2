import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';


@Component ({
    templateUrl: 'profile.html',
    selector: 'profile'
})

export class ProfileComponent{
    

     
    
     constructor(private navCtrl: NavController){
    
     }

    save(){

        console.log("save clicked");
    }
}