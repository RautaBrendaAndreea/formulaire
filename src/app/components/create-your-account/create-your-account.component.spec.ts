import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CreateYourAccountComponent } from './create-your-account.component';

describe('CreateYourAccountComponent', () => {
  let component: CreateYourAccountComponent;
  let fixture: ComponentFixture<CreateYourAccountComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CreateYourAccountComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(CreateYourAccountComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
