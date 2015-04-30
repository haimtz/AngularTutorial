
angular.module("sportStore", ["customFilters"]);

angular.module("sportStore").controller("sportsStoreCtrl", function ($scope) {

    $scope.data = {
        products: [
            {
                name: "Product #1",
                description: "A product",
                category: "Category #1",
                price: 1000
            },
            {
                name: "Product #2",
                description: "A product",
                category: "Category #1",
                price: 110
            },
            {
                name: "Product #3",
                description: "A product",
                category: "Category #2",
                price: 210
            },
            {
                name: "Product #4",
                description: "A product",
                category: "Category #3",
                price: 202
            }
        ]
    };
});

angular.module("sportStore")
    .constant("productListActiveClass", "btn-primary")
    .constant("productListPageCount", 3)
    .controller("productListCtrl", function($scope, $filter, productListActiveClass, productListPageCount) {

        var selectedCategory = null;
        $scope.selectPage = 1;
        $scope.dataPageSize = productListPageCount;

        $scope.selectCategory = function(newCategory) {
            selectedCategory = newCategory;
            $scope.selectPage = 1;
        }

        $scope.categoryFilterFn = function(product) {
            return selectedCategory == null ||
                product.category === selectedCategory;
        }

        $scope.getCategoryClass = function(category) {
            return selectedCategory === category ? productListActiveClass : "";
        }

        $scope.getPageClass = function(page) {
            return $scope.selectPage === page ? productListActiveClass : "";
        };
    });