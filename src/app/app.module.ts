import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { DonutListComponent } from './admin/containers/donut-list/donut-list.component';

@NgModule({
  declarations: [AppComponent, DonutListComponent],
  imports: [BrowserModule],
  exports: [DonutListComponent],
  bootstrap: [AppComponent],
})
export class AppModule {}
