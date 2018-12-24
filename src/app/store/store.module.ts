import { AccountService } from './account/account.service';
import { AccountEffects } from './account/account.effects';
import { NgModule } from '@angular/core';
import { HttpModule } from '@angular/http';
import { EffectsModule } from '@ngrx/effects';
import { StoreModule } from '@ngrx/store';
import { CommonEffects } from '@cb-store/common/common.effects';
import { CommonService } from '@cb-store/common/common.service';
import { metaReducers, reducers } from '@cb-store/store';

// Import services
// Define effects
const APP_EFFECTS = [EffectsModule.forRoot([CommonEffects, AccountEffects])];

const APP_SERVICES = [CommonService, AccountService];

@NgModule({
  imports: [
    ...APP_EFFECTS,
    HttpModule,
    StoreModule.forRoot(reducers, { metaReducers })
  ],
  providers: [...APP_SERVICES],
  declarations: [],
  exports: []
})
export class CBStoreModule {}
