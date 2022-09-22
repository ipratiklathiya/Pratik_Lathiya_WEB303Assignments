$(document).ready(function()
{
	$("input").change(function()
	{
		let sal = $("#yearly-salary");
		sal = sal.val();
		let per = $("#percent");
		per = per.val();
		let temp = ( sal * per );
		let result = ( temp / 100 );
		result = result.toFixed(2);
		$("#amount").text('$' + result);
	});
});