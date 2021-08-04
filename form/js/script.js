function form_()
{
	alert("Mời bạn điền thông tin cá nhân!");
}
function myFunction() {
  var x = document.getElementById("username");
  x.value = x.value.toUpperCase();
}
//bieu thuc chinh quy
var check_phone = /^\([+]\d{2}\)[\s\.-]\d{3}[\s\.-]\d{3}[\s\.-]\d{3}$/; /////(+12) 122 142 141
var check_sn = /^\d{2}[\s/-]\d{2}[\s/-]\d{4}$/;
var check_cmnd = /^\d{12}$/;
var check_email = /^([\w-]+(\?\:\.[w-]+)*)@((\?\:[\w-]+\.)*\w[\w-]{0,66})\.([a-z]{2,6}(\?\:\.[a-z]{2})?)$/;
var check_username = /^[A-Za-z0-9_]{1,20}$/;
var check_password = /^[A-Za-z0-9!@#$%^&*()_]{6,20}$/;

function checknull(txt) {
    if (txt.value.length == 0)
        return true;
    else
        return false;
}

function notCheck(radio) {
    var rt = true;
    for (i = 0; i < radio.length; i++)
        if (radio[i].checked)
            rt = false;
    return rt;
}

function StringMatch(txt, reg) {
    return reg.test(txt.value);
}

function validform(frmName) {
	///ho ten
    if (checknull(frmName.fullname)) {
        alert("Bạn chưa nhập họ tên!");
        frmName.fullname.focus();
        return;
    }
    ///ngay sinh
    if (!StringMatch(frmName.sn, check_sn)) {
        alert("Ngày sinh chưa đúng định dạng !");
        frmName.sn.value = "";
        frmName.sn.focus();
        return;
    }
    ///que
    if (checknull(frmName.que)) {
        alert("Bạn chưa nhập quê quán!");
        frmName.que.focus();
        return;
    }
    ///dia chi hien tai
    if (checknull(frmName.add)) {
        alert("Bạn chưa nhập địa chỉ hiện tại!");
        frmName.add.focus();
        return;
    }
    ///gioi tinh
    if (notCheck(frmName.gender)) {
        alert("Giới tính chưa được chọn !");
        return;
    }
    ///so dien thoai
    if (!StringMatch(frmName.phone, check_phone)) {
        alert("Số điện thoại chưa đúng định dạng!");
        frmName.phone.value = "";
        frmName.phone.focus();
        return;
    }
    ///email
    if (!StringMatch(frmName.email, check_email)) {
        alert("Email chưa đúng định dạng !");
        frmName.email.value = "";
        frmName.email.focus();
        return;
    }
    ktra(document.forms.f) ;
}
function ktra(f)
{
      ///cmnd
    if (!StringMatch(f.so_cmtnd, check_cmnd)) {
        alert("CMTND chưa đúng định dạng !");
        f.so_cmtnd.value = "";
        f.so_cmtnd.focus();
        return;
    }
    /// ngay cap
    if (!StringMatch(f.ngay_cap, check_sn)) {
        alert("Ngày cấp chưa đúng định dạng !");
        f.ngay_cap.value = "";
        f.ngay_cap.focus();
        return;
    }
    //noi cap
    if (checknull(f.Noi_cap)) {
        alert("Bạn chưa nhập nơi cấp của CMTND!");
        f.Noi_cap.focus();
        return;
    }
    heathy(document.forms.fheath);
}
function heathy(fheath)
{
    //suc khoe
    if (checknull(fheath.sk)) {
        alert("Bạn chưa nhập tình trạng sức khỏe!");
        fheath.sk.focus();
        return;
    }
    ///chieu cao
    if (checknull(fheath.height)) {
        alert("Bạn chưa nhập chiều cao!");
        fheath.height.focus();
        return;
    }
    if (isNaN(fheath.height.value)) {
        alert("Chiều cao phải là số!");
        fheath.height.value = "";
        fheath.height.focus();
        return;
    }
    if (eval(fheath.height.value) <= 0 || eval(fheath.height.value) >= 200) {
        alert("Chiều cao phải trong khoảng (0-200 cm)!");
        fheath.height.value = "";
        fheath.height.focus();
        return;
    }

    ///can nang
    if (checknull(fheath.weight)) {
        alert("Bạn chưa nhập vào cân nặng!");
        fheath.weight.focus();
        return;
    }
    if (isNaN(fheath.weight.value)) {
        alert("Cân nặng phải là số!");
        fheath.weight.value = "";
        fheath.weight.focus();
        return;
    }
    if (eval(fheath.weight.value) <= 0 || eval(fheath.weight.value) >= 150) {
        alert("Cân nặng phải trong khoảng (0-150 kg)!");
        fheath.weight.value = "";
        fheath.weight.focus();
        return;
    }
    alert("Cảm ơn bạn đã điền đầy đủ thông tin!!!");
}