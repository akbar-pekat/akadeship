$(document).ready(function () {

	$(".list-view .row .col-6 .card").click(function () {
		$(".list-view .row .col-6 .card").removeClass("active");
		$(this).addClass("active");
		$("#offcanvas-loading").show();
		$("#offcanvas-empty").hide();
		setTimeout(function() {
			$("#offcanvas-loading").hide();
		}, 2000);
	});

	$(".offcanvas .nav .nav-item p").click(function () {
		$(".offcanvas .nav .nav-item p").removeClass("active");
		$(this).addClass("active");
	});

	var desknav = $("#deskripsi-nav");
	var syabernav = $("#syaratberkas-nav");
	var benefnav = $("#benefit-nav");
	var fornav = $("#forum-nav");

	var desktab = $("#deskripsi-tab");
	var syabertab = $("#syaratberkas-tab");
	var beneftab = $("#benefit-tab");
	var fortab = $("#forum-tab");

	syabertab.hide();
	beneftab.hide();
	fortab.hide();
		
	desknav.click(function () {
		desktab.show();
		syabertab.hide();
		beneftab.hide();
		fortab.hide();
	});

	syabernav.click(function () {
		desktab.hide();
		syabertab.show();
		beneftab.hide();
		fortab.hide();
	});

	benefnav.click(function () {
		desktab.hide();
		syabertab.hide();
		beneftab.show();
		fortab.hide();
	});

	fornav.click(function () {
		desktab.hide();
		syabertab.hide();
		beneftab.hide();
		fortab.show();
	});


});