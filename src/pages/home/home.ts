import { CanastaPage } from './../canasta/canasta';
import { CategoriaPage } from './../categoria/categoria';
import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';

@Component({
  selector: 'page-home',
  templateUrl: 'home.html'
})
export class HomePage  {
tab1 : CategoriaPage;
tab2 : CanastaPage;
  constructor(public navCtrl: NavController ) {

  }


}
