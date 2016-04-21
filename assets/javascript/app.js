var APP = {
    init: function (config) {
        this.el = config.el;
        this.template = config.template;
        
        this.el.innerHTML = this.template(config);
        
        this.start();
    },
    start: function () {
        
        jQuery(this.el).find('button').click(function () {
            alert('Thanks!');
        });
    }
};

APP.init({
    template: Handlebars.compile(jQuery('#page-template').html()),
    el: document.getElementById('app'),
    title: 'Hello',
    feature: {
        heading: 'Hello, World',
        text: 'Hello, World! Welcome to my app. Say Hello!'
    }
});
