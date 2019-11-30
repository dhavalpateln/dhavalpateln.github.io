(function () {
	var languages = [
		{
			type: 'language',
			name: 'Java',
			id: 'java',
			keyword: 'java',
			rating: 5
		},
		{
			type: 'language',
			name: 'Python',
			id: 'python',
			keyword: 'python',
			rating: 5
		},
		{
			type: 'language',
			name: 'JavaScript',
			id: 'javascript',
			keyword: 'javascript',
			rating: 4
		},
		{
			type: 'language',
			name: 'HTML',
			id: 'html',
			keyword: 'html',
			rating: 3.7
		},
		{
			type: 'language',
			name: 'CSS',
			id: 'css',
			keyword: 'css',
			rating: 3.7
		},
		{
			type: 'language',
			name: 'C',
			id: 'c',
			keyword: 'c',
			rating: 3
		},
		{
			type: 'language',
			name: 'SQL',
			id: 'sql',
			keyword: 'sql',
			rating: 3
		},
		{
			type: 'language',
			name: 'C++',
			id: 'c++',
			keyword: 'c++',
			rating: 2.5
		}
	];
	
	var frames_libs = [
		{
			type: 'library',
			name: 'Tensorflow',
			id: 'tensorflow',
			keyword: 'tensorflow',
			rating: 5
		},
		{
			type: 'library',
			name: 'D3.js',
			id: 'd3js',
			keyword: 'd3js',
			rating: 5
		},
		{
			type: 'library',
			name: 'NumPy',
			id: 'numpy',
			keyword: 'numpy',
			rating: 5
		},
		{
			type: 'library',
			name: 'Scikit-Learn',
			id: 'sklearn',
			keyword: 'sklearn',
			rating: 4
		},
		{
			type: 'library',
			name: 'Pandas',
			id: 'pandas',
			keyword: 'pandas',
			rating: 4
		},
		{
			type: 'framework',
			name: 'Spring Boot',
			id: 'springboot',
			keyword: 'spring',
			rating: 3
		},
		{
			type: 'framework',
			name: 'Node.js',
			id: 'nodejs',
			keyword: 'nodejs',
			rating: 2.5
		}
		
	]
	
	var tools_techs = [
		{
			type: 'tool',
			name: 'AWS',
			id: 'aws',
			keyword: 'aws',
			rating: 5
		},
		{
			type: 'library',
			name: 'Firebase',
			id: 'firebase',
			keyword: 'firebase',
			rating: 5
		},
		{
			type: 'library',
			name: 'Android Studio',
			id: 'android',
			keyword: 'android',
			rating: 5
		},
		{
			type: 'library',
			name: 'IntelliJ',
			id: 'intellij',
			keyword: 'intellij',
			rating: 5
		},
		{
			type: 'library',
			name: 'Git',
			id: 'git',
			keyword: 'git',
			rating: 5
		},
		{
			type: 'library',
			name: 'PostMan',
			id: 'postman',
			keyword: 'postman',
			rating: 3.5
		},
		{
			type: 'library',
			name: 'WAMP Server',
			id: 'wamp',
			keyword: 'wamp',
			rating: 3
		},
		{
			type: 'language',
			name: 'Tableau',
			id: 'tab',
			keyword: 'tab',
			rating: 3
		}
	]
	
	keywords = {}
		
	var selected = [];
	
	var lang_table = document.getElementById('lang-table');
	var tool_table = document.getElementById('tool-table');
	var lib_table = document.getElementById('lib-table');
	
	var col1Width = 100;
	
	languages.forEach(function(d) {
		var row = document.createElement('tr');
		var col1 = document.createElement('td');
		var col2 = document.createElement('td');
		col1.innerHTML = d.name;
		col1.width = col1Width;
		col1.classList.add("skill-title");
		col1.id = d.id;
		var svg = d3.select(col2)
				.append("svg")
				.attr("width", "100%")
				.attr("height", "10px")
				.attr("class", "skillbarsvg");
				
		svg.selectAll("rect")
			.data([d])
			.enter()
			.append("rect")
			.attr("class", "skillbar langskill");
		row.appendChild(col1);
		row.appendChild(col2);
		lang_table.appendChild(row);
		keywords[d.id] = d.keyword;
	});
	
	frames_libs.forEach(function(d) {
		var row = document.createElement('tr');
		var col1 = document.createElement('td');
		var col2 = document.createElement('td');
		col1.innerHTML = d.name;
		col1.width = col1Width;
		col1.classList.add("skill-title");
		col1.id = d.id;
		//d3.select(col1).style("width", "100px");
		var svg = d3.select(col2).append("svg")
				.attr("width", "100%")
				.attr("height", "10px")
				.attr("class", "skillbarsvg");
				
		svg.selectAll("rect")
			.data([d])
			.enter()
			.append("rect")
			.attr("class", "skillbar libskill");
		row.appendChild(col1);
		row.appendChild(col2);
		lib_table.appendChild(row);
		keywords[d.id] = d.keyword;
	});
	
	tools_techs.forEach(function(d) {
		var row = document.createElement('tr');
		var col1 = document.createElement('td');
		var col2 = document.createElement('td');
		col1.innerHTML = d.name;
		col1.width = col1Width;
		col1.classList.add("skill-title");
		col1.id = d.id;
		var svg = d3.select(col2).append("svg")
				.attr("width", "100%")
				.attr("height", "10px")
				.attr("class", "skillbarsvg");
		
		svg.selectAll("rect")
			.data([d])
			.enter()
			.append("rect")
			.attr("class", "skillbar toolskill");
		row.appendChild(col1);
		row.appendChild(col2);
		tool_table.appendChild(row);
		keywords[d.id] = d.keyword;
	});
	
	var rects = d3.selectAll('.skillbar')
		.attr("width", d => (d.rating*100/5) + "%")
		.attr("height", "100%");
		
	d3.selectAll(".skill-title")
		.on("mouseover", function(){
			var e = d3.select(this)
						.style("text-shadow", "2px 2px 5px green");
		})
		.on("mouseout", function(){
			var e = d3.select(this)
						.style("text-shadow", "");
		})
		.on("click", function(){
			if(this.classList.length == 2) {
				selected.splice(selected.indexOf(keywords[this.id]), 1);
				d3.select(this).classed('skill-selected', false);
			}
			else {
				selected.push(keywords[this.id]);
				d3.select(this).classed('skill-selected', true);
			}
			
			notifySelectionChanged();
		});
		
	window.skills = {
		selected: selected
	}
	
}());
