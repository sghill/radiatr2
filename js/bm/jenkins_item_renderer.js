var BM = BM || {};

BM.JenkinsItemRenderer = function (options) {
	var template_id = options.template_id;
	var placeholder_id = options.placeholder_id;
	var utils = new BM.Utils();
	
  return {
		get : function(url) {
			console.debug('BM.JenkinsItemRenderer get url:' + url);
			utils.getJSONP(url, this.load);
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