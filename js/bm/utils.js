var BM = BM || {};

BM.Utils = function (options) {
	return {
		getJSONP : function(url, callback) {
			$.getJSON(url + 'api/json' + "?jsonp=?", function(response) {
				callback(response);
			});
		}
  };
};