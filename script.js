


function calculadora(){

    var n1  = document.getElementById('n1').value;
    var n2  = document.getElementById('n2').value;

    var divi = parseInt(n1) / parseInt(n2);
    document.getElementById('rdivi').value = divi;

    var res = parseInt(n1) + parseInt(n2);
    document.getElementById('rsuma').value = res;

    var multi = parseInt(n1) * parseInt(n2);
    document.getElementById('rmulti').value = multi;
}
