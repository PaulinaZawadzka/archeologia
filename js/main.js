jQuery(function($){
	$('.table').footable();
});


jQuery(function($){
	$('.table').footable({
		"columns": $.get('columns.json'),
		"rows": $.get('rows.json')
	});
});

