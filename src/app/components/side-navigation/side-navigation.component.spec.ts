/* tslint:disable:no-unused-variable */
import {async, ComponentFixture, TestBed} from '@angular/core/testing';
import {MdRadioButton, MdRadioGroup,  MdIcon, MdIconRegistry} from '@angular/material';
import {TranslateModule} from 'ng2-translate';
import {SideNavigationComponent} from './side-navigation.component';

describe('SideNavigationComponent', () => {
    let component: SideNavigationComponent;
    let fixture: ComponentFixture<SideNavigationComponent>;

    beforeEach(async(() => {
        TestBed.configureTestingModule({
            declarations: [SideNavigationComponent,
                MdRadioButton,
                MdRadioGroup,
                MdIcon,
                MdIconRegistry],
            imports: [TranslateModule.forRoot()]
        })
            .compileComponents();
    }));

    beforeEach(() => {
        fixture = TestBed.createComponent(SideNavigationComponent);
        component = fixture.componentInstance;
        fixture.detectChanges();
    });

    it('should create', () => {
        expect(component).toBeTruthy();
    });
});
