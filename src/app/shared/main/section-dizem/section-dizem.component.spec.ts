import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SectionDizemComponent } from './section-dizem.component';

describe('SectionDizemComponent', () => {
  let component: SectionDizemComponent;
  let fixture: ComponentFixture<SectionDizemComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [SectionDizemComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(SectionDizemComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
