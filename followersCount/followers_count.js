let count = 0;

function displayCount() {
    document.getElementById("countDisplay").innerHTML = count;
}

function checkValue() {
if(count === 10) {
    alert("Congratulations on reaching 10 Followers");
}
if(count === 20) {
    alert("Congratulations on reaching 20 Followers");
}
}

function increaseCount() {
count++;
displayCount();
checkValue();
}