import { NgModule } from '@angular/core';
import { StoreModule } from '@ngrx/store';
import { EffectsModule } from '@ngrx/effects';
import * as fromUserss from './+state/userss.reducer';
import { UserssEffects } from './+state/userss.effects';
import { UserssFacade } from './+state/userss.facade';

@NgModule({
  providers: [UserssFacade],

  imports: [
    StoreModule.forFeature(
      fromUserss.USERSS_FEATURE_KEY,
      fromUserss.userssReducer
    ),
    EffectsModule.forFeature([UserssEffects]),
  ],
})
export class UsersCoreUiLayoutModule {}
