import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SearchByPositionComponent } from './search-by-position.component';

describe('SearchByPositionComponent', () => {
  let component: SearchByPositionComponent;
  let fixture: ComponentFixture<SearchByPositionComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [SearchByPositionComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(SearchByPositionComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
