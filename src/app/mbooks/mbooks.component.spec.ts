import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MbooksComponent } from './mbooks.component';

describe('MbooksComponent', () => {
  let component: MbooksComponent;
  let fixture: ComponentFixture<MbooksComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ MbooksComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(MbooksComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
