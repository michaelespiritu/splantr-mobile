function listPosts(data){
	var output = '<ul data-role="listview" data-filter="true" data-inset="true">';
	var container = '';
	var count = 0;
	$.each(data.posts, function(key, val){
		count++;
		output += '<li>';
		output += '<a href="#showpost" data-transition="flip"  onclick="showconfess('+ val.id +')">';
		output += (val.thumbnail) ?'<img src="' + val.thumbnail + '" alt="'+ val.title +'">' : '';
		output += '<h2>' + val.title + '</h2>';
		output += '<p>' + val.excerpt + '</p>';
		output += '</a>';
		output += '</li>';
		
	});
	
	output += '</ul>';
	$('#dataconfess').html(output);
}

function showconfess(id){
	$('.post-title').html('Confessions');
	$('.post-link').attr('href', '#confessions');
	$('#mypost').html('<h1 class="text-center">LOADING</h1><p class="text-center"><img src="./asset/images/nyan-nyan-cat.gif" alt="loading" class="loading"></p>');
	$.getJSON('http://www.splantr.com/?json=get_post&post_id='+ id +'&post_type=confessions&callback=?', function(data){
		var output = '';
		output += '<h2>' + data.post.title + '</h2>';
		output += data.post.content ;
		$('#mypost').html(output);
	});//get JSON POSTS
}//showblog


function listBlog(data){
	var output = '<ul data-role="listview" data-filter="true" data-inset="true">';
	$.each(data.posts, function(key, val){
		output += '<li>';
		output += '<a href="#showpost" data-transition="flip" onclick="showblog('+ val.id +')">';
		output += (val.thumbnail) ?'<img src="' + val.thumbnail + '" alt="'+ val.title +'">' : '';
		output += '<h2>' + val.title + '</h2>';
		output += '<p>' + val.excerpt + '</p>';
		output += '</a>';
		output += '</li>';
		
	});
	
	output += '</ul>';
	$('#datablog').html(output);
}

function showblog(id){
	$('.post-title').html('Blog');
	$('.post-link').attr('href', '#blogs');
	$('#mypost').html('<h1 class="text-center">LOADING</h1><p class="text-center"><img src="./asset/images/nyan-nyan-cat.gif" alt="loading" class="loading"></p>');
	$.getJSON('http://www.splantr.com/?json=get_post&post_id='+ id +'&callback=?', function(data){
		var output = '';
		output += '<h2>' + data.post.title + '</h2>';
		output += data.post.content ;
		$('#mypost').html(output);

	});//get JSON POSTS
}//showblog
