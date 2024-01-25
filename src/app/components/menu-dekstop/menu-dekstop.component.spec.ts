import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MenuDekstopComponent } from './menu-dekstop.component';

describe('MenuDekstopComponent', () => {
  let component: MenuDekstopComponent;
  let fixture: ComponentFixture<MenuDekstopComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ MenuDekstopComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(MenuDekstopComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
