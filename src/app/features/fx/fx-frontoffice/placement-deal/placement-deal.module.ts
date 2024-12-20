import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { PlacementDealRoutingModule } from './placement-deal-routing.module';
import { PlacementInputComponent } from './placement-input/placement-input.component';

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
import { SharedModule } from 'src/app/shared/shared.module';

@NgModule({
  declarations: [
    PlacementInputComponent
  ],
  imports: [
    CommonModule,
    PlacementDealRoutingModule,
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
export class PlacementDealModule { }





