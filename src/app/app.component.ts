import { Component } from '@angular/core';
import { OpenAiService } from './services/open-ai.service';
import { slideData } from './slidesData';
import { AlloyDialogConfig, AlloyDialogItem, AlloyDialogService, DefaultButton, DefaultFooterType } from '@keysight/alloy';
import { EditSlideComponent } from './edit-slide/edit-slide.component';
import { HttpClient } from "@angular/common/http";

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  selectedSlideData = slideData[0];
  constructor(private openAiService: OpenAiService, private alloyDialogService: AlloyDialogService, private http: HttpClient) { }

  public getFilePath(path: any) {
    return `assets/architecture/${path.slideName}`
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
    });
  }


}
