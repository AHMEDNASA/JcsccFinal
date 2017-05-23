$(function() {


    document.addEventListener("offline", onOffline, false);

    function onOffline() {
        alert(" لا يوجد إتصال بالانترنت");
    }



    $("#searchDiv").show();
    $("#loadingImg").hide();

    $("#searchAllBtn").click(function() {
        $("#loadingImg").show();
        $.post("http://services.jcscc.gov.jo:8090/consumers/MarketPric.jsp?itemd", {

            },
            function(data, status) {
                $("#content").html(data);
                $("table[width='90%']").remove();
                $("input[class='submit_bt']").remove();
                $("div[style='margin-top:3%;']").remove();
                $("input[type='submit']").remove();
                $("tr[height='10%']").remove();
                $("style").remove();
                $('div').removeAttr('style');
                $('table').removeAttr('style');
                $("#searchDiv").show();
                $("#loadingImg").hide();
                $("table").attr({
                    'data-role': 'table',
                    'data-mode': 'reflow',
                    'class': 'ui-responsive table-stroke'
                });


            });
    });



    $("#searchBtn").click(function() {

        $("#loadingImg").show();

        var a = "%" + $("#searchTxt").val() + "%";
        $.post("http://services.jcscc.gov.jo:8090/consumers/MarketPric.jsp", {
                itemd: a
            },
            function(data, status) {
                $("#content").html(data);
                $("table[width='90%']").remove();
                $("div[style='margin-top:3%;']").remove();
                $("input[class='submit_bt']").remove();
                $("input[type='submit']").remove();
                $("tr[height='10%']").remove();
                $("style").remove();
                $('div').removeAttr('style');
                $('table').removeAttr('style');
                $("#searchDiv").show();
                $("#loadingImg").hide();
                $("table").attr("width", "100%");
                $("table").attr({
                    'data-role': 'table',
                    'data-mode': 'reflow',
                    'class': 'ui-responsive table-stroke'
                });

            });


    });




});
