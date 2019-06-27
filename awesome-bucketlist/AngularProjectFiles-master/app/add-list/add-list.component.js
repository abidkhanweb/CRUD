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
var list_service_1 = require('../services/list.service');
var AddListComponent = (function () {
    function AddListComponent(listServ) {
        this.listServ = listServ;
        this.addList = new core_1.EventEmitter();
    }
    AddListComponent.prototype.ngOnInit = function () {
        this.newList = {
            title: '',
            category: '',
            description: '',
            _id: ''
        };
    };
    AddListComponent.prototype.onSubmit = function () {
        var _this = this;
        console.log(this.newList.category);
        this.listServ.addList(this.newList).subscribe(function (response) {
            console.log(response);
            if (response.success == true) {
                _this.addList.emit(_this.newList);
            }
        });
    };
    __decorate([
        core_1.Output(), 
        __metadata('design:type', core_1.EventEmitter)
    ], AddListComponent.prototype, "addList", void 0);
    AddListComponent = __decorate([
        core_1.Component({
            selector: 'app-add-list',
            templateUrl: './app/add-list/add-list.component.html',
        }), 
        __metadata('design:paramtypes', [list_service_1.ListService])
    ], AddListComponent);
    return AddListComponent;
}());
exports.AddListComponent = AddListComponent;
//# sourceMappingURL=add-list.component.js.map