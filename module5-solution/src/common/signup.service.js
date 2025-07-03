(function () {
    'use strict';

    angular.module("common")
        .service("SignupService", SignupService);
    
    SignupService.$inject = ['$http', 'ApiPath']
    function SignupService ($http, ApiPath) {
        var service = this;

        function parseMenuCode (menuCode) {
            var parsedCode = {
                menu: "",
                item: ""
            }

            for (let char of menuCode) {
                if ( !(char in [0,1,2,3,4,5,6,7,8,9]) ) {
                    // If the current char is NOT a number, add it to the "menu" attribute:
                    parsedCode.menu += char;
                    console.log(parsedCode.menu);
                } else if (char in [0,1,2,3,4,5,6,7,8,9]) {
                    parsedCode.item += char;
                    console.log(parsedCode.item);
                }
            }

            console.log("parsed:", parsedCode);
            return parsedCode;
        }

        service.getFaveItem = function (itemCode) {
            console.log("FAVE ITEM CODE IS: ", itemCode);

            var parsedItemCode = parseMenuCode(itemCode);

            return $http.get("https://coursera-jhu-default-rtdb.firebaseio.com/menu_items.json").then(function (response) {
                console.log(response.data);

                // Look for a menu categorey match:
                for (let ctgry in response.data) {
                    // Gather category and short-name info from server response:
                    var currentCat = response.data[ctgry];
                    var currentCode = currentCat.category.short_name;
                    console.log(currentCode);


                    // If a match is found with the menu that the user specified, then look for a match to the item number specified:
                    if (currentCode.toLowerCase() == parsedItemCode.menu.toLowerCase()) {
                        console.log("CATEGORY MATCH FOUND ", currentCat.menu_items);

                        for (let currentItem of currentCat.menu_items){
                            // Check for a match between the current item number and the item number that the user specified:
                            if (parseMenuCode(currentItem.short_name).item == parsedItemCode.item){
                                service.faveMenuItem = currentItem; // Store fave item for later use
                                console.log("match found:", currentItem);
                                return;
                            }
                        }

                        // Store fave item as null if no item-number match was found:
                        console.log("no match");
                        service.faveMenuItem = 0;
                        return;
                    }
                }

                // Store fave item as null if no menu-category match was found:
                console.log("no match");
                service.faveMenuItem = 0;                
            });
        };

        service.storeUserInfo = function (firstName, lastName, userEmail, userPhone) {
            // Set the user's info to a variable for later access:
            service.userInfo = {
                fname: firstName,
                lname: lastName,
                email: userEmail,
                phone: userPhone
            };

            console.log("user info set: ", service.userInfo);
        };
    } // End service

})();