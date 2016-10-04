'use strict';

/**
 * @ngdoc function
 * @name assignmentApp.controller:customerFactory
 * @description
 * # customerFactory
 * Factory of the assignmentApp
 */
angular.module('assignmentApp')
  .factory('customerFactory', function(){

  	var customerFactory = {},
  		customers = [];

  	/**
  	 * getAllCustomers
  	 *
  	 * @return {Array}
  	 */
  	customerFactory.getAllCustomers = function(){
  		customers = JSON.parse(localStorage.getItem('customers'));
  		return customers;
  	};

  	/**
  	 * getSelectedCustomer
  	 *
  	 * @param  {String} customerId
  	 * @return {Object}            
  	 */
  	customerFactory.getSelectedCustomer = function(customerId){
  		var selectedCustomer,
  			selectedCustomerIndex;
  		angular.forEach(customers, function(value, key){
  			if(customerId === value.id){
  				selectedCustomer = value;
  				selectedCustomerIndex = key;
  			}
  		});
  		return {
  			selectedCustomer: selectedCustomer,
  			selectedCustomerIndex: selectedCustomerIndex
  		};
  	};

  	/**
  	 * deleteCusomter
  	 *
  	 * @param  {Number} index
  	 * no @return
  	 */
  	customerFactory.deleteCusomter = function(index){
  		customers.splice(index, 1);
  		localStorage.setItem('customers', JSON.stringify(customers));
  	};

  	return customerFactory;
  });
