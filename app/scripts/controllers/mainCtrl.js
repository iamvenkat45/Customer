'use strict';

/**
 * @ngdoc function
 * @name assignmentApp.controller:MainCtrl
 * @description
 * # MainCtrl
 * Controller of the assignmentApp
 */
angular.module('assignmentApp')
	.controller('MainCtrl', function($scope, $uibModal, customerFactory) {
		var modalInstance,
			/**
			 * updateCustomers
			 *
			 * no @return
			 */
			updateCustomers = function() {
				modalInstance.result.then(function() {
					$scope.myItems = customerFactory.getAllCustomers() || [];
				});
			},
			/**
			 * openModal
			 *
			 * no @return
			 */
			openModal = function() {
				modalInstance = $uibModal.open({
					animation: true,
					templateUrl: 'views/manage-customer.html',
					controller: 'manageCustomerCtrl',
					resolve: {
						customer: function(){
							return {
								title: 'Add Customer',
								type: 'add'
							}
						}
					}
				});

				updateCustomers();
			};
		$scope.myItems = customerFactory.getAllCustomers() || [];

		/**
		 * addCustomer
		 *
		 * no @return
		 */
		$scope.addCustomer = function() {
			openModal();
		};

		/**
		 * editCustomer
		 *
		 * @param  {String} id
		 * no @return
		 */
		$scope.editCustomer = function(id) {
			var customer = customerFactory.getSelectedCustomer(id);
			modalInstance = $uibModal.open({
				animation: true,
				templateUrl: 'views/manage-customer.html',
				controller: 'manageCustomerCtrl',
				resolve: {
					customer: function() {
						return {
							title: 'Update Customer',
							type: 'update',
							selectedCustomer: customer.selectedCustomer,
							selectedCustomerIndex: customer.selectedCustomerIndex
						};
					}
				}
			});

			updateCustomers();
		};

		/**
		 * deleteCusomter
		 *
		 * @param  {String} id 
		 * no @return
		 */
		$scope.deleteCusomter = function(id) {
			var customer = customerFactory.getSelectedCustomer(id);
			customerFactory.deleteCusomter(customer.selectedCustomerIndex);
			$scope.myItems = customerFactory.getAllCustomers();
		};

	});