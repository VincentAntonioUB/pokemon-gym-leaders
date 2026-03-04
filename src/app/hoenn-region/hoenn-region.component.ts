import { Component, inject, signal } from '@angular/core';
import { HoennRegionService } from '../hoenn-region.service';

@Component({
  selector: 'app-hoenn-region',
  imports: [],
  templateUrl: './hoenn-region.component.html',
  styleUrl: './hoenn-region.component.css'
})
export class HoennRegionComponent {
  hoennService = inject(HoennRegionService)

  get hoennLeaders(){
    return this.hoennService.getleader();
  }
}
