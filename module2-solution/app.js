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
            toBuy.toBuyItems = ShoppingListCheckOffService.getToBuyItems();
        }


        /*
            ************************
        */


        updateList(); // Update shopping list with items

    }

    AlreadyBoughtController.$inject = ["ShoppingListCheckOffService"];
    function AlreadyBoughtController(ShoppingListCheckOffService) {
        var bought = this;
    }

    function ShoppingListCheckOffService() {
        var service = this;

        var toBuyItems = [];
        var boughtItems = [];

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
        
    }

})();