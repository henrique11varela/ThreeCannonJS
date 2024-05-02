import { AfterViewInit, Component, ElementRef, ViewChild } from '@angular/core';
import { renderer } from './scene/objects/renderer';
import { setup } from './scene/MainScene';

@Component({
  selector: 'app-first',
  standalone: true,
  imports: [],
  templateUrl: './first.component.html',
  styleUrl: './first.component.scss'
})
export class FirstComponent implements AfterViewInit {
  @ViewChild('first') first!: ElementRef<HTMLDivElement>;
  // public gyro: Gyroscope = new Gyroscope({ frequency: 60 })

  ngAfterViewInit(): void {
    this.first.nativeElement.appendChild(renderer.domElement)
    setup()
    // this.gyro.start()
  }
}
