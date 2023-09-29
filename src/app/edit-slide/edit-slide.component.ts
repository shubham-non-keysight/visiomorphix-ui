import { Component, Inject } from '@angular/core';
import { AlloyDialogService, ALLOY_DIALOG_DATA, IAlloyDialogData } from '@keysight/alloy';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { Subscription } from 'rxjs';

@Component({
  selector: 'app-edit-slide',
  templateUrl: './edit-slide.component.html',
  styleUrls: ['./edit-slide.component.css']
})
export class EditSlideComponent {
  public formGroup: FormGroup;
  private sub: Subscription;
  private editableData;

  constructor(private alloyDialogService: AlloyDialogService,
    @Inject(ALLOY_DIALOG_DATA) public data: IAlloyDialogData,
    fb: FormBuilder) {
    this.editableData = data.content;
    this.formGroup = fb.group({
      new_text: [this.editableData.old_text, Validators.required]
    });
    this.sub = this.formGroup.valueChanges.subscribe(value => Object.assign(this.editableData, value));
    this.onChanges();
  }

  private onChanges(): void {
    this.formGroup.valueChanges.subscribe((val: any) => {
      this.data.dialogRef.componentInstance.disablePositiveFooterButton = this.formGroup.invalid;
    });
  }

  ngOnDestroy() {
    this.sub.unsubscribe();
  }
}
