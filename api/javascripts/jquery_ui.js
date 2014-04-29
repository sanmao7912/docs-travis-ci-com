/*! jQuery UI - v1.10.3 - 2013-09-16
* http://jqueryui.com
* Includes: jquery.ui.widget.js
* Copyright 2013 jQuery Foundation and other contributors; Licensed MIT */
!function(e,t){var i=0,s=Array.prototype.slice,n=e.cleanData;e.cleanData=function(t){for(var i,s=0;null!=(i=t[s]);s++)try{e(i).triggerHandler("remove")}catch(o){}n(t)},e.widget=function(i,s,n){var o,a,r,l,c={},h=i.split(".")[0];i=i.split(".")[1],o=h+"-"+i,n||(n=s,s=e.Widget),e.expr[":"][o.toLowerCase()]=function(t){return!!e.data(t,o)},e[h]=e[h]||{},a=e[h][i],r=e[h][i]=function(e,i){return this._createWidget?(arguments.length&&this._createWidget(e,i),t):new r(e,i)},e.extend(r,a,{version:n.version,_proto:e.extend({},n),_childConstructors:[]}),l=new s,l.options=e.widget.extend({},l.options),e.each(n,function(i,n){return e.isFunction(n)?(c[i]=function(){var e=function(){return s.prototype[i].apply(this,arguments)},t=function(e){return s.prototype[i].apply(this,e)};return function(){var i,s=this._super,o=this._superApply;return this._super=e,this._superApply=t,i=n.apply(this,arguments),this._super=s,this._superApply=o,i}}(),t):(c[i]=n,t)}),r.prototype=e.widget.extend(l,{widgetEventPrefix:a?l.widgetEventPrefix:i},c,{constructor:r,namespace:h,widgetName:i,widgetFullName:o}),a?(e.each(a._childConstructors,function(t,i){var s=i.prototype;e.widget(s.namespace+"."+s.widgetName,r,i._proto)}),delete a._childConstructors):s._childConstructors.push(r),e.widget.bridge(i,r)},e.widget.extend=function(i){for(var n,o,a=s.call(arguments,1),r=0,l=a.length;l>r;r++)for(n in a[r])o=a[r][n],a[r].hasOwnProperty(n)&&o!==t&&(i[n]=e.isPlainObject(o)?e.isPlainObject(i[n])?e.widget.extend({},i[n],o):e.widget.extend({},o):o);return i},e.widget.bridge=function(i,n){var o=n.prototype.widgetFullName||i;e.fn[i]=function(a){var r="string"==typeof a,l=s.call(arguments,1),c=this;return a=!r&&l.length?e.widget.extend.apply(null,[a].concat(l)):a,r?this.each(function(){var s,n=e.data(this,o);return n?e.isFunction(n[a])&&"_"!==a.charAt(0)?(s=n[a].apply(n,l),s!==n&&s!==t?(c=s&&s.jquery?c.pushStack(s.get()):s,!1):t):e.error("no such method '"+a+"' for "+i+" widget instance"):e.error("cannot call methods on "+i+" prior to initialization; attempted to call method '"+a+"'")}):this.each(function(){var t=e.data(this,o);t?t.option(a||{})._init():e.data(this,o,new n(a,this))}),c}},e.Widget=function(){},e.Widget._childConstructors=[],e.Widget.prototype={widgetName:"widget",widgetEventPrefix:"",defaultElement:"<div>",options:{disabled:!1,create:null},_createWidget:function(t,s){s=e(s||this.defaultElement||this)[0],this.element=e(s),this.uuid=i++,this.eventNamespace="."+this.widgetName+this.uuid,this.options=e.widget.extend({},this.options,this._getCreateOptions(),t),this.bindings=e(),this.hoverable=e(),this.focusable=e(),s!==this&&(e.data(s,this.widgetFullName,this),this._on(!0,this.element,{remove:function(e){e.target===s&&this.destroy()}}),this.document=e(s.style?s.ownerDocument:s.document||s),this.window=e(this.document[0].defaultView||this.document[0].parentWindow)),this._create(),this._trigger("create",null,this._getCreateEventData()),this._init()},_getCreateOptions:e.noop,_getCreateEventData:e.noop,_create:e.noop,_init:e.noop,destroy:function(){this._destroy(),this.element.unbind(this.eventNamespace).removeData(this.widgetName).removeData(this.widgetFullName).removeData(e.camelCase(this.widgetFullName)),this.widget().unbind(this.eventNamespace).removeAttr("aria-disabled").removeClass(this.widgetFullName+"-disabled ui-state-disabled"),this.bindings.unbind(this.eventNamespace),this.hoverable.removeClass("ui-state-hover"),this.focusable.removeClass("ui-state-focus")},_destroy:e.noop,widget:function(){return this.element},option:function(i,s){var n,o,a,r=i;if(0===arguments.length)return e.widget.extend({},this.options);if("string"==typeof i)if(r={},n=i.split("."),i=n.shift(),n.length){for(o=r[i]=e.widget.extend({},this.options[i]),a=0;n.length-1>a;a++)o[n[a]]=o[n[a]]||{},o=o[n[a]];if(i=n.pop(),s===t)return o[i]===t?null:o[i];o[i]=s}else{if(s===t)return this.options[i]===t?null:this.options[i];r[i]=s}return this._setOptions(r),this},_setOptions:function(e){var t;for(t in e)this._setOption(t,e[t]);return this},_setOption:function(e,t){return this.options[e]=t,"disabled"===e&&(this.widget().toggleClass(this.widgetFullName+"-disabled ui-state-disabled",!!t).attr("aria-disabled",t),this.hoverable.removeClass("ui-state-hover"),this.focusable.removeClass("ui-state-focus")),this},enable:function(){return this._setOption("disabled",!1)},disable:function(){return this._setOption("disabled",!0)},_on:function(i,s,n){var o,a=this;"boolean"!=typeof i&&(n=s,s=i,i=!1),n?(s=o=e(s),this.bindings=this.bindings.add(s)):(n=s,s=this.element,o=this.widget()),e.each(n,function(n,r){function l(){return i||a.options.disabled!==!0&&!e(this).hasClass("ui-state-disabled")?("string"==typeof r?a[r]:r).apply(a,arguments):t}"string"!=typeof r&&(l.guid=r.guid=r.guid||l.guid||e.guid++);var c=n.match(/^(\w+)\s*(.*)$/),h=c[1]+a.eventNamespace,d=c[2];d?o.delegate(d,h,l):s.bind(h,l)})},_off:function(e,t){t=(t||"").split(" ").join(this.eventNamespace+" ")+this.eventNamespace,e.unbind(t).undelegate(t)},_delay:function(e,t){function i(){return("string"==typeof e?s[e]:e).apply(s,arguments)}var s=this;return setTimeout(i,t||0)},_hoverable:function(t){this.hoverable=this.hoverable.add(t),this._on(t,{mouseenter:function(t){e(t.currentTarget).addClass("ui-state-hover")},mouseleave:function(t){e(t.currentTarget).removeClass("ui-state-hover")}})},_focusable:function(t){this.focusable=this.focusable.add(t),this._on(t,{focusin:function(t){e(t.currentTarget).addClass("ui-state-focus")},focusout:function(t){e(t.currentTarget).removeClass("ui-state-focus")}})},_trigger:function(t,i,s){var n,o,a=this.options[t];if(s=s||{},i=e.Event(i),i.type=(t===this.widgetEventPrefix?t:this.widgetEventPrefix+t).toLowerCase(),i.target=this.element[0],o=i.originalEvent)for(n in o)n in i||(i[n]=o[n]);return this.element.trigger(i,s),!(e.isFunction(a)&&a.apply(this.element[0],[i].concat(s))===!1||i.isDefaultPrevented())}},e.each({show:"fadeIn",hide:"fadeOut"},function(t,i){e.Widget.prototype["_"+t]=function(s,n,o){"string"==typeof n&&(n={effect:n});var a,r=n?n===!0||"number"==typeof n?i:n.effect||i:t;n=n||{},"number"==typeof n&&(n={duration:n}),a=!e.isEmptyObject(n),n.complete=o,n.delay&&s.delay(n.delay),a&&e.effects&&e.effects.effect[r]?s[t](n):r!==t&&s[r]?s[r](n.duration,n.easing,o):s.queue(function(i){e(this)[t](),o&&o.call(s[0]),i()})}})}(jQuery);