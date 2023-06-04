import { Component, OnInit } from '@angular/core';
import { SettingService } from '../../services/setting.service';

@Component({
  selector: 'app-account-settings',
  templateUrl: './account-settings.component.html',
  styleUrls: ['./account-settings.component.css']
})
export class AccountSettingsComponent implements OnInit{

  public linkTheme = document.querySelector('#theme');
  public links:any

  constructor(private settingService:SettingService){

  }

  ngOnInit(): void {
    this.settingService.checkCurrentTheme();

  }

  changeTheme(theme:any){
    this.settingService.changeTheme(theme)

  }



}
