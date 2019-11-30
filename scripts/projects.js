(function () {
	
	projects = [
		{
			e: document.getElementById('deblurgan-project'),
			id: "deblurgan-project",
			rank: 1,
			keywords: ['python', 'ml', 'cvision', 'colab', 'tensorflow', 'numpy']
		},
		{
			e: document.getElementById('nlp-project'),
			id: "nlp-project",
			rank: 2,
			keywords: ['python', 'ml', 'nlp', 'colab', 'tensorflow', 'numpy', 'pandas']
		},
		{
			e: document.getElementById('nn-project'),
			id: "nn-project",
			rank: 3,
			keywords: ['python', 'ml', 'colab', 'numpy']
		},
		{
			e: document.getElementById('aes-project'),
			id: "aes-project",
			rank: 4,
			keywords: ['c++', 'oop', 'security', 'encryption']
		},
		{
			e: document.getElementById('fer-project'),
			id: "fer-project",
			rank: 5,
			keywords: ['python', 'ml', 'cvision', 'colab', 'tensorflow', 'numpy']
		},
		{
			e: document.getElementById('tesseract-project'),
			id: "tesseract-project",
			rank: 6,
			keywords: ['python', 'ml', 'cvision', 'colab', 'tensorflow', 'numpy', 'text']
		},
		{
			e: document.getElementById('rlq-project'),
			id: "rlq-project",
			rank: 7,
			keywords: ['java', 'ai', 'oop', 'ml']
		},
		{
			e: document.getElementById('aibot-project'),
			id: "aibot-project",
			rank: 8,
			keywords: ['python', 'ml', 'java', 'nlp', 'scipy', 'numpy', 'ai', 'wamp', 'sql']
		},
		{
			e: document.getElementById('androidgallery-project'),
			id: "androidgallery-project",
			rank: 9,
			keywords: ['java', 'oop', 'android', 'firebase', 'cloud', 'sql']
		},
		{
			e: document.getElementById('osterminal-project'),
			id: "osterminal-project",
			rank: 10,
			keywords: ['c++', 'c', 'os']
		},
		{
			e: document.getElementById('androidwisesplit-project'),
			id: "androidwisesplit-project",
			rank: 11,
			keywords: ['java', 'oop', 'android', 'firebase', 'cloud', 'sql']
		}		
	]
	
	function showElements(ids, count) {
		var projectSelectList = []
		projects.forEach(function(d) {
			if(ids.includes(d.id)) {
				projectSelectList.push(d);
			}
		});
		projectSelectList.sort(function(a, b) {
			return a.rank - b.rank;
		});
		toShowIds = []
		var i = 0;
		for (i = 0; i < count && i < projectSelectList.length; i++) {
			toShowIds.push(projectSelectList[i].id);
		}
		projects.forEach(function(d) {
			if(toShowIds.includes(d.id)) {
				$(d.e).slideDown(500);
			}
			else {
				$(d.e).slideUp(500);
			}
		});		
	}
	
	function satisfiesFilter(filterKeywords, projectKeywords, type) {
		if(filterKeywords.length == 0)	{return true;}
		if(type == "all") {
			var toret = true;
			filterKeywords.forEach(function(d) {
				if(!projectKeywords.includes(d)) {
					toret = false;
				}
			});
			return toret;
		}
		else {
			var toret = false;
			filterKeywords.forEach(function(d) {
				if(projectKeywords.includes(d)) {
					toret=true;
				}
			});
			return toret;
		}
	}
	
	function filter(keywords, selectionType) {
		filteredIds = []
		projects.forEach(function(d) {
			if(satisfiesFilter(keywords, d.keywords, selectionType)) {
				filteredIds.push(d.id);
			}
		});
		showElements(filteredIds, projectControl.max);
	}
	
	
	window.projectControl = {
		filter: filter,
		show: showElements,
		max: 5
	}
	
		
}());