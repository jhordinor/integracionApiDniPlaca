import { Injectable } from '@angular/core';
import Swal from 'sweetalert2';

@Injectable({
  providedIn: 'root'
})
export class MessageSweetService {
 

  constructor() {}

  showError(text:string,title:string = 'Oops...'){
    Swal.fire({
        icon: "error",
        title: title,
        html:text,
      });
  }
  showWarning(text:string,title:string = ''){
    Swal.fire({
        icon: "warning",
        title: title,
        text: text,
      });
  }
}

