function writeGameState() {
	$("#year").html(`Rapport för år: ${gameState.year}`);
	$("#starved").html(`<p>Döda i svält:</p><p>${gameState.starved}</p>`);
	$("#newcomers").html(`<p>Nykommande:</p><p>${gameState.newcomers}</p>`);
	$("#population").html(`<p>Befolkning:</p><p>${gameState.population}</p>`);
	$("#acres").html(`<p>Mark:</p><p>${gameState.acres}</p>`);
	$("#bushels").html(`<p>Matkorgar:<p>${gameState.bushels}</p>`);
	$("#harvest").html(`<p>Körde:</p><p>${gameState.harvest}</p>`);
	$("#rats").html(`<p>Råttor:</p><p>${gameState.rats}</p>`);
	$("#price").html(`<p>Pris:</p><p>${gameState.price}</p>`);

	updateSliderValueOutput("sliderAcrestosellbuy", "outputAcrestosellbuy");
	updateSliderValueOutput("sliderFeedpeople", "outputFeedpeople");
	updateSliderValueOutput("sliderPlantwithseed", "outputPlantwithseed");
}

$(() => {
	$("div.tab").first().css("display", "initial");
	$("menu p").on("click", function () {
		$("div.tab").css("display", "");
		$(`div.tab[data-tab="${$(this).text()}"]`).css("display", "initial");
	});
	$("input[type='range']").on("dblclick", function () {
		this.value = 0;
		$(this).trigger("change");
	});
	$("legend span").attr("contenteditable", "");
	$("legend span").on("focusout", function () {
		let slider = this.parentNode.parentNode.querySelector(
			"input[type='range']"
		);

		let val;
		try {
			val = parseInt(eval($(this).text()));
		} catch (e) {
			val = 0;
		}
		let max = parseInt(slider.max);
		let min = parseInt(slider.min);
		val = val <= max ? val : max;
		val = val >= min ? val : min;
		$(this).html(val);
		slider.value = val;
	});
	$("legend span").on("keydown", function (e) {
		if (e.keyCode == 13) {
			e.preventDefault();
			this.blur();
		} else if (
			![8, 37, 39, 187, 189].includes(e.keyCode) &&
			(e.keyCode < 48 || e.keyCode > 57) &&
			!(e.keyCode == 191 && e.shiftKey)
		) {
			e.preventDefault();
		}
	});
});
