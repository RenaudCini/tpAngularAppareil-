import { Component, OnInit } from '@angular/core';
import { AppareilService } from './services/appareil.service';



@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})

export class AppComponent implements OnInit  {
  title = 'Vos appareil';


  appareils: any[];


  constructor(private appareilService:AppareilService) {

  }

  ngOnInit() {
    this.appareils = this.appareilService.appareils;
  }

  onAllumer() {
   this.appareilService.switchOnAll();
}

onEteindre()
{
  this.appareilService.switchOffAll();
}
}
