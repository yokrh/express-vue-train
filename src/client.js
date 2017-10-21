import Vue from 'Vue'
import links from './component/links.vue'
import './style/app.css';
import './image/icon-link.jpg';

var vm = new Vue({
  el: '#app',
  components: {
    'links': links
  },
  template: '<links></links>'
});
