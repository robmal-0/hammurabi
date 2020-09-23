$(() => {
	$("div.tab").first().css("display", "initial");
	$("menu p").on("click", function () {
		$("div.tab").css("display", "");
		$(`div.tab[data-tab="${$(this).text()}"]`).css("display", "initial");
	});
});
