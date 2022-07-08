import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ArticleSummaryComponent } from './article-summary.component';

describe('ArticleSummaryComponent', () => {
  let component: ArticleSummaryComponent;
  let fixture: ComponentFixture<ArticleSummaryComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ArticleSummaryComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ArticleSummaryComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
