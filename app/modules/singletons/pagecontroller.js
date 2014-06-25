/*global define:true*/
'use strict';
define(['productListView',
        'productEditView',
        'router'
    ],
    function(ProductListView, ProductEditView, Router) {
        var ctlr = {
            init: function() {

                var router = new Router({
                    routes: {
                        '': 'home',
                        'edit/:id': 'edit',
                        'new': 'edit'
                    }
                });

                var productListView = new ProductListView();
                var productEditView = new ProductEditView(router);

                router.on('route:home', function() {
                    productListView.render();
                });
                router.on('route:edit', function(id) {
                    id = id? escape(id) : id; 
                    productEditView.render({
                        id: id
                    });
                });

                Backbone.history.start();
            }
        };
        return ctlr;
    });