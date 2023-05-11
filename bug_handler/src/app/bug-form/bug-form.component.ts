import { Component } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { ApiService } from '../api.service';

@Component({
  selector: 'app-bug-form',
  templateUrl: './bug-form.component.html',
  styleUrls: ['./bug-form.component.css']
})
export class BugFormComponent {
  bugForm: FormGroup;
  fileInputLabel = 'Select file';
  
  submitted = false;
  bugReportId: string | undefined;
  base64ImageString: string | undefined;


  handleFileInput(event: any) {
    const file: File = event.target.files[0];
    const reader = new FileReader();
    reader.onloadend = () => {
      const base64String = reader.result?.toString().split(',')[1];
      const imageOrVideoControl = this.bugForm.get('imageOrVideo');
      if (imageOrVideoControl && base64String) {
        imageOrVideoControl.setValue(base64String);
      }
    };
    reader.readAsDataURL(file);
    this.fileInputLabel = file.name;
  }

  constructor(
    private formBuilder: FormBuilder,
    private apiService: ApiService
    ) {
    this.bugForm = this.formBuilder.group({
      moduleName: ['', Validators.required],
      bugTitle: ['', Validators.required],
      bugDetails: ['', Validators.required],
      deviceDetails: ['', Validators.required],
      imageOrVideo: ['']
    });
  }

  public async onSubmit() {
    console.log(this.bugForm.value);
    try {
      const data = this.bugForm.value;
      const response = await this.apiService.submitBugReport(data);
      console.log(response);
      this.submitted = true;
      this.bugReportId = response.bug._id;
      this.base64ImageString = response.bug.imageOrVideo;
    } catch (error) {
      console.error(error);
    }
  }
}
