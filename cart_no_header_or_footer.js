var subtotal = 0;
var total = 20;

var nuggets_count = 0;
var nuggets_value = 20;
var nuggets_count_value = 0;

var kids_chicken_burger_count = 0;
var kids_chicken_burger_value = 50;
var kids_chicken_burger_count_value = 0;

var kids_chicken_leg_count = 0;
var kids_chicken_leg_value = 20;
var kids_chicken_leg_count_value = 0;

var kids_chicken_strips_count = 0;
var kids_chicken_strips_value = 20;
var kids_chicken_strips_count_value = 0;

var double_chicken_count = 0;
var double_chicken_value = 60;
var double_chicken_count_value = 0;

var family_box_count = 0;
var family_box_value = 120;
var family_box_count_value = 0;

var double_down_count = 0;
var double_down_value = 50;
var double_down_count_value = 0;

var twister_count = 0;
var twister_value = 50;
var twister_count_value = 0;

var supreme_count = 0;
var supreme_value = 70;
var supreme_count_value = 0;

var big_chick_count = 0;
var big_chick_value = 80;
var big_chick_count_value = 0;

document.getElementById("sub").innerHTML = subtotal;
document.getElementById("total").innerHTML = total;
document.getElementById("nuggets_counter").innerHTML = nuggets_count;
document.getElementById("nuggets_price").innerHTML = nuggets_count_value;
document.getElementById("kids_chicken_burger_counter").innerHTML = kids_chicken_burger_count;
document.getElementById("kids_chicken_burger_price").innerHTML = kids_chicken_burger_count_value;
document.getElementById("kids_chicken_leg_counter").innerHTML = kids_chicken_leg_count;
document.getElementById("kids_chicken_leg_price").innerHTML = kids_chicken_leg_count_value;
document.getElementById("kids_chicken_strips_counter").innerHTML = kids_chicken_strips_count;
document.getElementById("kids_chicken_strips_price").innerHTML = kids_chicken_strips_count_value;
document.getElementById("double_chicken_counter").innerHTML = double_chicken_count;
document.getElementById("double_chicken_price").innerHTML = double_chicken_count_value;
document.getElementById("family_box_counter").innerHTML = family_box_count;
document.getElementById("family_box_price").innerHTML = family_box_count_value;
document.getElementById("double_down_counter").innerHTML = double_down_count;
document.getElementById("double_down_price").innerHTML = double_down_count_value;
document.getElementById("twister_counter").innerHTML = twister_count;
document.getElementById("twister_price").innerHTML = twister_count_value;
document.getElementById("supreme_counter").innerHTML = supreme_count;
document.getElementById("supreme_price").innerHTML = supreme_count_value;
document.getElementById("big_chick_counter").innerHTML = big_chick_count;
document.getElementById("big_chick_price").innerHTML = big_chick_count_value;


function confirm_purchase() {
    if (confirm("Are You Sure") == true)
    {
        alert("Your order has been requested and will be on its way to you soon");
    }
    else
    {
        alert("Your order has been canceled");
    }
}

function nuggets_add() {
    subtotal = subtotal + nuggets_value;
    total = total + nuggets_value;
    nuggets_count = nuggets_count + 1;
    nuggets_count_value = nuggets_count_value + nuggets_value;
    document.getElementById("sub").innerHTML = subtotal;
    document.getElementById("total").innerHTML = total;
    document.getElementById("nuggets_counter").innerHTML = nuggets_count;
    document.getElementById("nuggets_price").innerHTML = nuggets_count_value;

    if (nuggets_count > 0)
        {
        document.getElementById("nugget_remove_btnid").style.display = "block";
        document.getElementById("nuggets_paragraphid").style.opacity = "100%";
        }
    else if (nuggets_count <= 0)
        {
        document.getElementById("nugget_remove_btnid").style.display = "none";
        document.getElementById("nuggets_paragraphid").style.opacity = "20%";
        }
}

function nuggets_remove() {
    subtotal = subtotal - nuggets_value;
    total = total - nuggets_value;
    nuggets_count = nuggets_count - 1;
    nuggets_count_value = nuggets_count_value - nuggets_value;
    document.getElementById("sub").innerHTML = subtotal;
    document.getElementById("total").innerHTML = total;
    document.getElementById("nuggets_counter").innerHTML = nuggets_count;
    document.getElementById("nuggets_price").innerHTML = nuggets_count_value;

    if (nuggets_count > 0)
        {
        document.getElementById("nugget_remove_btnid").style.display = "block";
        document.getElementById("nuggets_paragraphid").style.opacity = "100%";
    }
    else if (nuggets_count <= 0)
        {
        document.getElementById("nugget_remove_btnid").style.display = "none";
        document.getElementById("nuggets_paragraphid").style.opacity = "20%";
    }
}

function kids_chicken_burger_add() {
    subtotal = subtotal + kids_chicken_burger_value;
    total = total + kids_chicken_burger_value;
    kids_chicken_burger_count = kids_chicken_burger_count + 1;
    kids_chicken_burger_count_value = kids_chicken_burger_count_value + kids_chicken_burger_value;
    document.getElementById("sub").innerHTML = subtotal;
    document.getElementById("total").innerHTML = total;
    document.getElementById("kids_chicken_burger_counter").innerHTML = kids_chicken_burger_count;
    document.getElementById("kids_chicken_burger_price").innerHTML = kids_chicken_burger_count_value;

    if (kids_chicken_burger_count > 0)
        {
        document.getElementById("kids_chicken_burger_remove_btnid").style.display = "block";
        document.getElementById("kids_chicken_burger_paragraphid").style.opacity = "100%";
        }
    else if (kids_chicken_burger_count <= 0)
        {
        document.getElementById("kids_chicken_burger_remove_btnid").style.display = "none";
        document.getElementById("kids_chicken_burger_paragraphid").style.opacity = "20%";
        }
}

function kids_chicken_burger_remove() {
    subtotal = subtotal - kids_chicken_burger_value;
    total = total - kids_chicken_burger_value;
    kids_chicken_burger_count = kids_chicken_burger_count - 1;
    kids_chicken_burger_count_value = kids_chicken_burger_count_value - kids_chicken_burger_value;
    document.getElementById("sub").innerHTML = subtotal;
    document.getElementById("total").innerHTML = total;
    document.getElementById("kids_chicken_burger_counter").innerHTML = kids_chicken_burger_count;
    document.getElementById("kids_chicken_burger_price").innerHTML = kids_chicken_burger_count_value;

    if (kids_chicken_burger_count > 0)
        {
        document.getElementById("kids_chicken_burger_remove_btnid").style.display = "block";
        document.getElementById("kids_chicken_burger_paragraphid").style.opacity = "100%";
    }
    else if (kids_chicken_burger_count <= 0)
        {
        document.getElementById("kids_chicken_burger_remove_btnid").style.display = "none";
        document.getElementById("kids_chicken_burger_paragraphid").style.opacity = "20%";
    }
}

function kids_chicken_leg_add() {
    subtotal = subtotal + kids_chicken_leg_value;
    total = total + kids_chicken_leg_value;
    kids_chicken_leg_count = kids_chicken_leg_count + 1;
    kids_chicken_leg_count_value = kids_chicken_leg_count_value + kids_chicken_leg_value;
    document.getElementById("sub").innerHTML = subtotal;
    document.getElementById("total").innerHTML = total;
    document.getElementById("kids_chicken_leg_counter").innerHTML = kids_chicken_leg_count;
    document.getElementById("kids_chicken_leg_price").innerHTML = kids_chicken_leg_count_value;

    if (kids_chicken_leg_count > 0)
        {
        document.getElementById("kids_chicken_leg_remove_btnid").style.display = "block";
        document.getElementById("kids_chicken_leg_paragraphid").style.opacity = "100%";
        }
    else if (kids_chicken_leg_count <= 0)
        {
        document.getElementById("kids_chicken_leg_remove_btnid").style.display = "none";
        document.getElementById("kids_chicken_leg_paragraphid").style.opacity = "20%";
        }
}

function kids_chicken_leg_remove() {
    subtotal = subtotal - kids_chicken_leg_value;
    total = total - kids_chicken_leg_value;
    kids_chicken_leg_count = kids_chicken_leg_count - 1;
    kids_chicken_leg_count_value = kids_chicken_leg_count_value - kids_chicken_leg_value;
    document.getElementById("sub").innerHTML = subtotal;
    document.getElementById("total").innerHTML = total;
    document.getElementById("kids_chicken_leg_counter").innerHTML = kids_chicken_leg_count;
    document.getElementById("kids_chicken_leg_price").innerHTML = kids_chicken_leg_count_value;

    if (kids_chicken_leg_count > 0)
        {
        document.getElementById("kids_chicken_leg_remove_btnid").style.display = "block";
        document.getElementById("kids_chicken_leg_paragraphid").style.opacity = "100%";
    }
    else if (kids_chicken_leg_count <= 0)
        {
        document.getElementById("kids_chicken_leg_remove_btnid").style.display = "none";
        document.getElementById("kids_chicken_leg_paragraphid").style.opacity = "20%";
    }
}

function kids_chicken_strips_add() {
    subtotal = subtotal + kids_chicken_strips_value;
    total = total + kids_chicken_strips_value;
    kids_chicken_strips_count = kids_chicken_strips_count + 1;
    kids_chicken_strips_count_value = kids_chicken_strips_count_value + kids_chicken_strips_value;
    document.getElementById("sub").innerHTML = subtotal;
    document.getElementById("total").innerHTML = total;
    document.getElementById("kids_chicken_strips_counter").innerHTML = kids_chicken_strips_count;
    document.getElementById("kids_chicken_strips_price").innerHTML = kids_chicken_strips_count_value;

    if (kids_chicken_strips_count > 0)
        {
        document.getElementById("kids_chicken_strips_remove_btnid").style.display = "block";
        document.getElementById("kids_chicken_strips_paragraphid").style.opacity = "100%";
        }
    else if (kids_chicken_strips_count <= 0)
        {
        document.getElementById("kids_chicken_strips_remove_btnid").style.display = "none";
        document.getElementById("kids_chicken_strips_paragraphid").style.opacity = "20%";
        }
}

function kids_chicken_strips_remove() {
    subtotal = subtotal - kids_chicken_strips_value;
    total = total - kids_chicken_strips_value;
    kids_chicken_strips_count = kids_chicken_strips_count - 1;
    kids_chicken_strips_count_value = kids_chicken_strips_count_value - kids_chicken_strips_value;
    document.getElementById("sub").innerHTML = subtotal;
    document.getElementById("total").innerHTML = total;
    document.getElementById("kids_chicken_strips_counter").innerHTML = kids_chicken_strips_count;
    document.getElementById("kids_chicken_strips_price").innerHTML = kids_chicken_strips_count_value;

    if (kids_chicken_strips_count > 0)
        {
        document.getElementById("kids_chicken_strips_remove_btnid").style.display = "block";
        document.getElementById("kids_chicken_strips_paragraphid").style.opacity = "100%";
        }
    else if (kids_chicken_strips_count <= 0)
        {
        document.getElementById("kids_chicken_strips_remove_btnid").style.display = "none";
        document.getElementById("kids_chicken_strips_paragraphid").style.opacity = "20%";
        }
}

function double_chicken_add() {
    subtotal = subtotal + double_chicken_value;
    total = total + double_chicken_value;
    double_chicken_count = double_chicken_count + 1;
    double_chicken_count_value = double_chicken_count_value + double_chicken_value;
    document.getElementById("sub").innerHTML = subtotal;
    document.getElementById("total").innerHTML = total;
    document.getElementById("double_chicken_counter").innerHTML = double_chicken_count;
    document.getElementById("double_chicken_price").innerHTML = double_chicken_count_value;

    if (double_chicken_count > 0)
        {
        document.getElementById("double_chicken_remove_btnid").style.display = "block";
        document.getElementById("double_chicken_paragraphid").style.opacity = "100%";
        }
    else if (double_chicken_count <= 0)
        {
        document.getElementById("double_chicken_remove_btnid").style.display = "none";
        document.getElementById("double_chicken_paragraphid").style.opacity = "20%";
        }
}

function double_chicken_remove() {
    subtotal = subtotal - double_chicken_value;
    total = total - double_chicken_value;
    double_chicken_count = double_chicken_count - 1;
    double_chicken_count_value = double_chicken_count_value - double_chicken_value;
    document.getElementById("sub").innerHTML = subtotal;
    document.getElementById("total").innerHTML = total;
    document.getElementById("double_chicken_counter").innerHTML = double_chicken_count;
    document.getElementById("double_chicken_price").innerHTML = double_chicken_count_value;

    if (double_chicken_count > 0)
        {
        document.getElementById("double_chicken_remove_btnid").style.display = "block";
        document.getElementById("double_chicken_paragraphid").style.opacity = "100%";
    }
    else if (double_chicken_count <= 0)
        {
        document.getElementById("double_chicken_remove_btnid").style.display = "none";
        document.getElementById("double_chicken_paragraphid").style.opacity = "20%";
    }
}

function family_box_add() {
    subtotal = subtotal + family_box_value;
    total = total + family_box_value;
    family_box_count = family_box_count + 1;
    family_box_count_value = family_box_count_value + family_box_value;
    document.getElementById("sub").innerHTML = subtotal;
    document.getElementById("total").innerHTML = total;
    document.getElementById("family_box_counter").innerHTML = family_box_count;
    document.getElementById("family_box_price").innerHTML = family_box_count_value;

    if (family_box_count > 0)
        {
        document.getElementById("family_box_remove_btnid").style.display = "block";
        document.getElementById("family_box_paragraphid").style.opacity = "100%";
        }
    else if (family_box_count <= 0)
        {
        document.getElementById("family_box_remove_btnid").style.display = "none";
        document.getElementById("family_box_paragraphid").style.opacity = "20%";
        }
}

function family_box_remove() {
    subtotal = subtotal - family_box_value;
    total = total - family_box_value;
    family_box_count = family_box_count - 1;
    family_box_count_value = family_box_count_value - family_box_value;
    document.getElementById("sub").innerHTML = subtotal;
    document.getElementById("total").innerHTML = total;
    document.getElementById("family_box_counter").innerHTML = family_box_count;
    document.getElementById("family_box_price").innerHTML = family_box_count_value;

    if (family_box_count > 0)
        {
        document.getElementById("family_box_remove_btnid").style.display = "block";
        document.getElementById("family_box_paragraphid").style.opacity = "100%";
    }
    else if (family_box_count <= 0)
        {
        document.getElementById("family_box_remove_btnid").style.display = "none";
        document.getElementById("family_box_paragraphid").style.opacity = "20%";
    }
}

function double_down_add() {
    subtotal = subtotal + double_down_value;
    total = total + double_down_value;
    double_down_count = double_down_count + 1;
    double_down_count_value = double_down_count_value + double_down_value;
    document.getElementById("sub").innerHTML = subtotal;
    document.getElementById("total").innerHTML = total;
    document.getElementById("double_down_counter").innerHTML = double_down_count;
    document.getElementById("double_down_price").innerHTML = double_down_count_value;

    if (double_down_count > 0)
        {
        document.getElementById("double_down_remove_btnid").style.display = "block";
        document.getElementById("double_down_paragraphid").style.opacity = "100%";
        }
    else if (double_down_count <= 0)
        {
        document.getElementById("double_down_remove_btnid").style.display = "none";
        document.getElementById("double_down_paragraphid").style.opacity = "20%";
        }
}

function double_down_remove() {
    subtotal = subtotal - double_down_value;
    total = total - double_down_value;
    double_down_count = double_down_count - 1;
    double_down_count_value = double_down_count_value - double_down_value;
    document.getElementById("sub").innerHTML = subtotal;
    document.getElementById("total").innerHTML = total;
    document.getElementById("double_down_counter").innerHTML = double_down_count;
    document.getElementById("double_down_price").innerHTML = double_down_count_value;

    if (double_down_count > 0)
        {
        document.getElementById("double_down_remove_btnid").style.display = "block";
        document.getElementById("double_down_paragraphid").style.opacity = "100%";
        }
    else if (double_down_count <= 0)
        {
        document.getElementById("double_down_remove_btnid").style.display = "none";
        document.getElementById("double_down_paragraphid").style.opacity = "20%";
        }
}

function twister_add() {
    subtotal = subtotal + twister_value;
    total = total + twister_value;
    twister_count = twister_count + 1;
    twister_count_value = twister_count_value + twister_value;
    document.getElementById("sub").innerHTML = subtotal;
    document.getElementById("total").innerHTML = total;
    document.getElementById("twister_counter").innerHTML = twister_count;
    document.getElementById("twister_price").innerHTML = twister_count_value;

    if (twister_count > 0)
        {
        document.getElementById("twister_remove_btnid").style.display = "block";
        document.getElementById("twister_paragraphid").style.opacity = "100%";
        }
    else if (twister_count <= 0)
        {
        document.getElementById("twister_remove_btnid").style.display = "none";
        document.getElementById("twister_paragraphid").style.opacity = "20%";
        }
}

function twister_remove() {
    subtotal = subtotal - twister_value;
    total = total - twister_value;
    twister_count = twister_count - 1;
    twister_count_value = twister_count_value - twister_value;
    document.getElementById("sub").innerHTML = subtotal;
    document.getElementById("total").innerHTML = total;
    document.getElementById("twister_counter").innerHTML = twister_count;
    document.getElementById("twister_price").innerHTML = twister_count_value;

    if (twister_count > 0)
        {
        document.getElementById("twister_remove_btnid").style.display = "block";
        document.getElementById("twister_paragraphid").style.opacity = "100%";
        }
    else if (twister_count <= 0)
        {
        document.getElementById("twister_remove_btnid").style.display = "none";
        document.getElementById("twister_paragraphid").style.opacity = "20%";
        }
}

function supreme_add() {
    subtotal = subtotal + supreme_value;
    total = total + supreme_value;
    supreme_count = supreme_count + 1;
    supreme_count_value = supreme_count_value + supreme_value;
    document.getElementById("sub").innerHTML = subtotal;
    document.getElementById("total").innerHTML = total;
    document.getElementById("supreme_counter").innerHTML = supreme_count;
    document.getElementById("supreme_price").innerHTML = supreme_count_value;

    if (supreme_count > 0)
        {
        document.getElementById("supreme_remove_btnid").style.display = "block";
        document.getElementById("supreme_paragraphid").style.opacity = "100%";
        }
    else if (supreme_count <= 0)
        {
        document.getElementById("supreme_remove_btnid").style.display = "none";
        document.getElementById("supreme_paragraphid").style.opacity = "20%";
        }
}

function supreme_remove() {
    subtotal = subtotal - supreme_value;
    total = total - supreme_value;
    supreme_count = supreme_count - 1;
    supreme_count_value = supreme_count_value - supreme_value;
    document.getElementById("sub").innerHTML = subtotal;
    document.getElementById("total").innerHTML = total;
    document.getElementById("supreme_counter").innerHTML = supreme_count;
    document.getElementById("supreme_price").innerHTML = supreme_count_value;

    if (supreme_count > 0)
        {
        document.getElementById("supreme_remove_btnid").style.display = "block";
        document.getElementById("supreme_paragraphid").style.opacity = "100%";
        }
    else if (supreme_count <= 0)
        {
        document.getElementById("supreme_remove_btnid").style.display = "none";
        document.getElementById("supreme_paragraphid").style.opacity = "20%";
        }
}

function big_chick_add() {
    subtotal = subtotal + big_chick_value;
    total = total + big_chick_value;
    big_chick_count = big_chick_count + 1;
    big_chick_count_value = big_chick_count_value + big_chick_value;
    document.getElementById("sub").innerHTML = subtotal;
    document.getElementById("total").innerHTML = total;
    document.getElementById("big_chick_counter").innerHTML = big_chick_count;
    document.getElementById("big_chick_price").innerHTML = big_chick_count_value;

    if (big_chick_count > 0)
        {
        document.getElementById("big_chick_remove_btnid").style.display = "block";
        document.getElementById("big_chick_paragraphid").style.opacity = "100%";
        }
    else if (big_chick_count <= 0)
        {
        document.getElementById("big_chick_remove_btnid").style.display = "none";
        document.getElementById("big_chick_paragraphid").style.opacity = "20%";
        }
}

function big_chick_remove() {
    subtotal = subtotal - big_chick_value;
    total = total - big_chick_value;
    big_chick_count = big_chick_count - 1;
    big_chick_count_value = big_chick_count_value - big_chick_value;
    document.getElementById("sub").innerHTML = subtotal;
    document.getElementById("total").innerHTML = total;
    document.getElementById("big_chick_counter").innerHTML = big_chick_count;
    document.getElementById("big_chick_price").innerHTML = big_chick_count_value;

    if (big_chick_count > 0)
        {
        document.getElementById("big_chick_remove_btnid").style.display = "block";
        document.getElementById("big_chick_paragraphid").style.opacity = "100%";
        }
    else if (big_chick_count <= 0)
        {
        document.getElementById("big_chick_remove_btnid").style.display = "none";
        document.getElementById("big_chick_paragraphid").style.opacity = "20%";
        }
}
