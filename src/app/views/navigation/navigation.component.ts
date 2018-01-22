import { Component, OnInit } from '@angular/core';
import { State } from '../../services/state';

@Component({
  selector: 'app-navigation',
  templateUrl: './navigation.component.html',
  styleUrls: ['./navigation.component.scss']
})
export class NavigationComponent implements OnInit {
  isLoggedIn = false;

  constructor(private state: State) { }

  ngOnInit() {
    this.state.authentication.isLoggedIn()
      .subscribe(isLoggedIn => {
        this.isLoggedIn = isLoggedIn;
      });
  }
}
