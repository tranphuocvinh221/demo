// Trang đăng nhập - đăng ký
function login(frm){
    var emailReg = /^[a-zA-Z0-9._-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,4}$/;
    if (emailReg.test(frm.email.value)==false){
        alert("Vui lòng nhập Email lại");
        frm.email.focus();
        return false;
    }
    if(frm.psw.value.length<8){
        alert("Vui lòng nhập mật khẩu >=8");
        frm.pws.focus();
        return false;
    }
    alert("Đã đăng nhập thành công");
    return true;
}
function register(frm){
    if(frm.user.value.length<4){
        alert("Vui lòng nhập lại tên >= 4");
        frm.user.focus();
        return false;
    }
    var emailReg = /^[a-zA-Z0-9._-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,4}$/;
    if (emailReg.test(frm.email.value)==false){
        alert("Vui lòng nhập Email lại");
        frm.email.focus();
        return false;
    }
    if(frm.psw.value.length<8){
        alert("Vui lòng nhập mật khẩu >= 8");
        frm.psw.focus();
        return false;
    }
    if(frm.psw.value !== frm.psw1.value){
        alert("Vui lòng nhập mật khẩu giống trên");
        frm.psw1.focus();
        return false;
    }
        alert("Đã đăng nhập thành công");
       return true; 
}
function lienhe(frm){
    var emailReg = /^[a-zA-Z0-9._-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,4}$/;
    var sdt  = /^[0-9]{10}$/;
    if(frm.user.value == ""){
        alert("Không để tên người dùng trống");
        frm.user.focus();
        return false;
    }
    if (emailReg.test(frm.email.value)==false){
        alert("Vui lòng nhập Email lại");
        frm.email.focus();
        return false;
    }

    if(sdt.test(frm.SDT.value) == false){
        alert("Vui lòng nhập lại số điện thoại");
        frm.pws.focus();
        return false;
    }else{
        if(frm.SDT.value[0] != '0'){
            alert("Số điện thoại đầu tiên phải là số 0");
            frm.pws.focus();
            return false;
        }
    }
    if(frm.text.value == ""){
        alert("Không để nội dung trống");
        frm.text.focus();
        return false;
    }
    alert("Đã đăng nhập thành công");
    return true;
}