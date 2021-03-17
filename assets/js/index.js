c_all.onclick = function () {
    c_all.className = "bu_sp_active";
    c_website.className = "bu_sp";
    c_mobile.className = "bu_sp";
    var x_website, i_website;
    x_website = document.querySelectorAll(".ip_website");
    for (i_website = 0; i_website < x_website.length; i_website++) {
        x_website[i_website].style.display = "block";
    }
    var x_mobile, i_mobile;
    x_mobile = document.querySelectorAll(".ip_mobile");
    for (i_mobile = 0; i_mobile < x_mobile.length; i_mobile++) {
        x_mobile[i_mobile].style.display = "block";
    }

}

c_website.onclick = function () {
    c_all.className = "bu_sp";
    c_website.className = "bu_sp_active";
    c_mobile.className = "bu_sp";
    var x_website, i_website;
    x_website = document.querySelectorAll(".ip_website");
    for (i_website = 0; i_website < x_website.length; i_website++) {
        x_website[i_website].style.display = "block";
    }
    var x_mobile, i_mobile;
    x_mobile = document.querySelectorAll(".ip_mobile");
    for (i_mobile = 0; i_mobile < x_mobile.length; i_mobile++) {
        x_mobile[i_mobile].style.display = "none";
    }

}

c_mobile.onclick = function () {
    c_all.className = "bu_sp";
    c_website.className = "bu_sp";
    c_mobile.className = "bu_sp_active";
    var x_website, i_website;
    x_website = document.querySelectorAll(".ip_website");
    for (i_website = 0; i_website < x_website.length; i_website++) {
        x_website[i_website].style.display = "none";
    }
    var x_mobile, i_mobile;
    x_mobile = document.querySelectorAll(".ip_mobile");
    for (i_mobile = 0; i_mobile < x_mobile.length; i_mobile++) {
        x_mobile[i_mobile].style.display = "block";
    }

}