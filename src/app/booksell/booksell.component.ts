import { Component, OnInit } from '@angular/core';
import {
  FormGroup,
  FormControl,
  FormArray,
  FormBuilder,
  Validators,
} from '@angular/forms';

@Component({
  selector: 'app-booksell',
  templateUrl: './booksell.component.html',
  styleUrls: ['./booksell.component.css']
})
export class BooksellComponent implements OnInit {
  image: any;

  addimages: FormGroup = new FormGroup({});

  constructor(  private fb: FormBuilder ) { 
    this.addimages = this.fb.group({
      addimage: ['', [Validators.required]],
      desp: ['', [Validators.required]],
      price: ['', [Validators.required]],
     })
  }

  ngOnInit(): void {
  }

  changeListener($event: any): void {
    this.readThis($event.target);
  }

  readThis(inputValue: any): void {
    var file: File = inputValue.files[0];
    var myReader: FileReader = new FileReader();

    myReader.onloadend = (e) => {
      this.image = myReader.result;
      console.log(myReader.result, '1');
    };
    myReader.readAsDataURL(file);
    
  }
  

  onSubmit(){
    const data = this.addimages.value;

    data.addimage = this.image;
console.log('data', data);

  }


}
