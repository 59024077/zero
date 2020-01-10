var vals;
var txtVal;
$(document).ready(function () {
    var statusLogin = 1; //sessionStorage.getItem("login"); // login
    if (statusLogin == 1) {
        sessionStorage.setItem("login", 1);
        $('.showname').html(sessionStorage.getItem("showname"));
        $('.fullname').html(sessionStorage.getItem("fullname"));
    } else {
        //var urlLogin = getFileConfig+'/login/login.html';
        // var urlLogin = '/Screenning/login.html';
        // window.location = urlLogin;
    }

    $('#hidden').hide();

    //---------- ดึงหน้า infor_user.html มาแสดง -------------------//
    $("#infor_user").on("click", function (e) {
        e.stopImmediatePropagation();

        $('.contentServiceArea').html('');

        $.ajax({
            url: "infor_user.html",
            success: function (data) {
                $("#content").html(data);
                vals = 1;
                txtVal = 'infor_user';
            }
        });

    });

    //---------- ดึงหน้า search_leave.html มาแสดง -------------------//
    $("#re_leave").on("click", function (e) {
        e.stopImmediatePropagation();

        $('.contentServiceArea').html('');

        $.ajax({
            url: "search_leave.html",
            success: function (data) {
                $("#content").html(data);
                vals = 2;
                txtVal = 'search_leave';

            }
        });

    });

    //---------- ดึงหน้า search_usecar.html มาแสดง -------------------//
    $("#re_usecar").on("click", function (e) {
        e.stopImmediatePropagation();

        $('.contentServiceArea').html('');

        $.ajax({
            url: "search_usecar.html",
            success: function (data) {
                $("#content").html(data);
                vals = 3;
                txtVal = 'search_usecar';

            }
        });

    });

    //---------- ดึงหน้า his_leave.html มาแสดง -------------------//
    $("#his_leave").on("click", function (e) {
        e.stopImmediatePropagation();

        $('.contentServiceArea').html('');

        $.ajax({
            url: "his_leave.html",
            success: function (data) {
                $("#content").html(data);
                vals = 4;
                txtVal = 'his_leave';
                show_hisleave();

            }
        });

    });

    //---------- ดึงหน้า his_usecar.html มาแสดง -------------------//
     $("#his_usecar").on("click", function (e) {
        e.stopImmediatePropagation();

        $('.contentServiceArea').html('');

        $.ajax({
            url: "his_usecar.html",
            success: function (data) {
                $("#content").html(data);
                vals = 4;
                txtVal = 'his_leave';
                show_hisleave();

            }
        });

    });


    //---------- ดึงหน้า header_showem.html มาแสดง -------------------//
    $("#manage_p").on("click", function (e) {
        e.stopImmediatePropagation();

        $('.contentServiceArea').html('');

        $.ajax({
            url: "header_showem.html",
            success: function (data) {
                $("#content").html(data);
                vals = 5;
                txtVal = 'manage_p';
                re_managep();
            }
        });

    });



});

//go page index
function fn_index(){
    $("#content").html('');
}

// fn title record leave
$(document).on('change', '#type_leave', function() {
    add_leave();
});


function add_leave() {
    var type_leave = $('#type_leave option:selected').val();
    
    if (type_leave != "5" && type_leave != "") {
        console.log(type_leave);
        $.ajax({
            url: "record_leave.html",
            success: function (data) {
                $("#hidden_record").html(data);
                var text = '';
                if(type_leave == 1){
                    text = 'ลาป่วย'
                }else if(type_leave == 2){
                    text = 'ลากิจส่วนตัว'
                }else if(type_leave == 3){
                    text = 'ลาคลอดบุตร'
                }else if(type_leave == 4){
                    text = 'ลาพักผ่อน'
                }else if(type_leave == 6){
                    text = 'ลาไปช่วยราชการ'
                }else if(type_leave == 7){
                    text = 'ลาศึกษาต่อ'
                }else if(type_leave == 8){
                    text = 'ลาลงเวรและออฟเวร'
                }else if(type_leave == 9){
                    text = 'ลาช่วยเหลือภรรยาคลอดบุตร'
                }
                $('#tital_rec').html('แบบฟอร์มขออนุญาต'+ text);
            }
        });
    }else if(type_leave == "5"){
        $.ajax({
            url: "record_helpcivil.html",
            success: function (data) {
                $("#hidden_record").html(data);
                text = 'ลาไปราชการ'
                $('#tital_rec').html('แบบฟอร์มขออนุญาต'+ text);
            }
        });
    }else{
        swal.fire({
            type: "error",
            title: 'ผิดพลาด',
            text: "กุณาเลือกประเภทการลา"
        });
    }
}

// fn show record_usecar.html
function add_usecar() {
        $.ajax({
            url: "record_usecar.html",
            success: function (data) {
                $("#hidden_record").html(data);
            }
        });
}

// fn show table record_usecar.html
function show_hisleave() {
    $.ajax({
        url: "table_leave.html",
        success: function (data) {
            $("#hidden_record").html(data);
        }
    });
}

// fn show table record_usecar.html
function show_hisusecar() {
    $.ajax({
        url: "table_usecar.html",
        success: function (data) {
            $("#hidden_record").html(data);
        }
    });
}

function re_managep() {
    $.ajax({
        url: "record_managep.html",
        success: function (data){
            $("#hidden_record").html(data);

        }
    });
}

