﻿$(document).ready(function(){var e,o=new MessageBox;$("#uploadUDFButton").click(function(){$("#borderUDFContainer").css({"border-style":"double","border-color":"#dc3545",transition:"300ms"}),$("#convertUDFFile").trigger("click")}),$("#convertUDFFile").change(function(o){$("#borderUDFContainer").find("#selectedFileName").remove();var r=o.target.files[0];if(["application/vnd.openxmlformats-officedocument.wordprocessingml.document","application/vnd.openxmlformats-officedocument.spreadsheetml.sheet","application/vnd.ms-excel.sheet.macroEnabled.12","application/vnd.ms-excel","application/pdf","application/msword","image/jpeg","image/png","image/tiff"].includes(r.type)){$("#borderUDFContainer").css({"border-style":"double","border-color":"#dc3545","background-color":"#dc3545",transition:"300ms"}),$("#uploadUDFButton").css({"background-color":"white",border:"none",color:"#2a2a2a",transition:"300ms"}),$("#convertUDFButton").css({"background-color":"white",border:"none",color:"#2a2a2a",transition:"300ms"});var t=document.createElement("h6");t.textContent=r.name;var n=document.createAttribute("id");n.value="selectedFileName",t.setAttributeNode(n),$(t).css({color:"white","margin-top":"20px"}),$("#borderUDFContainer").append(t);var a=new FormData;a.append("converterFile",r);var i=(r.size/1024).toPrecision(4);e={file:a,format:r.type,fileSize:i}}else $("#borderUDFContainer").css({"background-color":"#2a2a2a","border-style":"dashed","border-color":"#3a3a3a",transition:"300ms"}),$("#uploadUDFButton").css({"background-color":"#dc3545",border:"none",color:"#fff",transition:"300ms"}),$("#convertUDFButton").css({"background-color":"#dc3545",border:"none",color:"#fff",transition:"300ms"}),msg.createErrorBox("Uygun olmayan bir format se\xe7tiniz. Sadece Excel, Word, PDF ve G\xf6rsel Imaj dosyaları d\xf6n\xfcşt\xfcr\xfclebilir.")}),void 0!=document.getElementById("borderUDFContainer")&&(document.getElementById("borderUDFContainer").addEventListener("dragover",function(e){e.preventDefault(),$(this).css({"border-style":"double","border-color":"#dc3545",transition:"300ms"})}),document.getElementById("borderUDFContainer").addEventListener("dragenter",function(e){e.preventDefault()}),document.getElementById("borderUDFContainer").addEventListener("dragleave",function(e){e.preventDefault(),$(this).css({"border-style":"dashed","border-color":"#3a3a3a",transition:"300ms"})}),document.getElementById("borderUDFContainer").addEventListener("drop",function(r){$(this).find("#selectedFileName").remove(),r.preventDefault();var t=r.dataTransfer.files[0];if(["application/vnd.openxmlformats-officedocument.wordprocessingml.document","application/vnd.openxmlformats-officedocument.spreadsheetml.sheet","application/vnd.ms-excel.sheet.macroEnabled.12","application/vnd.ms-excel","application/pdf","application/msword","image/jpeg","image/png","image/tiff"].includes(t.type)){$(this).css({"border-style":"double","border-color":"#dc3545","background-color":"#dc3545",transition:"300ms"}),$("#uploadUDFButton").css({"background-color":"white",border:"none",color:"#2a2a2a",transition:"300ms"}),$("#convertUDFButton").css({"background-color":"white",border:"none",color:"#2a2a2a",transition:"300ms"});var n=document.createElement("h6");n.textContent=t.name;var a=document.createAttribute("id");a.value="selectedFileName",n.setAttributeNode(a),$(n).css({color:"white","margin-top":"20px"}),this.appendChild(n);var i=new FormData;i.append("converterFile",t);var s=(t.size/1024).toPrecision(4);e={file:i,format:t.type,fileSize:s}}else $("#borderUDFContainer").css({"background-color":"#2a2a2a","border-style":"dashed","border-color":"#3a3a3a",transition:"300ms"}),$("#uploadUDFButton").css({"background-color":"#dc3545",border:"none",color:"#fff",transition:"300ms"}),$("#convertUDFButton").css({"background-color":"#dc3545",border:"none",color:"#fff",transition:"300ms"}),o.createErrorBox("Uygun olmayan bir format se\xe7tiniz.")})),$("#convertUDFButton").click(function(){var r=e.file;e.format;var t=e.fileSize;if(t>40240){o.messageBoxClear(),o.createErrorBox("40MB'den b\xfcy\xfck dosyaların d\xf6n\xfcşt\xfcr\xfclmesi hen\xfcz sitemiz tarafından desteklenmemektedir.");return}$.ajax({url:"/Donusturucu/officeToUDF",type:"post",dataType:"json",data:r,contentType:!1,cache:!1,processData:!1,beforeSend(){o.convertFile(),$("#process-text").text("Dosyanız Y\xfckleniyor...")},xhr:function(){var e=new window.XMLHttpRequest;return e.upload.addEventListener("progress",function(e){if(e.lengthComputable){var o=e.loaded/e.total*50;$("#convertProcess").html(Math.floor(o)+"%"),$("#convertProcess").width(Math.floor(o)+"%")}},!1),t>5220?$("#process-text").text("Dosyanız D\xf6n\xfcşt\xfcr\xfcl\xfcyor... Dosyanızın boyutundan dolayı işlemin s\xfcresi 10 DK'ya kadar \xe7ıkabilir. L\xfctfen Sayfayı Kapatmayın."):$("#process-text").text("Dosyanız D\xf6n\xfcşt\xfcr\xfcl\xfcyor... L\xfctfen Sayfayı Kapatmayın."),e},success:function(e){$("#convertProcess").html("100%"),$("#convertProcess").width("100%"),$("#process-text").text("D\xf6n\xfcşt\xfcrme İşlemi Tamamlandı."),e.success?setTimeout(function(){$("#borderUDFContainer").css({"border-style":"solid","border-color":"#198754","background-color":"#198754",transition:"300ms"});var r="/Converter/DownloadFile/"+btoa(unescape(encodeURIComponent(e.success)));o.createDownloadBox("D\xf6n\xfcşt\xfcrme İşlemi Başarıyla Tamamlandı. Aşağıdaki Butonu Kullanarak Dosyayı İndirebilirsiniz.",r),$("#messageBoxResult #MyModal-container .download-button").click(function(){o.messageBoxClear()})},2500):e.error&&o.createErrorBox(e.error)}})})});