import {Router} from 'aurelia-router';

export class App {
	router:Router;

  configureRouter(config, router:Router){
    config.title = 'Linda Graham';
    config.map([
      { route: ['','home'],  moduleId: './home',      nav: true, title:'Home' },
      { route: 'flickr',        moduleId: './flickr',       nav: true, title:'Images'},
			{ route: 'you-tube',        moduleId: './you-tube',       nav: true, title:'Videos' },
      { route: 'ice-cube-map',        moduleId: './ice-cube-map',       nav: true, title:'Ice Cube Gallery' },
      { route: 'working-with-clay',  moduleId: './working-with-clay', nav: true, title:'Working With Clay' },
			{ route: 'bio-resume',        moduleId: './bio-resume',       nav: true, title:'Bio & Resume' },
			{ route: 'contact',        moduleId: './contact',       nav: true, title:'Contact' }
    ]);

    this.router = router;
  }
}
