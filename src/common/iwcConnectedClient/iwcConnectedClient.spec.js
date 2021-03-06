'use strict';

describe('Service: iwcConnectedClient', function () {

  beforeEach(function() {
    angular.mock.module('ozpWebtop.constants', function($provide) {
      $provide.constant('useIwc', true);
    });
  });
  // load the service's module
  beforeEach(module('ozp.common.iwc.client'));

  // instantiate service
  var iwcConnectedClient, rootScope;
  beforeEach(inject(function ($rootScope,
                              _iwcConnectedClient_) {
    rootScope = $rootScope.$new();
    iwcConnectedClient = _iwcConnectedClient_;

  }));

  it('has a getClient method', function() {
    expect(typeof iwcConnectedClient.getClient).toEqual('function');
  });

  // TODO: This integration test works in Chrome but not PhantomJS
  xit('can get a real connected client', function(done) {
    iwcConnectedClient.getClient().then(function(client) {
      expect(client.isConnected()).toEqual(true);
      // and if we get another client, that should work too
      iwcConnectedClient.getClient().then(function(client2) {
        expect(client2.isConnected()).toEqual(true);
        done();
      }).catch(function(error) {
        expect(error).toEqual('should not have happened');
      });
    }).catch(function(error) {
      expect(error).toEqual('should not have happened');
    });

    setTimeout(function() {
      if(!rootScope.$$phase) {
        rootScope.$apply();
      } else {
      }
    }, 1000);

  });

});