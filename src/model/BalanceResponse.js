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
    // AMD. Register as an anonymous module.
    define(['ApiClient', 'model/BalanceResponseData'], factory);
  } else if (typeof module === 'object' && module.exports) {
    // CommonJS-like environments that support module.exports, like Node.
    module.exports = factory(require('../ApiClient'), require('./BalanceResponseData'));
  } else {
    // Browser globals (root is window)
    if (!root.IimmpactApi) {
      root.IimmpactApi = {};
    }
    root.IimmpactApi.BalanceResponse = factory(root.IimmpactApi.ApiClient, root.IimmpactApi.BalanceResponseData);
  }
}(this, function(ApiClient, BalanceResponseData) {
  'use strict';

  /**
   * The BalanceResponse model module.
   * @module model/BalanceResponse
   * @version 2020-09-14T13:01:14Z
   */

  /**
   * Constructs a new <code>BalanceResponse</code>.
   * @alias module:model/BalanceResponse
   * @class
   */
  var exports = function() {
  };

  /**
   * Constructs a <code>BalanceResponse</code> from a plain JavaScript object, optionally creating a new instance.
   * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
   * @param {Object} data The plain JavaScript object bearing properties of interest.
   * @param {module:model/BalanceResponse} obj Optional instance to populate.
   * @return {module:model/BalanceResponse} The populated <code>BalanceResponse</code> instance.
   */
  exports.constructFromObject = function(data, obj) {
    if (data) {
      obj = obj || new exports();
      if (data.hasOwnProperty('data'))
        obj.data = BalanceResponseData.constructFromObject(data['data']);
    }
    return obj;
  }

  /**
   * @member {module:model/BalanceResponseData} data
   */
  exports.prototype.data = undefined;

  return exports;

}));
