import { async, TestBed } from '@angular/core/testing';
import { JumbotronComponent } from './jumbotron.component';
describe('JumbotronComponent', () => {
    let component;
    let fixture;
    beforeEach(async(() => {
        TestBed.configureTestingModule({
            declarations: [JumbotronComponent]
        })
            .compileComponents();
    }));
    beforeEach(() => {
        fixture = TestBed.createComponent(JumbotronComponent);
        component = fixture.componentInstance;
        fixture.detectChanges();
    });
    it('should create', () => {
        expect(component).toBeTruthy();
    });
});
//# sourceMappingURL=jumbotron.component.spec.js.map