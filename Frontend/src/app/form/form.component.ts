import { Component } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Component({
  selector: 'app-form',
  templateUrl: './form.component.html',
  styleUrls: ['./form.component.css']
})
export class FormComponent {
  selectedOption: string='';
  radioOption: string='';
  message: string='';

  constructor(private http: HttpClient) {}

  submitForm() {
    const formData = {
      option: this.selectedOption,
      message: this.message,
    };

    this.http.post<any>('http://localhost:5000/api/submit-form', formData)
      .subscribe(response => {
        console.log(response.message);
        // Reset the form after successful submission
        this.selectedOption = '';
        this.radioOption = '';
        this.message = '';
      }, error => {
        console.error('Error:', error);
      });
  }

  toggleTextArea() {
    this.message = '';
  }

  isTextAreaDisabled(): boolean {
    return this.radioOption !== 'employee';
  }
}
