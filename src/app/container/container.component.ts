import { Component } from '@angular/core';
import { SearchComponent } from './search/search.component';
import { withI18nSupport } from '@angular/platform-browser';
import { ProductListComponent } from './product-list/product-list.component';
import { __values } from 'tslib';

@Component({
  selector: 'container',
  standalone: true,
  imports: [SearchComponent, ProductListComponent],
  templateUrl: './container.component.html',
  styleUrl: './container.component.css',
})
export class ContainerComponent {
  searchText:string = ''

  setSearchText(value:string){
    this.searchText = value
    console.log(`functioning'${this.searchText}`)
  }
 
}
