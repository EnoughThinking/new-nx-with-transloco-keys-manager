import { Component } from '@angular/core';
import { marker } from '@ngneat/transloco-keys-manager/marker';

@Component({
  selector: 'demo-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
})
export class AppComponent {
  title = marker('demo');
}
