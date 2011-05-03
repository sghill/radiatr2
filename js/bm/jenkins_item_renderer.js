var BM = BM || {};

BM.Utils = {
	getJSONP : function(url, callback) {
		$.getJSON(url + 'api/json' + "?jsonp=?", function(response) {
			callback(response);
		});
	}
};

BM.JenkinsItemRenderer = function (options) {
	var template_id = options.template_id;
	var placeholder_id = options.placeholder_id;
	
  return {
		get : function(url) {
			console.debug('BM.JenkinsItemRenderer get url:' + url);
			BM.Utils.getJSONP(url, this.load);
		},
		load : function(data) {
			console.debug('BM.JenkinsItemRenderer load data:' + data);
			console.debug(data);
			var source = $(template_id).html();
			var template = Handlebars.compile(source);
			var html = template(data);
			
			$(placeholder_id).html(html);
		}
  };
};