const form = document.querySelector('form');

form.addEventListener('submit', (event) => {
    event.preventDefault();

});


function validate_t_name() {
    let t_name = document.getElementById("t_name").value;
    // var name_regx = /^[a-zA-Z]+$/;

    if (t_name == "") {

        document.getElementById("tname-error").innerHTML = "Team Name can't be Empty";
        return false;
    }
    
    else {
        document.getElementById("tname-error").innerHTML = "";
        return true;
    }
}

function validate_t_size() {
    let t_size = document.getElementById("t_size").value;
    // var name_regx = /^[a-zA-Z]+$/;

    if (t_size == "") {

        document.getElementById("tsize-error").innerHTML = "Team size can't be Empty";
        return false;
    }

    else if (t_size < 3) {
        document.getElementById("tsize-error").innerHTML = "Team size minimum 3";
        return false;

    }
    else if (t_size > 32) {
        document.getElementById("tsize-error").innerHTML = "Team size maximum 32";
        return false;

    }

    else {
        document.getElementById("tsize-error").innerHTML = "";
        return true;
    }
}



function validate_g_name() {
    let g_name = document.getElementById("g_name").value;
    var name_regx = /^[a-zA-Z]+$/;

    if (g_name == "") {

        document.getElementById("gname-error").innerHTML = "Game Name can't be Empty";
        return false;
    } else if (!name_regx.test(g_name)) {

        document.getElementById("gname-error").innerHTML = "Game Name only contain alphabet";
        return false;

    } else {
        document.getElementById("gname-error").innerHTML = "";
        return true;
    }
}
