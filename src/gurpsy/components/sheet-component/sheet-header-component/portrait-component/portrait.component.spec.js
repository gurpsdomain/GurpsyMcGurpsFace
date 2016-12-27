"use strict";
/* tslint:disable:no-unused-variable */
var portrait_component_1 = require('./portrait.component');
var testing_1 = require('@angular/core/testing');
var platform_browser_1 = require('@angular/platform-browser');
////////  SPECS  /////////////
describe('PortraitComponent', function () {
    var de;
    var comp;
    var fixture;
    beforeEach(testing_1.async(function () {
        testing_1.TestBed.configureTestingModule({
            declarations: [portrait_component_1.PortraitComponent]
        })
            .compileComponents();
    }));
    beforeEach(function () {
        fixture = testing_1.TestBed.createComponent(portrait_component_1.PortraitComponent);
        comp = fixture.componentInstance;
        de = fixture.debugElement.query(platform_browser_1.By.css('h1'));
    });
    it('should create Portrait component', function () { return expect(comp).toBeDefined(); });
});
//# sourceMappingURL=portrait.component.spec.js.map