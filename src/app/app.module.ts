import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { IndexComponent } from './index/index.component';
import { CreateComponent } from './create/create.component';
import { EditComponent } from './edit/edit.component';

import { RouterModule } from '@angular/router';
import { HttpClientModule } from '@angular/common/http';
import { ReactiveFormsModule } from '@angular/forms';
import { CoinService } from './coin.service';
import { appRoutes } from './routerConfig';

import { MatModules } from '../modules/mat-modules';

@NgModule({
  declarations: [
    AppComponent,
    IndexComponent,
    CreateComponent,
    EditComponent
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    ReactiveFormsModule,
    MatModules,
    RouterModule.forRoot(appRoutes)
  ],
  providers: [CoinService],
  bootstrap: [AppComponent]
})
export class AppModule { }
