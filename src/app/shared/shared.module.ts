import { HttpModule } from '@angular/http';
import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { DVHttpService } from './services/http.service';
import { DVGlobalService } from './services/global.service';

@NgModule({
    imports: [
        CommonModule,
        FormsModule,
        HttpModule
    ],
    declarations: [

    ],
    providers: [
        DVHttpService,
        DVGlobalService
    ]
})
export class DVSharedModule { }
