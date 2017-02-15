import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';

class ContactForm {
	contactname:string;
	contactemail:string;
	contactmessage:string;
}

@Component({
  selector: 'contact',
  templateUrl: './app/contact/contact.component.html',
})

export class ContactComponent implements OnInit  {

	model:ContactForm = new ContactForm();
	hasBeenSubmitted: boolean;

	ngOnInit() {
		this.hasBeenSubmitted = false;
	}

	register(form:NgForm, event:Event) {
		// Submission stuff happens 

		// When succesfully finished: 
		event.preventDefault();
		this.hasBeenSubmitted = true;
		console.log(form.value.contactname, form.value.contactemail, form.value.contactmessage);
	}
}
