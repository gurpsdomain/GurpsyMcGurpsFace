"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
var core_1 = require('@angular/core');
var platform_browser_1 = require('@angular/platform-browser');
var forms_1 = require('@angular/forms');
var app_component_1 = require('./app.component');
var sheet_component_1 = require('./sheet/sheet.component');
var sheet_header_component_1 = require('./sheet/sheetheader/sheet-header.component');
var portrait_component_1 = require('./sheet/sheetheader/components/portrait.component');
var player_information_component_1 = require('./sheet/sheetheader/components/player-information.component');
var description_component_1 = require('./sheet/sheetheader/components/description.component');
var points_component_1 = require('./sheet/sheetheader/components/points.component');
var identity_component_1 = require('./sheet/sheetheader/components/identity.component');
var AppModule = (function () {
    function AppModule() {
    }
    AppModule = __decorate([
        core_1.NgModule({
            imports: [platform_browser_1.BrowserModule,
                forms_1.FormsModule,
            ],
            declarations: [app_component_1.GurpsFEComponent,
                sheet_component_1.SheetComponent,
                sheet_header_component_1.SheetHeaderComponent,
                portrait_component_1.PortraitComponent,
                player_information_component_1.PlayerInformationComponent,
                description_component_1.DescriptionComponent,
                points_component_1.PointsComponent,
                identity_component_1.IdentityComponent],
            bootstrap: [app_component_1.GurpsFEComponent]
        }), 
        __metadata('design:paramtypes', [])
    ], AppModule);
    return AppModule;
}());
exports.AppModule = AppModule;
//# sourceMappingURL=app.module.js.map