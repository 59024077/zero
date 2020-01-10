//save infor employee
function saveinfor_em() {
    var em_user = $("#em_user").val();
    var em_pass = $("#em_pass").val();
    var em_id = $("#em_id").val();
    var em_intro = $("#em_intro option:selected").val();
    var em_fname = $("#em_fname").val();
    var em_lname = $("#em_lname").val();
    var em_nickname = $("#em_nickname").val();
    var em_gp = $("#em_gp option:selected").val();
    var em_depart = $("#em_depart option:selected").val();
    var em_level = $("#em_level option:selected").val();
    var em_dayoff = $("#em_dayoff").val();
    // var fileUpload = $("#fileUpload").val();

    $.ajax({
        async: true,
        url: "http://localhost:81/req_leaveandcar/php_group/action.php?en=check_em",
        type: "POST",
        data: {
            em_id: em_id
        },
        success: function (data) {
            console.log(data);
            if (data == 0) {
                $.ajax({
                    async: true,
                    url: "http://localhost:81/req_leaveandcar/php_group/action.php?en=insert_em",
                    type: "POST",
                    data: {
                        em_user: em_user, em_pass: em_pass, em_id: em_id, em_intro: em_intro, em_fname: em_fname, em_lname: em_lname,
                        em_nickname: em_nickname, em_gp: em_gp, em_depart: em_depart, em_level: em_level, em_dayoff: em_dayoff
                    },
                    success: function (data) {
                        console.log(data);
                        if (data == 1) {
                            Swal.fire({
                                type: 'success',
                                title: 'บันทึกข้อมูลสำเร็จ',
                                showConfirmButton: false,
                                timer: 1500
                            })
                            clearsessionStorage();
                            console.log("บันทึกข้อมูลสำเร็จ");
                        } else {
                            Swal.fire({
                                icon: 'error',
                                title: 'บันทึกข้อมูลไม่สำเร็จ',
                                showConfirmButton: false,
                                timer: 1500
                            })
                        }
                    }
                });
            } else if (data == 1) {
                $.ajax({
                    async: true,
                    url: "http://localhost:81/req_leaveandcar/php_group/action.php?en=edit_em",
                    type: "POST",
                    data: {
                        em_user: em_user, em_pass: em_pass, em_id: em_id, em_intro: em_intro, em_fname: em_fname, em_lname: em_lname,
                        em_nickname: em_nickname, em_gp: em_gp, em_depart: em_depart, em_level: em_level, em_dayoff: em_dayoff, fileUpload: fileUpload
                    },
                    success: function (data) {
                        console.log(data);
                        if (data == 1) {
                            Swal.fire({
                                type: 'success',
                                title: 'แก้ไขข้อมูลสำเร็จ',
                                showConfirmButton: false,
                                timer: 1500
                            })
                            clearsessionStorage();
                            console.log("แก้ไขข้อมูลสำเร็จ");
                        } else {
                            Swal.fire({
                                icon: 'error',
                                title: 'แก้ไขข้อมูลไม่สำเร็จ',
                                showConfirmButton: false,
                                timer: 1500
                            })
                        }
                    }
                });
            }
        }
    });
}

//data table 

function getdata_em() {
    $.ajax({
        url: "http://localhost:81/req_leaveandcar/php_group/action.php?en=show_em",
        success: function (data) {
            // console.log(data);
            var dataJSON = JSON.parse(data);
            // console.log(dataJSON);
            for (var i = 0; i < dataJSON.counters.length; i++) {
                var counter = dataJSON.counters[i];
                console.log(counter.em_id);
            }

            // var json = $.parseJSON(data); // create an object with the key of the array
            // alert(json.html); // where html is the key of array that you want, $response['html'] = "<a>something..</a>";
        }
    });
     
}

$(document).ready(function () {
    $('#example1').DataTable({
        processing: true,
        scrollY: 700,
        scrollX: true,
        scrollCollapse: true,
        oLanguage: {
            sLengthMenu: "แสดง _MENU_ เร็คคอร์ด ต่อหน้า",
            sZeroRecords: "ไม่พบข้อมูล",
            sInfo: "แสดง _START_ ถึง _END_ ของ _TOTAL_ เร็คคอร์ด",
            sInfoEmpty: "แสดง 0 ถึง 0 ของ 0 เร็คคอร์ด",
            sInfoFiltered: "(จากเร็คคอร์ดทั้งหมด MAX เร็คคอร์ด)",
            sSearch: " ค้นหา ",
            oPaginate: {
                sPrevious: "ก่อนหน้า  ",
                sNext: "  ถัดไป"
            }
        }
    });
});


// upload picture

// function readURL(input) {
//     if (input.files[0]) {
//         var reader = new FileReader();
//         $('.figure').addClass('d-block');
//         reader.onload = function (e) {
//             console.log(e.target.result)
//             $('#imgUpload').attr('src', e.target.result).width(240);
//         }
//         reader.readAsDataURL(input.files[0]);
//     }
// }