import { Component } from '@angular/core';

@Component({
  selector: 'app-carte-rdv',
  templateUrl: './carte-rdv.component.html',
  styleUrls: ['./carte-rdv.component.css']
})
export class CarteRDVComponent {

  print() {
    window.print();

}
}
