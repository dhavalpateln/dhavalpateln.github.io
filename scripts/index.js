(function () {
	var filterType = "any";
	var projectCount = 5;
	
	window.notifySelectionChanged = function() {
		projectControl.filter(skills.selected, filterType);
		workedu.highlight(skills.selected, filterType);
	}	
	
	document.getElementById('project-num-options').onchange = function() {
		projectControl.max = this.value;
		notifySelectionChanged();
	}
	
	document.getElementById('filter-type-options').onchange = function() {
		filterType = this.value;
		notifySelectionChanged();
	}
	
	notifySelectionChanged();
}());
