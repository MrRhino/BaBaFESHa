/*global define:true*/
'use strict';
define(['productsCollection',
        'backbone'],
    function(Products) {
        var productListView =
            Backbone.View.extend({
                el: '#rootView1',
                initialize: function() {
                },
                render: function() {
                    var self = this;
                    var products = new Products();
                    products.fetch({
                        success: function(products) {
                            self.$el.html(MyApp.Templates.productListView({ "products" : products.toJSON() }));
                        }
                    });
                }
            })
        return productListView;
    }
);
