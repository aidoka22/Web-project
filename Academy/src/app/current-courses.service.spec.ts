import { TestBed } from '@angular/core/testing';

import { CurrentCoursesService } from './current-courses.service';

describe('CurrentCoursesService', () => {
  let service: CurrentCoursesService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(CurrentCoursesService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
