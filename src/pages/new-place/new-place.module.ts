import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { NewPlacePage } from './new-place';
import { AgmCoreModule } from '@agm/core';

@NgModule({
  declarations: [
    NewPlacePage,
  ],
  imports: [
    IonicPageModule.forChild(NewPlacePage),
    AgmCoreModule
  ],
})
export class NewPlacePageModule {}
