import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AnimationQuemComponent } from './animation-quem.component';

describe('AnimationQuemComponent', () => {
  let component: AnimationQuemComponent;
  let fixture: ComponentFixture<AnimationQuemComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [AnimationQuemComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(AnimationQuemComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
