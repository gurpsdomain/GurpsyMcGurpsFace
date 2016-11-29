"use strict";
/* tslint:disable:no-unused-variable */
var identity_component_1 = require('./identity.component');
var testing_1 = require('@angular/core/testing');
var platform_browser_1 = require('@angular/platform-browser');
////////  SPECS  /////////////
describe('IdentityComponent', function () {
    var de;
    var comp;
    var fixture;
    beforeEach(testing_1.async(function () {
        testing_1.TestBed.configureTestingModule({
            declarations: [identity_component_1.IdentityComponent]
        })
            .compileComponents();
    }));
    beforeEach(function () {
        fixture = testing_1.TestBed.createComponent(identity_component_1.IdentityComponent);
        comp = fixture.componentInstance;
        de = fixture.debugElement.query(platform_browser_1.By.css('h1'));
    });
    it('should create Identity component', function () { return expect(comp).toBeDefined(); });
});
//# sourceMappingURL=identity.component.spec.js.map