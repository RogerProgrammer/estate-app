import { Component } from '@angular/core';
import { Store } from '@ngrx/store';
import { openMenu, closeMenu } from '../store/actions/ui.actions';
import { AppState } from './interfaces/appState.interface';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {

  title = 'store-app';

  constructor(
    private store: Store<AppState>
  ){}

  abrir(){
    this.store.dispatch(openMenu());
  }

  cerrar(){
    this.store.dispatch(closeMenu());
  }

}
