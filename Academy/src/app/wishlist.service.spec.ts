import { TestBed } from '@angular/core/testing';

import {WishListService } from './wishlist.service';

describe('WishListService', () => {
  let service:WishListService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(WishListService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});