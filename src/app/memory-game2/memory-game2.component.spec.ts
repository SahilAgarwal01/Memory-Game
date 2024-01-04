import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MemoryGame2Component } from './memory-game2.component';

describe('MemoryGame2Component', () => {
  let component: MemoryGame2Component;
  let fixture: ComponentFixture<MemoryGame2Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [MemoryGame2Component]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(MemoryGame2Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
