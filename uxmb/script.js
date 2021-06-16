const captcha = new Captcha($('#canvas'), {
    length: 4,
    caseSensitive: false
});
$('#valid').on('click', function () {
    const ans = captcha.valid($('input[name="code"]').val());
    console.log(ans);
    var email = $('#emailinput').val();
    var password = "12345678";
    if (ans == true) {
        //alert("aih benar ki");
        firebase.auth().signInWithEmailAndPassword(email, password)
            .then((userCredential) => {
                window.location.replace("/board/index.html");
            })
            .catch((error) => {
                var errorCode = error.code;
                var errorMessage = error.message;
                alert("Terjadi kesalahan Login! Jika ini terus terjadi, hubungi Panitia")
            });
    } else {
        alert("woi salah kode ko buta!");
    }
});

firebase.auth().onAuthStateChanged((user) => {
    if (user) {
        window.location.replace("/board/index.html");
    } else {
        console.log("Silahkan Login terlebih dahulu")
    }
});