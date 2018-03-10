// The file contents for the current environment will overwrite these during build.
// The build system defaults to the dev environment which uses `environment.ts`, but if you do
// `ng build --env=prod` then `environment.prod.ts` will be used instead.
// The list of which env maps to which file can be found in `.angular-cli.json`.

export const environment = {
  production: false,
  primaryUser: 'bbowes@pivotal.io',
  firebase: {
    apiKey: 'AIzaSyAqV7jnW4pduBulb4b1sSTEv29WEmw4_yU',
    authDomain: 'testapp-19e6c.firebaseapp.com',
    databaseURL: 'https://testapp-19e6c.firebaseio.com',
    projectId: 'testapp-19e6c',
    storageBucket: 'testapp-19e6c.appspot.com',
    messagingSenderId: '777339003578'
  }
};
