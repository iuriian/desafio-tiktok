import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ContentOptionsComponent } from './content-options.component';

describe('ContentOptionsComponent', () => {
  let component: ContentOptionsComponent;
  let fixture: ComponentFixture<ContentOptionsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ContentOptionsComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ContentOptionsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
