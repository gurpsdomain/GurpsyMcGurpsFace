"use strict";
/* tslint:disable:no-unused-variable */
var sheet_header_component_1 = require('./sheet-header.component');
var testing_1 = require('@angular/core/testing');
var platform_browser_1 = require('@angular/platform-browser');
////////  SPECS  /////////////
describe('SheetHeaderComponent', function () {
    var de;
    var comp;
    var fixture;
    beforeEach(testing_1.async(function () {
        testing_1.TestBed.configureTestingModule({
            declarations: [sheet_header_component_1.SheetHeaderComponent]
        })
            .compileComponents();
    }));
    beforeEach(function () {
        fixture = testing_1.TestBed.createComponent(sheet_header_component_1.SheetHeaderComponent);
        comp = fixture.componentInstance;
        de = fixture.debugElement.query(platform_browser_1.By.css('h1'));
    });
    it('should create SheetHeader component', function () { return expect(comp).toBeDefined(); });
});
//# sourceMappingURL=sheet-header.component.spec.js.map