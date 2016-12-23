/* tslint:disable:no-unused-variable */
import {async, ComponentFixture, TestBed} from '@angular/core/testing';
import {MdIcon, MdIconRegistry, MdMenu, MdMenuTrigger} from '@angular/material';
import {HeaderComponent} from './header.component';
import {TranslateModule} from 'ng2-translate';

describe('HeaderComponent', () => {
    let component: HeaderComponent;
    let fixture: ComponentFixture<HeaderComponent>;

    beforeEach(async(() => {
        TestBed.configureTestingModule({
            declarations: [HeaderComponent,
                MdIcon,
                MdIconRegistry,
                MdMenu,
                MdMenuTrigger],
            imports: [TranslateModule.forRoot()]
        })
            .compileComponents();
    }));

    beforeEach(() => {
        fixture = TestBed.createComponent(HeaderComponent);
        component = fixture.componentInstance;
        fixture.detectChanges();
    });

    it('should create', () => {
        expect(component).toBeTruthy();
    });
});
