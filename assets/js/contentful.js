$(document).ready(function () {
    var client = contentful.createClient({
        space: 'n1klk24thr5z',
        environment: 'master',
        accessToken: 'wJ3P5kSIOqWOLQiIIeXkAk2k8KVYZA2jTCHfZqMDmnY'
    });
    client.getEntries({
        content_type: 'beasiswaPost'
    }).then(function (entries) {
        var ei = entries.items;
        var i;
        for (i = 0; i < ei.length; i++) {
            var NamaBeasiswa = entries.items[i].fields.namaBeasiswa;
            var LinkGambar = entries.items[i].fields.linkGambar;
            var JenjangBeasiswa = entries.items[i].fields.jenjangBeasiswa;
            var DeadlineBeasiswa = entries.items[i].fields.deadlineBeasiswa;
            var NamaPenyelenggara = entries.items[i].fields.namaPenyelenggara;
            var GambarPenyelenggara = entries.items[i].fields.gambarPenyelenggara;
            var EasyApply = entries.items[i].fields.easyApply;
            var LokasiBeasiswa = entries.items[i].fields.lokasiBeasiswa;
            var IdProduk = entries.items[i].sys.id;
            console.log(entries.items[i].fields)
            //$(".section-card").append('<div class="scholarship-item col-lg-3 col-md-6 col-sm-6"><div class=" scholarship-style-5 bg-black"><div class="scholarship-header"><div class="scholarship-thumb"><img src="'+LinkGambar+'" class="img-fluid"><div class="scholarship-jenjang">'+JenjangBeasiswa+'</div></div></div><div class="scholarship-content"><div class="scholarship-meta meta-style-1"><span class="deadline"><i class="far fa-calendar me-2"></i>'+DeadlineBeasiswa+'</span><span class="label">&nbsp;'+LokasiBeasiswa+'</span></div><h4><a href="#">'+NamaBeasiswa+'</a></h4><div class="course-footer mt-20 d-flex align-items-center justify-content-between"><a href="#" class="rounded-btn"><i class="fa fa-long-arrow-right"></i></a></div></div></div></div>')
            if (EasyApply == true) {
                $(".container-scholarship").append('<div class="col-xl-4 col-lg-4 col-md-6"><div class="scholarship-grid scholarship-style-3"><div class="scholarship-header"><div class="scholarship-thumb"><img src="'+LinkGambar+'" alt="" class="img-fluid"></div></div><div class="scholarship-content"><div class="scholarship-meta d-flex justify-content-between mb-20"><span class="category">'+JenjangBeasiswa+'</span><span class="label"><i class="fas fa-badge-check me-2"></i>Daftar Mudah</span></div><h3 class="scholarship-title mb-20"> <a href="#">'+NamaBeasiswa+'</a> </h3><div class="scholarship-meta-info"><div class="d-flex align-items-center"><div class="author me-3"><img src="'+GambarPenyelenggara+'" alt="" class="img-fluid"><a href="#">'+NamaPenyelenggara+'</a></div></div></div><div class="scholarship-footer mt-20 d-flex align-items-center justify-content-between"><div class="scholarship-price"><i class="fas fa-calendar-day"></i>&nbsp;'+DeadlineBeasiswa+'</div><a href="#" class="btn btn-main-outline btn-radius btn-sm">Detail <i class="fa fa-long-arrow-right"></i></a></div></div>')
            } else {
                $(".container-scholarship").append('<div class="col-xl-4 col-lg-4 col-md-6"><div class="scholarship-grid scholarship-style-3"><div class="scholarship-header"><div class="scholarship-thumb"><img src="'+LinkGambar+'" alt="" class="img-fluid"></div></div><div class="scholarship-content"><div class="scholarship-meta d-flex justify-content-between mb-20"><span class="category">'+JenjangBeasiswa+'</span></div><h3 class="scholarship-title mb-20"> <a href="#">'+NamaBeasiswa+'</a> </h3><div class="scholarship-meta-info"><div class="d-flex align-items-center"><div class="author me-3"><img src="'+GambarPenyelenggara+'" alt="" class="img-fluid"><a href="#">'+NamaPenyelenggara+'</a></div></div></div><div class="scholarship-footer mt-20 d-flex align-items-center justify-content-between"><div class="scholarship-price"><i class="fas fa-calendar-day"></i>&nbsp;'+DeadlineBeasiswa+'</div><a href="#" class="btn btn-main-outline btn-radius btn-sm">Detail <i class="fa fa-long-arrow-right"></i></a></div></div>')
            }
        }
    });
});