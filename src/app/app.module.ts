import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';

// containers
import { AppComponent } from './app.component';
import { DonutListComponent } from './admin/containers/donut-list/donut-list.component';
import { DonutSingleComponent } from './admin/containers/donut-single/donut-single.component';

//components
import { DonutCardComponent } from './admin/components/donut-card/donut-card.component';
import { DonutFormComponent } from './admin/components/donut-form/donut-form.component';

@NgModule({
  declarations: [AppComponent, DonutListComponent, DonutCardComponent, DonutSingleComponent, DonutFormComponent],
  imports: [BrowserModule, FormsModule],
  exports: [DonutListComponent, DonutSingleComponent],
  bootstrap: [AppComponent],
})
export class AppModule {}
