import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { TransferDealRoutingModule } from './transfer-deal-routing.module';
import { TransferInputComponent } from './transfer-input/transfer-input.component';
import { TransferCancellationComponent } from './transfer-cancellation/transfer-cancellation.component';
import { TransferEditingComponent } from './transfer-editing/transfer-editing.component';
import { SharedModule } from 'src/app/shared/shared.module';

import { HttpClientModule } from '@angular/common/http';
import { NgSelectModule } from '@ng-select/ng-select';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
// import { CKEditorModule } from '@ckeditor/ckeditor5-angular';
import { AngularEditorModule } from '@kolkov/angular-editor';
import { ArchwizardModule } from 'angular-archwizard';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { ToastrModule, ToastrService } from 'ngx-toastr';
// import { NgWizardModule } from 'ng-wizard';
// import { AngularMultiSelectModule } from 'angular2-multiselect-dropdown';
// import { NgxDropzoneModule } from 'ngx-dropzone';
import { DropzoneModule, DropzoneConfigInterface, DROPZONE_CONFIG } from 'ngx-dropzone-wrapper';
// import { NgxIntlTelInputModule } from 'ngx-intl-tel-input';  
// import { TreeviewModule } from 'ngx-treeview';
import { HighlightModule, HIGHLIGHT_OPTIONS } from 'ngx-highlightjs';
import { NgxEditorModule } from 'ngx-editor';
// import { FileuploadService } from './form-advanced/fileupload.service';
// import { FormElementsService } from './form-elements/form-elements.service';
import { NgxMatIntlTelInputComponent } from 'ngx-mat-intl-tel-input';
import { MaterialModuleModule } from 'src/app/materialModule/material-module/material-module.module';
// import { AccordionWizardComponent } from './form-wizard/accordion-wizard/accordion-wizard.component';
// import { BasicContentComponent } from './form-wizard/basic-content/basic-content.component';
// import { FormWizardComponent } from './form-wizard/form-wizard.component';
import { QuillModule } from 'ngx-quill';


@NgModule({
  declarations: [
    TransferInputComponent,
    TransferCancellationComponent,
    TransferEditingComponent
  ],
  imports: [
    CommonModule,
    TransferDealRoutingModule,
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
export class TransferDealModule { }
