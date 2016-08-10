export default angular
  .module('app.main', [])
  .config(function ($stateProvider) {
    $stateProvider
      .state('main', {
          url: '/',
          template: `<article>
                      <h1>I'm article.</h1>
                     </article>`
        });
  })
  .name;