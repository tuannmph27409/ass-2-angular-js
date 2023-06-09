import { TestBed } from '@angular/core/testing';

import { CommentService } from './binhluan.service';

describe('BinhluanService', () => {
  let service: CommentService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(CommentService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
