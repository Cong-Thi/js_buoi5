/** Bài số 1
 * Mô hình 3 khối: Quản lý sinh viên
 * Đầu vào:
 * - Tạo biến diemChuan, diem1, diem2, diem3 cho người dùng nhập
 * - Tạo biến khuVuc, doiTuong cho người dùng chọn
 * Xử lý:
 * - DOM giá trị người dùng nhập về
 * - Kiểm tra điểm số 0
 * - Tạo biến diemThi, tính điểm sinh viên => so sánh diemThi với diemChuan
 * Đầu ra:
 * - Thông báo SV đậu hay rớt
 */

function ketQua() {
  var diemChuan = +document.getElementById("diemChuan").value;
  var diem1 = +document.getElementById("diem1").value;
  var diem2 = +document.getElementById("diem2").value;
  var diem3 = +document.getElementById("diem3").value;
  var khuVuc = +document.getElementById("khuVuc").value;
  var doiTuong = +document.getElementById("doiTuong").value;
  if (!diem1 || !diem2 || !diem3) {
    document.getElementById("alert1").innerHTML =
      "Bạn đã rớt. Do có điểm nhỏ hơn hoặc bằng 0";
    return;
  }
  switch (khuVuc) {
    case 1: {
      khuVuc = 0;
      break;
    }
    case 2: {
      khuVuc = 2;
      break;
    }
    case 3: {
      khuVuc = 1;
      break;
    }
    case 4: {
      khuVuc = 0.5;
      break;
    }
  }
  switch (doiTuong) {
    case 1: {
      doiTuong = 0;
      break;
    }
    case 2: {
      doiTuong = 2.5;
      break;
    }
    case 3: {
      doiTuong = 1.5;
      break;
    }
    case 4: {
      doiTuong = 1;
      break;
    }
  }
  console.log(doiTuong);
  var diemThi = diem1 + diem2 + diem3 + khuVuc + doiTuong;
  if (diemThi >= diemChuan) {
    document.getElementById("alert1").innerHTML =
      "Bạn đã đậu, tổng điểm của bạn là: " + diemThi;
  } else {
    document.getElementById("alert1").innerHTML =
      "Bạn đã rớt, tổng điểm của bạn là: " + diemThi;
  }
}

/** Bài số 2
 * Mô hình 3 khối: Tính tiền điện
 * Đầu vào:
 * - Tạo biến name, numberKw cho người dùng nhập
 * Xử lý:
 * - DOM giá trị người dùng nhập về
 * - Kiểm tra name, numberKw giá trị rỗng
 * - Tạo biến price
 * - Viết function tính tiền điện
 * Đầu ra:
 * - Thông báo họ tên, và số tiền phải đóng
 */
function tinhTienDien() {
  var name = document.getElementById("name").value;
  var numberKw = +document.getElementById("numberKw").value;
  //Kiểm tra thông tin khi khách hàng nhập vào
  if (!name || !numberKw || numberKw < 0) {
    document.getElementById("alert2").innerHTML =
      "Vui lòng nhập tên khách hàng và số Kw tiêu thụ lớn hơn 0";
    return;
  }
  //Tính tiền
  var price = calcPrice(numberKw, 500, 650, 850, 1100, 1300);
  var currentFormat = new Intl.NumberFormat("vn-VN");

  function calcPrice(numberKw, price1, price2, price3, price4, price5) {
    if (numberKw <= 50) {
      price = numberKw * price1;
    } else if (numberKw <= 100) {
      price = 50 * price1 + (numberKw - 50) * price2;
    } else if (numberKw <= 200) {
      price = 50 * price1 + 50 * price2 + (numberKw - 100) * price3;
    } else if (numberKw <= 350) {
      price =
        50 * price1 + 50 * price2 + 100 * price3 + (numberKw - 200) * price4;
    } else {
      price =
        50 * price1 +
        50 * price2 +
        100 * price3 +
        150 * price4 +
        (numberKw - 350) * price5;
    }
    return price;
  }
  document.getElementById("alert2").innerHTML =
    "Họ tên: " + name + "; Tiền điện: " + currentFormat.format(price) + " VNĐ";
}


/** Bài số 3
 * Mô hình 3 khối: Tính thuế thu nhập cá nhân
 * Đầu vào:
 * - Tạo biến name1, tongThuNhap, nguoiPhuThuoc cho người dùng nhập
 * Xử lý:
 * - DOM giá trị người dùng nhập về
 * - Tính thuNhapChiuThue = tongThuNhap - 4000000 - (nguoiPhuThuoc* 1600000)
 * - Kiểm tra tongThuNhap, thuNhapChiuThue
 * - Tạo biến thue
 * - Viết function tính thuế
 * Đầu ra:
 * - Thông báo họ tên, và số tiền thuế thu nhập
 */

function tinhTienThue(){
  var name1 = document.getElementById("name1").value;
  var tongThuNhap = +document.getElementById("tongThuNhap").value;
  var nguoiPhuThuoc = +document.getElementById("nguoiPhuThuoc").value;
  var thuNhapChiuThue = tongThuNhap - 4000000 - (nguoiPhuThuoc* 1600000);
  //Kiểm tra thông tin khi khách hàng nhập vào
  if (thuNhapChiuThue <=0 || !tongThuNhap){
    document.getElementById("alert3").innerHTML =
      "Tổng thu nhập không hợp lệ";
    return;
  }
  var currentFormat = new Intl.NumberFormat("vn-VN");
  var thue = calcThue (thuNhapChiuThue, 5, 10, 15, 20, 25, 30, 35);
  function calcThue(thuNhapChiuThue, thue1, thue2, thue3, thue4, thue5,thue6,thue7){
    if(thuNhapChiuThue <= 60000000 ){
      thue = thuNhapChiuThue * (thue1/100);
    }else if (thuNhapChiuThue <= 120000000){
      thue = thuNhapChiuThue * (thue2/100);
    }else if (thuNhapChiuThue <= 210000000){
      thue = thuNhapChiuThue * (thue3/100);
    }else if (thuNhapChiuThue <= 384000000){
      thue = thuNhapChiuThue * (thue4/100);
    }else if (thuNhapChiuThue <= 624000000){
      thue = thuNhapChiuThue * (thue5/100);
    }else if (thuNhapChiuThue <= 960000000){
      thue = thuNhapChiuThue * (thue6/100);
    }else{
      thue = thuNhapChiuThue * (thue7/100);
    }
    return thue;
  }
  document.getElementById("alert3").innerHTML = "Họ tên: " + name1 + "; Tiền thuế thu nhập cá nhân: " + currentFormat.format(thue) +" VNĐ";
}

/** Bài số 3
 * Mô hình 3 khối: Tính thuế thu nhập cá nhân
 * Đầu vào:
 * - Tạo biến name1, tongThuNhap, nguoiPhuThuoc cho người dùng nhập
 * Xử lý:
 * - DOM giá trị người dùng nhập về
 * - Tính thuNhapChiuThue = tongThuNhap - 4000000 - (nguoiPhuThuoc* 1600000)
 * - Kiểm tra tongThuNhap, thuNhapChiuThue
 * - Tạo biến thue
 * - Viết function tính thuế
 * Đầu ra:
 * - Thông báo họ tên, và số tiền thuế thu nhập
 */

function loaiKhachHang(){
  var khachHang = document.getElementById("khachHang").value;
  //document.getElementById("ketNoi").style.display = "3" == khachHang ? "block" : "none";
  if(khachHang == 3){
    document.getElementById("ketNoi").style.display= "block";
  }else{
    document.getElementById("ketNoi").style.display= "none";
  }
}
function tinhTienCap(){
  var khachHang = document.getElementById("khachHang").value;
  var maKH = document.getElementById("maKH").value;
  var kenh = document.getElementById("kenh").value;
  var ketNoi = document.getElementById("ketNoi").value;
  //Kiểm tra thông tin
  if(khachHang == 1 || !maKH || !kenh || !ketNoi){
    document.getElementById("alert4").innerHTML="Hãy chọn loại khách hàng và điền thông tin";
    return;
  }
  //Tính phí
  var price = 0;
  if (khachHang == 2){
    price = calcPrice (khachHang, kenh, ketNoi, 4.5, 20.5, 7.5);
  } else if(khachHang == 3){
    price = calcPrice (khachHang, kenh, ketNoi, 15, 75, 50);
  } 
function calcPrice (khachHang, kenh, ketNoi, phiXuly, phiDichVu, phiThueKenh){
  if (khachHang == 2){
    price = phiXuly + phiDichVu + phiThueKenh*kenh;
  }else if(khachHang == 3 && ketNoi <=10){
    price = phiXuly + phiDichVu + phiThueKenh*kenh;   
  }else if (khachHang == 3 && ketNoi>10 ){
    price = phiXuly + phiDichVu + phiThueKenh*kenh + (ketNoi -10)*5;
  }
  return price;
}
document.getElementById("alert4").innerHTML = "Mã khách hàng: " + maKH + "! Tiền cáp: $" + price;
}