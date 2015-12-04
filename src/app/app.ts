import {bootstrap, Component, CORE_DIRECTIVES, FORM_DIRECTIVES} from 'angular2/angular2';
import {Pager} from '../components/pager/pager.js';
class Hero {
  id: number;
  name: string;
}

@Component({
  selector: 'my-app',
  styleUrls:['./app/app.css'],
  templateUrl:'./app/app.html',
  directives: [CORE_DIRECTIVES, FORM_DIRECTIVES, Pager]
})
class AppComponent {
  public pagerSettings = {totalNumberOfRecords: 100};
}

bootstrap(AppComponent);