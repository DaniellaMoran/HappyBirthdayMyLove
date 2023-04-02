import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FacetimeComponent } from './facetime.component';

describe('FacetimeComponent', () => {
  let component: FacetimeComponent;
  let fixture: ComponentFixture<FacetimeComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ FacetimeComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(FacetimeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
