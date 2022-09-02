import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { CommonModule } from '@angular/common';
import { SidebarComponent } from './components/sidebar/sidebar.component';
import { LetDirective } from './directives/let.directive';

@NgModule({
  declarations: [SidebarComponent, LetDirective],
  imports: [CommonModule, RouterModule],
  exports: [SidebarComponent, LetDirective],
})
export class SharedModule {}
