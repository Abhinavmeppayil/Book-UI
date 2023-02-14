import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MlbooksComponent } from './mlbooks.component';

describe('MlbooksComponent', () => {
  let component: MlbooksComponent;
  let fixture: ComponentFixture<MlbooksComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ MlbooksComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(MlbooksComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
