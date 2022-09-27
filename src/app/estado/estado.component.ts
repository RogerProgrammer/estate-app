import { Component, OnInit } from '@angular/core';
import { Store } from '@ngrx/store';
import { Observable } from 'rxjs';
import { AppState } from '../interfaces/appState.interface';
import { selectIsMenuOpen } from '../../store/selectors/ui.selector';

@Component({
  selector: 'app-estado',
  templateUrl: './estado.component.html',
  styleUrls: ['./estado.component.css']
})
export class EstadoComponent implements OnInit {

  isMenuOpen$: Observable<boolean> = new Observable();

  constructor(
    private store: Store<AppState>
  ) { }

  ngOnInit(): void {

    this.isMenuOpen$ = this.store.select(selectIsMenuOpen);

  }

}
