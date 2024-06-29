import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SectionBrincadeirasComponent } from './section-brincadeiras.component';

describe('SectionBrincadeirasComponent', () => {
  let component: SectionBrincadeirasComponent;
  let fixture: ComponentFixture<SectionBrincadeirasComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [SectionBrincadeirasComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(SectionBrincadeirasComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
