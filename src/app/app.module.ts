// system
import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

// components
import { ActionMenuComponent } from './components/action-menu/action-menu.component';
import { ColumnDisplaySelectorComponent } from './components/column-display-selector/column-display-selector.component';
import { NavigationComponent } from './components/navigation/navigation.component';

// pages
import { AppComponent } from './app.component';
import { HomePageComponent } from './pages/home-page/home-page.component';
import { NotFoundPageComponent } from './pages/not-found-page/not-found-page.component';
import { ErrorPageComponent } from './pages/error-page/error-page.component';
import { ItemListPageComponent } from './pages/item-list-page/item-list-page.component';
import { ItemDetailPageComponent } from './pages/item-detail-page/item-detail-page.component';

// services
import { ItemService } from './item.service';

// routes
const appRoutes: Routes = [
  { path: '', component: HomePageComponent },
  { path: 'items', component: ItemListPageComponent },
  { path: 'items/new', component: ItemListPageComponent },
  { path: 'items/:id', component: ItemDetailPageComponent },
  { path: '**', component: NotFoundPageComponent }
];

@NgModule({
  declarations: [
    AppComponent,
    ActionMenuComponent,
    ColumnDisplaySelectorComponent,
    ErrorPageComponent,
    HomePageComponent,
    NavigationComponent,
    NotFoundPageComponent,
    ItemListPageComponent,
    ItemDetailPageComponent
  ],
  imports: [
    BrowserModule,
    RouterModule.forRoot(appRoutes)
  ],
  providers: [ItemService],
  bootstrap: [AppComponent]
})
export class AppModule { }
