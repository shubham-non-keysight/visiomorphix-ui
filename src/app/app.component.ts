import { Component } from '@angular/core';
import { OpenAiService } from './services/open-ai.service';
import { slideData } from './slidesData';
import { AlloyDialogConfig, AlloyDialogItem, AlloyDialogService, DefaultButton, DefaultFooterType, AlloyToastService, ToastNotificationPosition, ToastNotificationSeverity } from '@keysight/alloy';
import { EditSlideComponent } from './edit-slide/edit-slide.component';
import { HttpClient } from "@angular/common/http";

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {

}
