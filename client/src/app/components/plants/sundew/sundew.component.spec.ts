import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SundewComponent } from './sundew.component';

describe('SundewComponent', () => {
  let component: SundewComponent;
  let fixture: ComponentFixture<SundewComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [SundewComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(SundewComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
