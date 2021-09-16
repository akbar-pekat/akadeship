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
    var count = 40;
    for (i = 0; i < ei.length; i++) {
        var IdBeasiswa = entries.items[i].sys.id;
        var NamaBeasiswa = entries.items[i].fields.namaBeasiswa;
        var PenyelenggaraBeasiswa = entries.items[i].fields.penyelenggaraBeasiswa;
        var ThumbnailBeasiswa = entries.items[i].fields.urlThumbnailBeasiswa;
        var TipeBeasiswa = entries.items[i].fields.tipeBeasiswa;
        var LokasiBeasiswa = entries.items[i].fields.lokasiBeasiswa;
        var BatasAkhirBeasiswa = entries.items[i].fields.batasAkhirBeasiswa;

        //console.log(entries.items[i].fields)

        if (PenyelenggaraBeasiswa.length > count) {
            //$("#row-card").append('<div class="col-6"><div class="card beasiswa" data-id="' + IdBeasiswa + '"><div class="row g-0"><img class="container-image" src="' + ThumbnailBeasiswa + '"><div class="col-md-6"><div class="card-body"><div class="badge-container"><span class="badge text-dark fw-normal me-1">' + TipeBeasiswa + '</span><span class="badge text-dark fw-normal">' + LokasiBeasiswa + '</span></div><h5 class="card-title mt-2 mb-0">' + NamaBeasiswa + '</h5><marquee class="card-text mb-2" scrollamount="2"><small>' + PenyelenggaraBeasiswa + '</small></marquee><p class="card-text"><small class="text-danger">Deadline: ' + BatasAkhirBeasiswa + '</small></p></div></div></div></div></div>');
            $("#lv_beasiswa").append('<div class="card" data-bs-toggle="offcanvas" data-bs-target="#offcanvasBottom"><div class="kontainer_thumbnail"><div class="thumbnail" style="background-image: url(' + ThumbnailBeasiswa + ');"></div><div class="flex_kontainerbawah"><div class="flex_kontaineratas"><div class="kontainer_kategori">' + TipeBeasiswa + '</div><div class="lengkung_atas"></div></div><div class="lengkung_bawah"></div></div></div><div class="kontainer_teks"><div class="flex_juduldeadline"><div class="judul">' + NamaBeasiswa + '</div><div class="deadline">' + BatasAkhirBeasiswa + '</div></div><marquee class="card-text mb-2" scrollamount="2"><span class="penyelenggara">' + PenyelenggaraBeasiswa + '</span></marquee></div></div>');
        } else {
            $("#lv_beasiswa").append('<div class="card" data-bs-toggle="offcanvas" data-bs-target="#offcanvasBottom"><div class="kontainer_thumbnail"><div class="thumbnail" style="background-image: url(' + ThumbnailBeasiswa + ');"></div><div class="flex_kontainerbawah"><div class="flex_kontaineratas"><div class="kontainer_kategori">' + TipeBeasiswa + '</div><div class="lengkung_atas"></div></div><div class="lengkung_bawah"></div></div></div><div class="kontainer_teks"><div class="flex_juduldeadline"><div class="judul">' + NamaBeasiswa + '</div><div class="deadline">' + BatasAkhirBeasiswa + '</div></div><span class="penyelenggara">' + PenyelenggaraBeasiswa + '</span></div></div>');
            //$("#row-card").append('<div class="col-6"><div class="card beasiswa" data-id="' + IdBeasiswa + '"><div class="row g-0"><img class="container-image" src="' + ThumbnailBeasiswa + '"><div class="col-md-6"><div class="card-body"><div class="badge-container"><span class="badge text-dark fw-normal me-1">' + TipeBeasiswa + '</span><span class="badge text-dark fw-normal">' + LokasiBeasiswa + '</span></div><h5 class="card-title mt-2 mb-0">' + NamaBeasiswa + '</h5><p class="card-text mb-2"><small>' + PenyelenggaraBeasiswa + '</small></p><p class="card-text"><small class="text-danger">Deadline: ' + BatasAkhirBeasiswa + '</small></p></div></div></div></div></div>');
        }

    }
});

client.getEntries({
    content_type: 'eventPost'
}).then(function (entries) {
    var ei = entries.items;
    var i;
    console.log(ei)
    var count = 40;
    for (i = 0; i < ei.length; i++) {
        var IdEvent = entries.items[i].sys.id;
        var NamaEvent = entries.items[i].fields.namaEvent;
        var PenyelenggaraEvent = entries.items[i].fields.penyelenggaraEvent;
        var ThumbnailEvent = entries.items[i].fields.urlThumbnailEvent;
        var TipeEvent = entries.items[i].fields.tipeEvent;
        var LokasiEvent = entries.items[i].fields.lokasiEvent;
        var BatasAkhirEvent = entries.items[i].fields.batasAkhirEvent;

        //console.log(entries.items[i].fields)

        if (PenyelenggaraEvent.length > count) {
            //$("#row-card").append('<div class="col-6"><div class="card Event" data-id="' + IdEvent + '"><div class="row g-0"><img class="container-image" src="' + ThumbnailEvent + '"><div class="col-md-6"><div class="card-body"><div class="badge-container"><span class="badge text-dark fw-normal me-1">' + TipeEvent + '</span><span class="badge text-dark fw-normal">' + LokasiEvent + '</span></div><h5 class="card-title mt-2 mb-0">' + NamaEvent + '</h5><marquee class="card-text mb-2" scrollamount="2"><small>' + PenyelenggaraEvent + '</small></marquee><p class="card-text"><small class="text-danger">Deadline: ' + BatasAkhirEvent + '</small></p></div></div></div></div></div>');
            $("#lv_event").append('<div class="card" data-bs-toggle="offcanvas" data-bs-target="#offcanvasBottom"><div class="kontainer_thumbnail"><div class="thumbnail" style="background-image: url(' + ThumbnailEvent + ');"></div><div class="flex_kontainerbawah"><div class="flex_kontaineratas"><div class="kontainer_kategori">' + TipeEvent + '</div><div class="lengkung_atas"></div></div><div class="lengkung_bawah"></div></div></div><div class="kontainer_teks"><div class="flex_juduldeadline"><div class="judul">' + NamaEvent + '</div><div class="deadline">' + BatasAkhirEvent + '</div></div><marquee class="card-text mb-2" scrollamount="2"><span class="penyelenggara">' + PenyelenggaraEvent + '</span></marquee></div></div>');
        } else {
            $("#lv_event").append('<div class="card" data-bs-toggle="offcanvas" data-bs-target="#offcanvasBottom"><div class="kontainer_thumbnail"><div class="thumbnail" style="background-image: url(' + ThumbnailEvent + ');"></div><div class="flex_kontainerbawah"><div class="flex_kontaineratas"><div class="kontainer_kategori">' + TipeEvent + '</div><div class="lengkung_atas"></div></div><div class="lengkung_bawah"></div></div></div><div class="kontainer_teks"><div class="flex_juduldeadline"><div class="judul">' + NamaEvent + '</div><div class="deadline">' + BatasAkhirEvent + '</div></div><span class="penyelenggara">' + PenyelenggaraEvent + '</span></div></div>');
            //$("#row-card").append('<div class="col-6"><div class="card Event" data-id="' + IdEvent + '"><div class="row g-0"><img class="container-image" src="' + ThumbnailEvent + '"><div class="col-md-6"><div class="card-body"><div class="badge-container"><span class="badge text-dark fw-normal me-1">' + TipeEvent + '</span><span class="badge text-dark fw-normal">' + LokasiEvent + '</span></div><h5 class="card-title mt-2 mb-0">' + NamaEvent + '</h5><p class="card-text mb-2"><small>' + PenyelenggaraEvent + '</small></p><p class="card-text"><small class="text-danger">Deadline: ' + BatasAkhirEvent + '</small></p></div></div></div></div></div>');
        }

    }
});