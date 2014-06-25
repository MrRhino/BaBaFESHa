this["MyApp"] = this["MyApp"] || {};
this["MyApp"]["Templates"] = this["MyApp"]["Templates"] || {};

this["MyApp"]["Templates"]["productEditView"] = Handlebars.template(function (Handlebars,depth0,helpers,partials,data) {
  this.compilerInfo = [4,'>= 1.0.0'];
helpers = this.merge(helpers, Handlebars.helpers); data = data || {};
  var buffer = "", stack1, helper, options, helperMissing=helpers.helperMissing, escapeExpression=this.escapeExpression, functionType="function", self=this, blockHelperMissing=helpers.blockHelperMissing;

function program1(depth0,data) {
  
  
  return " Update ";
  }

function program3(depth0,data) {
  
  
  return " Create ";
  }

function program5(depth0,data) {
  
  var buffer = "", helper, options;
  buffer += "\n        <input type=\"hidden\" name=\"id\" value=\""
    + escapeExpression((helper = helpers.uesc || (depth0 && depth0.uesc),options={hash:{},data:data},helper ? helper.call(depth0, (depth0 && depth0.id), options) : helperMissing.call(depth0, "uesc", (depth0 && depth0.id), options)))
    + "\" />\n        <input type=\"button\" id=\"deleteProduct\" value=\"Delete\" />\n    ";
  return buffer;
  }

  buffer += "<form id=\"editForm\">\n    <table>\n        <thead>\n            <tr>\n                <th>Name</th>\n                <th>Description</th>\n                <th>Price</th>\n            </tr>\n        </thead>\n        <tbody>\n            <tr>\n                <td><input type=\"text\" name=\"name\" value=\""
    + escapeExpression(((stack1 = ((stack1 = (depth0 && depth0.product)),stack1 == null || stack1 === false ? stack1 : stack1.name)),typeof stack1 === functionType ? stack1.apply(depth0) : stack1))
    + "\"></td>\n                <td><input type=\"text\" name=\"description\" value=\""
    + escapeExpression(((stack1 = ((stack1 = (depth0 && depth0.product)),stack1 == null || stack1 === false ? stack1 : stack1.description)),typeof stack1 === functionType ? stack1.apply(depth0) : stack1))
    + "\"></td>\n                <td><input type=\"text\" name=\"price\" value=\""
    + escapeExpression(((stack1 = ((stack1 = (depth0 && depth0.product)),stack1 == null || stack1 === false ? stack1 : stack1.price)),typeof stack1 === functionType ? stack1.apply(depth0) : stack1))
    + "\"></td>\n            </tr>\n        </tbody>\n    </table>\n    <hr />\n    <button type=\"submit\">";
  stack1 = helpers['if'].call(depth0, (depth0 && depth0.product), {hash:{},inverse:self.program(3, program3, data),fn:self.program(1, program1, data),data:data});
  if(stack1 || stack1 === 0) { buffer += stack1; }
  buffer += "</button>\n    ";
  options={hash:{},inverse:self.noop,fn:self.program(5, program5, data),data:data}
  if (helper = helpers.product) { stack1 = helper.call(depth0, options); }
  else { helper = (depth0 && depth0.product); stack1 = typeof helper === functionType ? helper.call(depth0, options) : helper; }
  if (!helpers.product) { stack1 = blockHelperMissing.call(depth0, stack1, {hash:{},inverse:self.noop,fn:self.program(5, program5, data),data:data}); }
  if(stack1 || stack1 === 0) { buffer += stack1; }
  buffer += "\n</form>\n";
  return buffer;
  });

this["MyApp"]["Templates"]["productListView"] = Handlebars.template(function (Handlebars,depth0,helpers,partials,data) {
  this.compilerInfo = [4,'>= 1.0.0'];
helpers = this.merge(helpers, Handlebars.helpers); data = data || {};
  var buffer = "", stack1, helper, options, functionType="function", escapeExpression=this.escapeExpression, self=this, blockHelperMissing=helpers.blockHelperMissing;

function program1(depth0,data) {
  
  var buffer = "", stack1, helper;
  buffer += "\n            <tr>\n                <td>";
  if (helper = helpers.name) { stack1 = helper.call(depth0, {hash:{},data:data}); }
  else { helper = (depth0 && depth0.name); stack1 = typeof helper === functionType ? helper.call(depth0, {hash:{},data:data}) : helper; }
  buffer += escapeExpression(stack1)
    + "</td>\n                <td>";
  if (helper = helpers.description) { stack1 = helper.call(depth0, {hash:{},data:data}); }
  else { helper = (depth0 && depth0.description); stack1 = typeof helper === functionType ? helper.call(depth0, {hash:{},data:data}) : helper; }
  buffer += escapeExpression(stack1)
    + "</td>\n                <td>";
  if (helper = helpers.price) { stack1 = helper.call(depth0, {hash:{},data:data}); }
  else { helper = (depth0 && depth0.price); stack1 = typeof helper === functionType ? helper.call(depth0, {hash:{},data:data}) : helper; }
  buffer += escapeExpression(stack1)
    + "</td>\n                <td><input type=\"button\" onclick=\"location.href='#/edit/";
  if (helper = helpers.id) { stack1 = helper.call(depth0, {hash:{},data:data}); }
  else { helper = (depth0 && depth0.id); stack1 = typeof helper === functionType ? helper.call(depth0, {hash:{},data:data}) : helper; }
  buffer += escapeExpression(stack1)
    + "'\" value=\"Edit\"/></td>\n            </tr>   \n        ";
  return buffer;
  }

  buffer += "<input type=\"button\" onclick=\"location.href='#/new'\" value=\"New\"/>\n <hr />\n<table class=\"table table-striped\">\n    <thead>\n        <tr>\n            <th>Name</th>\n            <th>Description</th>\n            <th>Price</th>\n            <th></th>\n        </tr>\n    </thead>\n    <tbody>\n        ";
  options={hash:{},inverse:self.noop,fn:self.program(1, program1, data),data:data}
  if (helper = helpers.products) { stack1 = helper.call(depth0, options); }
  else { helper = (depth0 && depth0.products); stack1 = typeof helper === functionType ? helper.call(depth0, options) : helper; }
  if (!helpers.products) { stack1 = blockHelperMissing.call(depth0, stack1, {hash:{},inverse:self.noop,fn:self.program(1, program1, data),data:data}); }
  if(stack1 || stack1 === 0) { buffer += stack1; }
  buffer += "\n    </tbody>\n</table>";
  return buffer;
  });