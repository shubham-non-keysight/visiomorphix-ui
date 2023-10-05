import { Component } from '@angular/core';
import { OpenAiService } from './../services/open-ai.service';
import { slideData } from './../slidesData';
import { AlloyDialogConfig, AlloyDialogItem, AlloyDialogService, DefaultButton, DefaultFooterType, AlloyToastService, ToastNotificationPosition, ToastNotificationSeverity } from '@keysight/alloy';
import { EditSlideComponent } from './../edit-slide/edit-slide.component';
import { HttpClient } from "@angular/common/http";


@Component({
  selector: 'app-ppt-slides',
  templateUrl: './ppt-slides.component.html',
  styleUrls: ['./ppt-slides.component.css']
})
export class PptSlidesComponent {
  public position = ToastNotificationPosition['bottom-right'];
  timeout: number = 3500;
  allSlidesData = slideData;
  selectedSlideData = slideData[0];
  constructor(private openAiService: OpenAiService, private alloyDialogService: AlloyDialogService, private http: HttpClient, private readonly alloyToastService: AlloyToastService) { }

  public getFilePath(path: any) {
    return `assets/${this.selectedSlideData.fileName}/${path.slideName}`
  }

  public openEditSlideDataDialog(index: number) {
    let data = this.selectedSlideData.slideData[index]
    const config: AlloyDialogConfig = {
      title: 'Edit Slide',
      data: new AlloyDialogItem(EditSlideComponent, data),
      hasFooter: DefaultFooterType.OkCancel,
      draggable: true,
      defaultButton: DefaultButton.Positive,
      positiveLabel: 'Update',
      positiveEvent: () => {
        console.log("new data>>>", this.selectedSlideData)

        // this.uploadRootCertificateRequest(newCertificate)
      },
      negativeEvent: () => {
      },
      hasBackdrop: true,
      disableClose: true,
      autoFocus: true,
      disablePositiveFooterButton: true
    };
    this.alloyDialogService.openDialog(config);
  }

  public updateFile(data: any) {
    return this.http.post('http://localhost:3000/manipulatePpt', data);

  }

  public submitFile() {
    this.updateFile(this.selectedSlideData).subscribe(res => {
      console.log("&&&&*&(", res)
      this.pushSuccessMessage("Your presentation is ready!")
    }, err => {
      console.log(err.message, err)
      if (err.status === 200) {
        this.pushSuccessMessage("Your presentation is ready!")
      }
    });
  }


  pushSuccessMessage(message: string) {
    setTimeout((): void => {
      this.alloyToastService.pushNotification({
        content: message,
        position: this.position,
        type: ToastNotificationSeverity.success,
        timeout: this.timeout
      });
    }, 100);
  }
}
