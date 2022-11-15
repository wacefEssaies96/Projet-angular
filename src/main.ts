/**In main.ts file last line platformBrowserDynamic().bootstrapModule(AppModule)responsible
for bootstraping of angular application. platformBrowserDynamic()
part of this line indicates that we are about to boot Angular in a browser environment.**/
import { enableProdMode } from '@angular/core';
import { platformBrowserDynamic } from '@angular/platform-browser-dynamic';

import { AppModule } from './app/app.module';
import { environment } from './environments/environment';

if (environment.production) {
  enableProdMode();
}
/*.The bootstrapModule() function helps bootstrap our root module taking in the root
module as its argument.*/
/*AppModule is our root module which is the entry module for our application,
this can actually be any of the modules in our application but by convention AppModule
is used as the root module.*/
platformBrowserDynamic().bootstrapModule(AppModule)
  .catch(err => console.error(err));
