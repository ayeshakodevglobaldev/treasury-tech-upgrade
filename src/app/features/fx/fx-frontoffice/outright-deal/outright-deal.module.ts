import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { OutrightDealRoutingModule } from './outright-deal-routing.module';
import { OutrightInputComponent } from './outright-input/outright-input.component';
import { OutrightAuthorizeComponent } from './outright-authorize/outright-authorize.component';
import { OutrightEditingComponent } from './outright-editing/outright-editing.component';
import { OutrightAmendmentComponent } from './outright-amendment/outright-amendment.component';
import { OutrightCancellationComponent } from './outright-cancellation/outright-cancellation.component';
import { SharedModule } from 'src/app/shared/shared.module';

import { HttpClientModule } from '@angular/common/http';
import { NgSelectModule } from '@ng-select/ng-select';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
// import { CKEditorModule } from '@ckeditor/ckeditor5-angular';
import { AngularEditorModule } from '@kolkov/angular-editor';
import { ArchwizardModule } from 'angular-archwizard';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { ToastrModule, ToastrService } from 'ngx-toastr';
import { DropzoneModule, DropzoneConfigInterface, DROPZONE_CONFIG } from 'ngx-dropzone-wrapper';
import { HighlightModule, HIGHLIGHT_OPTIONS } from 'ngx-highlightjs';
import { NgxEditorModule } from 'ngx-editor';
import { NgxMatIntlTelInputComponent } from 'ngx-mat-intl-tel-input';
import { MaterialModuleModule } from 'src/app/materialModule/material-module/material-module.module';
import { QuillModule } from 'ngx-quill';

@NgModule({
  declarations: [
    OutrightInputComponent,
    OutrightAuthorizeComponent,
    OutrightEditingComponent,
    OutrightAmendmentComponent,
    OutrightCancellationComponent
  ],
  imports: [
    CommonModule,
    OutrightDealRoutingModule,
    SharedModule,
     NgSelectModule,
        NgbModule,
        // CKEditorModule,
        AngularEditorModule,
        HttpClientModule,
        FormsModule,
        ReactiveFormsModule,
        ToastrModule.forRoot(),
        // ArchwizardModule,
        // NgWizardModule,
        // AngularMultiSelectModule,
        // NgxDropzoneModule,
        DropzoneModule,
        // NgxIntlTelInputModule,
        // TreeviewModule.forRoot(),
        HighlightModule,
        NgxEditorModule,
        DropzoneModule,
        NgxMatIntlTelInputComponent,
        MaterialModuleModule,
        QuillModule,
        // HttpClientModule
  ]
})
export class OutrightDealModule { }
