"use strict";
/* tslint:disable:no-unused-variable */
var player_information_component_1 = require('./player-information.component');
var testing_1 = require('@angular/core/testing');
var platform_browser_1 = require('@angular/platform-browser');
////////  SPECS  /////////////
describe('PlayerInformationComponent', function () {
    var de;
    var comp;
    var fixture;
    beforeEach(testing_1.async(function () {
        testing_1.TestBed.configureTestingModule({
            declarations: [player_information_component_1.PlayerInformationComponent]
        })
            .compileComponents();
    }));
    beforeEach(function () {
        fixture = testing_1.TestBed.createComponent(player_information_component_1.PlayerInformationComponent);
        comp = fixture.componentInstance;
        de = fixture.debugElement.query(platform_browser_1.By.css('h1'));
    });
    it('should create Player Information component', function () { return expect(comp).toBeDefined(); });
});
//# sourceMappingURL=player-information.component.spec.js.map