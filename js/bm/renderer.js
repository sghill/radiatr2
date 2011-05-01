var BM = BM || {};

BM.Renderer = function () {
	return {
		jobs : new BM.JenkinsItemRenderer({
			template_id:"#jobs-template",
			placeholder_id:"div.jobs"
		}),
		builds : new BM.JenkinsItemRenderer({
			template_id:"#builds-template",
			placeholder_id:"div.builds"
		}),
		build_details : new BM.JenkinsItemRenderer({
			template_id:"#build-details-template",
			placeholder_id:"div.build-details"
		})
  };
};