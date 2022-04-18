import { Component } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { regex } from 'src/share/regex';
import { UsusarioService } from './service/ususario.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})

export class AppComponent {
  
  userForm: FormGroup;

  constructor(
    private formBuilder: FormBuilder,
    private ususarioService: UsusarioService) {

  }

  ngOnInit(): void {
    this.initForm();
  }

  /**
   * @description Initialice form controls
   */
    initForm(): void {
      this.userForm = this.formBuilder.group({
        nombre: ['', [Validators.required, Validators.pattern(regex.alphanumeric),
          Validators.maxLength(50)]],
        apellidoPaterno: ['', [Validators.required, Validators.pattern(regex.alphanumeric),
          Validators.maxLength(50)]],
        apellidoMaterno: ['', [Validators.pattern(regex.alphanumeric),
            Validators.maxLength(50)]],
        identificacion: ['', [Validators.required, Validators.pattern(regex.alphanumeric),
          Validators.maxLength(50)]]  
      });
    }

    saveUser(): void {
      const userRequest = {
        nombre: this.userForm.controls.nombre.value,
        apellidoPaterno: this.userForm.controls.apellidoPaterno.value,
        apellidoMaterno: this.userForm.controls.apellidoMaterno.value,
        identificacion: this.userForm.controls.identificacion.value
      };

      this.ususarioService.saveUser(userRequest).then(res => {
        alert('Usuario guardado correctamente');
      }).catch(err => {
        alert(err);
      });
    }

}
