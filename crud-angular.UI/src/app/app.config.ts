import { ApplicationConfig } from '@angular/core';

import { provideRouter } from '@angular/router';

import { routes } from './app.routes';
import { provideAnimationsAsync } from '@angular/platform-browser/animations/async';
import { provideHttpClient } from '@angular/common/http';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';
import { MatButtonModule } from '@angular/material/button';
import { ReactiveFormsModule, FormsModule } from '@angular/forms'
import { BrowserModule, provideClientHydration } from '@angular/platform-browser'

export const appConfig: ApplicationConfig = {
  providers: [
    provideRouter(routes),
     provideAnimationsAsync(),
     provideHttpClient(), provideClientHydration(),
    
     { provide: MatFormFieldModule },
     { provide: MatInputModule },
     { provide: MatButtonModule },
     { provide: ReactiveFormsModule },
     { provide: FormsModule }
  
  
  
  
  ]
};
