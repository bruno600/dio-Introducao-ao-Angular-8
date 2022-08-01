import { NgModule } from "@angular/core";
import { ReplacePipe } from "./Replace.pipe";

@NgModule({
  declarations: [
    ReplacePipe
  ],
  exports: [
    ReplacePipe
  ]
})
export class AppPipeModule {

}