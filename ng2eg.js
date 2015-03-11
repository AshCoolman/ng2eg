import {Component, Template, bootstrap, Foreach} from 'angular2/angular2';
import {bind} from 'angular2/di';


@Component({
  selector: 'ng2eg-app',
  componentServices: [
    
  ]
})
@Template({
  url: 'ng2eg.html',
  directives: [Foreach]
})
class Ng2EgApp {
  label: any;
  keys: Array;

  constructor( /* componentServices */ ) {
    this.label = '(no label)';
    this.keys = []
  }
  addKey($event, target) {
    var keyData = {
      val: $event.which,
      char: String.fromCharCode($event.which)
    }
    this.keys.push(keyData);
    if($event.which === 13) { // ENTER_KEY
      this.keys = [];
    }
  }
}

export function main() {
  bootstrap(Ng2EgApp);
}
