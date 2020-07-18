import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { FindexHomeComponent } from './findex-home.component';

describe('FindexHomeComponent', () => {
  let component: FindexHomeComponent;
  let fixture: ComponentFixture<FindexHomeComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ FindexHomeComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(FindexHomeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
