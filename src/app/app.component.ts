import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterOutlet } from '@angular/router';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [CommonModule, RouterOutlet],
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss'
})
export class AppComponent {
  title = 'angularCss';
  isActive = false; // Controla si el botón está activo
  isHovered = false; // Controla si el botón está en estado hover
  isDisabled = false; // Controla si el botón está deshabilitado

  // Cambiar el estado de "activo" al hacer clic
  toggleActive() {
    if (!this.isDisabled) {
      this.isActive = !this.isActive;
    }
  }

  // Deshabilitar el botón (por ejemplo, después de un clic)
  disableButton() {
    this.isDisabled = true;
  }
}
