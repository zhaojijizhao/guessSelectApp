// $(function(){
//     var select = [''];
//     function inputTemp(obj){
//         return '<span><input type="text" id="option'+obj.id+'" placeholder="请输入选项" /></span>'
//     }
//     $('#reset').on('click',function(e){
//         e.preventDefault();
//         $('#inline').html('<span><input type="text" id="option1" placeholder="请输入选项" /></span>');
//         $('#right span').html('');
//         select = [''];
//     });
//     $('#add').on('click',function(e){
//         e.preventDefault();
//         $('#inline').append(inputTemp({id:(select.length+1)}));
//         select.push('');
//         inputBind();
//     }); 
//     $('#start').on('click',function(e){
//         e.preventDefault();
//         if(select.length <= 1){
//             alert('请填写至少两个选项');
//             return false;
//         }
//         roll();
//     });
//     function inputBind(){
//         $("#inline input").off('change');
//         $("#inline input").on('change',function(){
//             var id = parseInt($(this).attr('id').split('option')[1],10);
//             select[id-1] = $(this).val()||'';
//         });
//     }
//     function roll(){
//         $('#pop').removeClass('hide');

//         var len = select.length;
//         var list = $("#inline span");
//         result = parseInt(Math.random()*len+1,10);

//         var i = 0,t = 0;

//         var inter = setInterval(function(){
//             list.removeClass('on');
//             $(list[i]).addClass('on');
//             i++;
//             if(i == len){
//                 i = 0;
//                 t++;
//                 if(t == 3){
//                     clearInterval(inter);
//                 }
//             }
//         },300);
//         console.log(len);
//         console.log(result);
//         setTimeout(function(){
//              var i = 0;
//              var last = setInterval(function(){
//                 if(i == result-1){
//                     clearInterval(last);
//                     finishRoll();
//                 }
//                 list.removeClass('on');
//                 $(list[i]).addClass('on');
//                 i++;
//             },800);
//         },len*300*3);

//         function finishRoll(){
//            $("#right span").html($($("#inline input")[result-1]).val());
//            $('#pop').addClass('hide');
//         }
        
//     }
//     inputBind();
// });
window.location.href="./dist/index.html"