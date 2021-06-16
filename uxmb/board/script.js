$('#logoutbtn').on('click', function () {
    firebase.auth().signOut().then(() => {
        window.location.replace("/");
    }).catch((error) => {
        alert("Terjadi kesalahan Logout! Jika ini terus terjadi, hubungi Panitia");
    });
});
$("#accordionFlushExample").hide();
firebase.auth().onAuthStateChanged((user) => {
    if (user) {
        console.log("Nothing");
        var emaillog = user.email;
        var namalogin = emaillog.split('@')[0];
        const dbRef = firebase.database().ref();
        dbRef.child(namalogin).get().then((snapshot) => {
            $("#accordionFlushExample").show();
            $("#loading").hide();
            $("#loadingcon").hide();
            if (snapshot.exists()) {
                $("#namapeserta2").text(snapshot.val().namalengkap);
                $("#namapeserta").text(snapshot.val().namasingkat);
                $("#tipe").text("("+snapshot.val().tipe+")");
                var tipeakun = snapshot.val().tipe
                if (tipeakun == "Mentor") {
                    $("#accordion-slideppt").hide();
                }
                if (tipeakun == "Speaker") {
                    $("#accordion-slideppt").hide();
                }
            } else {
                console.log("No data available");
            }
        }).catch((error) => {
            console.error(error);
            $("#accordionFlushExample").hide();
            location.reload();
        });
    } else {
        window.location.replace("/");
    }
});