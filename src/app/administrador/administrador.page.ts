import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { IonicModule } from '@ionic/angular';

@Component({
  selector: 'app-administrador',
  standalone: true,
  imports: [CommonModule, IonicModule],
  templateUrl: './administrador.page.html',
  styleUrls: ['./administrador.page.scss']
})
export class AdministradorPage {
  constructor() {}
}