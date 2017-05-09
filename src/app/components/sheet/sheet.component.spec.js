"use strict";
/* tslint:disable:no-unused-variable */
var sheet_component_1 = require('./sheet.component');
var testing_1 = require('@angular/core/testing');
var platform_browser_1 = require('@angular/platform-browser');
////////  SPECS  /////////////
describe('SheetComponent', function () {
    var de;
    var comp;
    var fixture;
    beforeEach(testing_1.async(function () {
        testing_1.TestBed.configureTestingModule({
            declarations: [sheet_component_1.SheetComponent]
        })
            .compileComponents();
    }));
    beforeEach(function () {
        fixture = testing_1.TestBed.createComponent(sheet_component_1.SheetComponent);
        comp = fixture.componentInstance;
        de = fixture.debugElement.query(platform_browser_1.By.css('h1'));
    });
    it('should create a OutputSheet component', function () { return expect(comp).toBeDefined(); });
});
//# sourceMappingURL=sheet.component.spec.js.map
