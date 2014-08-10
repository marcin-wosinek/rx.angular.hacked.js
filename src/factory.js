  /**
   * @ngdoc service
   * @name rx.rx
   *
   * @requires $window
   *
   * @description
   * Factory service that exposes the global `Rx` object to the Angular world.
   */
  rxModule.factory('rx', function($window) {
    $window.Rx = Rx;
    return $window.Rx;
  });
