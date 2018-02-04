corePower.controller('newComponentController', ['$scope', 'Upload', '$timeout', function ($scope, Upload, $timeout) {

    $scope.newPart = {
        ID: 0,
        partNum: 1448,
        compatible: {
            craftTypes: [],
            craftSubtypes: [],
            missionSystems: [],
            powerSystems: []
        }
    };


    // start craft type/subtype
    $scope.craftTypeList = [{ name: "Fixed Wing", imgSrc: "../images/fixedwing.PNG" }, { name: "Rotocraft", imgSrc: "../images / rotocraft.PNG" }, { name: "UAV", imgSrc: "../images/UAV.PNG" }];
    $scope.systemRequirementsList = ["Generation", "Distribution", "In Seat Power", "Other"];
    $scope.missionSystemList = ["Special Mission Systems", "VVIP/Cabin Power", "IVHM/CBM", "Hybrid-Electric Propulsion", "All-electric Propulsion", "Untilty Managment", "Active Load Shedding", "Energy Recovery", "Battery Managment",];
    $scope.fixedWingSubtypeList = ["GA", "Turbo Prop", "VLJ", "Light Bus Jet", "Medium Business Jet", "Regional Transpot", "Commerical Transport"];
    $scope.rotocraftSubtypeList = ["Part 27 Single", "Part 27 Light Twin", "Part 29 Medium", "Part 29 Medium Heavy", "Part 29 Heavy"];
    $scope.uavSubtypeList = ["Multi-rotor Hybird Electric", "All Electric Mulit Rotor", "eVtol to Fixed Wing"]
    $scope.powerSystemList = ["AC", "DC"];


    $scope.selectedCraftType = {};

    $scope.craftSubtypeList = [];
    $scope.selectCraftSubtypeList = function () {
        if ($scope.selectedCraftType.name == "Fixed Wing") {
            $scope.craftSubtypeList = $scope.fixedWingSubtypeList;
        }
        else if ($scope.selectedCraftType.name == "Rotocraft") {
            $scope.craftSubtypeList = $scope.rotocraftSubtypeList;
        }
        else if ($scope.selectedCraftType.name == "UAV") {
            $scope.craftSubtypeList = $scope.uavSubtypeList;
        }

    }

    // compatability helper funcions
    $scope.toggleCraftTypeCompatibilities = function (craftType) {

        var idx = $scope.newPart.compatible.craftTypes.indexOf(craftType);
        // Is currently selected, take it off list
        if (idx > -1) {
            $scope.$scope.newPart.compatible.craftTypes.splice(idx, 1);
        }
        // Is newly selected
        else {
            $scope.$scope.newPart.compatible.craftTypes.push(craftType);
        }
    }

    $scope.toggleSubtypeCompatibilities = function (subtype) {
        var idx = $scope.newPart.compatible.craftSubtypes.indexOf(subtype);
        if (idx > -1) {
            $scope.$scope.newPart.compatible.craftSubtypes.splice(idx, 1);
        }
        else {
            $scope.$scope.newPart.compatible.craftSubtypes.push(subtype);
        }
    };

    $scope.toggleMissionSystemCompatibilities = function (missionSystem) {
        var idx = $scope.newPart.compatible.missionSystems.indexOf(missionSystem);
        if (idx > -1) {
            $scope.$scope.newPart.compatible.missionSystems.splice(idx, 1);
        }
        else {
            $scope.$scope.newPart.compatible.missionSystems.push(missionSystem);
        }
    };

    $scope.togglePowerSystemCompatibilities = function (powerSystem) {
        $scope.newPart.compatible.powerSystems.push(powerSystem);
        var idx = $scope.newPart.compatible.powerSystems.indexOf(powerSystem);
        if (idx > -1) {
            $scope.$scope.newPart.compatible.powerSystems.splice(idx, 1);
        }
        else {
            $scope.$scope.newPart.compatible.powerSystems.push(powerSystem);
        }
    };

    // clear out selections
    $scope.clearAll = function () {
        $scope.newPart = {
            ID: 0,
            partNum: 1448,
            compatible: {
                craftTypes: [],
                craftSubtypes: [],
                missionSystems: [],
                powerSystems: []
            }
        }
    };

    $scope.clearCraftTypeCompatibilities = function (craftType) {
        $scope.newPart.compatible.craftTypes = null;
        $scope.newPart.compatible.craftTypes = [];
    };
    $scope.clearSubtypeCompatibilities = function (subtype) {
        $scope.newPart.compatible.craftSubtypes = null;
        $scope.newPart.compatible.craftSubtypes = [];
    };
    $scope.clearMissionSystemsCompatibilities = function (missionSystems) {
        $scope.newPart.compatible.missionSystems = null;
        $scope.newPart.compatible.missionSystems = [];
    };
    $scope.clearPowerSystemssCompatibilities = function (powerSystems) {
        $scope.newPart.compatible.powerSystems = null;
        $scope.newPart.compatible.powerSystems = [];
    };
    // end craft type/subtype

    // Start File Upload
    $scope.uploadPic = function (file) {
        file.upload = Upload.upload({
            url: 'https://angular-file-upload-cors-srv.appspot.com/upload',
            data: { username: $scope.username, file: file },
        });

        file.upload.then(function (response) {
            $timeout(function () {
                file.result = response.data;
            });
        }, function (response) {
            if (response.status > 0)
                $scope.errorMsg = response.status + ': ' + response.data;
        }, function (evt) {
            // Math.min is to fix IE which reports 200% sometimes
            file.progress = Math.min(100, parseInt(100.0 * evt.loaded / evt.total));
        });
    }
     

}]);
