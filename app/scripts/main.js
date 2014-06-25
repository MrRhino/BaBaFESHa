require.config({
    baseUrl: 'scripts',
    paths: {
        'jquery': '../bower_components/jquery/dist/jquery',
        'backbone': '../bower_components/backbone/backbone',
        'underscore': '../bower_components/underscore/underscore',
        'handlebars': '../bower_components/handlebars/handlebars',
        'templates': '../templates/templates',
        'hbshelpers': '../modules/templates/helpers/helpers',
        'helpers': 'lib/helpers',
        'ctlr': '../modules/singletons/pagecontroller',
        // MVC
        'productListView': '../modules/views/productListView',
        'productEditView': '../modules/views/productEditView',
        'router': '../modules/routers/router',
        // Product List View
        'productsCollection': '../modules/collections/productsCollection',
        // Product Edit View
        'productModel': '../modules/models/productModel'
    },
    shim: {
        'jquery': {
            deps: [],
            exports: '$'
        },
        'backbone': {
            deps: ['underscore', 'jquery'],
            exports: 'Backbone'
        },
        'underscore': {
            exports: '_'
        },
        'handlebars': {
            exports: 'Handlebars'
        },
        'ctlr': {
            exports: 'ctlr'
        },
        'templates': {
            deps: ['handlebars']
        },
        'helpers': {
            deps: ['jquery']
        },
        'hbshelpers': {
            deps: ['handlebars']
        }
    }
});

require(['jquery',
        'ctlr',
        'helpers',
        'backbone',
        'handlebars',
        'underscore',
        'templates',
        'hbshelpers'
    ],
    function($, ctlr) {
        'use strict';
        ctlr.init();

    });
