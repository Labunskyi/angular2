import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl, Validators } from '@angular/forms';
import { Router, ActivatedRoute, Params } from '@angular/router';
import { Response } from '@angular/http';

import { UsersService } from '../../shared/services/users.service';
import { AuthService } from '../../shared/services/auth.service';
/* import { CarsService } from '../../shared/services/cars.service'; */
import { User } from '../../shared/models/user.model';
import { Message } from '../../shared/models/message.model';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})

export class LoginComponent implements OnInit {

  form: FormGroup;
  message: Message;
  
  constructor(private usersService: UsersService,
			  private authService: AuthService,
			  private router: Router,
			  private route: ActivatedRoute/* ,
			  private carsService: CarsService */) { }

  ngOnInit() {
	this.message = new Message('danger', '');
	
	this.route.queryParams.subscribe((params: Params)=>{
		if (params['nowCanLogin']) {
			this.showMessage({text: 'Теперь вы можете зайти в систему', type: 'success'});
		}
	} );
	
	
    this.form = new FormGroup({
      'email': new FormControl(null, [Validators.required, Validators.email]),
      'password': new FormControl(null, [Validators.required, Validators.minLength(3)])
    });
  }
  
  private showMessage (message: Message) {
	  this.message = message;
	  window.setTimeout(() => {
		  this.message.text = '';
	  }, 5000);
	  }
      
/* 	  cars = [];
	  carName:  string = '';
	  colors = [
	  'red',
	  'green',
	  'grey',
	  'dark'
	  ];

	  
	  loadCars() {
		  this.carsService.getCars().subscribe( (cars: Cars[]) => {this.cars = cars;
		  });
	}
	  
	  
	  addCar() {
		  this.carsService.addCar(this.carName).subscribe((car: Cars) => {
			  this.cars.push(car);
		  });
		  this.carName = '';
	  }
	  
	  getRandColor() {
		  const num = Math.round(Math.random() * (this.colors.length - 1));
		  return this.colors[num];
	  }
	  
	  setNewColor(car) {
		  this.carsService.changeColor(car, this.getRandColor())
		  .subscribe( (data) => {
			  console.log(data);
		  });
	  } */
 

  onSubmit() {
    const formData = this.form.value;
	
	this.usersService.getUserByEmail(formData.email)
	.subscribe((user: User) => {
		if (user) {
			if (user.password === formData.password) {
				this.message.text = '';
				window.localStorage.setItem('user', JSON.stringify(user));
				this.authService.login();
				this.router.navigate(['/system', 'bill']);
			} else { this.showMessage({text: 'Password not correct',
			type: 'danger'});}
		} else { this.showMessage({text: ' Not such user', type: 'danger'});}
	});
  }

}

