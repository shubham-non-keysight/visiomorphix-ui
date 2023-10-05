import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PptSlidesComponent } from './ppt-slides.component';

describe('PptSlidesComponent', () => {
  let component: PptSlidesComponent;
  let fixture: ComponentFixture<PptSlidesComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ PptSlidesComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(PptSlidesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
