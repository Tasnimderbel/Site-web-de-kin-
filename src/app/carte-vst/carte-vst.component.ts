import { Component } from '@angular/core';

@Component({
  selector: 'app-carte-vst',
  templateUrl: './carte-vst.component.html',
  styleUrls: ['./carte-vst.component.css']
})
export class CarteVSTComponent {
      
     

  print() {
    window.print();

}
}
