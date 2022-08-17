import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';

import { AppComponent } from './app.component';
import { AppRoutingModule } from './app-routing.module';
import { HelloComponent } from './hello.component';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { ColorsComponent } from './colors/colors.component';

@NgModule({
  imports: [
    BrowserModule,
    FormsModule,
    NgbModule,
    AppRoutingModule,
    //
  ],
  declarations: [AppComponent, HelloComponent, ColorsComponent],
  bootstrap: [AppComponent],
})
export class AppModule {}
