import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

import { User } from '../shared/models/user.model';
import { AuthService } from '../shared/services/auth.service';


@Component({
	selector: 'app-system',
	templateUrl: './system.component.html'
})

export class SystemComponent implements OnInit {
	date: Date = new Date();
	user: User;
	
	ngOnInit(){
		this.user = JSON.parse(window.localStorage.getItem('user'));
	}
	
	constructor(private authService: AuthService,
				private router: Router){
					
	}
	
	onLogout(){
		this.authService.logout();
		this.router.navigate(['/login']);
	}
	
	
	
	
}