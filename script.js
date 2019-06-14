var app = angular.module('myApp' ,[]);
//filter to remove duplicates and show unique values
app.filter('unique', function () {

    return function (items, filterOn) {


        if (filterOn === false) {
            return items;
        }

        if ((filterOn || angular.isUndefined(filterOn)) && angular.isArray(items)) {
            var hashCheck = {}, newItems = [];

            var extractValueToCompare = function (item) {
                if (angular.isObject(item) && angular.isString(filterOn)) {
                    return item[filterOn];
                } else {
                    return item;
                }
            };

            angular.forEach(items, function (item) {
                var valueToCheck, isDuplicate = false;

                for (var i = 0; i < newItems.length; i++) {
                    if (angular.equals(extractValueToCompare(newItems[i]), extractValueToCompare(item))) {
                        isDuplicate = true;
                        break;
                    }
                }
                if (!isDuplicate) {
                    newItems.push(item);
                }

            });
            items = newItems;
        }
        return items;
    };
});
app.controller("MainController", function($scope){

    $scope.animals = [
		  {
		    "Animal_ID": "A513771",
		    "Animal_Name": "",
		    "Animal_Type": "Dog",
		    "Animal_Gender": "",
		    "Animal_Breed": "Golden Retriever",
		    "Animal_Color": "Black / White",
		    "Address": "22000 238TH PL SE"
		  },
		  {
		    "Animal_ID": "A513743",
		    "Animal_Name": "",
		    "Animal_Type": "Dog",
		    "Animal_Gender": "Male",
		    "Animal_Breed": "Samoyed",
		    "Animal_Color": "White",
		    "Address": "22400 8TH AVE S"
		  },
		  {
		    "Animal_ID": "A516014",
		    "Animal_Name": "Evee",
		    "Animal_Type": "Dog",
		    "Animal_Gender": "Female",
		    "Animal_Breed": "English Springer Spaniel",
		    "Animal_Color": "Unknown",
		    "Address": "700 WOODLAND WAY"
		  },
		  {
		    "Animal_ID": "A514724",
		    "Animal_Name": "Lily",
		    "Animal_Type": "Cat",
		    "Animal_Gender": "Female",
		    "Animal_Breed": "Domestic Shorthair",
		    "Animal_Color": "Unknown",
		    "Address": "20800 31ST LN S. #A SEA TAC"
		  },
		  {
		    "Animal_ID": "A514712",
		    "Animal_Name": "Oscar",
		    "Animal_Type": "Cat",
		    "Animal_Gender": "Male",
		    "Animal_Breed": "Domestic Mediumhair",
		    "Animal_Color": "Unknown",
		    "Address": "178TH AVE NE AND NE 8TH PL"
		  },
		  {
		    "Animal_ID": "A514516",
		    "Animal_Name": "Bernard",
		    "Animal_Type": "Cat",
		    "Animal_Gender": "Male",
		    "Animal_Breed": "Turkish Van",
		    "Animal_Color": "Unknown",
		    "Address": "35500 28TH AVE S"
		  },
		  {
		    "Animal_ID": "A515486",
		    "Animal_Name": "Emmett",
		    "Animal_Type": "Cat",
		    "Animal_Gender": "Male",
		    "Animal_Breed": "Domestic Mediumhair",
		    "Animal_Color": "Unknown",
		    "Address": "47500 288TH AVE SE"
		  },
		  {
		    "Animal_ID": "A515182",
		    "Animal_Name": "",
		    "Animal_Type": "Dog",
		    "Animal_Gender": "Female",
		    "Animal_Breed": "Shiba Inu",
		    "Animal_Color": "Unknown",
		    "Address": "34400 214TH AVE SE"
		  },
		  {
		    "Animal_ID": "A513768",
		    "Animal_Name": "Jackson/jax",
		    "Animal_Type": "Cat",
		    "Animal_Gender": "Male",
		    "Animal_Breed": "Russian Blue",
		    "Animal_Color": "Unknown",
		    "Address": "228TH ST SE"
		  },
		  {
		    "Animal_ID": "A513744",
		    "Animal_Name": "Hernie",
		    "Animal_Type": "Cat",
		    "Animal_Gender": "Male",
		    "Animal_Breed": "American Shorthair",
		    "Animal_Color": "Unknown",
		    "Address": "21300 82ND AVE SE"
		  },
		  {
		    "Animal_ID": "A515140",
		    "Animal_Name": "Moxie",
		    "Animal_Type": "Dog",
		    "Animal_Gender": "Female",
		    "Animal_Breed": "Flat Coat Retriever",
		    "Animal_Color": "Unknown",
		    "Address": "3300 SW 332ND ST"
		  },
		  {
		    "Animal_ID": "A513765",
		    "Animal_Name": "Loki",
		    "Animal_Type": "Dog",
		    "Animal_Gender": "Male",
		    "Animal_Breed": "Pit Bull",
		    "Animal_Color": "Unknown",
		    "Address": "SUPERMALL DRIVE AT MCDONALDS"
		  },
		  {
		    "Animal_ID": "A515011",
		    "Animal_Name": "Pritten",
		    "Animal_Type": "Cat",
		    "Animal_Gender": "Female",
		    "Animal_Breed": "Domestic Shorthair",
		    "Animal_Color": "Unknown",
		    "Address": "NE 70TH STREET"
		  },
		  {
		    "Animal_ID": "A515751",
		    "Animal_Name": "Shelly",
		    "Animal_Type": "Dog",
		    "Animal_Gender": "Female",
		    "Animal_Breed": "Miniature Pinscher",
		    "Animal_Color": "Unknown",
		    "Address": "1300 U ST NW"
		  },
		  {
		    "Animal_ID": "A513896",
		    "Animal_Name": "Coco",
		    "Animal_Type": "Dog",
		    "Animal_Gender": "Female",
		    "Animal_Breed": "Pekingese",
		    "Animal_Color": "Unknown",
		    "Address": "11200 SE 260TH ST"
		  },
		  {
		    "Animal_ID": "A516112",
		    "Animal_Name": "",
		    "Animal_Type": "Cat",
		    "Animal_Gender": "Male",
		    "Animal_Breed": "Domestic Mediumhair",
		    "Animal_Color": "White / Brown",
		    "Address": "12800 SE 282ND WAY"
		  },
		  {
		    "Animal_ID": "A516217",
		    "Animal_Name": "Cooper",
		    "Animal_Type": "Dog",
		    "Animal_Gender": "Male",
		    "Animal_Breed": "Pug",
		    "Animal_Color": "Unknown",
		    "Address": "7700 NE 167TH ST"
		  },
		  {
		    "Animal_ID": "A516107",
		    "Animal_Name": "",
		    "Animal_Type": "Cat",
		    "Animal_Gender": "",
		    "Animal_Breed": "American Wirehair",
		    "Animal_Color": "Unknown",
		    "Address": ""
		  },
		  {
		    "Animal_ID": "A515931",
		    "Animal_Name": "",
		    "Animal_Type": "Dog",
		    "Animal_Gender": "Male",
		    "Animal_Breed": "Pug",
		    "Animal_Color": "Black",
		    "Address": "24800 128TH PL SE"
		  },
		  {
		    "Animal_ID": "A513736",
		    "Animal_Name": "Charlie",
		    "Animal_Type": "Dog",
		    "Animal_Gender": "Male",
		    "Animal_Breed": "Labrador Retriever",
		    "Animal_Color": "Unknown",
		    "Address": "33000 37TH CT SW"
		  },
		  {
		    "Animal_ID": "A513763",
		    "Animal_Name": "",
		    "Animal_Type": "Dog",
		    "Animal_Gender": "Male",
		    "Animal_Breed": "Labrador Retriever",
		    "Animal_Color": "Black",
		    "Address": "21200 142ND AVE SE"
		  },
		  {
		    "Animal_ID": "A514736",
		    "Animal_Name": "Sky",
		    "Animal_Type": "Dog",
		    "Animal_Gender": "Male",
		    "Animal_Breed": "Pit Bull",
		    "Animal_Color": "Unknown",
		    "Address": "18400 42ND AVE S"
		  },
		  {
		    "Animal_ID": "A516136",
		    "Animal_Name": "Corah",
		    "Animal_Type": "Cat",
		    "Animal_Gender": "Female",
		    "Animal_Breed": "Maine Coon",
		    "Animal_Color": "Unknown",
		    "Address": ""
		  },
		  {
		    "Animal_ID": "A516117",
		    "Animal_Name": "Mako",
		    "Animal_Type": "Cat",
		    "Animal_Gender": "Male",
		    "Animal_Breed": "Ragdoll",
		    "Animal_Color": "Unknown",
		    "Address": "25TH AND SPOKANE ST IN BEACON HILL"
		  },
		  {
		    "Animal_ID": "A515232",
		    "Animal_Name": "Sophie",
		    "Animal_Type": "Dog",
		    "Animal_Gender": "Female",
		    "Animal_Breed": "Shih Tzu",
		    "Animal_Color": "Unknown",
		    "Address": "PINE CREST CIRCLE"
		  },
		  {
		    "Animal_ID": "A513067",
		    "Animal_Name": "",
		    "Animal_Type": "Dog",
		    "Animal_Gender": "Female",
		    "Animal_Breed": "German Shepherd",
		    "Animal_Color": "Black / Brown",
		    "Address": "26200 33RD AVE S"
		  },
		  {
		    "Animal_ID": "A514744",
		    "Animal_Name": "",
		    "Animal_Type": "Cat",
		    "Animal_Gender": "Female",
		    "Animal_Breed": "Domestic Longhair",
		    "Animal_Color": "Brown / Unknown",
		    "Address": "16900 SE 138TH ST"
		  },
		  {
		    "Animal_ID": "A515184",
		    "Animal_Name": "",
		    "Animal_Type": "Cat",
		    "Animal_Gender": "Female",
		    "Animal_Breed": "Maine Coon",
		    "Animal_Color": "Unknown",
		    "Address": "11600 BEACON AVE S"
		  },
		  {
		    "Animal_ID": "A514743",
		    "Animal_Name": "Theo",
		    "Animal_Type": "Cat",
		    "Animal_Gender": "Male",
		    "Animal_Breed": "Domestic Shorthair",
		    "Animal_Color": "Unknown",
		    "Address": "93RD AVE NE"
		  },
		  {
		    "Animal_ID": "A515141",
		    "Animal_Name": "",
		    "Animal_Type": "Dog",
		    "Animal_Gender": "Male",
		    "Animal_Breed": "Pomeranian",
		    "Animal_Color": "Brown / White",
		    "Address": "11020 SE KENT KANGLEY RD APT CC202"
		  },
		  {
		    "Animal_ID": "A514710",
		    "Animal_Name": "Murphy",
		    "Animal_Type": "Dog",
		    "Animal_Gender": "Male",
		    "Animal_Breed": "Labrador Retriever",
		    "Animal_Color": "Unknown",
		    "Address": "9700 NE 124TH PL"
		  },
		  {
		    "Animal_ID": "A513370",
		    "Animal_Name": "Balee",
		    "Animal_Type": "Cat",
		    "Animal_Gender": "Female",
		    "Animal_Breed": "Domestic Shorthair",
		    "Animal_Color": "Unknown",
		    "Address": "MAPLEWOOD HEIGHTS"
		  },
		  {
		    "Animal_ID": "A516022",
		    "Animal_Name": "",
		    "Animal_Type": "Dog",
		    "Animal_Gender": "Female",
		    "Animal_Breed": "Labrador Retriever",
		    "Animal_Color": "White / Unknown",
		    "Address": ""
		  },
		  {
		    "Animal_ID": "A515928",
		    "Animal_Name": "",
		    "Animal_Type": "Dog",
		    "Animal_Gender": "Male",
		    "Animal_Breed": "Miniature Poodle",
		    "Animal_Color": "Black / Black",
		    "Address": ""
		  },
		  {
		    "Animal_ID": "A515251",
		    "Animal_Name": "",
		    "Animal_Type": "Dog",
		    "Animal_Gender": "Female",
		    "Animal_Breed": "Pomeranian",
		    "Animal_Color": "Black / White",
		    "Address": "22307 DOCK AVE - DES MOINES PIER PARK"
		  },
		  {
		    "Animal_ID": "A513758",
		    "Animal_Name": "",
		    "Animal_Type": "Dog",
		    "Animal_Gender": "Female",
		    "Animal_Breed": "Golden Retriever",
		    "Animal_Color": "Unknown",
		    "Address": "ENATAI AREA / KILLARNEY CIRCLE  102ND PL"
		  },
		  {
		    "Animal_ID": "A513425",
		    "Animal_Name": "",
		    "Animal_Type": "Dog",
		    "Animal_Gender": "Female",
		    "Animal_Breed": "Chihuahua - Long Haired",
		    "Animal_Color": "Black / Brown",
		    "Address": "800 W VALLEY HWY"
		  },
		  {
		    "Animal_ID": "A515682",
		    "Animal_Name": "White Kitty",
		    "Animal_Type": "Cat",
		    "Animal_Gender": "Female",
		    "Animal_Breed": "American Shorthair",
		    "Animal_Color": "Unknown",
		    "Address": "SE 177TH PL"
		  },
		  {
		    "Animal_ID": "A513802",
		    "Animal_Name": "Sophie",
		    "Animal_Type": "Cat",
		    "Animal_Gender": "Female",
		    "Animal_Breed": "Domestic Shorthair",
		    "Animal_Color": "Unknown",
		    "Address": "14862 100TH AVE SE"
		  },
		  {
		    "Animal_ID": "A740334",
		    "Animal_Name": "",
		    "Animal_Type": "Dog",
		    "Animal_Gender": "Neutered Male",
		    "Animal_Breed": "Pit Bull Mix",
		    "Animal_Color": "Brown Brindle",
		    "Address": ""
		  },
		  {
		    "Animal_ID": "A740526",
		    "Animal_Name": "",
		    "Animal_Type": "Cat",
		    "Animal_Gender": "Neutered Male",
		    "Animal_Breed": "Domestic Shorthair Mix",
		    "Animal_Color": "Brown Tabby",
		    "Address": "1605 BERENE AVENUE"
		  },
			{
				"Animal_ID": "A515112",
				"Animal_Name": "Cloud",
				"Animal_Type": "Rabbit",
				"Animal_Gender": "Spayed Female",
				"Animal_Breed": "Angora",
				"Animal_Color": "White",
				"Address": "21615 64TH AVE S"
			},
		  {
		    "Animal_ID": "A740629",
		    "Animal_Name": "",
		    "Animal_Type": "Dog",
		    "Animal_Gender": "Spayed Female",
		    "Animal_Breed": "Australian Shepherd Mix",
		    "Animal_Color": "Black/White",
		    "Address": ""
		  }
		]




});
