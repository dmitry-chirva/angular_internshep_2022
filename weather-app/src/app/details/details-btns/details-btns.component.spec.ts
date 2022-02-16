import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DetailsBtnsComponent } from './details-btns.component';

describe('DetailsBtnsComponent', () => {
  let component: DetailsBtnsComponent;
  let fixture: ComponentFixture<DetailsBtnsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ DetailsBtnsComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(DetailsBtnsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
