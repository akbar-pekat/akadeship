$(document).ready(function () {
	
	setTimeout(function() {
		$(".listview-loading").hide();
	}, 1000);
	
	$("#tampilkan-btn").click(function () {
		$(".listview-loading").show();
		setTimeout(function() {
			$(".listview-loading").hide();
		}, 2000);
	});
	
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


	var client = contentful.createClient({
		space: 'n1klk24thr5z',
		accessToken: 'wJ3P5kSIOqWOLQiIIeXkAk2k8KVYZA2jTCHfZqMDmnY'
	})
	client.getEntries({
		content_type: 'beasiswa'
	}).then(function (entries) {
		var ei = entries.items;
		var i;
		console.log(ei)
		var count = 22;
		for (i = 0; i < ei.length; i++) {
		  var IdBeasiswa = entries.items[i].sys.id;
		  var NamaBeasiswa = entries.items[i].fields.namaBeasiswa;
		  var PenyelenggaraBeasiswa = entries.items[i].fields.penyelenggaraBeasiswa;
		  var TipeBeasiswa = entries.items[i].fields.tipeBeasiswa;
		  var LokasiBeasiswa = entries.items[i].fields.lokasiBeasiswa;
		  var BatasAkhirBeasiswa = entries.items[i].fields.batasAkhirBeasiswa;
		  //console.log(entries.items[i].fields)
		  
		  if (PenyelenggaraBeasiswa.length > count) {
			$(".subs-penyelenggara").html('<marquee scrollamount="2"><small>' + PenyelenggaraBeasiswa + '</small></marquee>');
			$("#row-card").append('<div class="col-6"><div class="card beasiswa" data-id="'+IdBeasiswa+'"><div class="row g-0"><div class="container-image"></div><div class="col-md-6"><div class="card-body"><div class="badge-container"><span class="badge text-dark fw-normal me-1">'+TipeBeasiswa+'</span><span class="badge text-dark fw-normal">'+LokasiBeasiswa+'</span></div><h5 class="card-title mt-2 mb-0">'+NamaBeasiswa+'</h5><marquee class="card-text mb-2" scrollamount="2"><small>' + PenyelenggaraBeasiswa + '</small></marquee><p class="card-text"><small class="text-danger">Deadline: '+BatasAkhirBeasiswa+'</small></p></div></div></div></div></div>');
		  } else {
			$("#row-card").append('<div class="col-6"><div class="card beasiswa" data-id="'+IdBeasiswa+'"><div class="row g-0"><div class="container-image"></div><div class="col-md-6"><div class="card-body"><div class="badge-container"><span class="badge text-dark fw-normal me-1">'+TipeBeasiswa+'</span><span class="badge text-dark fw-normal">'+LokasiBeasiswa+'</span></div><h5 class="card-title mt-2 mb-0">'+NamaBeasiswa+'</h5><p class="card-text mb-2"><small>'+PenyelenggaraBeasiswa+'</small></p><p class="card-text"><small class="text-danger">Deadline: '+BatasAkhirBeasiswa+'</small></p></div></div></div></div></div>');
		  }		  
		}
		
		$(".list-view .row .col-6 .card").click(function () {
			$(".list-view .row .col-6 .card").removeClass("active");
			$(this).addClass("active");
			$("#offcanvas-loading").show();
			$("#offcanvas-empty").hide();
			var DataIdBeasiswa = $(this).attr("data-id");
			//alert(DataIdBeasiswa);
			client.getEntry(DataIdBeasiswa).then(function (entry) {
				$("#NamaBeasiswa").text(entry.fields.namaBeasiswa);
				$("#PenyelenggaraBeasiswa").text(entry.fields.penyelenggaraBeasiswa);
				$("#BatasAkhirBeasiswa").text("Deadline: "+entry.fields.batasAkhirBeasiswa);
				const DeskripsiBeasiswa = entry.fields.deskripsiBeasiswa;
				return documentToHtmlString(DeskripsiBeasiswa);
			}).then(renderedHtml => {
				console.log(renderedHtml);
				$("#deskripsi-tab").html(renderedHtml);				
			}).catch(error => console.log(error));
			setTimeout(function() {
				$("#offcanvas-loading").hide();
			}, 2000);
	});
	});


});