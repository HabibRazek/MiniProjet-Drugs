import { Component } from '@angular/core';
import { AuthService } from './services/auth.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
})
export class AppComponent {
  router: any;
  constructor(public authService: AuthService) {}
  title = 'TP5';

  onlogout() {
    this.authService.logout();
  }

  ngOnInit() {
    let isloggedin: string;
    let loggedUser: string;
    isloggedin = localStorage.getItem('isloggedIn')!;
    loggedUser = localStorage.getItem('loggedUser')!;
    if (isloggedin != 'true' || !loggedUser) this.router.navigate(['/login']);
    else this.authService.setLoggedUserFromLocalStorage(loggedUser);
  }

  onLogout() {
    this.authService.logout();
  }
}
