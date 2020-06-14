import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class PageNumberContainerService {
  private _itemsPerPage = 10;
  private currentPage = 1;
  constructor() { }
  setPageByItemIndex(i: number): void {
    this.currentPage = Math.ceil((+i + 1) / this._itemsPerPage);
  }
  getPage(): number {
    return this.currentPage;
  }
  get itemsPerPage(): number {
    return this._itemsPerPage;
  }
}
