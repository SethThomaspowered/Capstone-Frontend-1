import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SaveArticlesComponent } from './savearticles.component';

describe('SaveArticlesComponent', () => {
  let component: SaveArticlesComponent;
  let fixture: ComponentFixture<SaveArticlesComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ SaveArticlesComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(SaveArticlesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
