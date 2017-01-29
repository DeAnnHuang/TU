$(function() {
    var $uploadCrop,
        _URL = window.URL || window.webkitURL;

    function readFile(input) {
        if (input.files && input.files[0]) {
            var reader = new FileReader(),
                img = new Image(),
                file = input.files[0];

            img.onload = function() {
                if (this.width > 150 && this.height > 150) {
                    reader.onload = function(e) {
                        $uploadCrop.croppie('bind', {
                            url: e.target.result
                        });
                    };

                    reader.readAsDataURL(file);
                } else {
                    alert('請上傳至少長寬都超過150的照片,你剛剛的照片大小是 ' + this.width + 'x' + this.height + '.');
                }
            };
            img.src = _URL.createObjectURL(file);
            img.onerror = function() {
                alert("請上傳照片格式的檔案，你剛剛傳了 " + file.type + "不是照片喔！");
            };


        } else {
            console.log("you're browser doesn't support the FileReader API");
        }
    }

    $uploadCrop = $('#upload-demo').croppie({
        viewport: {
            width: 150,
            height: 150,
            type: 'circle'
        },
        boundary: {
            width: 300,
            height: 300

        }
    });

    $('#upload').on('change', function() {
        $(".popout-wrap").css('top', '0');
        readFile(this);
    });

    $('.upload-result').on('click', function(ev) {
        $(".popout-wrap").css('top', '-100%');

        $uploadCrop.croppie('result', {
            type: 'canvas',
            size: {
                width: 300,
                height: 300
            }
        }).then(function(resp) {
            $("#upload-img").attr('src', resp);
        });
    });

});
