import { Component, OnDestroy } from '@angular/core';
import { Subscription } from 'rxjs';
import {SessionTimeoutService} from './service/session-timeout.service';
import {Router} from '@angular/router';

@Component({/*
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']*/
  selector : 'body', template : '<router-outlet></router-outlet>',
})
export class AppComponent {
  title = 'PiDevGestionImmo';
  private timeoutSubscription: Subscription;


  constructor(private sessionTimeoutService: SessionTimeoutService , private router: Router) {
    this.timeoutSubscription = this.sessionTimeoutService.idleTimeout$.subscribe(() => {
      // Perform logout logic or any other action upon session timeout
      this.logout();
    });
  }

  ngOnDestroy(): void {
    this.timeoutSubscription.unsubscribe();
  }

  logout(): void {
    this.router.navigate(['/login']);
  }

}
