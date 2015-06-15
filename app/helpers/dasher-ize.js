import Ember from 'ember';

export function dasherIze(params/*, hash*/) {
  return params[0].dasherize().replace('/', '-');
}

export default Ember.HTMLBars.makeBoundHelper(dasherIze);
