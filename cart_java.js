var subtotal = 0;
var total = 20;
var nuggets_count = 0;
var nuggets_value = 20;
var nuggets_count_value = 0;
document.getElementById("sub").innerHTML = subtotal;
document.getElementById("total").innerHTML = total;
document.getElementById("nuggets_counter").innerHTML = nuggets_count;
document.getElementById("nuggets_price").innerHTML = nuggets_count_value;

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
        document.getElementById("nugget_remove").style.display = "block";
        document.getElementById("nuggets_paragraph").style.opacity = "100%";
        }
    else if (nuggets_count <= 0)
        {
        document.getElementById("nugget_remove").style.display = "none";
        document.getElementById("nuggets_paragraph").style.opacity = "20%";
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
        document.getElementById("nugget_remove").style.display = "block";
        document.getElementById("nuggets_paragraph").style.opacity = "100%";
    }
    else if (nuggets_count <= 0)
        {
        document.getElementById("nugget_remove").style.display = "none";
        document.getElementById("nuggets_paragraph").style.opacity = "20%";
    }
}
