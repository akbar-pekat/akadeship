$(document).ready(function() {
  var client = contentful.createClient({
    space: 'n1klk24thr5z',
    environment: 'master',
    accessToken: 'wJ3P5kSIOqWOLQiIIeXkAk2k8KVYZA2jTCHfZqMDmnY'
  });
  client.getEntries({
    content_type: 'contentPost',
    order: 'sys.createdAt'
  }).then(function(entries) {
    var ei = entries.items;
    var i;
    for (i = 0; i < ei.length; i++) {
      var NamaEvent = entries.items[i].fields.namaEvent;
      var ThumbnailEvent = entries.items[i].fields.thumbnailEvent;
      var JenjangBeasiswa = entries.items[i].fields.jenjangBeasiswa;
      var DeadlineEvent = entries.items[i].fields.deadlineEvent;

      var KategoriEvent = entries.items[i].fields.kategoriEvent;
      var FYPCheck = entries.items[i].fields.fypCheck;
      //var CaptionSorotan = entries.items[i].fields.captionSorotan;
      //var ConvertHTML = documentToHtmlString(CaptionSorotan);
      if (FYPCheck == true) {
        if (KategoriEvent == 'Beasiswa') {
          $(".forall-con .list-v").append('<div class="card"><a href="/"></a><div class="image"><img src="' + ThumbnailEvent + '"/><p class="level">' + JenjangBeasiswa + '</p></div><div class="caption"><h4>' + NamaEvent + '</h4><div class="info"><p>Batas Daftar: <span>' + DeadlineEvent + '</span></p></div></div></div>');
          $(".beasiswa-con .list-v").append('<div class="card"><a href="/"></a><div class="image"><img src="' + ThumbnailEvent + '"/><p class="level">' + JenjangBeasiswa + '</p></div><div class="caption"><h4>' + NamaEvent + '</h4><div class="info"><p>Batas Daftar: <span>' + DeadlineEvent + '</span></p></div></div></div>');
        }
        if (KategoriEvent == 'Lomba') {
          $(".forall-con .list-v").append('<div class="card"><a href="/"></a><div class="image"><img src="' + ThumbnailEvent + '"/></div><div class="caption"><h4>' + NamaEvent + '</h4><div class="info"><p>Batas Daftar: <span>' + DeadlineEvent + '</span></p></div></div></div>');
          $(".lomba-con .list-v").append('<div class="card"><a href="/"></a><div class="image"><img src="' + ThumbnailEvent + '"/></div><div class="caption"><h4>' + NamaEvent + '</h4><div class="info"><p>Batas Daftar: <span>' + DeadlineEvent + '</span></p></div></div></div>');
        }
        if (KategoriEvent == 'Webinar') {
          $(".forall-con .list-v").append('<div class="card"><a href="/"></a><div class="image"><img src="' + ThumbnailEvent + '"/></div><div class="caption"><h4>' + NamaEvent + '</h4><div class="info"><p>Batas Daftar: <span>' + DeadlineEvent + '</span></p></div></div></div>');
          $(".webinar-con .list-v").append('<div class="card"><a href="/"></a><div class="image"><img src="' + ThumbnailEvent + '"/></div><div class="caption"><h4>' + NamaEvent + '</h4><div class="info"><p>Batas Daftar: <span>' + DeadlineEvent + '</span></p></div></div></div>');
        }
      } else {
        if (KategoriEvent == 'Beasiswa') {
          $(".beasiswa-con .list-v").append('<div class="card"><a href="/"></a><div class="image"><img src="' + ThumbnailEvent + '"/><p class="level">' + JenjangBeasiswa + '</p></div><div class="caption"><h4>' + NamaEvent + '</h4><div class="info"><p>Batas Daftar: <span>' + DeadlineEvent + '</span></p></div></div></div>');
        }
        if (KategoriEvent == 'Lomba') {
          $(".lomba-con .list-v").append('<div class="card"><a href="/"></a><div class="image"><img src="' + ThumbnailEvent + '"/></div><div class="caption"><h4>' + NamaEvent + '</h4><div class="info"><p>Batas Daftar: <span>' + DeadlineEvent + '</span></p></div></div></div>');
        }
        if (KategoriEvent == 'Webinar') {
          $(".webinar-con .list-v").append('<div class="card"><a href="/"></a><div class="image"><img src="' + ThumbnailEvent + '"/></div><div class="caption"><h4>' + NamaEvent + '</h4><div class="info"><p>Batas Daftar: <span>' + DeadlineEvent + '</span></p></div></div></div>');
        }
      }
      //console.log(entries.items[i].fields);
    }
  })
});
