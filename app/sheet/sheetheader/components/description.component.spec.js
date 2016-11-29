"use strict";
/* tslint:disable:no-unused-variable */
var description_component_1 = require('./description.component');
var testing_1 = require('@angular/core/testing');
var platform_browser_1 = require('@angular/platform-browser');
////////  SPECS  /////////////
describe('DescriptionComponent', function () {
    var de;
    var comp;
    var fixture;
    beforeEach(testing_1.async(function () {
        testing_1.TestBed.configureTestingModule({
            declarations: [description_component_1.DescriptionComponent]
        })
            .compileComponents();
    }));
    beforeEach(function () {
        fixture = testing_1.TestBed.createComponent(description_component_1.DescriptionComponent);
        comp = fixture.componentInstance;
        de = fixture.debugElement.query(platform_browser_1.By.css('h1'));
    });
    it('should create Description component', function () { return expect(comp).toBeDefined(); });
});
//# sourceMappingURL=description.component.spec.js.map