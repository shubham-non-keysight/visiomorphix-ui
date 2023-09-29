import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AlloyLabelModule } from '@keysight/alloy';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { NgxDocViewerModule } from 'ngx-doc-viewer';
import { OpenAiService } from './services/open-ai.service';
import { AlloyCarouselModule, AlloyCardModule, AlloyButtonModule, AlloySelectModule, AlloyDialogModule, AlloyTextboxModule, AlloyOptionModule, AlloyToastModule } from '@keysight/alloy';
import { HttpClientModule } from '@angular/common/http';
import { EditSlideComponent } from './edit-slide/edit-slide.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { ReactiveFormsModule } from '@angular/forms';
import { FormsModule } from '@angular/forms';
@NgModule({
  declarations: [
    AppComponent,
    EditSlideComponent
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    AppRoutingModule,
    AlloyLabelModule,
    NgxDocViewerModule,
    AlloyCarouselModule,
    AlloyCardModule,
    HttpClientModule,
    AlloyButtonModule,
    AlloySelectModule,
    AlloyDialogModule,
    AlloyTextboxModule,
    FormsModule,
    ReactiveFormsModule,
    AlloyOptionModule,
    AlloyToastModule
  ],
  providers: [OpenAiService],
  bootstrap: [AppComponent]
})
export class AppModule { }
