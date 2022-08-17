var subtotal = 0;
var total = 20;

var nuggets_count = 0;
var nuggets_value = 20;
var nuggets_count_value = 0;

var kids_chicken_burger_count = 0;
var kids_chicken_burger_value = 50;
var kids_chicken_burger_count_value = 0;

var double_chicken_count = 0;
var double_chicken_value = 60;
var double_chicken_count_value = 0;

document.getElementById("sub").innerHTML = subtotal;
document.getElementById("total").innerHTML = total;
document.getElementById("nuggets_counter").innerHTML = nuggets_count;
document.getElementById("nuggets_price").innerHTML = nuggets_count_value;
document.getElementById("kids_chicken_burger_counter").innerHTML = kids_chicken_burger_count;
document.getElementById("kids_chicken_burger_price").innerHTML = kids_chicken_burger_count_value;
document.getElementById("double_chicken_counter").innerHTML = double_chicken_count;
document.getElementById("double_chicken_price").innerHTML = double_chicken_count_value;

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
    kids_chicken_burger_count_value = kids_chicken_burger_count_value + kids_chicken_burger_value
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
    else if (nuggets_count <= 0)
        {
        document.getElementById("kids_chicken_burger_remove_btnid").style.display = "none";
        document.getElementById("kids_chicken_burger_paragraphid").style.opacity = "20%";
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
