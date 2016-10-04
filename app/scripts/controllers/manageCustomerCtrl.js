'use strict';

/**
 * @ngdoc function
 * @name assignmentApp.controller:manageCustomerCtrl
 * @description
 * # manageCustomerCtrl
 * Controller of the assignmentApp
 */
angular.module('assignmentApp')
    .controller('manageCustomerCtrl', function($scope, $uibModalInstance, customer, customerFactory) {
        /**
         * addCustomer
         *
         * no @return
         */
        var addCustomer = function() {
            var customers = JSON.parse(localStorage.getItem('customers')) || [];
            var user = {
                id: Math.floor((Math.random() * 100000000000000) + 1),
                firstName: $scope.firstName,
                lastName: $scope.lastName,
                email: $scope.email,
                contact: $scope.contact,
                address: $scope.address
            };
            customers.unshift(user);
            localStorage.setItem('customers', JSON.stringify(customers));
        };

        //If type is update, pre populate the data
        if (customer.type === 'update' && customer.selectedCustomer) {
            $scope.firstName = customer.selectedCustomer.firstName;
            $scope.lastName = customer.selectedCustomer.lastName;
            $scope.email = customer.selectedCustomer.email;
            $scope.contact = customer.selectedCustomer.contact;
            $scope.address = customer.selectedCustomer.address;
        }

        $scope.modalTitle = customer.title;

        /**
         * saveCustomer
         *
         * @param  {Boolean} isFormValid
         * no @return
         */
        $scope.saveCustomer = function(isFormValid) {
            $scope.isFormSubmitted = true;
            if (isFormValid) {
                if (customer.type === 'update') {
                    customerFactory.deleteCusomter(customer.selectedCustomerIndex);
                    addCustomer();
                } else {
                    addCustomer();
                }
                $uibModalInstance.close('close');
            }
        };
        $scope.cancel = function() {
            $uibModalInstance.dismiss('cancel');
        };
    });