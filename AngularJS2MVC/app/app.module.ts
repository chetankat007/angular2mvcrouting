import { NgModule }      from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { UserService } from './userservice.service';
import { AppComponent }  from './app.component';
import { AboutUsComponent } from './aboutus.component';
import { HomeComponent } from './home.component';
import { routing } from './app.routes';
@NgModule({
    imports: [BrowserModule
        , routing
    ],
    declarations: [AppComponent, AboutUsComponent, HomeComponent],
  providers: [UserService],
  bootstrap: [AppComponent ]
})
export class AppModule { }
