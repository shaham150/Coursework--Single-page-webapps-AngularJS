(function () {
    'use strict';

    angular.module("ShoppingListCheckOff", [])
        .controller("ToBuyController", ToBuyController)
        .controller("AlreadyBoughtController", AlreadyBoughtController)
        .service("ShoppingListCheckOffService", ShoppingListCheckOffService)

    ToBuyController.$inject = ["ShoppingListCheckOffService"];
    function ToBuyController(ShoppingListCheckOffService) {
        var toBuy = this;

        // Create items for pre-defined shopping list:
        var predefinedShoppingList = [
            {
                name: "pizzas",
                quantity: 1
            },
            {
                name: "loaves of bread",
                quantity: 5
            },
            {
                name: "apples",
                quantity: 10
            },
            {
                name: "paper towel rolls",
                quantity: 2
            },
            {
                name: "jugs of milk",
                quantity: 3
            },
            {
                name: "bags of chips",
                quantity: 3
            }
        ]

        // Add all items from pre-defined list to the service's list:
        for (let item of predefinedShoppingList){
            console.log(item);
            ShoppingListCheckOffService.addItem(item);
        }

        console.log(ShoppingListCheckOffService.getToBuyItems());


        var updateList = function () {
            toBuy.itemsList = ShoppingListCheckOffService.getToBuyItems();
        }

        toBuy.checkoffItem = function (item) {
            ShoppingListCheckOffService.removeItem(item);
            toBuy.toBuyListEmpty = ShoppingListCheckOffService.chekckToBuyList(); // Check if list is empty, update message accordingly
        }
        
        /*
            ************************
        */


        updateList(); // Populate shopping list

    }

    AlreadyBoughtController.$inject = ["ShoppingListCheckOffService"];
    function AlreadyBoughtController(ShoppingListCheckOffService) {
        var bought = this;

        bought.itemsList = ShoppingListCheckOffService.getBoughtItems();
        
        bought.boughtListIsEmpty = ShoppingListCheckOffService.boughtListIsEmpty;

    }

    function ShoppingListCheckOffService() {
        var service = this;

        var toBuyItems = [];
        var boughtItems = [];

        service.boughtListIsEmpty = true;

        service.addItem = function (item) {
            var newItem = {
                name: item.name,
                quantity: item.quantity
            }

            toBuyItems.push(newItem);
        }

        service.getToBuyItems = function () {
            return toBuyItems;
        }

        ///////////////

        service.removeItem = function (item) {
            // Find the index of the item to be removed in the "toBuy" list:
            var idx = toBuyItems.indexOf(item);

            // Remove the item and insert it into the "boughtItems" list:
            boughtItems.push(toBuyItems.splice(idx, 1)[0]); // Uses the zero index to ensure an object is inserted and not an array containing an object
        }

        service.getBoughtItems = function () {
            return boughtItems;
        }

        ////////////////

        service.chekckToBuyList = function () {
            // Return true if the list is empty, otherwise return false:
            if (toBuyItems.length > 0) {
                return false;
            } else {
                return true;
            }
        }

        service.checkBoughtList = function () {
            // Return true if the list is empty, otherwise return false:
            if (boughtItems.length == 0) {
                service.boughtListIsEmpty = true;
                return true;
            } else {
                service.boughtListIsEmpty = false;
                return false;
            }
        }

    }

})();