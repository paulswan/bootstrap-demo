import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';

import { AppComponent } from './app.component';
import { AppRoutingModule } from './app-routing.module';
import { HelloComponent } from './hello.component';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { HomeComponent } from './home/home.component';
import { ButtonsComponent } from './buttons/buttons.component';
import { ColorsComponent } from './colors/colors.component';

// import { TypographyComponent } from './typography/typography.component';
// import { CheckboxRadioComponent } from './checkbox-radio/checkbox-radio.component';
// import { InputsComponent } from './inputs/inputs.component';
// import { DashboardComponent } from './dashboard/dashboard.component';
// import { TableComponent } from './table/table.component';
// import { AddressFormComponent } from './address-form/address-form.component';
// import { TreeComponent } from './tree/tree.component';
// import { DragDropComponent } from './drag-drop/drag-drop.component';
// import { CardsComponent } from './cards/cards.component';
// import { BottomSheetExampleComponent, DialogExampleComponent, OtherComponent } from './other/other.component';
// import { ProgressComponent } from './progress/progress.component';
// import { TabStepperComponent } from './tab-stepper/tab-stepper.component';
// import { SlidersComponent } from './sliders/sliders.component';

@NgModule({
  imports: [
    BrowserModule,
    FormsModule,
    NgbModule,
    AppRoutingModule,
    //
  ],
  declarations: [
    AppComponent,
    HelloComponent,
    HomeComponent,
    ColorsComponent,
    ButtonsComponent,
    ColorsComponent,
    // TypographyComponent,
    // CheckboxRadioComponent,
    // InputsComponent,
    // DashboardComponent,
    // TableComponent,
    // AddressFormComponent,
    // TreeComponent,
    // DragDropComponent,
    // CardsComponent,
    // ProgressComponent,
    // TabStepperComponent,
    // OtherComponent,
    // BottomSheetExampleComponent,
    // DialogExampleComponent,
    // SlidersComponent,
  ],
  bootstrap: [AppComponent],
})
export class AppModule {}
