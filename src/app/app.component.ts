import { Component } from '@angular/core';
import { RouterLink, RouterOutlet } from '@angular/router';
import { StyleClassModule } from 'primeng/styleclass';
import { MenubarModule } from 'primeng/menubar';
import { LogoComponent } from './logo/logo.component';


@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet, RouterLink, StyleClassModule, MenubarModule, LogoComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss'
})
export class AppComponent {
  title = 'queue-management';
}
