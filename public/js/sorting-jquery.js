$(function(){$("table").on("click","th",function(){var c=$(this).index(),a=[],b=$(this).hasClass("asc")?"desc":"asc";$("#sort th").removeClass("asc desc"),$(this).addClass(b),$("#sort tbody tr").each(function(c,b){a.push($(b).detach())}),a.sort(function(d,e){var a=$(d).find("td").eq(c).text(),b=$(e).find("td").eq(c).text();return a>b?1:a<b?-1:0}),$(this).hasClass("desc")&&a.reverse(),$.each(a,function(b,a){$("#sort tbody").append(a)})})})