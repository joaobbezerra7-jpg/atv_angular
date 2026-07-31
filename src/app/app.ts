import { Component, signal } from '@angular/core';
import { Veiculo } from './veiculo/veiculo'

@Component({
  selector: 'app-root',
  imports: [Veiculo],
  templateUrl: './app.html',
  styleUrl: './app.css'
})
export class App {
  protected readonly title = signal('veiculo');
}
