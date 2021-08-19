(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["main"],{

/***/ "/8i3":
/*!*******************************************************!*\
  !*** ./src/app/panel-filters/panel-filters.module.ts ***!
  \*******************************************************/
/*! exports provided: PanelFiltersModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "PanelFiltersModule", function() { return PanelFiltersModule; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/common */ "ofXK");
/* harmony import */ var _shared_object_pipe__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../shared/object.pipe */ "kFBd");
/* harmony import */ var _shared_panel_pipe__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../shared/panel.pipe */ "0vim");





class PanelFiltersModule {
}
PanelFiltersModule.ɵmod = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineNgModule"]({ type: PanelFiltersModule });
PanelFiltersModule.ɵinj = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineInjector"]({ factory: function PanelFiltersModule_Factory(t) { return new (t || PanelFiltersModule)(); }, imports: [[
            _angular_common__WEBPACK_IMPORTED_MODULE_1__["CommonModule"],
        ]] });
(function () { (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵsetNgModuleScope"](PanelFiltersModule, { declarations: [_shared_object_pipe__WEBPACK_IMPORTED_MODULE_2__["EntriesPipe"], _shared_object_pipe__WEBPACK_IMPORTED_MODULE_2__["ValuesPipe"], _shared_object_pipe__WEBPACK_IMPORTED_MODULE_2__["LengthPipe"], _shared_panel_pipe__WEBPACK_IMPORTED_MODULE_3__["SortByCountValue"]], imports: [_angular_common__WEBPACK_IMPORTED_MODULE_1__["CommonModule"]], exports: [_shared_object_pipe__WEBPACK_IMPORTED_MODULE_2__["EntriesPipe"],
        _shared_object_pipe__WEBPACK_IMPORTED_MODULE_2__["ValuesPipe"], _shared_object_pipe__WEBPACK_IMPORTED_MODULE_2__["LengthPipe"], _shared_panel_pipe__WEBPACK_IMPORTED_MODULE_3__["SortByCountValue"]] }); })();
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](PanelFiltersModule, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["NgModule"],
        args: [{
                declarations: [_shared_object_pipe__WEBPACK_IMPORTED_MODULE_2__["EntriesPipe"], _shared_object_pipe__WEBPACK_IMPORTED_MODULE_2__["ValuesPipe"], _shared_object_pipe__WEBPACK_IMPORTED_MODULE_2__["LengthPipe"], _shared_panel_pipe__WEBPACK_IMPORTED_MODULE_3__["SortByCountValue"]],
                imports: [
                    _angular_common__WEBPACK_IMPORTED_MODULE_1__["CommonModule"],
                ],
                exports: [
                    _shared_object_pipe__WEBPACK_IMPORTED_MODULE_2__["EntriesPipe"],
                    _shared_object_pipe__WEBPACK_IMPORTED_MODULE_2__["ValuesPipe"], _shared_object_pipe__WEBPACK_IMPORTED_MODULE_2__["LengthPipe"], _shared_panel_pipe__WEBPACK_IMPORTED_MODULE_3__["SortByCountValue"]
                ]
            }]
    }], null, null); })();


/***/ }),

/***/ 0:
/*!***************************!*\
  !*** multi ./src/main.ts ***!
  \***************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(/*! /home/roman/lime/table-user/src/main.ts */"zUnb");


/***/ }),

/***/ "0vim":
/*!**********************************!*\
  !*** ./src/shared/panel.pipe.ts ***!
  \**********************************/
/*! exports provided: SortByCountValue */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "SortByCountValue", function() { return SortByCountValue; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "fXoL");


class SortByCountValue {
    transform(value) {
        return value.sort((a, b) => a.value >= b.value ? -1 : 1);
    }
}
SortByCountValue.ɵfac = function SortByCountValue_Factory(t) { return new (t || SortByCountValue)(); };
SortByCountValue.ɵpipe = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefinePipe"]({ name: "sortByCountValue", type: SortByCountValue, pure: false });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](SortByCountValue, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Pipe"],
        args: [{ name: 'sortByCountValue', pure: false }]
    }], null, null); })();


/***/ }),

/***/ "3m5S":
/*!**********************************************************!*\
  !*** ./src/app/panel-filters/panel-filters.component.ts ***!
  \**********************************************************/
/*! exports provided: PanelFiltersComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "PanelFiltersComponent", function() { return PanelFiltersComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _panel_filters_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./panel-filters.service */ "5GWo");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common */ "ofXK");
/* harmony import */ var _shared_object_pipe__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../shared/object.pipe */ "kFBd");
/* harmony import */ var _shared_panel_pipe__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../shared/panel.pipe */ "0vim");






function PanelFiltersComponent_ng_container_5_Template(rf, ctx) { if (rf & 1) {
    const _r3 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementContainerStart"](0);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "span", 3);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function PanelFiltersComponent_ng_container_5_Template_span_click_1_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r3); const ctx_r2 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](); return ctx_r2.panelFiltersService.clearFilters(); });
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](2, "clear all");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementContainerEnd"]();
} }
const _c0 = function (a0, a1) { return { name: a0, value: a1 }; };
function PanelFiltersComponent_div_8_div_3_Template(rf, ctx) { if (rf & 1) {
    const _r9 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 7);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](1, "input", 8);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "label", 9);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function PanelFiltersComponent_div_8_div_3_Template_label_click_2_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r9); const optionInfo_r6 = ctx.$implicit; const option_r4 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]().$implicit; const ctx_r7 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](); return ctx_r7.toggleActiveFilters({ name: option_r4.key, value: optionInfo_r6.key }); });
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "span");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](5, "span");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](6);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const optionInfo_r6 = ctx.$implicit;
    const option_r4 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]().$implicit;
    const ctx_r5 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpropertyInterpolate2"]("id", "option-", option_r4.key, "-", optionInfo_r6.key, "");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("checked", ctx_r5.isChecked(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpureFunction2"](7, _c0, option_r4.key, optionInfo_r6.key)));
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpropertyInterpolate2"]("for", "option-", option_r4.key, "-", optionInfo_r6.key, "");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](optionInfo_r6.key);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"]("(", optionInfo_r6.value, ")");
} }
function PanelFiltersComponent_div_8_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 4);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "div", 5);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](3, PanelFiltersComponent_div_8_div_3_Template, 7, 10, "div", 6);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipe"](4, "sortByCountValue");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipe"](5, "entries");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const option_r4 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"]("", option_r4.key, " ");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngForOf", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipeBind1"](4, 2, _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipeBind1"](5, 4, option_r4.value)));
} }
class PanelFiltersComponent {
    constructor(panelFiltersService) {
        this.panelFiltersService = panelFiltersService;
        this.options = [];
        this.ownFilters = {};
    }
    ngOnInit() {
        this.panelFiltersService.initPanel(this.options, this.optionsInsertedCounter);
    }
    isChecked(option) {
        return this.panelFiltersService.activeFilters$.getValue()[`${option.name}-${option.value}`];
    }
    toggleActiveFilters(option) {
        const exist = this.panelFiltersService.activeFilters$.getValue()[`${option.name}-${option.value}`];
        !exist ?
            this.panelFiltersService.setActiveFilters({
                name: option.name,
                value: option.value,
                ownFilter: this.ownFilters[option.name]
            })
            : this.panelFiltersService.deleteFilterFromActive({
                name: option.name,
                value: option.value
            });
    }
}
PanelFiltersComponent.ɵfac = function PanelFiltersComponent_Factory(t) { return new (t || PanelFiltersComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_panel_filters_service__WEBPACK_IMPORTED_MODULE_1__["PanelFiltersService"])); };
PanelFiltersComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: PanelFiltersComponent, selectors: [["app-panel-filters"]], inputs: { options: "options", optionsInsertedCounter: "optionsInsertedCounter", ownFilters: "ownFilters" }, decls: 11, vars: 8, consts: [[4, "ngIf"], [1, "panel-filters"], ["class", "group-options", 4, "ngFor", "ngForOf"], [1, "times", 3, "click"], [1, "group-options"], [1, "title-option"], ["class", "item-option", 4, "ngFor", "ngForOf"], [1, "item-option"], ["type", "checkbox", 1, "checkbox", 3, "id", "checked"], [3, "for", "click"]], template: function PanelFiltersComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "p");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1, "Good afternoon my friend!");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "div");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "h2");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](4, "Panel Filter ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](5, PanelFiltersComponent_ng_container_5_Template, 3, 0, "ng-container", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipe"](6, "length");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](7, "div", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](8, PanelFiltersComponent_div_8_Template, 6, 6, "div", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipe"](9, "entries");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipe"](10, "async");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    } if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](5);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipeBind1"](6, 2, ctx.panelFiltersService.activeFilters$.getValue()));
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngForOf", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipeBind1"](9, 4, _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipeBind1"](10, 6, ctx.panelFiltersService.optionsData$)));
    } }, directives: [_angular_common__WEBPACK_IMPORTED_MODULE_2__["NgIf"], _angular_common__WEBPACK_IMPORTED_MODULE_2__["NgForOf"]], pipes: [_shared_object_pipe__WEBPACK_IMPORTED_MODULE_3__["LengthPipe"], _shared_object_pipe__WEBPACK_IMPORTED_MODULE_3__["EntriesPipe"], _angular_common__WEBPACK_IMPORTED_MODULE_2__["AsyncPipe"], _shared_panel_pipe__WEBPACK_IMPORTED_MODULE_4__["SortByCountValue"]], styles: ["@charset \"UTF-8\";\n.panel-filters[_ngcontent-%COMP%] {\n  display: flex;\n  border-radius: 6px;\n}\n.title-option[_ngcontent-%COMP%] {\n  font-weight: bold;\n  text-transform: uppercase;\n  text-align: center;\n}\n.group-options[_ngcontent-%COMP%] {\n  padding: 10px;\n  border-radius: 6px;\n  margin: 10px;\n  color: #8b92a9;\n  border: 1px solid gray;\n}\n@media screen and (max-width: 900px) {\n  .panel-filters[_ngcontent-%COMP%] {\n    flex-direction: column;\n  }\n\n  .title-option[_ngcontent-%COMP%] {\n    text-align: left;\n  }\n}\n@media screen and (min-width: 900px) {\n  .table[_ngcontent-%COMP%] {\n    max-width: 1200px;\n  }\n}\n.times[_ngcontent-%COMP%] {\n  border-bottom: 1px solid grey;\n  font-size: 12px;\n  cursor: pointer;\n}\n.times[_ngcontent-%COMP%]::before {\n  content: \"\u2718\";\n}\n.item-option[_ngcontent-%COMP%] {\n  margin: 12px;\n}\n.item-option[_ngcontent-%COMP%]:hover {\n  cursor: pointer;\n  color: wheat;\n}\ninput[type=checkbox][_ngcontent-%COMP%] {\n  display: none;\n}\n.checkbox[_ngcontent-%COMP%] {\n  position: absolute;\n  z-index: -1;\n  opacity: 0;\n  margin: 10px 0 0 30px;\n}\n.checkbox[_ngcontent-%COMP%]    + label[_ngcontent-%COMP%] {\n  position: relative;\n  padding: 0 0 0 25px;\n  cursor: pointer;\n}\n.checkbox[_ngcontent-%COMP%]    + label[_ngcontent-%COMP%]:before {\n  content: \"\";\n  position: absolute;\n  left: 0;\n  width: 20px;\n  height: 20px;\n  background: #121929;\n  box-shadow: inset 0 2px 3px rgba(0, 0, 0, 0.2);\n  transition: 0.2s;\n  border-radius: 1px;\n}\n.checkbox[_ngcontent-%COMP%]    + label[_ngcontent-%COMP%]:after {\n  content: \"\";\n  position: absolute;\n  top: 3px;\n  left: 3px;\n}\n.checkbox[_ngcontent-%COMP%]:checked    + label[_ngcontent-%COMP%]:after {\n  content: \"\u2714\";\n  color: #d4686a;\n  margin-top: -5px;\n  font-size: 20px;\n}\n.checkbox[_ngcontent-%COMP%]:checked    + label[_ngcontent-%COMP%] {\n  color: wheat;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvcGFuZWwtZmlsdGVycy9wYW5lbC1maWx0ZXJzLmNvbXBvbmVudC5zY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBLGdCQUFnQjtBQUFoQjtFQUNFLGFBQUE7RUFDQSxrQkFBQTtBQUVGO0FBQ0E7RUFDRSxpQkFBQTtFQUNBLHlCQUFBO0VBQ0Esa0JBQUE7QUFFRjtBQUNBO0VBQ0UsYUFBQTtFQUNBLGtCQUFBO0VBQ0EsWUFBQTtFQUNBLGNBQUE7RUFDQSxzQkFBQTtBQUVGO0FBQ0E7RUFDRTtJQUNFLHNCQUFBO0VBRUY7O0VBQ0E7SUFDRSxnQkFBQTtFQUVGO0FBQ0Y7QUFFQTtFQUNFO0lBQ0UsaUJBQUE7RUFBRjtBQUNGO0FBSUE7RUFDRSw2QkFBQTtFQUNBLGVBQUE7RUFDQSxlQUFBO0FBRkY7QUFHRTtFQUNFLFlBQUE7QUFESjtBQU1BO0VBQ0UsWUFBQTtBQUhGO0FBSUU7RUFDRSxlQUFBO0VBQ0EsWUFBQTtBQUZKO0FBUUE7RUFDRSxhQUFBO0FBTEY7QUFRQTtFQUNFLGtCQUFBO0VBQ0EsV0FBQTtFQUNBLFVBQUE7RUFDQSxxQkFBQTtBQUxGO0FBUUE7RUFDRSxrQkFBQTtFQUNBLG1CQUFBO0VBQ0EsZUFBQTtBQUxGO0FBUUE7RUFDRSxXQUFBO0VBQ0Esa0JBQUE7RUFDQSxPQUFBO0VBQ0EsV0FBQTtFQUNBLFlBQUE7RUFDQSxtQkFBQTtFQUNBLDhDQUFBO0VBQ0EsZ0JBQUE7RUFDQSxrQkFBQTtBQUxGO0FBUUE7RUFDRSxXQUFBO0VBQ0Esa0JBQUE7RUFDQSxRQUFBO0VBQ0EsU0FBQTtBQUxGO0FBWUE7RUFDRSxZQUFBO0VBQ0EsY0FBQTtFQUNBLGdCQUFBO0VBQ0EsZUFBQTtBQVRGO0FBWUE7RUFDRSxZQUFBO0FBVEYiLCJmaWxlIjoic3JjL2FwcC9wYW5lbC1maWx0ZXJzL3BhbmVsLWZpbHRlcnMuY29tcG9uZW50LnNjc3MiLCJzb3VyY2VzQ29udGVudCI6WyIucGFuZWwtZmlsdGVyc3tcbiAgZGlzcGxheTogZmxleDtcbiAgYm9yZGVyLXJhZGl1czogNnB4O1xufVxuXG4udGl0bGUtb3B0aW9ue1xuICBmb250LXdlaWdodDogYm9sZDtcbiAgdGV4dC10cmFuc2Zvcm06IHVwcGVyY2FzZTtcbiAgdGV4dC1hbGlnbjogY2VudGVyO1xufVxuXG4uZ3JvdXAtb3B0aW9uc3tcbiAgcGFkZGluZzogMTBweDtcbiAgYm9yZGVyLXJhZGl1czogNnB4O1xuICBtYXJnaW46IDEwcHg7XG4gIGNvbG9yOiAjOGI5MmE5O1xuICBib3JkZXI6IDFweCBzb2xpZCBncmF5O1xufVxuXG5AbWVkaWEgc2NyZWVuIGFuZCAobWF4LXdpZHRoOiA5MDBweCkge1xuICAucGFuZWwtZmlsdGVyc3tcbiAgICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xuICB9XG5cbiAgLnRpdGxlLW9wdGlvbntcbiAgICB0ZXh0LWFsaWduOiBsZWZ0O1xuICB9XG5cbn1cblxuQG1lZGlhIHNjcmVlbiBhbmQgKG1pbi13aWR0aDogOTAwcHgpIHtcbiAgLnRhYmxle1xuICAgIG1heC13aWR0aDogMTIwMHB4O1xuICB9XG59XG5cblxuLnRpbWVze1xuICBib3JkZXItYm90dG9tOiAxcHggc29saWQgZ3JleTtcbiAgZm9udC1zaXplOiAxMnB4O1xuICBjdXJzb3I6IHBvaW50ZXI7XG4gICY6OmJlZm9yZXtcbiAgICBjb250ZW50OiAnXFwyNzE4JztcblxuICB9XG59XG5cbi5pdGVtLW9wdGlvbntcbiAgbWFyZ2luOiAxMnB4O1xuICAmOmhvdmVye1xuICAgIGN1cnNvcjogcG9pbnRlcjtcbiAgICBjb2xvcjogd2hlYXQ7XG4gIH1cbn1cblxuXG5cbmlucHV0W3R5cGU9J2NoZWNrYm94J117XG4gIGRpc3BsYXk6IG5vbmU7XG59XG5cbi5jaGVja2JveCB7XG4gIHBvc2l0aW9uOiBhYnNvbHV0ZTtcbiAgei1pbmRleDogLTE7XG4gIG9wYWNpdHk6IDA7XG4gIG1hcmdpbjogMTBweCAwIDAgMzBweDtcbn1cblxuLmNoZWNrYm94ICsgbGFiZWwge1xuICBwb3NpdGlvbjogcmVsYXRpdmU7XG4gIHBhZGRpbmc6IDAgMCAwIDI1cHg7XG4gIGN1cnNvcjogcG9pbnRlcjtcbn1cblxuLmNoZWNrYm94ICsgbGFiZWw6YmVmb3JlIHtcbiAgY29udGVudDogJyc7XG4gIHBvc2l0aW9uOiBhYnNvbHV0ZTtcbiAgbGVmdDogMDtcbiAgd2lkdGg6IDIwcHg7XG4gIGhlaWdodDogMjBweDtcbiAgYmFja2dyb3VuZDogIzEyMTkyOTtcbiAgYm94LXNoYWRvdzogaW5zZXQgMCAycHggM3B4IHJnYmEoMCwgMCwgMCwgLjIpO1xuICB0cmFuc2l0aW9uOiAuMnM7XG4gIGJvcmRlci1yYWRpdXM6IDFweDtcbn1cblxuLmNoZWNrYm94ICsgbGFiZWw6YWZ0ZXIge1xuICBjb250ZW50OiAnJztcbiAgcG9zaXRpb246IGFic29sdXRlO1xuICB0b3A6IDNweDtcbiAgbGVmdDogM3B4O1xufVxuXG4uY2hlY2tib3g6Y2hlY2tlZCArIGxhYmVsOmJlZm9yZSB7XG4gIC8vYmFja2dyb3VuZDogI2Q0Njg2YTtcbn1cblxuLmNoZWNrYm94OmNoZWNrZWQgKyBsYWJlbDphZnRlciB7XG4gIGNvbnRlbnQ6ICdcXDI3MTQnO1xuICBjb2xvcjogI2Q0Njg2YTtcbiAgbWFyZ2luLXRvcDogLTVweDtcbiAgZm9udC1zaXplOiAyMHB4O1xufVxuXG4uY2hlY2tib3g6Y2hlY2tlZCArIGxhYmVsIHtcbiAgY29sb3I6IHdoZWF0O1xufVxuXG5cblxuXG4iXX0= */"] });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](PanelFiltersComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
                selector: 'app-panel-filters',
                templateUrl: './panel-filters.component.html',
                styleUrls: ['./panel-filters.component.scss']
            }]
    }], function () { return [{ type: _panel_filters_service__WEBPACK_IMPORTED_MODULE_1__["PanelFiltersService"] }]; }, { options: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"]
        }], optionsInsertedCounter: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"]
        }], ownFilters: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"]
        }] }); })();


/***/ }),

/***/ "4Rpq":
/*!**********************************!*\
  !*** ./src/shared/table.pipe.ts ***!
  \**********************************/
/*! exports provided: TransformField, VisibilityHeaders */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "TransformField", function() { return TransformField; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "VisibilityHeaders", function() { return VisibilityHeaders; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "fXoL");


class TransformField {
    transform(value, func) {
        return func(value);
    }
}
TransformField.ɵfac = function TransformField_Factory(t) { return new (t || TransformField)(); };
TransformField.ɵpipe = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefinePipe"]({ name: "transformField", type: TransformField, pure: true });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](TransformField, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Pipe"],
        args: [{ name: 'transformField' }]
    }], null, null); })();
class VisibilityHeaders {
    transform(value) {
        const headers = Object.entries(value).reduce((acc, cur) => cur[1].visibility && acc.concat([cur[0]]), []);
        return headers;
    }
}
VisibilityHeaders.ɵfac = function VisibilityHeaders_Factory(t) { return new (t || VisibilityHeaders)(); };
VisibilityHeaders.ɵpipe = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefinePipe"]({ name: "visibilityHeaders", type: VisibilityHeaders, pure: true });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](VisibilityHeaders, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Pipe"],
        args: [{ name: 'visibilityHeaders' }]
    }], null, null); })();


/***/ }),

/***/ "5GWo":
/*!********************************************************!*\
  !*** ./src/app/panel-filters/panel-filters.service.ts ***!
  \********************************************************/
/*! exports provided: PanelFiltersService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "PanelFiltersService", function() { return PanelFiltersService; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! rxjs */ "qCKp");
/* harmony import */ var _shared_data_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../shared/data.service */ "qVqJ");




class PanelFiltersService {
    constructor(dataService) {
        this.dataService = dataService;
        this.activeFilters$ = new rxjs__WEBPACK_IMPORTED_MODULE_1__["BehaviorSubject"]({});
        this.subscription = null;
        this.optionsData$ = new rxjs__WEBPACK_IMPORTED_MODULE_1__["Subject"]();
        this.options = [];
        this.optionsInsertedCounter = {};
        this.subscription = this.dataService.info$.pipe().subscribe((info) => {
            const optionsData = this.optionsDataInit();
            info.map(cur => {
                this.options.forEach(option => {
                    const insertedParamOrParam = this.optionsInsertedCounter.hasOwnProperty(option) ?
                        this.optionsInsertedCounter[option](cur) : cur[option];
                    optionsData[option][insertedParamOrParam] =
                        optionsData[option][insertedParamOrParam] === undefined ? 1 : optionsData[option][insertedParamOrParam] + 1;
                });
            });
            this.optionsData$.next(optionsData);
        });
    }
    ngOnDestroy() {
        if (this.subscription !== null) {
            this.subscription.unsubscribe();
            this.subscription = null;
        }
    }
    initPanel(options, optionsInsertedCounter) {
        this.options = options;
        this.optionsInsertedCounter = optionsInsertedCounter;
    }
    optionsDataInit() {
        return this.options.reduce((acc, cur) => {
            acc[cur] = {};
            return acc;
        }, {});
    }
    setActiveFilters(option) {
        const state = this.activeFilters$.value;
        state[`${option.name}-${option.value}`] = option;
        this.activeFilters$.next(state);
    }
    deleteFilterFromActive(option) {
        const state = this.activeFilters$.value;
        delete state[`${option.name}-${option.value}`];
        this.activeFilters$.next(state);
    }
    clearFilters() {
        this.activeFilters$.next({});
    }
}
PanelFiltersService.ɵfac = function PanelFiltersService_Factory(t) { return new (t || PanelFiltersService)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵinject"](_shared_data_service__WEBPACK_IMPORTED_MODULE_2__["DataService"])); };
PanelFiltersService.ɵprov = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineInjectable"]({ token: PanelFiltersService, factory: PanelFiltersService.ɵfac, providedIn: 'root' });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](PanelFiltersService, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Injectable"],
        args: [{
                providedIn: 'root'
            }]
    }], function () { return [{ type: _shared_data_service__WEBPACK_IMPORTED_MODULE_2__["DataService"] }]; }, null); })();


/***/ }),

/***/ "9Rdk":
/*!******************************************!*\
  !*** ./src/app/table/table.component.ts ***!
  \******************************************/
/*! exports provided: TableComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "TableComponent", function() { return TableComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! rxjs */ "qCKp");
/* harmony import */ var _table_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./table.service */ "PrjN");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/common */ "ofXK");
/* harmony import */ var _shared_table_pipe__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../shared/table.pipe */ "4Rpq");






function TableComponent_ng_container_2_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementContainerStart"](0);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "div", 5);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](2, "The table is empty, no data");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementContainerEnd"]();
} }
function TableComponent_th_5_Template(rf, ctx) { if (rf & 1) {
    const _r5 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "th", 6);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "span", 7);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function TableComponent_th_5_Template_span_click_1_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r5); const header_r3 = ctx.$implicit; const ctx_r4 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](); return ctx_r4.setSorted(header_r3); });
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const header_r3 = ctx.$implicit;
    const ctx_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngClass", ctx_r1.headersParams[header_r3].hideColumnSm ? "sm-d-none my-th" : "my-th");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngClass", ctx_r1.tableService.sortedParam[header_r3]);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](header_r3);
} }
function TableComponent_tr_8_td_1_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "td", 9);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipe"](2, "transformField");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const header_r8 = ctx.$implicit;
    const info_r6 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]().$implicit;
    const ctx_r7 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngClass", ctx_r7.headersParams[header_r8].hideColumnSm && "sm-d-none");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"](" ", !ctx_r7.headersParams[header_r8].withPipe ? info_r6[header_r8] : _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipeBind2"](2, 2, info_r6[header_r8], ctx_r7.headersParams[header_r8].pipeFunc), "");
} }
function TableComponent_tr_8_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "tr");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](1, TableComponent_tr_8_td_1_Template, 3, 5, "td", 8);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipe"](2, "visibilityHeaders");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const ctx_r2 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngForOf", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipeBind1"](2, 1, ctx_r2.headersParams));
} }
class TableComponent {
    constructor(tableService) {
        this.tableService = tableService;
        this.subscription = null;
        this.dataTable$ = new rxjs__WEBPACK_IMPORTED_MODULE_1__["Subject"]();
    }
    ngOnInit() {
        this.subscription = this.dataTable$.pipe().subscribe((data) => data.length && this.tableService.initData(data, this.headersParams));
    }
    ngOnDestroy() {
        if (this.subscription !== null) {
            this.subscription.unsubscribe();
            this.subscription = null;
        }
    }
    setSorted(param) {
        this.tableService.setSortedParam(param);
    }
}
TableComponent.ɵfac = function TableComponent_Factory(t) { return new (t || TableComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_table_service__WEBPACK_IMPORTED_MODULE_2__["TableService"])); };
TableComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: TableComponent, selectors: [["app-table"]], inputs: { headersParams: "headersParams", dataTable$: "dataTable$" }, decls: 10, vars: 7, consts: [[1, "block-header"], [4, "ngIf"], [1, "table"], [3, "ngClass", 4, "ngFor", "ngForOf"], [4, "ngFor", "ngForOf"], [2, "color", "crimson"], [3, "ngClass"], [3, "ngClass", "click"], ["class", "my-td", 3, "ngClass", 4, "ngFor", "ngForOf"], [1, "my-td", 3, "ngClass"]], template: function TableComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "h2", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1, " Table Users\n");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](2, TableComponent_ng_container_2_Template, 3, 0, "ng-container", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "table", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](4, "tr");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](5, TableComponent_th_5_Template, 3, 3, "th", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipe"](6, "visibilityHeaders");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](7, "tbody");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](8, TableComponent_tr_8_Template, 3, 3, "tr", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipe"](9, "async");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    } if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", !ctx.tableService.dataService.info$.getValue().length);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngForOf", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipeBind1"](6, 3, ctx.headersParams));
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngForOf", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipeBind1"](9, 5, ctx.tableService.dataService.info$));
    } }, directives: [_angular_common__WEBPACK_IMPORTED_MODULE_3__["NgIf"], _angular_common__WEBPACK_IMPORTED_MODULE_3__["NgForOf"], _angular_common__WEBPACK_IMPORTED_MODULE_3__["NgClass"]], pipes: [_shared_table_pipe__WEBPACK_IMPORTED_MODULE_4__["VisibilityHeaders"], _angular_common__WEBPACK_IMPORTED_MODULE_3__["AsyncPipe"], _shared_table_pipe__WEBPACK_IMPORTED_MODULE_4__["TransformField"]], styles: ["@charset \"UTF-8\";\ntable[_ngcontent-%COMP%] {\n  margin: auto;\n}\n.ask[_ngcontent-%COMP%]:after {\n  color: wheat;\n  content: \"\u21D3\";\n  font-size: 1.2rem;\n}\n.desk[_ngcontent-%COMP%]:after {\n  color: wheat;\n  font-size: 1.2rem;\n  content: \"\u21D1\";\n}\n.table[_ngcontent-%COMP%]   td[_ngcontent-%COMP%], .table[_ngcontent-%COMP%]   th[_ngcontent-%COMP%] {\n  padding: 0.45rem;\n  border-top: 1px solid rgba(181, 181, 181, 0.1);\n}\n.table[_ngcontent-%COMP%] {\n  width: 100%;\n  max-width: 1200px;\n  margin-bottom: 1rem;\n  background-color: #202940;\n  color: #8b92a9;\n  border-radius: 6px;\n  text-align: center;\n}\n.my-th[_ngcontent-%COMP%]:hover {\n  cursor: pointer;\n  color: wheat;\n}\n@media screen and (max-width: 900px) {\n  .table[_ngcontent-%COMP%] {\n    width: 100%;\n  }\n\n  .sm-d-none[_ngcontent-%COMP%] {\n    display: none;\n  }\n}\n@media screen and (min-width: 900px) {\n  .table[_ngcontent-%COMP%] {\n    max-width: 1200px;\n  }\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvdGFibGUvdGFibGUuY29tcG9uZW50LnNjc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUEsZ0JBQWdCO0FBRWhCO0VBQ0UsWUFBQTtBQUFGO0FBSUU7RUFDRSxZQUFBO0VBQ0EsWUFBQTtFQUNBLGlCQUFBO0FBREo7QUFNRTtFQUNFLFlBQUE7RUFDQSxpQkFBQTtFQUNBLFlBQUE7QUFISjtBQU9BO0VBQ0UsZ0JBQUE7RUFDQSw4Q0FBQTtBQUpGO0FBT0E7RUFDRSxXQUFBO0VBQ0EsaUJBQUE7RUFDQSxtQkFBQTtFQUNBLHlCQUFBO0VBQ0EsY0FBQTtFQUNBLGtCQUFBO0VBQ0Esa0JBQUE7QUFKRjtBQU9BO0VBQ0UsZUFBQTtFQUNBLFlBQUE7QUFKRjtBQVFBO0VBQ0U7SUFDRSxXQUFBO0VBTEY7O0VBUUE7SUFDRSxhQUFBO0VBTEY7QUFDRjtBQVNBO0VBQ0U7SUFDRSxpQkFBQTtFQVBGO0FBQ0YiLCJmaWxlIjoic3JjL2FwcC90YWJsZS90YWJsZS5jb21wb25lbnQuc2NzcyIsInNvdXJjZXNDb250ZW50IjpbIlxuXG50YWJsZXtcbiAgbWFyZ2luOiBhdXRvO1xufVxuXG4uYXNre1xuICAmOmFmdGVye1xuICAgIGNvbG9yOiB3aGVhdDtcbiAgICBjb250ZW50OiAnXFwyMUQzJztcbiAgICBmb250LXNpemU6IDEuMnJlbTtcbiAgfVxufVxuXG4uZGVza3tcbiAgJjphZnRlcntcbiAgICBjb2xvcjogd2hlYXQ7XG4gICAgZm9udC1zaXplOiAxLjJyZW07XG4gICAgY29udGVudDogJ1xcMjFEMSc7XG4gIH1cbn1cblxuLnRhYmxlIHRkLCAudGFibGUgdGgge1xuICBwYWRkaW5nOiAuNDVyZW07XG4gIGJvcmRlci10b3A6MXB4IHNvbGlkICBoc2xhKDAsMCUsNzElLC4xKTtcbn1cblxuLnRhYmxlIHtcbiAgd2lkdGg6IDEwMCU7XG4gIG1heC13aWR0aDogMTIwMHB4O1xuICBtYXJnaW4tYm90dG9tOiAxcmVtO1xuICBiYWNrZ3JvdW5kLWNvbG9yOiAjMjAyOTQwO1xuICBjb2xvcjogIzhiOTJhOTtcbiAgYm9yZGVyLXJhZGl1czogNnB4O1xuICB0ZXh0LWFsaWduOiBjZW50ZXI7XG59XG5cbi5teS10aDpob3ZlcntcbiAgY3Vyc29yOiBwb2ludGVyO1xuICBjb2xvcjogd2hlYXQ7XG59XG5cblxuQG1lZGlhIHNjcmVlbiBhbmQgKG1heC13aWR0aDogOTAwcHgpIHtcbiAgLnRhYmxle1xuICAgIHdpZHRoOiAxMDAlO1xuICB9XG5cbiAgLnNtLWQtbm9uZXtcbiAgICBkaXNwbGF5OiBub25lO1xuICB9XG5cbn1cblxuQG1lZGlhIHNjcmVlbiBhbmQgKG1pbi13aWR0aDogOTAwcHgpIHtcbiAgLnRhYmxle1xuICAgIG1heC13aWR0aDogMTIwMHB4O1xuICB9XG59XG5cblxuXG5cbiJdfQ== */"] });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](TableComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
                selector: 'app-table',
                templateUrl: './table.component.html',
                styleUrls: ['./table.component.scss']
            }]
    }], function () { return [{ type: _table_service__WEBPACK_IMPORTED_MODULE_2__["TableService"] }]; }, { headersParams: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"]
        }], dataTable$: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"]
        }] }); })();


/***/ }),

/***/ "AytR":
/*!*****************************************!*\
  !*** ./src/environments/environment.ts ***!
  \*****************************************/
/*! exports provided: environment */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "environment", function() { return environment; });
// This file can be replaced during build by using the `fileReplacements` array.
// `ng build --prod` replaces `environment.ts` with `environment.prod.ts`.
// The list of file replacements can be found in `angular.json`.
const environment = {
    production: false
};
/*
 * For easier debugging in development mode, you can import the following file
 * to ignore zone related error stack frames such as `zone.run`, `zoneDelegate.invokeTask`.
 *
 * This import should be commented out in production mode because it will have a negative impact
 * on performance if an error is thrown.
 */
// import 'zone.js/dist/zone-error';  // Included with Angular CLI.


/***/ }),

/***/ "PrjN":
/*!****************************************!*\
  !*** ./src/app/table/table.service.ts ***!
  \****************************************/
/*! exports provided: TableService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "TableService", function() { return TableService; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _panel_filters_panel_filters_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../panel-filters/panel-filters.service */ "5GWo");
/* harmony import */ var _shared_data_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../shared/data.service */ "qVqJ");




class TableService {
    constructor(panelFilterService, dataService) {
        this.panelFilterService = panelFilterService;
        this.dataService = dataService;
        this.info = [];
        this.infoSortered = [];
        this.infoFiltered = [];
        this.sortedParam = {};
        this.subscription = null;
        this.subscription = this.panelFilterService.activeFilters$.pipe().subscribe((optionsFilter) => {
            this.info = this.infoFiltered;
            this.filtration(Object.values(optionsFilter));
            this.sortTable();
            dataService.info$.next(this.info);
        });
    }
    ngOnDestroy() {
        if (this.subscription !== null) {
            this.subscription.unsubscribe();
            this.subscription = null;
        }
    }
    initData(data, headerParams) {
        this.dataService.info$.next(data);
        this.info = data;
        this.infoFiltered = data;
        this.headersParams = headerParams;
    }
    sortTable() {
        this.info.sort((a, b) => {
            const param = Object.keys(this.sortedParam).pop();
            if (this.sortedParam[param] === 'ask') {
                return String(a[param]).toLowerCase() <= String(b[param]).toLowerCase() ? -1 : 1;
            }
            else {
                return String(a[param]).toLowerCase() >= String(b[param]).toLowerCase() ? -1 : 1;
            }
        });
    }
    filtration(optionsFilter) {
        optionsFilter.forEach(activeFilter => {
            const callback = activeFilter.ownFilter ?
                activeFilter.ownFilter
                : ((item) => String(item[activeFilter.name]).toLowerCase() === activeFilter.value.toLowerCase());
            this.info = this.info.filter(callback, activeFilter);
        });
    }
    setSortedParam(param) {
        switch (this.sortedParam[param]) {
            case undefined:
                // this.infoSortered = this.info.slice(0);
                this.sortedParam = { [param]: 'ask' };
                this.sortTable();
                break;
            case 'ask':
                this.sortedParam = { [param]: 'desk' };
                this.sortTable();
                break;
            case 'desk':
                // this.info = this.infoSortered.slice(0);
                delete this.sortedParam[param];
                break;
            default:
                break;
        }
        this.dataService.info$.next(this.info);
    }
}
TableService.ɵfac = function TableService_Factory(t) { return new (t || TableService)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵinject"](_panel_filters_panel_filters_service__WEBPACK_IMPORTED_MODULE_1__["PanelFiltersService"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵinject"](_shared_data_service__WEBPACK_IMPORTED_MODULE_2__["DataService"])); };
TableService.ɵprov = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineInjectable"]({ token: TableService, factory: TableService.ɵfac, providedIn: 'root' });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](TableService, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Injectable"],
        args: [{
                providedIn: 'root'
            }]
    }], function () { return [{ type: _panel_filters_panel_filters_service__WEBPACK_IMPORTED_MODULE_1__["PanelFiltersService"] }, { type: _shared_data_service__WEBPACK_IMPORTED_MODULE_2__["DataService"] }]; }, null); })();


/***/ }),

/***/ "Sy1n":
/*!**********************************!*\
  !*** ./src/app/app.component.ts ***!
  \**********************************/
/*! exports provided: AppComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AppComponent", function() { return AppComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! rxjs */ "qCKp");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common/http */ "tk/3");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/common */ "ofXK");
/* harmony import */ var _panel_filters_panel_filters_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./panel-filters/panel-filters.component */ "3m5S");
/* harmony import */ var _table_table_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./table/table.component */ "9Rdk");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/router */ "tyNb");








function AppComponent_ng_container_0_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementContainerStart"](0);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "div", 3);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "div", 4);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](4, "div", 5);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](5);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementContainerEnd"]();
} if (rf & 2) {
    const ctx_r0 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](ctx_r0.isError.name);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](ctx_r0.isError.message);
} }
function AppComponent_ng_container_1_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementContainerStart"](0);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "div", 6);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](2, "Fetching...");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementContainerEnd"]();
} }
const addressTransform = (address) => `${address.city}, ${address.street}`;
const genderUppercase = (gender) => gender.toLocaleUpperCase();
class AppComponent {
    constructor(http) {
        this.http = http;
        this.title = 'table-user';
        this.uri = 'https://gist.githubusercontent.com/bunopus/f48fbb06578003fb521c7c1a54fd906a/raw/e5767c1e7f172c6375f064a9441f2edd57a79f15/test_users.json';
        this.info$ = new rxjs__WEBPACK_IMPORTED_MODULE_1__["BehaviorSubject"]([]);
        this.headersParams = {
            name: { visibility: true, hideColumnSm: false, withPipe: false },
            age: { visibility: true, hideColumnSm: false, withPipe: false },
            gender: { visibility: true, hideColumnSm: false, withPipe: true, pipeFunc: genderUppercase },
            department: { visibility: true, hideColumnSm: false, withPipe: false },
            address: { visibility: true, hideColumnSm: true, withPipe: true, pipeFunc: addressTransform },
        };
        this.isError = false;
        this.isFetching = false;
        this.optionsFilter = ['gender', 'department', 'city'];
        this.optionsInsertedCounter = {
            city: (el) => el.address.city
        };
        this.subscription = null;
        this.ownOptionFilters = {
            city(el) {
                return String(this.value).toLowerCase() === el.address.city.toLowerCase();
            }
        };
    }
    ngOnInit() {
        this.isFetching = true;
        this.subscription = this.fetchTable();
    }
    ngOnDestroy() {
        if (this.subscription !== null) {
            this.subscription.unsubscribe();
            this.subscription = null;
        }
    }
    fetchTable() {
        return this.http.get(this.uri).subscribe((resp) => {
            this.info$.next(resp);
        }, (error) => {
            this.isError = error;
            this.isFetching = false;
        }, () => {
            this.isFetching = false;
        });
    }
}
AppComponent.ɵfac = function AppComponent_Factory(t) { return new (t || AppComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpClient"])); };
AppComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: AppComponent, selectors: [["app-root"]], decls: 5, vars: 7, consts: [[4, "ngIf"], [3, "options", "optionsInsertedCounter", "ownFilters"], [3, "headersParams", "dataTable$"], [1, "error"], [1, "name-error"], [1, "message-error"], [2, "color", "greenyellow", "font-weight", "bold"]], template: function AppComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](0, AppComponent_ng_container_0_Template, 6, 2, "ng-container", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](1, AppComponent_ng_container_1_Template, 3, 0, "ng-container", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](2, "app-panel-filters", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](3, "app-table", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](4, "router-outlet");
    } if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx.isError);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx.isFetching);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("options", ctx.optionsFilter)("optionsInsertedCounter", ctx.optionsInsertedCounter)("ownFilters", ctx.ownOptionFilters);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("headersParams", ctx.headersParams)("dataTable$", ctx.info$);
    } }, directives: [_angular_common__WEBPACK_IMPORTED_MODULE_3__["NgIf"], _panel_filters_panel_filters_component__WEBPACK_IMPORTED_MODULE_4__["PanelFiltersComponent"], _table_table_component__WEBPACK_IMPORTED_MODULE_5__["TableComponent"], _angular_router__WEBPACK_IMPORTED_MODULE_6__["RouterOutlet"]], styles: [".error[_ngcontent-%COMP%] {\n  border: 1px solid crimson;\n  border-radius: 6px;\n  padding: 10px;\n  width: -webkit-max-content;\n  width: max-content;\n  max-width: 50%;\n  margin: auto;\n  overflow: hidden;\n}\n.error[_ngcontent-%COMP%]   .name-error[_ngcontent-%COMP%] {\n  color: crimson;\n}\n.error[_ngcontent-%COMP%]   .message-error[_ngcontent-%COMP%] {\n  font-size: 0.7rem;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvYXBwLmNvbXBvbmVudC5zY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUVBO0VBQ0UseUJBQUE7RUFDQSxrQkFBQTtFQUNBLGFBQUE7RUFDQSwwQkFBQTtFQUFBLGtCQUFBO0VBQ0EsY0FBQTtFQUNBLFlBQUE7RUFDQSxnQkFBQTtBQURGO0FBR0U7RUFDRSxjQUFBO0FBREo7QUFJRTtFQUNFLGlCQUFBO0FBRkoiLCJmaWxlIjoic3JjL2FwcC9hcHAuY29tcG9uZW50LnNjc3MiLCJzb3VyY2VzQ29udGVudCI6WyJcblxuLmVycm9ye1xuICBib3JkZXI6IDFweCBzb2xpZCBjcmltc29uO1xuICBib3JkZXItcmFkaXVzOiA2cHg7XG4gIHBhZGRpbmc6IDEwcHg7XG4gIHdpZHRoOiBtYXgtY29udGVudDtcbiAgbWF4LXdpZHRoOiA1MCU7XG4gIG1hcmdpbjogYXV0bztcbiAgb3ZlcmZsb3c6IGhpZGRlbjtcblxuICAubmFtZS1lcnJvcntcbiAgICBjb2xvcjogY3JpbXNvbjtcbiAgfVxuXG4gIC5tZXNzYWdlLWVycm9ye1xuICAgIGZvbnQtc2l6ZTogMC43cmVtO1xuICB9XG59XG4iXX0= */"] });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](AppComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
                selector: 'app-root',
                templateUrl: './app.component.html',
                styleUrls: ['./app.component.scss']
            }]
    }], function () { return [{ type: _angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpClient"] }]; }, null); })();


/***/ }),

/***/ "ZAI4":
/*!*******************************!*\
  !*** ./src/app/app.module.ts ***!
  \*******************************/
/*! exports provided: AppModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AppModule", function() { return AppModule; });
/* harmony import */ var _angular_platform_browser__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/platform-browser */ "jhN1");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _app_routing_module__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./app-routing.module */ "vY5A");
/* harmony import */ var _app_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./app.component */ "Sy1n");
/* harmony import */ var _table_table_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./table/table.component */ "9Rdk");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/common/http */ "tk/3");
/* harmony import */ var _table_table_module__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./table/table.module */ "sqCO");
/* harmony import */ var _panel_filters_panel_filters_component__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./panel-filters/panel-filters.component */ "3m5S");
/* harmony import */ var _panel_filters_panel_filters_module__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./panel-filters/panel-filters.module */ "/8i3");










class AppModule {
}
AppModule.ɵmod = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineNgModule"]({ type: AppModule, bootstrap: [_app_component__WEBPACK_IMPORTED_MODULE_3__["AppComponent"]] });
AppModule.ɵinj = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineInjector"]({ factory: function AppModule_Factory(t) { return new (t || AppModule)(); }, providers: [], imports: [[
            _angular_platform_browser__WEBPACK_IMPORTED_MODULE_0__["BrowserModule"],
            _angular_common_http__WEBPACK_IMPORTED_MODULE_5__["HttpClientModule"],
            _app_routing_module__WEBPACK_IMPORTED_MODULE_2__["AppRoutingModule"],
            _table_table_module__WEBPACK_IMPORTED_MODULE_6__["TableModule"],
            _panel_filters_panel_filters_module__WEBPACK_IMPORTED_MODULE_8__["PanelFiltersModule"]
        ]] });
(function () { (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵsetNgModuleScope"](AppModule, { declarations: [_app_component__WEBPACK_IMPORTED_MODULE_3__["AppComponent"],
        _table_table_component__WEBPACK_IMPORTED_MODULE_4__["TableComponent"],
        _panel_filters_panel_filters_component__WEBPACK_IMPORTED_MODULE_7__["PanelFiltersComponent"]], imports: [_angular_platform_browser__WEBPACK_IMPORTED_MODULE_0__["BrowserModule"],
        _angular_common_http__WEBPACK_IMPORTED_MODULE_5__["HttpClientModule"],
        _app_routing_module__WEBPACK_IMPORTED_MODULE_2__["AppRoutingModule"],
        _table_table_module__WEBPACK_IMPORTED_MODULE_6__["TableModule"],
        _panel_filters_panel_filters_module__WEBPACK_IMPORTED_MODULE_8__["PanelFiltersModule"]] }); })();
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵsetClassMetadata"](AppModule, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"],
        args: [{
                declarations: [
                    _app_component__WEBPACK_IMPORTED_MODULE_3__["AppComponent"],
                    _table_table_component__WEBPACK_IMPORTED_MODULE_4__["TableComponent"],
                    _panel_filters_panel_filters_component__WEBPACK_IMPORTED_MODULE_7__["PanelFiltersComponent"]
                ],
                imports: [
                    _angular_platform_browser__WEBPACK_IMPORTED_MODULE_0__["BrowserModule"],
                    _angular_common_http__WEBPACK_IMPORTED_MODULE_5__["HttpClientModule"],
                    _app_routing_module__WEBPACK_IMPORTED_MODULE_2__["AppRoutingModule"],
                    _table_table_module__WEBPACK_IMPORTED_MODULE_6__["TableModule"],
                    _panel_filters_panel_filters_module__WEBPACK_IMPORTED_MODULE_8__["PanelFiltersModule"]
                ],
                providers: [],
                bootstrap: [_app_component__WEBPACK_IMPORTED_MODULE_3__["AppComponent"]]
            }]
    }], null, null); })();


/***/ }),

/***/ "kFBd":
/*!***********************************!*\
  !*** ./src/shared/object.pipe.ts ***!
  \***********************************/
/*! exports provided: EntriesPipe, ValuesPipe, LengthPipe */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "EntriesPipe", function() { return EntriesPipe; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ValuesPipe", function() { return ValuesPipe; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "LengthPipe", function() { return LengthPipe; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "fXoL");


class EntriesPipe {
    transform(value) {
        return value ? Object.entries(value).map(
        // tslint:disable-next-line:no-shadowed-variable
        ([key, value]) => ({ key, value })) : null;
    }
}
EntriesPipe.ɵfac = function EntriesPipe_Factory(t) { return new (t || EntriesPipe)(); };
EntriesPipe.ɵpipe = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefinePipe"]({ name: "entries", type: EntriesPipe, pure: false });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](EntriesPipe, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Pipe"],
        args: [{ name: 'entries', pure: false }]
    }], null, null); })();
class ValuesPipe {
    transform(value) {
        return value ? Object.values(value) : null;
    }
}
ValuesPipe.ɵfac = function ValuesPipe_Factory(t) { return new (t || ValuesPipe)(); };
ValuesPipe.ɵpipe = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefinePipe"]({ name: "values", type: ValuesPipe, pure: false });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](ValuesPipe, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Pipe"],
        args: [{ name: 'values', pure: false }]
    }], null, null); })();
class LengthPipe {
    transform(value) {
        return value ? Object.keys(value).length : 0;
    }
}
LengthPipe.ɵfac = function LengthPipe_Factory(t) { return new (t || LengthPipe)(); };
LengthPipe.ɵpipe = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefinePipe"]({ name: "length", type: LengthPipe, pure: false });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](LengthPipe, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Pipe"],
        args: [{ name: 'length', pure: false }]
    }], null, null); })();


/***/ }),

/***/ "qVqJ":
/*!************************************!*\
  !*** ./src/shared/data.service.ts ***!
  \************************************/
/*! exports provided: DataService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "DataService", function() { return DataService; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! rxjs */ "qCKp");



class DataService {
    constructor() {
        this.info$ = new rxjs__WEBPACK_IMPORTED_MODULE_1__["BehaviorSubject"]([]);
    }
}
DataService.ɵfac = function DataService_Factory(t) { return new (t || DataService)(); };
DataService.ɵprov = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineInjectable"]({ token: DataService, factory: DataService.ɵfac, providedIn: 'root' });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](DataService, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Injectable"],
        args: [{
                providedIn: 'root'
            }]
    }], function () { return []; }, null); })();


/***/ }),

/***/ "sqCO":
/*!***************************************!*\
  !*** ./src/app/table/table.module.ts ***!
  \***************************************/
/*! exports provided: TableModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "TableModule", function() { return TableModule; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/common */ "ofXK");
/* harmony import */ var _shared_table_pipe__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../shared/table.pipe */ "4Rpq");




class TableModule {
}
TableModule.ɵmod = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineNgModule"]({ type: TableModule });
TableModule.ɵinj = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineInjector"]({ factory: function TableModule_Factory(t) { return new (t || TableModule)(); }, imports: [[
            _angular_common__WEBPACK_IMPORTED_MODULE_1__["CommonModule"]
        ]] });
(function () { (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵsetNgModuleScope"](TableModule, { declarations: [_shared_table_pipe__WEBPACK_IMPORTED_MODULE_2__["TransformField"], _shared_table_pipe__WEBPACK_IMPORTED_MODULE_2__["VisibilityHeaders"]], imports: [_angular_common__WEBPACK_IMPORTED_MODULE_1__["CommonModule"]], exports: [_shared_table_pipe__WEBPACK_IMPORTED_MODULE_2__["TransformField"], _shared_table_pipe__WEBPACK_IMPORTED_MODULE_2__["VisibilityHeaders"]] }); })();
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](TableModule, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["NgModule"],
        args: [{
                declarations: [
                    _shared_table_pipe__WEBPACK_IMPORTED_MODULE_2__["TransformField"], _shared_table_pipe__WEBPACK_IMPORTED_MODULE_2__["VisibilityHeaders"]
                ],
                exports: [
                    _shared_table_pipe__WEBPACK_IMPORTED_MODULE_2__["TransformField"], _shared_table_pipe__WEBPACK_IMPORTED_MODULE_2__["VisibilityHeaders"]
                ],
                imports: [
                    _angular_common__WEBPACK_IMPORTED_MODULE_1__["CommonModule"]
                ]
            }]
    }], null, null); })();


/***/ }),

/***/ "vY5A":
/*!***************************************!*\
  !*** ./src/app/app-routing.module.ts ***!
  \***************************************/
/*! exports provided: AppRoutingModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AppRoutingModule", function() { return AppRoutingModule; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/router */ "tyNb");




const routes = [];
class AppRoutingModule {
}
AppRoutingModule.ɵmod = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineNgModule"]({ type: AppRoutingModule });
AppRoutingModule.ɵinj = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineInjector"]({ factory: function AppRoutingModule_Factory(t) { return new (t || AppRoutingModule)(); }, imports: [[_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"].forRoot(routes)], _angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"]] });
(function () { (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵsetNgModuleScope"](AppRoutingModule, { imports: [_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"]], exports: [_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"]] }); })();
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](AppRoutingModule, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["NgModule"],
        args: [{
                imports: [_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"].forRoot(routes)],
                exports: [_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"]]
            }]
    }], null, null); })();


/***/ }),

/***/ "zUnb":
/*!*********************!*\
  !*** ./src/main.ts ***!
  \*********************/
/*! no exports provided */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _environments_environment__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./environments/environment */ "AytR");
/* harmony import */ var _app_app_module__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./app/app.module */ "ZAI4");
/* harmony import */ var _angular_platform_browser__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/platform-browser */ "jhN1");




if (_environments_environment__WEBPACK_IMPORTED_MODULE_1__["environment"].production) {
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["enableProdMode"])();
}
_angular_platform_browser__WEBPACK_IMPORTED_MODULE_3__["platformBrowser"]().bootstrapModule(_app_app_module__WEBPACK_IMPORTED_MODULE_2__["AppModule"])
    .catch(err => console.error(err));


/***/ }),

/***/ "zn8P":
/*!******************************************************!*\
  !*** ./$$_lazy_route_resource lazy namespace object ***!
  \******************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

function webpackEmptyAsyncContext(req) {
	// Here Promise.resolve().then() is used instead of new Promise() to prevent
	// uncaught exception popping up in devtools
	return Promise.resolve().then(function() {
		var e = new Error("Cannot find module '" + req + "'");
		e.code = 'MODULE_NOT_FOUND';
		throw e;
	});
}
webpackEmptyAsyncContext.keys = function() { return []; };
webpackEmptyAsyncContext.resolve = webpackEmptyAsyncContext;
module.exports = webpackEmptyAsyncContext;
webpackEmptyAsyncContext.id = "zn8P";

/***/ })

},[[0,"runtime","vendor"]]]);
//# sourceMappingURL=main.js.map