/*  */
function save_leave(){
    var type_leave = $("#type_leave").val();
    var id_employee =$("#id_employee").val();
    var fn_employee = $("#fn_employee").val();
    var ln_employee = $("#ln_employee").val();
    var fg_employee = $("#fg_employee").val();
    var num_lea = $("input[name='num_lea']:checked").val();
    var timesave_lea = $("#timesave_lea").val();
    var str_lea = $("#str_lea").val();
    var fin_lea = $("#fin_lea").val();
    var lea_contect = $("#lea_contect").val();
    var lea_other = $("#lea_other").val();

    console.log(type_leave);


    // $.ajax({
    //     async: true,
    //     url: "",
    //     type: "POST",
    //     data: {
    //         docqument_ID: docqument_ID
    //     },
    //     success: function (data) {}
    // });
}


$('#timesave_lea').daterangepicker({
    singleDatePicker: true,
    showDropdowns: true,
    locale: {
        format: 'DD/MM/YYYY'
    }
});

