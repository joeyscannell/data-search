var app = angular.module("myApp", []);
//filter to remove duplicates and show unique values
app.filter("unique", function () {
  return function (items, filterOn) {
    if (filterOn === false) {
      return items;
    }

    if ((filterOn || angular.isUndefined(filterOn)) && angular.isArray(items)) {
      var hashCheck = {},
        newItems = [];

      var extractValueToCompare = function (item) {
        if (angular.isObject(item) && angular.isString(filterOn)) {
          return item[filterOn];
        } else {
          return item;
        }
      };

      angular.forEach(items, function (item) {
        var valueToCheck,
          isDuplicate = false;

        for (var i = 0; i < newItems.length; i++) {
          if (
            angular.equals(
              extractValueToCompare(newItems[i]),
              extractValueToCompare(item)
            )
          ) {
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
app.controller("MainController", function ($scope) {
  $scope.animals = [
    {
      Animal_ID: "A513743",
      Animal_Name: "Cloud",
      Animal_Type: "Dog",
      Animal_Gender: "Male",
      Animal_Breed: "Samoyed",
      Animal_Color: "White",
      Address: "22400 8TH AVE S",
      Picture: "samoyed.jpg",
    },
    {
      Animal_ID: "A516014",
      Animal_Name: "Evee",
      Animal_Type: "Dog",
      Animal_Gender: "Female",
      Animal_Breed: "English Springer Spaniel",
      Animal_Color: "Unknown",
      Address: "700 WOODLAND WAY",
      Picture: "EnglishSpringerSpaniel.jpg",
    },
    {
      Animal_ID: "A515182",
      Animal_Name: "Doge",
      Animal_Type: "Dog",
      Animal_Gender: "Female",
      Animal_Breed: "Shiba Inu",
      Animal_Color: "Unknown",
      Address: "34400 214TH AVE SE",
      Picture: "shibainu.jpg",
    },
    {
      Animal_ID: "A513768",
      Animal_Name: "Jackson/jax",
      Animal_Type: "Cat",
      Animal_Gender: "Male",
      Animal_Breed: "Russian Blue",
      Animal_Color: "Unknown",
      Address: "228TH ST SE",
      Picture: "russianblue.jpg",
    },
    {
      Animal_ID: "A513744",
      Animal_Name: "Hernie",
      Animal_Type: "Cat",
      Animal_Gender: "Male",
      Animal_Breed: "American Shorthair",
      Animal_Color: "Unknown",
      Address: "21300 82ND AVE SE",
      Picture: "americanshorthair.jpg",
    },
    {
      Animal_ID: "A515140",
      Animal_Name: "Moxie",
      Animal_Type: "Dog",
      Animal_Gender: "Female",
      Animal_Breed: "Flat Coat Retriever",
      Animal_Color: "Unknown",
      Address: "3300 SW 332ND ST",
      Picture: "flatcoat.jpg",
    },
    {
      Animal_ID: "A513765",
      Animal_Name: "Loki",
      Animal_Type: "Dog",
      Animal_Gender: "Male",
      Animal_Breed: "Pit Bull",
      Animal_Color: "Unknown",
      Address: "SE 10TH SUPERMALL DRIVE",
      Picture: "pitbull.jpg",
    },
    {
      Animal_ID: "A514516",
      Animal_Name: "Bernard",
      animal_type: "Cat",
      Animal_Gender: "Male",
      Animal_Breed: "Turkish Van",
      Animal_Color: "Unknown",
      Address: "35500 28TH AVE S",
      Picture: "turkishvan.jpg",
    },
    {
      Animal_ID: "A515011",
      Animal_Name: "Pritten",
      Animal_Type: "Cat",
      Animal_Gender: "Female",
      Animal_Breed: "Domestic Shorthair",
      Animal_Color: "Unknown",
      Address: "NE 70TH STREET",
      Picture: "domesticshorthair.jpg",
    },
    {
      Animal_ID: "A513896",
      Animal_Name: "Coco",
      Animal_Type: "Dog",
      Animal_Gender: "Female",
      Animal_Breed: "Pekingese",
      Animal_Color: "Unknown",
      Address: "11200 SE 260TH ST",
      Picture: "pekingese.jpg",
    },
    {
      Animal_ID: "A515184",
      Animal_Name: "Maow",
      Animal_Type: "Cat",
      Animal_Gender: "Female",
      Animal_Breed: "Maine Coon",
      Animal_Color: "Unknown",
      Address: "11600 BEACON AVE S",
      Picture: "mainecoon.jpg",
    },
    {
      Animal_ID: "A515112",
      Animal_Name: "Cloud",
      Animal_Type: "Rabbit",
      Animal_Gender: "Spayed Female",
      Animal_Breed: "Angora",
      Animal_Color: "White",
      Address: "21615 64TH AVE S",
      Picture: "angora.jpg",
    },
  ];
});
