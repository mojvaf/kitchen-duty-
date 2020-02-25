import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { SimplListComponent } from './simpl-list.component';

describe('SimplListComponent', () => {
  let component: SimplListComponent;
  let fixture: ComponentFixture<SimplListComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ SimplListComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SimplListComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
