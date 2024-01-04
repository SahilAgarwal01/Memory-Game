import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { MemoryGameComponent } from './memory-game/memory-game.component';
import { MemoryGame2Component } from './memory-game2/memory-game2.component';
import { HomeComponent } from './home/home.component';
const routes: Routes = [
  { path: '', component: HomeComponent },
  {path:'memorygame', component : MemoryGameComponent},
  {path:'memorygame2', component : MemoryGame2Component}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }

