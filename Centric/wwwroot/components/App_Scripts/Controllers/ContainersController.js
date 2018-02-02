corePower.controller("containersController", ['$scope', function ($scope) {
    // $scope is probably the single most important variable
    // any object or function attached to $scope can be surfaced
    // directly in the html

    // this is just an example of how to create objects
    // objects should always be declared ahead of time,
    // blank objects should be declared using {}
    $scope.craftObject = {
        name: '',
        attribute1: '',
        genericSubobject: {}
    }



    // Just hard coding with an array of strings for demo purposes
    // This will likely be an array of objects once the database is running
    $scope.craftObjectList = ["Fixed Wing", "Rotocraft", "UAV"];
    $scope.systemRequirementsList = ["Generation", "Distribution", "In Seat Power", "Other"];
    $scope.missionSystemList = ["Special Mission Systems", "VVIP/Cabin Power", "IVHM/CBM", "Hybrid-Electric Propulsion", "All-electric Propulsion", "Untilty Managment", "Active Load Shedding", "Energy Recovery", "Battery Managment",];
    $scope.fixedWingSubtypeList = ["GA", "Turbo Prop", "VLJ", "Light Bus Jet", "Medium Business Jet", "Regional Transpot", "Commerical Transport"];
    $scope.rotocraftSubtypeList = ["Part 27 Single", "Part 27 Light Twin", "Part 29 Medium", "Part 29 Medium Heavy", "Part 29 Heavy"];
    $scope.uavSubtypeList = ["Multi-rotor Hybird Electric", "All Electric Mulit Rotor", "eVtol to Fixed Wing"]
    $scope.powerSystemList = ["AC", "DC"];

    // $scope.selectedCraftType should probably be an object
    // but is just being used as a basic string for this demo       
    $scope.selectedCraftType = {};
    // a function will populate this list with the appropriate subtype
    // after an aircraft type is selected. Options in subtype list
    // populate picklists in html
    $scope.craftSubtypeList = [];
    $scope.selectCraftSubtypeList = function () {
        if ($scope.selectedCraftType == "Fixed Wing") {
            $scope.craftSubtypeList = $scope.fixedWingSubtypeList;
        }
        else if ($scope.selectedCraftType == "Rotocraft") {
            $scope.craftSubtypeList = $scope.rotocraftSubtypeList;
        }
        else if ($scope.selectedCraftType == "UAV") {
            $scope.craftSubtypeList = $scope.uavSubtypeList;
        }

    }
}]);
