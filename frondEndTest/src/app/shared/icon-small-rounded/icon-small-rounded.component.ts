import { Component, OnInit, Input } from '@angular/core';
import { Color } from './../../models/color';
@Component({
  selector: 'app-icon-small-rounded',
  templateUrl: './icon-small-rounded.component.html',
  styleUrls: ['./icon-small-rounded.component.styl']
})
export class IconSmallRoundedComponent implements OnInit {
  color: string = ""
  paleteColors: Color [] = []
  @Input() set colorIcon(data: string){
    this.createColors()
    this.color = this.getColor(data)
  }
  constructor() { }

/*   $color_pink = #D95ECB
$color_light_blue = #597AEF
$color_yellow = #FFB82C */

  ngOnInit(): void {
    
  }

  public createColors(){
    for(let i = 0, n = 2; i <= n ; i++){
      let name = "", hexa="", ObjColor: any;
      name = i === 0 ? "color_pink" : i === 1 ? "color_light_blue" : i === 2 ? "color_yellow" : "#000"
      hexa = i === 0 ? "#D95ECB" : i === 1 ? "#597AEF" : i === 2 ? "#FFB82C" : "#000"
      ObjColor = {Id: i, Name: name, Hexadecimal: hexa}
      this.paleteColors.push(ObjColor)
    }
  }

  public getColor(data: string){
    return this.paleteColors.find(color => color.Name === data).Hexadecimal
  }

}
