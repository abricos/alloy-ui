/*
Copyright (c) 2010, Yahoo! Inc. All rights reserved.
Code licensed under the BSD License:
http://developer.yahoo.com/yui/license.html
version: 3.7.3
build: 3.7.3
*/
YUI.add("node-pluginhost",function(e,t){e.Node.plug=function(){var t=e.Array(arguments);return t.unshift(e.Node),e.Plugin.Host.plug.apply(e.Base,t),e.Node},e.Node.unplug=function(){var t=e.Array(arguments);return t.unshift(e.Node),e.Plugin.Host.unplug.apply(e.Base,t),e.Node},e.mix(e.Node,e.Plugin.Host,!1,null,1),e.NodeList.prototype.plug=function(){var t=arguments;return e.NodeList.each(this,function(n){e.Node.prototype.plug.apply(e.one(n),t)}),this},e.NodeList.prototype.unplug=function(){var t=arguments;return e.NodeList.each(this,function(n){e.Node.prototype.unplug.apply(e.one(n),t)}),this}},"3.7.3",{requires:["node-base","pluginhost"]});
