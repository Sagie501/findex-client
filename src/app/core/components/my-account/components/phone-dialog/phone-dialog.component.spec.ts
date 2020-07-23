import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { PhoneDialogComponent } from './phone-dialog.component';

describe('PhoneDialogComponent', () => {
  let component: PhoneDialogComponent;
  let fixture: ComponentFixture<PhoneDialogComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ PhoneDialogComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(PhoneDialogComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
