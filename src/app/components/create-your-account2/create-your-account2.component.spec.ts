import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CreateYourAccount2Component } from './create-your-account2.component';

describe('CreateYourAccount2Component', () => {
  let component: CreateYourAccount2Component;
  let fixture: ComponentFixture<CreateYourAccount2Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CreateYourAccount2Component ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(CreateYourAccount2Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
