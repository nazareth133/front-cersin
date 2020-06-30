import Swal from 'sweetalert2';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { HttpClient } from '@angular/common/http';
import { Component, OnInit, Input } from '@angular/core';
import { NgxUiLoaderService } from 'ngx-ui-loader';
import { debounceTime } from 'rxjs/operators';
import {environment} from "../../../environments/environment";

@Component({
  selector: '/app-upload-file-sitcs',
  templateUrl: './upload-file-sitcs.component.html',
  styleUrls: ['./upload-file-sitcs.component.css'],
})
export class UploadFileSITCS implements OnInit {

  resourceUrl = environment.api + "/arquivo";

  uploadForm: FormGroup;

  constructor(
    private formBuilder: FormBuilder,
    private httpClient: HttpClient,
    private ngxService: NgxUiLoaderService
  ) {}
  ngOnInit() {
    this.uploadForm = this.formBuilder.group({
      profile: ['', Validators.required],
    });
  }

  onFileSelect(event) {
    if (event.target.files.length > 0) {
      const file = event.target.files[0];
      this.uploadForm.get('profile').setValue(file);
    }
  }

  onSubmit() {
    const formData = new FormData();
    formData.append('file', this.uploadForm.get('profile').value);
    this.ngxService.start();
    this.httpClient.post<any>(this.resourceUrl + '/uploadSITCS', formData).subscribe(
      (res) => {
        console.log(res);
        this.validateCallBackUpload(res);
      },
      (error) => {
        this.validateCallBackUpload(error);
      }
    );
  }

  validateCallBackUpload(response: any): any {
    if (response.httpStatus === 'OK') {
      this.ngxService.stop();
      Swal.fire({
        icon: 'success',
        title: response.mensagem,
        showConfirmButton: false,
      });
    }
    if (response.httpStatus !== 'OK') {
      this.ngxService.stop();
      Swal.fire({
        icon: 'error',
        title: response.mensagem,
        showConfirmButton: false,
      });
    }
  }
}
