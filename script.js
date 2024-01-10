ax = 0;

function escrevetabela() {
    ax = Math.round(Math.random() * 25);
    simbolosArray = new Array("&#164;", "&#8363;", "&#8710;", "&#167;", "&#9674;", "&#8225;", "&#8362;", "&#8224;", "&#182;", "&#9632;", "&#9633;", "&#9794;", "&#9792;", "&#230;", "&#960;", "&#8721;", "&#8734;", "&#8747;", "&#8801;", "&#8776;", "&#9786;", "&#247;", "&#9839;", "&#9830;", "&#9824;", "&#9827;", "&#9829;", "&#9834;")
    table = "<table border=0 cellspacing=2 cellpadding=2 width='75%'><tr>"
    qtd_celulas = 1;
    for (i = 99; i >= 1; i--) {
        a = Math.round(Math.random() * 25);
        if (i % 9 == 0 && i < 99) {
            a = ax;
        }

        table += "<td class='numtd'>" + i + "<td class='simbolotd'>" + simbolosArray[a] + "";

        if (qtd_celulas % 11 == 0) {
            table += "<tr>";
        }

        qtd_celulas++;
    }
    table += "";
    simbolo.innerHTML = table;
    simbolotd1.innerHTML = "";
}

function respostacorreta() {
    simbolotd1.innerHTML = simbolosArray[ax];
    simbolo.innerHTML = "<h3><a href='javascript:escrevetabela()'>Novamente?<br><br>";
}