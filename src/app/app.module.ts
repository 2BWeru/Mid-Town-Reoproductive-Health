import { NgModule } from '@angular/core';
import { ReactiveFormsModule } from '@angular/forms';
import { BrowserModule } from '@angular/platform-browser';
import { HttpClientModule } from '@angular/common/http';


import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HomeComponent } from './home/home.component';
import { LabComponent } from './lab/lab.component';
import { CircumcisionComponent } from './circumcision/circumcision.component';
import { HIVComponent } from './hiv/hiv.component';
import { GyaneComponent } from './gyane/gyane.component';
import { PostAbortionComponent } from './post-abortion/post-abortion.component';
import { CancerComponent } from './cancer/cancer.component';
import { StiComponent } from './sti/sti.component';
import { PostNatalComponent } from './post-natal/post-natal.component';
import { ContaceptionComponent } from './contaception/contaception.component';
import { RouterModule } from '@angular/router';
import { BookingComponent } from './booking/booking.component';
import { ErrorComponent } from './error/error.component';

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    LabComponent,
    CircumcisionComponent,
    HIVComponent,
    GyaneComponent,
    PostAbortionComponent,
    CancerComponent,
    StiComponent,
    PostNatalComponent,
    ContaceptionComponent,
    BookingComponent,
    ErrorComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    ReactiveFormsModule,
    HttpClientModule,
    RouterModule.forRoot([
      {path:'' ,component:HomeComponent},
      {path:'lab' ,component:LabComponent},
      {path:'sti' ,component:StiComponent},
      {path:'natal' ,component:PostNatalComponent},
      {path:'hiv' ,component:HIVComponent},
      {path:'cancer' ,component:CancerComponent},
      {path:'circumcision' ,component:CircumcisionComponent},
      {path:'gyna' ,component:GyaneComponent},
      {path:'abortion' ,component:PostAbortionComponent},
      {path:'Contraception' ,component:ContaceptionComponent},
      {path:'Booking' ,component:BookingComponent},
      {path:'**' ,component:ErrorComponent},


    ]),
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
