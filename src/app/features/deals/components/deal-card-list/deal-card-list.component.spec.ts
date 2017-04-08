import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { DealCardListComponent } from './deal-card-list.component';

describe('DealCardListComponent', () => {
  let component: DealCardListComponent;
  let fixture: ComponentFixture<DealCardListComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ DealCardListComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(DealCardListComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
