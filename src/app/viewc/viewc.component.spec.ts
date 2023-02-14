import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ViewcComponent } from './viewc.component';

describe('ViewcComponent', () => {
  let component: ViewcComponent;
  let fixture: ComponentFixture<ViewcComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ViewcComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ViewcComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
