import { Component, OnInit } from '@angular/core';
import { SettingService } from '../services/setting.service';

declare function customInitFunction():any

@Component({
  selector: 'app-pages',
  templateUrl: './pages.component.html'
})
export class PagesComponent implements OnInit{



  constructor(private settingService:SettingService){

  }

  ngOnInit(): void {
    customInitFunction()
  }
}
