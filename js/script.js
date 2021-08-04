// $(document).ready(
//     /////sticky-nav
//     function(){
//         $('.nd_1').waypoint(
//             function(direction){
//                 if(direction=="down"){
//                     $('nav').addClass('sticky')
//                 }else{
//                     $('nav').removeClass('sticky')
//                 }
//             },{
//                 offset: '600px'
//             }
//         )
//     ////mobeil - nav -icon
//         $('.mobile-nav-icon').click(/*khi click vao icon-mobile thi no se hien ra menu */
//             function(){
//                 $('.main-nav1').slideToggle(200);

//                 if($('.mobile-nav-icon').hasClass('fa-bars')){/**khi click vao icon thi no se chuyen thanh icon dau nhan va hien thi ra menu */
//                     $('.mobile-nav-icon').addClass('fa-times')
//                     $('.mobile-nav-icon').removeClass('fa-bars')
//                 }
//                 else{
//                     $('.mobile-nav-icon').addClass('fa-bars')
//                     $('.mobile-nav-icon').removeClass('fa-times') 
//                 }
//             }
//         )
//     }
// )
$(document).ready(
    /////sticky-nav
    function(){
        $('.nd_1').waypoint(
            function(direction){
                if(direction=="down"){
                    $('nav').addClass('sticky')
                }else{
                    $('nav').removeClass('sticky')
                }
            },{
                offset: '600px'
            }
        )
    
    ////smooth sroll jqeury: seacher google
        $('a').click(function(event){
            $('html, body').animate({
                scrollTop: $( $.attr(this, 'href') ).offset().top
            }, 500);/* 500 laf thời gian cuộn đến các phần*/
            event.preventDefault();
        });
    ////mobeil - nav -icon
        $('.mobile-nav-icon').click(/*khi click vao icon-mobile thi no se hien ra menu */
            function(){
                $('.main_nav').slideToggle(200);

                if($('.mobile-nav-icon').hasClass('fa-bars')){/**khi click vao icon thi no se chuyen thanh icon dau nhan va hien thi ra menu */
                    $('.mobile-nav-icon').addClass('fa-times')
                    $('.mobile-nav-icon').removeClass('fa-bars')
                }
                else{
                    $('.mobile-nav-icon').addClass('fa-bars')
                    $('.mobile-nav-icon').removeClass('fa-times') 
                }
            }
        )
    }
)


// <!DOCTYPE html>
// <html>
// <head>
//     <meta charset="utf-8">
//     <meta name="viewport" content="width=device-width, initial-scale=1">
//     <title>Danh sách nhân viên</title>
// <!--    <link rel="stylesheet" href="https://maxcdn.bootstrapcdn.com/bootstrap/4.0.0/css/bootstrap.min.css" integrity="sha384-Gn5384xqQ1aoWXA+058RXPxPg6fy4IWvTNh0E263XmFcJlSAwiGgFAW/dAiS6JXm" crossorigin="anonymous">
//     <script src="https://code.jquery.com/jquery-3.2.1.slim.min.js" integrity="sha384-KJ3o2DKtIkvYIK3UENzmM7KCkRr/rE9/Qpg6aAZGJwFDMVNA/GpGFF93hXpG5KkN" crossorigin="anonymous"></script>
//     <script src="https://cdnjs.cloudflare.com/ajax/libs/popper.js/1.12.9/umd/popper.min.js" integrity="sha384-ApNbgh9B+Y1QKtv3Rn7W3mgPxhU9K/ScQsAP7hUibX39j7fakFPskvXusvfa0b4Q" crossorigin="anonymous"></script>
//     <script src="https://maxcdn.bootstrapcdn.com/bootstrap/4.0.0/js/bootstrap.min.js" integrity="sha384-JZR6Spejh4U02d8jOt6vLEHfe/JQGiRRSQQxSfFWpi1MquVdAyjUar5+76PVCmYl" crossorigin="anonymous"></script> -->
//     <link rel="stylesheet" type="text/css" href="CSS_DS/style_nv.css">
//     <link rel="stylesheet" type="text/css" href="../css/style.css">
//     <!-- <script language="javascript" src="js/script.js"></script> -->
// </head>
// <body>
//     <div class="content">
//         <div class="main">
//             <ul>
//                 <li><a href="../index.html">Trang Chủ</a></li>
//                 <li><a href="../BanHang/index.html">Bán Hàng</a></li>
//                 <li><a href="../DanhSach_NV/Nhan_vien.html">Nhân Viên</a></li>
//                 <li><a href="../ChamCongNgay/Cong_Ngay.html">Chấm Công</a></li>
//                 <li class="dropdown">
//                     <a href="javascript:void(0)" class="dropbtn">Thu Chi</a>
//                     <div class="dropdown-content">
//                         <a href="../Luong/index.html">Tiền Lương</a>
//                         <a href="../NguyenLieu/index.html">Nguyên Vật Liệu</a>
//                         <a href="../ThuNgan/index.html">Doanh Thu</a>
//                     </div>
//                 </li>
//             </ul>
//             <div class="nd_1">
//                 <div class="nd">
//                     <h4>Quản Lý Nhân Sự</h4>
//                     <a href="../form/index.html" class="button">THÊM NHÂN VIÊN</a>
//                     <form class="form_2">
//                         <table border="1" cellpadding="10" cellspacing="0">
//                             <tbody>
//                                 <tr>
//                                     <th>STT</th>
//                                     <th>Mã NV</th>
//                                     <th>Họ Tên</th>
//                                     <th>Ngày Sinh</th>
//                                     <th>Giới Tính</th>
//                                     <th>Chức Vụ</th>
//                                     <th>Công Việc</th>
//                                 </tr>
//                                 <tr id="quanly">
//                                     <td>1</td>
//                                     <td>121</td>
//                                     <td>Phạm Xuân Thành</td>
//                                     <td>12/08/1998</td>
//                                     <td>Nam</td>
//                                     <td>Quản Lý</td>
//                                     <td>Quản Lý Quán</td>
//                                 </tr>
//                                 <tr>
//                                     <td>2</td>
//                                     <td>122</td>
//                                     <td>Phạm Quang Minh</td>
//                                     <td>22/09/2001</td>
//                                     <td>Nam</td>
//                                     <td>Thu NGân</td>
//                                     <td>Quản Lý Thu Ngân</td>
//                                 </tr>
//                                 <tr>
//                                     <td>3</td>
//                                     <td>123</td>
//                                     <td>Lê Phương Anh</td>
//                                     <td>02/12/2000</td>
//                                     <td>Nữ</td>
//                                     <td>Pha Chế</td>
//                                     <td>Pha Chế</td>
//                                 </tr>
//                                 <tr>
//                                     <td>4</td>
//                                     <td>124</td>
//                                     <td>Nguyễn Mai Phương</td>
//                                     <td>26/06/2001</td>
//                                     <td>Nữ</td>
//                                     <td>Phục Vụ</td>
//                                     <td>Phục Vụ Quán</td>
//                                 </tr>
//                                 <tr>
//                                     <td>5</td>
//                                     <td>125</td>
//                                     <td>Đỗ Hoàng</td>
//                                     <td>15/09/1999</td>
//                                     <td>Nam</td>
//                                     <td>Phục Vụ</td>
//                                     <td>Phục Vụ Quán</td>
//                                 </tr>
//                             </tbody>
//                         </table>
//                     </form>
//                 </div>
//             </div>
//         </div>
//     </div>
// </body>
// </html>