'use strict';

var app = angular.module('ozpWebtopApp.apis');

app.service('localStorageUserSettingsApiImpl', function($http, LocalStorage) {
  var cache = new LocalStorage(localStorage, JSON);

  this.getUserSettings = function() {
    var userSettings = cache.getItem('userSettings');
    return userSettings;
  };

  this.updateAllUserSettings = function(userSettings) {
    cache.setItem('userSettings', userSettings);
  };

  this.updateUserSettingByKey = function(key, setting) {
    var userSettings = this.getUserSettings();
    for (var a in userSettings) {
      if (a === key) {
        delete userSettings[a];
      }
      userSettings[key] = setting;
    }
    cache.setItem('userSettings', userSettings);
  };

  this.createExampleUserSettings = function() {
    var userSettings = {
      'theme': 'dark',
      'autohideToolbars': false
    };
    this.updateAllUserSettings(userSettings);
  };
});


app.service('iwcUserSettingsApiImpl', function(/*dependencies*/) {
  this.getUserSettings = function() {};
  this.updateAllUserSettings = function() {};
});


app.factory('userSettingsApi', function($window, $injector) {
  // TODO: what to key off of to determine if IWC impl should be used?
  if ($window.iwc) {
    return $injector.get('iwcUserSettingsApiImpl');
  } else {
    return $injector.get('localStorageUserSettingsApiImpl');
  }
});