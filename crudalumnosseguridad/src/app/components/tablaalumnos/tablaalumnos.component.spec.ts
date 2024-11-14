import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TablaalumnosComponent } from './tablaalumnos.component';

describe('TablaalumnosComponent', () => {
  let component: TablaalumnosComponent;
  let fixture: ComponentFixture<TablaalumnosComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [TablaalumnosComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(TablaalumnosComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
