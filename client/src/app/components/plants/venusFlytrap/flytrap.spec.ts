import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FlytrapComponent } from './flytrap';

describe('FlytrapComponent', () => {
  let component: FlytrapComponent;
  let fixture: ComponentFixture<FlytrapComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [FlytrapComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(FlytrapComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
