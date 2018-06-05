webpackJsonp([1],{

/***/ 118:
/***/ (function(module, exports) {

function webpackEmptyAsyncContext(req) {
	// Here Promise.resolve().then() is used instead of new Promise() to prevent
	// uncatched exception popping up in devtools
	return Promise.resolve().then(function() {
		throw new Error("Cannot find module '" + req + "'.");
	});
}
webpackEmptyAsyncContext.keys = function() { return []; };
webpackEmptyAsyncContext.resolve = webpackEmptyAsyncContext;
module.exports = webpackEmptyAsyncContext;
webpackEmptyAsyncContext.id = 118;

/***/ }),

/***/ 161:
/***/ (function(module, exports, __webpack_require__) {

var map = {
	"../pages/login/login.module": [
		291,
		0
	]
};
function webpackAsyncContext(req) {
	var ids = map[req];
	if(!ids)
		return Promise.reject(new Error("Cannot find module '" + req + "'."));
	return __webpack_require__.e(ids[1]).then(function() {
		return __webpack_require__(ids[0]);
	});
};
webpackAsyncContext.keys = function webpackAsyncContextKeys() {
	return Object.keys(map);
};
webpackAsyncContext.id = 161;
module.exports = webpackAsyncContext;

/***/ }),

/***/ 162:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return ApiProvider; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_common_http__ = __webpack_require__(119);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__ionic_storage__ = __webpack_require__(83);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



/*
  Generated class for the ApiProvider provider.

  See https://angular.io/guide/dependency-injection for more info on providers
  and Angular DI.
*/
var ApiProvider = /** @class */ (function () {
    function ApiProvider(http, storage) {
        this.http = http;
        this.storage = storage;
        this.url = 'https://rotaexata.22s.com.br';
        console.log('storage', storage);
    }
    ApiProvider.prototype.get = function (endpoint, params, reqOpts) {
        if (!reqOpts) {
            reqOpts = {
                params: new __WEBPACK_IMPORTED_MODULE_0__angular_common_http__["c" /* HttpParams */]()
            };
        }
        // Support easy query params for GET requests
        if (params) {
            reqOpts.params = new __WEBPACK_IMPORTED_MODULE_0__angular_common_http__["c" /* HttpParams */]();
            for (var k in params) {
                reqOpts.params = reqOpts.params.set(k, params[k]);
            }
        }
        return this.http.get(this.url + '/' + endpoint, reqOpts);
    };
    ApiProvider.prototype.post = function (endpoint, body, reqOpts) {
        return this.http.post(this.url + '/' + endpoint, body, reqOpts);
    };
    ApiProvider.prototype.put = function (endpoint, body, reqOpts) {
        return this.http.put(this.url + '/' + endpoint, body, reqOpts);
    };
    ApiProvider.prototype.delete = function (endpoint, reqOpts) {
        return this.http.delete(this.url + '/' + endpoint, reqOpts);
    };
    ApiProvider.prototype.patch = function (endpoint, body, reqOpts) {
        return this.http.patch(this.url + '/' + endpoint, body, reqOpts);
    };
    ApiProvider.prototype.getDbLocal = function (key) {
        return this.storage.get(key);
    };
    ApiProvider.prototype.saveDbLocal = function (key, data) {
        return this.storage.set(key, data);
    };
    ApiProvider.prototype.removeDbLocal = function (key) {
        return this.storage.remove(key);
    };
    ApiProvider = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_1__angular_core__["A" /* Injectable */])(),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_0__angular_common_http__["a" /* HttpClient */], __WEBPACK_IMPORTED_MODULE_2__ionic_storage__["b" /* Storage */]])
    ], ApiProvider);
    return ApiProvider;
}());

//# sourceMappingURL=api.js.map

/***/ }),

/***/ 163:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return SettingsPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__providers_settings_settings__ = __webpack_require__(48);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__login_login__ = __webpack_require__(54);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__providers_auth_auth__ = __webpack_require__(46);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4_ionic_angular__ = __webpack_require__(25);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__pattern_lock_pattern_lock__ = __webpack_require__(47);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__models_settings_model__ = __webpack_require__(164);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7__providers_util_util__ = __webpack_require__(49);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};








// import { SettingsProvider } from '../../providers/settings/settings';
/**
 * Generated class for the SettingsPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */
var SettingsPage = /** @class */ (function () {
    function SettingsPage(navCtrl, settings, navParams, auth, util) {
        this.navCtrl = navCtrl;
        this.settings = settings;
        this.navParams = navParams;
        this.auth = auth;
        this.util = util;
        this.settingsReady = false;
    }
    SettingsPage.prototype.ionViewDidLoad = function () {
        console.log('ionViewDidLoad SettingsPage');
    };
    SettingsPage.prototype.ionViewWillEnter = function () {
        var _this = this;
        console.log('ionViewWillEnter');
        this.util.showLoading();
        this.settings.load().then(function () {
            _this.settingsReady = true;
            _this.options = _this.settings.allSettings;
            console.log('settings settigns', _this.options);
            _this.util.dismissLoading();
        }, function (err) { _this.util.dismissLoading(); });
    };
    SettingsPage.prototype.editPattern = function () {
        console.log('editPattern', this.options.patternProtect.protect);
        var type = '';
        if (this.options.patternProtect.protect) {
            type = 'edit';
        }
        else {
            type = 'remove';
        }
        this.navCtrl.push(__WEBPACK_IMPORTED_MODULE_5__pattern_lock_pattern_lock__["a" /* PatternLockPage */], { type: type });
    };
    SettingsPage.prototype.signOut = function () {
        var _this = this;
        this.auth.logout().then(function (res) {
            _this.settings.setAll(new __WEBPACK_IMPORTED_MODULE_6__models_settings_model__["a" /* Settings */]());
            _this.navCtrl.setRoot(__WEBPACK_IMPORTED_MODULE_1__login_login__["a" /* LoginPage */]);
        }, function (err) { });
    };
    SettingsPage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_3__angular_core__["m" /* Component */])({
            selector: 'page-settings',template:/*ion-inline-start:"/home/dev/Área de Trabalho/Desenvolvimento/rotaexata/src/pages/settings/settings.html"*/'<!--\n  Generated template for the SettingsPage page.\n\n  See http://ionicframework.com/docs/components/#navigation for more info on\n  Ionic pages and navigation.\n-->\n<ion-header>\n\n  <ion-navbar>\n    <ion-title>Configurações</ion-title>\n  </ion-navbar>\n\n</ion-header>\n\n\n<ion-content>\n  <ion-list *ngIf="settingsReady">\n    <ion-item>\n      <ion-label>Proteger tela</ion-label>\n      <ion-checkbox name="patternProtect" color="dark" [(ngModel)]="options.patternProtect.protect" (click)="editPattern()"></ion-checkbox>\n    </ion-item>\n\n    <ion-item *ngIf="options.patternProtect.protect">\n      <button class="button is-fullwidth" (click)="editPattern()" full>Editar senha</button>\n    </ion-item>\n  </ion-list>\n\n  <ion-list>\n    <ion-item>\n      <button class="button is-block is-info is-large is-fullwidth" (click)="signOut()" full>Sair</button>\n    </ion-item>\n  </ion-list>\n\n\n</ion-content>'/*ion-inline-end:"/home/dev/Área de Trabalho/Desenvolvimento/rotaexata/src/pages/settings/settings.html"*/,
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_4_ionic_angular__["g" /* NavController */], __WEBPACK_IMPORTED_MODULE_0__providers_settings_settings__["a" /* SettingsProvider */], __WEBPACK_IMPORTED_MODULE_4_ionic_angular__["h" /* NavParams */], __WEBPACK_IMPORTED_MODULE_2__providers_auth_auth__["a" /* AuthProvider */], __WEBPACK_IMPORTED_MODULE_7__providers_util_util__["a" /* UtilProvider */]])
    ], SettingsPage);
    return SettingsPage;
}());

//# sourceMappingURL=settings.js.map

/***/ }),

/***/ 164:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return Settings; });
var Settings = /** @class */ (function () {
    function Settings(patternProtect) {
        if (patternProtect === void 0) { patternProtect = { protect: true, pass: '', firstLogin: true }; }
        this.patternProtect = patternProtect;
    }
    return Settings;
}());

//# sourceMappingURL=settings.model.js.map

/***/ }),

/***/ 208:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_platform_browser_dynamic__ = __webpack_require__(209);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__app_module__ = __webpack_require__(229);


Object(__WEBPACK_IMPORTED_MODULE_0__angular_platform_browser_dynamic__["a" /* platformBrowserDynamic */])().bootstrapModule(__WEBPACK_IMPORTED_MODULE_1__app_module__["a" /* AppModule */]);
//# sourceMappingURL=main.js.map

/***/ }),

/***/ 229:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* unused harmony export provideSettings */
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AppModule; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_common_http__ = __webpack_require__(119);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_platform_browser__ = __webpack_require__(31);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_ionic_angular__ = __webpack_require__(25);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__ionic_native_splash_screen__ = __webpack_require__(204);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__ionic_native_status_bar__ = __webpack_require__(207);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__ionic_storage__ = __webpack_require__(83);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7__app_component__ = __webpack_require__(290);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_8__pages_home_home__ = __webpack_require__(85);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_9__pages_login_login__ = __webpack_require__(54);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_10__providers_auth_auth__ = __webpack_require__(46);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_11__providers_api_api__ = __webpack_require__(162);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_12__providers_settings_settings__ = __webpack_require__(48);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_13__pages_settings_settings__ = __webpack_require__(163);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_14__pages_pattern_lock_pattern_lock__ = __webpack_require__(47);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_15__models_settings_model__ = __webpack_require__(164);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_16__providers_util_util__ = __webpack_require__(49);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};

















function provideSettings(storage) {
    /**
     * The Settings provider takes a set of default settings for your app.
     *
     * You can add new settings options at any time. Once the settings are saved,
     * these values will not overwrite the saved values (this can be done manually if desired).
     */
    return new __WEBPACK_IMPORTED_MODULE_12__providers_settings_settings__["a" /* SettingsProvider */](storage, new __WEBPACK_IMPORTED_MODULE_15__models_settings_model__["a" /* Settings */]());
}
var AppModule = /** @class */ (function () {
    function AppModule() {
    }
    AppModule = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_2__angular_core__["I" /* NgModule */])({
            declarations: [
                __WEBPACK_IMPORTED_MODULE_7__app_component__["a" /* MyApp */],
                __WEBPACK_IMPORTED_MODULE_8__pages_home_home__["a" /* HomePage */],
                __WEBPACK_IMPORTED_MODULE_9__pages_login_login__["a" /* LoginPage */],
                __WEBPACK_IMPORTED_MODULE_13__pages_settings_settings__["a" /* SettingsPage */],
                __WEBPACK_IMPORTED_MODULE_14__pages_pattern_lock_pattern_lock__["a" /* PatternLockPage */]
            ],
            imports: [
                __WEBPACK_IMPORTED_MODULE_1__angular_platform_browser__["a" /* BrowserModule */],
                __WEBPACK_IMPORTED_MODULE_0__angular_common_http__["b" /* HttpClientModule */],
                __WEBPACK_IMPORTED_MODULE_3_ionic_angular__["c" /* IonicModule */].forRoot(__WEBPACK_IMPORTED_MODULE_7__app_component__["a" /* MyApp */], {}, {
                    links: [
                        { loadChildren: '../pages/login/login.module#LoginPageModule', name: 'LoginPage', segment: 'login', priority: 'low', defaultHistory: [] }
                    ]
                }),
                __WEBPACK_IMPORTED_MODULE_6__ionic_storage__["a" /* IonicStorageModule */].forRoot()
            ],
            bootstrap: [__WEBPACK_IMPORTED_MODULE_3_ionic_angular__["a" /* IonicApp */]],
            entryComponents: [
                __WEBPACK_IMPORTED_MODULE_7__app_component__["a" /* MyApp */],
                __WEBPACK_IMPORTED_MODULE_8__pages_home_home__["a" /* HomePage */],
                __WEBPACK_IMPORTED_MODULE_9__pages_login_login__["a" /* LoginPage */],
                __WEBPACK_IMPORTED_MODULE_13__pages_settings_settings__["a" /* SettingsPage */],
                __WEBPACK_IMPORTED_MODULE_14__pages_pattern_lock_pattern_lock__["a" /* PatternLockPage */]
            ],
            providers: [
                __WEBPACK_IMPORTED_MODULE_5__ionic_native_status_bar__["a" /* StatusBar */],
                __WEBPACK_IMPORTED_MODULE_4__ionic_native_splash_screen__["a" /* SplashScreen */],
                { provide: __WEBPACK_IMPORTED_MODULE_12__providers_settings_settings__["a" /* SettingsProvider */], useFactory: provideSettings, deps: [__WEBPACK_IMPORTED_MODULE_6__ionic_storage__["b" /* Storage */]] },
                { provide: __WEBPACK_IMPORTED_MODULE_2__angular_core__["u" /* ErrorHandler */], useClass: __WEBPACK_IMPORTED_MODULE_3_ionic_angular__["b" /* IonicErrorHandler */] },
                __WEBPACK_IMPORTED_MODULE_10__providers_auth_auth__["a" /* AuthProvider */],
                __WEBPACK_IMPORTED_MODULE_11__providers_api_api__["a" /* ApiProvider */],
                __WEBPACK_IMPORTED_MODULE_16__providers_util_util__["a" /* UtilProvider */]
            ]
        })
    ], AppModule);
    return AppModule;
}());

//# sourceMappingURL=app.module.js.map

/***/ }),

/***/ 290:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return MyApp; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__providers_auth_auth__ = __webpack_require__(46);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__pages_login_login__ = __webpack_require__(54);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_ionic_angular__ = __webpack_require__(25);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__ionic_native_status_bar__ = __webpack_require__(207);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__ionic_native_splash_screen__ = __webpack_require__(204);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__pages_home_home__ = __webpack_require__(85);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7__environments_environments__ = __webpack_require__(84);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_8__providers_settings_settings__ = __webpack_require__(48);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_9__pages_pattern_lock_pattern_lock__ = __webpack_require__(47);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};










var MyApp = /** @class */ (function () {
    function MyApp(platform, statusBar, splashScreen, settings, auth) {
        var _this = this;
        this.pages = [
            { title: 'Home', component: 'HomePage' },
            { title: 'Settings', component: 'SettingsPage' },
        ];
        auth.api.getDbLocal(__WEBPACK_IMPORTED_MODULE_7__environments_environments__["a" /* environment */].userAuthName).then(function (user) {
            if (!user) {
                // you can modify here the page for non. auth users]
                _this.rootPage = __WEBPACK_IMPORTED_MODULE_1__pages_login_login__["a" /* LoginPage */];
            }
            else {
                settings.load().then(function () {
                    // console.log(settings.allSettings.patternProtect.protect);
                    if (settings.allSettings.patternProtect.protect) {
                        _this.rootPage = __WEBPACK_IMPORTED_MODULE_9__pages_pattern_lock_pattern_lock__["a" /* PatternLockPage */];
                    }
                    else {
                        // page for auth. users
                        _this.rootPage = __WEBPACK_IMPORTED_MODULE_6__pages_home_home__["a" /* HomePage */];
                    }
                });
            }
        });
        platform.ready().then(function () {
            // Okay, so the platform is ready and our plugins are available.
            // Here you can do any higher level native things you might need.
            statusBar.styleDefault();
            splashScreen.hide();
        });
    }
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_2__angular_core__["_8" /* ViewChild */])(__WEBPACK_IMPORTED_MODULE_3_ionic_angular__["f" /* Nav */]),
        __metadata("design:type", __WEBPACK_IMPORTED_MODULE_3_ionic_angular__["f" /* Nav */])
    ], MyApp.prototype, "nav", void 0);
    MyApp = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_2__angular_core__["m" /* Component */])({template:/*ion-inline-start:"/home/dev/Área de Trabalho/Desenvolvimento/rotaexata/src/app/app.html"*/'<ion-nav #content [root]="rootPage"></ion-nav>\n'/*ion-inline-end:"/home/dev/Área de Trabalho/Desenvolvimento/rotaexata/src/app/app.html"*/
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_3_ionic_angular__["i" /* Platform */],
            __WEBPACK_IMPORTED_MODULE_4__ionic_native_status_bar__["a" /* StatusBar */],
            __WEBPACK_IMPORTED_MODULE_5__ionic_native_splash_screen__["a" /* SplashScreen */],
            __WEBPACK_IMPORTED_MODULE_8__providers_settings_settings__["a" /* SettingsProvider */],
            __WEBPACK_IMPORTED_MODULE_0__providers_auth_auth__["a" /* AuthProvider */]])
    ], MyApp);
    return MyApp;
}());

//# sourceMappingURL=app.component.js.map

/***/ }),

/***/ 46:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AuthProvider; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_rxjs_add_operator_toPromise__ = __webpack_require__(259);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_rxjs_add_operator_toPromise___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0_rxjs_add_operator_toPromise__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__api_api__ = __webpack_require__(162);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__environments_environments__ = __webpack_require__(84);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};




/*
  Generated class for the AuthProvider provider.

  See https://angular.io/guide/dependency-injection for more info on providers
  and Angular DI.
*/
var AuthProvider = /** @class */ (function () {
    function AuthProvider(api) {
        var _this = this;
        this.api = api;
        api.getDbLocal(__WEBPACK_IMPORTED_MODULE_3__environments_environments__["a" /* environment */].userAuthName).then(function (res) {
            _this._user = res;
            console.log('auth user', _this._user);
        });
        ;
    }
    /**
     * Send a POST request to our login endpoint with the data
     * the user entered on the form.
     */
    AuthProvider.prototype.login = function (accountInfo) {
        var _this = this;
        var seq = this.api.post('usuarios/loginApp', accountInfo);
        seq.subscribe(function (res) {
            console.log("resLogin", res);
            // If the API returned a successful response, mark the user as logged in
            if (res.status) {
                _this._loggedIn(res);
            }
            else {
            }
        }, function (err) {
            console.error('ERROR', err);
        });
        return seq;
    };
    /**
     * Log the user out, which forgets the session
     */
    AuthProvider.prototype.logout = function () {
        var _this = this;
        return new Promise(function (resolve, reject) {
            _this._user = null;
            _this.api.removeDbLocal(__WEBPACK_IMPORTED_MODULE_3__environments_environments__["a" /* environment */].userAuthName).then(function (res) { resolve(true); }, function (err) { reject(false); });
        });
    };
    /**
     * Process a login/signup response to store user data
     */
    AuthProvider.prototype._loggedIn = function (resp) {
        this._user = resp;
        console.log('_loggedIn', this._user);
        this.api.saveDbLocal(__WEBPACK_IMPORTED_MODULE_3__environments_environments__["a" /* environment */].userAuthName, this._user);
    };
    AuthProvider = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_1__angular_core__["A" /* Injectable */])(),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_2__api_api__["a" /* ApiProvider */]])
    ], AuthProvider);
    return AuthProvider;
}());

//# sourceMappingURL=auth.js.map

/***/ }),

/***/ 47:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return PatternLockPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(25);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__providers_settings_settings__ = __webpack_require__(48);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__home_home__ = __webpack_require__(85);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};




// import { PatternLock } from 'patternlock';
/**
 * Generated class for the PatternLockPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */
var PatternLockPage = /** @class */ (function () {
    function PatternLockPage(navCtrl, settings, navParams, viewCtrl) {
        var _this = this;
        this.navCtrl = navCtrl;
        this.settings = settings;
        this.navParams = navParams;
        this.viewCtrl = viewCtrl;
        this.showConfirmKey = false;
        this.checkingKey = false;
        this.onDrawValue = '';
        this.type = '';
        this.type = this.navParams.get('type');
        console.log('type', this.type);
        settings.getValue('patternProtect').then(function (res) {
            console.log('patternProtect', res);
            _this.mySettings = res;
            _this.loadPattern();
        });
    }
    PatternLockPage.prototype.loadPattern = function () {
        var PatternLock = __webpack_require__(263);
        var vm = this;
        this.lock = new PatternLock('#patternContainer', {
            onDraw: function (pattern) {
                console.log('onDraw', pattern);
                vm.onDrawValue = pattern;
                vm.choseType();
            }
        });
        this.choseType();
    };
    PatternLockPage.prototype.t = function () {
        console.log("ola");
    };
    PatternLockPage.prototype.choseType = function () {
        console.log("choseType");
        switch (this.type) {
            default:
                if (this.mySettings.firstLogin) {
                    this.newPattern();
                }
                else {
                    if (this.mySettings.pass && this.type == undefined) {
                        this.enterCheck();
                        this.title = "Senha de Acesso";
                    }
                    else {
                        this.newPattern();
                    }
                }
                break;
            case 'remove':
                this.title = "Senha de Acesso Atual";
                this.enterCheck();
                break;
        }
        ;
    };
    PatternLockPage.prototype.ionViewDidLoad = function () {
        console.log('ionViewDidLoad PatternLockPage');
    };
    PatternLockPage.prototype.newPattern = function () {
        console.log("newPattern");
        console.log(this.showConfirmKey, this.checkingKey);
        console.log('value', this.onDrawValue);
        if (this.onDrawValue || this.checkingKey) {
            this.showConfirmKey = true;
            if (this.checkingKey && this.mySettings.pass == this.onDrawValue) {
                console.log('confirm');
                this.mySettings.protect = true;
                this.settings.setValue('patternProtect', this.mySettings);
                if (this.mySettings.firstLogin) {
                    this.mySettings.firstLogin = false;
                    this.navCtrl.setRoot(__WEBPACK_IMPORTED_MODULE_3__home_home__["a" /* HomePage */]);
                }
                else {
                    this.viewCtrl.dismiss();
                }
            }
            else {
                if (this.checkingKey) {
                    console.log("error");
                    this.lock.error();
                }
            }
        }
        else {
            this.title = "Definir Senha de Acesso";
        }
    };
    PatternLockPage.prototype.enterCheck = function () {
        var vm = this;
        this.lock.checkForPattern(this.mySettings.pass, function () {
            if (vm.type == 'edit') {
                vm.lock.reset();
                vm.onDrawValue = '';
                vm.newPattern();
            }
            else if (vm.type == 'remove') {
                vm.mySettings.protect = false;
                vm.mySettings.pass = '';
                vm.settings.setValue('patternProtect', vm.mySettings);
                vm.viewCtrl.dismiss();
            }
            else {
                vm.navCtrl.setRoot(__WEBPACK_IMPORTED_MODULE_3__home_home__["a" /* HomePage */]);
            }
        }, function () {
            console.log("Pattern is not correct");
        });
    };
    PatternLockPage.prototype.confirmKey = function () {
        this.title = "Confirmar Senha de Acesso";
        this.checkingKey = true;
        this.mySettings.pass = this.onDrawValue;
        this.lock.reset();
        this.onDrawValue = '';
    };
    PatternLockPage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["m" /* Component */])({
            selector: 'page-pattern-lock',template:/*ion-inline-start:"/home/dev/Área de Trabalho/Desenvolvimento/rotaexata/src/pages/pattern-lock/pattern-lock.html"*/'<!--\n  Generated template for the PatternLockPage page.\n\n  See http://ionicframework.com/docs/components/#navigation for more info on\n  Ionic pages and navigation.\n-->\n<ion-header>\n\n  <ion-navbar>\n    <ion-title>{{title}}</ion-title>\n  </ion-navbar>\n\n</ion-header>\n\n\n<ion-content padding>\n  <div class="hero-body">\n    <div class="container has-text-centered">\n      <div class="column is-4 is-offset-4">\n        <div class="">\n          <div id=\'patternContainer\'></div>\n        </div>\n        <ion-item *ngIf="showConfirmKey && !checkingKey">\n          <button class="button is-block is-info is-large is-fullwidth" (click)="confirmKey()" full>Confirmar senha</button>\n        </ion-item>\n      </div>\n    </div>\n  </div>\n</ion-content>'/*ion-inline-end:"/home/dev/Área de Trabalho/Desenvolvimento/rotaexata/src/pages/pattern-lock/pattern-lock.html"*/,
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["g" /* NavController */],
            __WEBPACK_IMPORTED_MODULE_2__providers_settings_settings__["a" /* SettingsProvider */],
            __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["h" /* NavParams */],
            __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["k" /* ViewController */]])
    ], PatternLockPage);
    return PatternLockPage;
}());

//# sourceMappingURL=pattern-lock.js.map

/***/ }),

/***/ 48:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return SettingsProvider; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__ionic_storage__ = __webpack_require__(83);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_core__ = __webpack_require__(0);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


/*
  Generated class for the SettingsProvider provider.

  See https://angular.io/guide/dependency-injection for more info on providers
  and Angular DI.
*/
var SettingsProvider = /** @class */ (function () {
    function SettingsProvider(storage, defaults) {
        this.storage = storage;
        this.SETTINGS_KEY = '_settings';
        this._defaults = defaults;
        console.log('SettingsProvider', this._defaults);
        this.load().then(function (e) {
            if (e) {
                console.log('settings loaded', e);
            }
        });
    }
    SettingsProvider.prototype.load = function () {
        var _this = this;
        return this.storage.get(this.SETTINGS_KEY).then(function (value) {
            if (value) {
                _this.settings = value;
                return _this._mergeDefaults(_this._defaults);
            }
            else {
                return _this.setAll(_this._defaults).then(function (val) {
                    _this.settings = val;
                });
            }
        });
    };
    SettingsProvider.prototype._mergeDefaults = function (defaults) {
        for (var k in defaults) {
            if (!(k in this.settings)) {
                this.settings[k] = defaults[k];
            }
        }
        return this.setAll(this.settings);
    };
    SettingsProvider.prototype.merge = function (settings) {
        for (var k in settings) {
            this.settings[k] = settings[k];
        }
        return this.save();
    };
    SettingsProvider.prototype.setValue = function (key, value) {
        this.settings[key] = value;
        return this.storage.set(this.SETTINGS_KEY, this.settings);
    };
    SettingsProvider.prototype.setAll = function (value) {
        return this.storage.set(this.SETTINGS_KEY, value);
    };
    SettingsProvider.prototype.getValue = function (key) {
        return this.storage.get(this.SETTINGS_KEY)
            .then(function (settings) {
            return settings[key];
        });
    };
    SettingsProvider.prototype.save = function () {
        return this.setAll(this.settings);
    };
    Object.defineProperty(SettingsProvider.prototype, "allSettings", {
        get: function () {
            return this.settings;
        },
        enumerable: true,
        configurable: true
    });
    SettingsProvider = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_1__angular_core__["A" /* Injectable */])(),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_0__ionic_storage__["b" /* Storage */], Object])
    ], SettingsProvider);
    return SettingsProvider;
}());

//# sourceMappingURL=settings.js.map

/***/ }),

/***/ 49:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return UtilProvider; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__environments_environments__ = __webpack_require__(84);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_ionic_angular__ = __webpack_require__(25);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



/*
  Generated class for the UtilProvider provider.

  See https://angular.io/guide/dependency-injection for more info on providers
  and Angular DI.
*/
var UtilProvider = /** @class */ (function () {
    function UtilProvider(loadingCtrl, toastCtrl) {
        this.loadingCtrl = loadingCtrl;
        this.toastCtrl = toastCtrl;
    }
    UtilProvider.prototype.presentToast = function (message) {
        this.toastCtrl.create({
            message: message,
            duration: 3000,
            position: 'bottom'
        }).present();
    };
    UtilProvider.prototype.showLoading = function () {
        this.loading = this.loadingCtrl.create({
            content: __WEBPACK_IMPORTED_MODULE_0__environments_environments__["a" /* environment */].loadingContentMessage
        });
        this.loading.present();
    };
    UtilProvider.prototype.dismissLoading = function () {
        this.loading.dismiss();
    };
    UtilProvider = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_1__angular_core__["A" /* Injectable */])(),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_2_ionic_angular__["e" /* LoadingController */], __WEBPACK_IMPORTED_MODULE_2_ionic_angular__["j" /* ToastController */]])
    ], UtilProvider);
    return UtilProvider;
}());

//# sourceMappingURL=util.js.map

/***/ }),

/***/ 54:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return LoginPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__providers_auth_auth__ = __webpack_require__(46);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_ionic_angular__ = __webpack_require__(25);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__pattern_lock_pattern_lock__ = __webpack_require__(47);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__providers_util_util__ = __webpack_require__(49);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};





/**
 * Generated class for the LoginPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */
var LoginPage = /** @class */ (function () {
    function LoginPage(navCtrl, auth, navParams, util) {
        this.navCtrl = navCtrl;
        this.auth = auth;
        this.navParams = navParams;
        this.util = util;
        this.account = {
            email: '47997478544',
            senha: 'qwe'
        };
    }
    LoginPage.prototype.ionViewDidLoad = function () {
        console.log('ionViewDidLoad LoginPage');
    };
    // Attempt to login in through our User service
    LoginPage.prototype.doLogin = function () {
        var _this = this;
        this.util.showLoading();
        this.auth.login(this.account).subscribe(function (res) {
            console.log("doLogin", res);
            // If the API returned a successful response, mark the user as logged in
            _this.util.dismissLoading();
            if (res.status) {
                _this.navCtrl.setRoot(__WEBPACK_IMPORTED_MODULE_3__pattern_lock_pattern_lock__["a" /* PatternLockPage */]);
            }
            else {
                _this.util.presentToast("(Erro) Login incorreto!");
            }
        }, function (err) {
            _this.util.dismissLoading();
            _this.util.presentToast("(Erro) Erro desconhecido!");
            console.error('doLogin ERROR', err);
        });
    };
    LoginPage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_1__angular_core__["m" /* Component */])({
            selector: 'page-login',template:/*ion-inline-start:"/home/dev/Área de Trabalho/Desenvolvimento/rotaexata/src/pages/login/login.html"*/'<!--\n  Generated template for the LoginPage page.\n\n  See http://ionicframework.com/docs/components/#navigation for more info on\n  Ionic pages and navigation.\n-->\n\n\n<ion-content>\n  <div class="hero-body">\n    <div class="container has-text-centered">\n      <div class="column is-4 is-offset-4">\n        <h3 class="title has-text-grey">Login</h3>\n        <p class="subtitle has-text-grey">Por favor, logue-se para proceder.</p>\n        <div class="box">\n          <figure class="avatar">\n            <img src="assets/imgs/logoRotaexata.png" style="height: 50px;">\n          </figure>\n          <form (submit)="doLogin()">\n              <div class="field">\n                  <div class="control">\n                      <ion-input type="email" class="input is-large" [(ngModel)]="account.email" name="login" placeholder="Seu Email"></ion-input>\n                  </div>\n              </div>\n\n              <div class="field">\n                  <div class="control">\n                      <ion-input type="password" class="input is-large" [(ngModel)]="account.senha" name="password" placeholder="Sua senha"></ion-input>\n                  </div>\n              </div>\n            <button class="button is-block is-info is-large is-fullwidth">Login</button>\n          </form>\n        </div>\n        <p class="has-text-grey">\n            &nbsp;·&nbsp;\n            <a href="../">Esqueci minha senha</a> &nbsp;·&nbsp;\n        </p>\n      </div>\n    </div>\n  </div>\n</ion-content>\n'/*ion-inline-end:"/home/dev/Área de Trabalho/Desenvolvimento/rotaexata/src/pages/login/login.html"*/,
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_2_ionic_angular__["g" /* NavController */], __WEBPACK_IMPORTED_MODULE_0__providers_auth_auth__["a" /* AuthProvider */], __WEBPACK_IMPORTED_MODULE_2_ionic_angular__["h" /* NavParams */], __WEBPACK_IMPORTED_MODULE_4__providers_util_util__["a" /* UtilProvider */]])
    ], LoginPage);
    return LoginPage;
}());

//# sourceMappingURL=login.js.map

/***/ }),

/***/ 84:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return environment; });
var environment = {
    userAuthName: "userAuth",
    loadingContentMessage: "Carregando"
};
//# sourceMappingURL=environments.js.map

/***/ }),

/***/ 85:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return HomePage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(25);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__settings_settings__ = __webpack_require__(163);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__providers_util_util__ = __webpack_require__(49);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};




var HomePage = /** @class */ (function () {
    function HomePage(navCtrl, hostElement, util) {
        this.navCtrl = navCtrl;
        this.hostElement = hostElement;
        this.util = util;
        this.data = { url: "https://igorfachini.github.io/test/webtest/templates/cover.html" };
        console.log('this', this);
    }
    HomePage.prototype.ngOnInit = function () {
        this.iframe = this.hostElement.nativeElement.querySelector('iframe');
        // this.iframe.progress(e => {
        //   console.log('progress',e);
        // });
        this.setUrl(this.data.url);
    };
    HomePage.prototype.setUrl = function (url) {
        this.util.showLoading();
        this.iframe.src = url;
    };
    HomePage.prototype.t = function (e) {
        console.log('testeeeeeeeee');
    };
    HomePage.prototype.iframeOnLoad = function (e) {
        console.log('iframeOnLoad', e);
        if (this.util.loading.instance) {
            this.util.dismissLoading();
        }
    };
    HomePage.prototype.openSettings = function () {
        this.navCtrl.push(__WEBPACK_IMPORTED_MODULE_2__settings_settings__["a" /* SettingsPage */]);
    };
    HomePage.prototype.openMenu = function () {
        this.setUrl("https://www.rotaexata.com.br/menu.html");
        console.log("menu");
    };
    HomePage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["m" /* Component */])({
            selector: 'page-home',template:/*ion-inline-start:"/home/dev/Área de Trabalho/Desenvolvimento/rotaexata/src/pages/home/home.html"*/'<ion-header>\n  <ion-navbar>\n    <ion-buttons left>\n      <button ion-button icon-only (click)="openMenu()">\n        <ion-icon name="menu"></ion-icon>\n      </button>\n    </ion-buttons>\n    <ion-title class="title-md">\n      <img src="assets/imgs/logoRotaexata.png">\n    </ion-title>\n    <ion-buttons right>\n      <button ion-button icon-only (click)="openSettings()">\n        <ion-icon name="md-settings"></ion-icon>\n      </button>\n    </ion-buttons>\n  </ion-navbar>\n</ion-header>\n\n<ion-content>\n  <ion-content scroll="true" overflow-scroll="true" class="iframe-wrapper">\n    <iframe data-tap-disabled="true" src="data.url" (load)="iframeOnLoad(this)" (unload)="t(this)"></iframe>\n  </ion-content>\n</ion-content>\n'/*ion-inline-end:"/home/dev/Área de Trabalho/Desenvolvimento/rotaexata/src/pages/home/home.html"*/
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["g" /* NavController */], __WEBPACK_IMPORTED_MODULE_0__angular_core__["t" /* ElementRef */], __WEBPACK_IMPORTED_MODULE_3__providers_util_util__["a" /* UtilProvider */]])
    ], HomePage);
    return HomePage;
}());

//# sourceMappingURL=home.js.map

/***/ })

},[208]);
//# sourceMappingURL=main.js.map