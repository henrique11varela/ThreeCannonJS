import { Component } from '@angular/core';
import { RouterLink } from '@angular/router';

@Component({
  selector: 'app-home',
  standalone: true,
  imports: [RouterLink],
  templateUrl: './home.component.html',
  styleUrl: './home.component.scss'
})
export class HomeComponent {
  public links: {text: string, route: string}[] = [
    {
      text: 'Go to first 2',
      route: 'first',
    }
  ]

  constructor(){}
}
