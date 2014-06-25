/*global define:true*/
'use strict';
define(['productModel',
        'backbone'
    ],
    function(Product) {
        var productEditView = Backbone.View.extend({
            el: '#rootView1',
            initialize: function(router) {
                this.product = new Product();
                this.router = router;
            },
            events: {
                'submit #editForm': 'save',
                'click #deleteProduct': 'delete'
            },
            save: function(evnt) {
                var self = this;
                var data = $(evnt.currentTarget).serializeObject();
                this.product = new Product();
                this.product.save(data, {
                    success: function() {
                        self.router.navigate('', {
                            trigger: true
                        });
                    }
                });
                return false;
            },
            delete: function() {
                var self = this;
                this.product.destroy({
                    success: function() {
                        console.log('Product deleted');
                        self.router.navigate('', {
                            trigger: true
                        });
                    }
                });
                return false;
            },
            render: function(options) {
                var self = this;
                if (options.id) {
                    this.product = new Product({
                        id: options.id
                    });
                    this.product.fetch({
                        success: function(product) {
                            product = product.attributes;
                            product.id = escape(product.id);
                            self.$el.html(MyApp.Templates.productEditView({ "product" : product }));
                        }
                    });
                } else {
                    self.$el.html(MyApp.Templates.productEditView({ "product" : null }));
                }
            }
        });
        return productEditView;
    }
);
