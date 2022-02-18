import { ComponentFixture, TestBed } from '@angular/core/testing';

import { BtnGroupsComponent } from './btn-groups.component';

describe('DetailsBtnsComponent', () => {
  let component: BtnGroupsComponent;
  let fixture: ComponentFixture<BtnGroupsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ BtnGroupsComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(BtnGroupsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
