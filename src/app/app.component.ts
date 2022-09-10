import { Component } from '@angular/core';
@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'calc';
  toshow='0';
  currvalue ='';

  equals(){
    this.toshow = eval(this.currvalue)
    this.currvalue = this.toshow
  };

  writetoinput(value:string){
    this.currvalue = this.currvalue + value
    this.toshow = this.currvalue

  }

  clear(){
    this.currvalue =''
    this.toshow = '0'
  }


  back(){
    this.currvalue = this.currvalue.slice(0,-1)
    this.toshow = this.currvalue 
    if(this.toshow =='')
    {
      this.toshow = '0'
    }
   
  }
}
