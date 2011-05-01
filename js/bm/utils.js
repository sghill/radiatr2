var BM = BM || {};

BM.Utils = function (options) {
	return {
		getJSONP : function(url, callback) {
			$.getJSON(url + "?jsonp=?", function(response) {
				callback(response);
			});
		}
  };
};