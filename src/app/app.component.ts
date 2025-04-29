import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { LoaderComponent } from './shared/components/loader/loader.component'; 
import { HeaderComponent } from './shared/components/header/header.component';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet, LoaderComponent, HeaderComponent],
  template: '<router-outlet></router-outlet>', // Using inline template temporarily
  styles: []
})
export class AppComponent {
  title = 'ValidarDniYPlaca';
}