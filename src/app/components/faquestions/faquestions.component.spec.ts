import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FaquestionsComponent } from './faquestions.component';

describe('FaquestionsComponent', () => {
  let component: FaquestionsComponent;
  let fixture: ComponentFixture<FaquestionsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ FaquestionsComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(FaquestionsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
