import { Component, EventEmitter, Output } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';
import { Console } from 'console';
@Component({
  selector: 'search',
  standalone: true,
  imports: [FormsModule,CommonModule],
  templateUrl: './search.component.html',
  styleUrl: './search.component.css',
})
export class SearchComponent {
  searchText: string = '';
  
  updateSearchTextFromInput(inPutEl:HTMLInputElement) {

    console.log(inPutEl.value)
    this.searchText = inPutEl.value;
    this.searchTextChanged.emit(this.searchText)
  }

  @Output()
  searchTextChanged:EventEmitter<string> = new EventEmitter<string>()
  onSearchTextChanged(){
  }

}
