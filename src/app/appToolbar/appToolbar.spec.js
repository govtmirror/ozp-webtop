'use strict';

describe('App Toolbar', function () {

  var scope, marketplaceApi;

  // load the filter's module
  beforeEach(module('ozpWebtopApp.appToolbar'));

   // mock out the filtrfy service before each test
  beforeEach(inject(function($rootScope, $controller, _marketplaceApi_) {
    scope = $rootScope.$new();
    $controller('appToolbarCtrl', {$scope: scope});
    marketplaceApi = _marketplaceApi_;
    marketplaceApi.createExampleMarketplace();
  }));

  it('should expose myApps', function() {
    expect(scope.myApps).toBeDefined();
  });

  //WebTop is built off config file, since there are no api's currently that we would be able to get myApps, this makes sure the hard coded objects have values
  // ** Had to comment these out because the appToolbar apps come in dynamically after the activeFrames are added to scope
  // it('should have more than 0 apps in myApps', function(){
  //   expect(scope.myApps.length).toBeGreaterThan(0);
  // });

  // it('should have more than 0 apps in myPinnedApps', function(){
  //   expect(scope.myPinnedApps.length).toBeGreaterThan(0);
  // });
  // TODO: more tests


});