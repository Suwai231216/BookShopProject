import { Component, OnInit, OnDestroy } from '@angular/core';
import { Subscription } from 'rxjs';
import {AlertService} from '../alert.services'

@Component({
  selector: 'alert',
  templateUrl: './alert.component.html'
})
export class AlertComponent implements OnInit {

  //private subscription: Subscription;
  //message: any;

  //constructor(private alertService: AlertService) { }

  ngOnInit() {
     
         
 }

  //ngOnDestroy() {
   //   this.subscription.unsubscribe();
 // }
}
