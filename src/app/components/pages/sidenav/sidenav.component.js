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
Object.defineProperty(exports, "__esModule", { value: true });
var core_1 = require("@angular/core");
var SidenavComponent = (function () {
    function SidenavComponent() {
        this.flyerElementArr = [];
    }
    SidenavComponent.prototype.ngOnInit = function () {
    };
    SidenavComponent.prototype.ngAfterViewInit = function () {
    };
    return SidenavComponent;
}());
__decorate([
    core_1.Input(),
    __metadata("design:type", Object)
], SidenavComponent.prototype, "flyerElementArr", void 0);
SidenavComponent = __decorate([
    core_1.Component({
        moduleId: module.id,
        selector: 'ai-sidenav',
        templateUrl: 'sidenav.component.html',
        styleUrls: ['sidenav.component.css'],
        encapsulation: core_1.ViewEncapsulation.None
    }),
    __metadata("design:paramtypes", [])
], SidenavComponent);
exports.SidenavComponent = SidenavComponent;
//# sourceMappingURL=sidenav.component.js.map