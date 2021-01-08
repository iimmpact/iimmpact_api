/*
 * IIMMPACT API
 * No description provided (generated by Swagger Codegen https://github.com/swagger-api/swagger-codegen)
 *
 * OpenAPI spec version: 2020-09-14T13:01:14Z
 *
 * NOTE: This class is auto generated by the swagger code generator program.
 * https://github.com/swagger-api/swagger-codegen.git
 *
 * Swagger Codegen version: 2.4.17
 *
 * Do not edit the class manually.
 *
 */

(function(root, factory) {
  if (typeof define === 'function' && define.amd) {
    // AMD.
    define(['expect.js', '../../src/index'], factory);
  } else if (typeof module === 'object' && module.exports) {
    // CommonJS-like environments that support module.exports, like Node.
    factory(require('expect.js'), require('../../src/index'));
  } else {
    // Browser globals (root is window)
    factory(root.expect, root.IimmpactApi);
  }
}(this, function(expect, IimmpactApi) {
  'use strict';

  var instance;

  describe('(package)', function() {
    describe('NetworkStatusResponseData', function() {
      beforeEach(function() {
        instance = new IimmpactApi.NetworkStatusResponseData();
      });

      it('should create an instance of NetworkStatusResponseData', function() {
        // TODO: update the code to test NetworkStatusResponseData
        expect(instance).to.be.a(IimmpactApi.NetworkStatusResponseData);
      });

      it('should have the property productCode (base name: "product_code")', function() {
        // TODO: update the code to test the property productCode
        expect(instance).to.have.property('productCode');
        // expect(instance.productCode).to.be(expectedValueLiteral);
      });

      it('should have the property productName (base name: "product_name")', function() {
        // TODO: update the code to test the property productName
        expect(instance).to.have.property('productName');
        // expect(instance.productName).to.be(expectedValueLiteral);
      });

      it('should have the property productImg (base name: "product_img")', function() {
        // TODO: update the code to test the property productImg
        expect(instance).to.have.property('productImg');
        // expect(instance.productImg).to.be(expectedValueLiteral);
      });

      it('should have the property networkStatus (base name: "network_status")', function() {
        // TODO: update the code to test the property networkStatus
        expect(instance).to.have.property('networkStatus');
        // expect(instance.networkStatus).to.be(expectedValueLiteral);
      });

    });
  });

}));