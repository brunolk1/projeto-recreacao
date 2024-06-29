import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SectionOndeComponent } from './section-onde.component';

describe('SectionOndeComponent', () => {
  let component: SectionOndeComponent;
  let fixture: ComponentFixture<SectionOndeComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [SectionOndeComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(SectionOndeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
