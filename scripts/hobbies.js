(function() {
	
	var hobbies = [
		{
			title: 'Competitive Coding',
			src: '/img/code.jpg',
			id: 'code',
			html: '<b style="text-align:center;margin-bottom:3px;">Competitive Coding</b><br><ul><li>Actively participated in competitive coding tournaments and even competed at National-level in India</li><li>Won 3 tournaments at ASU, 2 at Nirma University</li></ul>'
		},
		{
			title: 'Playing Video Games',
			src: '/img/games.png',
			id: 'game',
			html: '<b style="text-align:center;margin-bottom:3px;">Playing Video Games</b><br><ul><li>Love to play all kinds of PC and PS4 games. Strategic games like Age Of Empires 2(AOE-2) and DOTA 2 are my favourite</li><li>Won 4 tournaments of AOE-2</li></ul>'
		},
		{
			title: 'Reading Mangas',
			src: '/img/manga.png',
			id: 'manga',
			html: '<b style="text-align:center;margin-bottom:3px;">Reading Mangas</b><br><ul><li>Reading Mangas and comic books is one of my favorite pass-time.</li><li>Have completed reading 24</li></ul>'
		},
		{
			title: 'Hiking',
			src: '/img/Hike.png',
			id: 'hike',
			html: '<b style="text-align:center;margin-bottom:3px;">Hiking</b><br><ul><li>Love to hike and enjoy nature every once in a while.</li></ul>'
		},
		{
			title: 'Swimming',
			src: '/img/swim.png',
			id: 'swim',
			html: '<b style="text-align:center;margin-bottom:3px;">Swimming</b><br><ul><li>Regularly swim to maintain fitness</li></ul>'
		}
	]
	
	var tooltip = d3.select("body")
		.append("div")
		.style("position", "absolute")
		.style("z-index", "10")
		.style("visibility", "hidden")
		//.style("background", "white")
		//.style("color", "black")
		//.style("border-radius", "6px")
		.style("text-align", "justify")
		.style("padding", "5px")
		.style("font-size", "small")
		.style("white-space", "pre-line")
		.attr("class", "tooltip");
	
	var imgs = d3.select('#hobbies-award-container').selectAll('img')
					.data(hobbies)
					.enter()
					.append("img")
					.attr("src", d => d.src);
					
	imgs.on("mouseover", function(d){
		return tooltip.style("visibility", "visible");}
	)
	.on("mousemove", function(d){
		
		return tooltip.style("top", (event.pageY-10)+"px").style("left",(event.pageX+10)+"px").html(d.html);
	})
	.on("mouseout", function(d){
		return tooltip.style("visibility", "hidden");}
	);
	
}());