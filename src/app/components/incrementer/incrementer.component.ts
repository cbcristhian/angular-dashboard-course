import { Component, EventEmitter, Input, Output } from '@angular/core';

@Component({
  selector: 'app-incrementer',
  templateUrl: './incrementer.component.html',
  styleUrls: ['./incrementer.component.css']
})
export class IncrementerComponent {
  @Input() progress:number=50

  @Output()  value:EventEmitter<number> = new EventEmitter();

  changeValue(value:number){

    if(this.progress>=100 && value>=0){
      this.value.emit(100)
      return this.progress=100
    }
    if(this.progress<=0 && value<0){
      this.value.emit(0)
      return this.progress=0
    }

    this.progress=this.progress+value
    return this.value.emit(this.progress)
  }

  onChange(value:number){
    if(value>=100){
      this.progress=100
    }else if(value<=0){
      this.progress=0
    }else{
      this.progress=value
    }
    this.value.emit(this.progress);
  }

}
