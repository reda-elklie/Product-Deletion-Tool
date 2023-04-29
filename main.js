const delet = document.getElementById("delet");
const rerun = document.querySelector(".rerun")
const mssg = document.querySelector(".mssg")
const pro = document.querySelector(".product")

const main = document.querySelectorAll(".product");
for (let i = 0; i < main.length; i++) {
    main[i].addEventListener('click', function() {
        main[i].classList.add("deleted");
        mssg.style.display = "block";

        setTimeout(function() {
            document.querySelector(".mssg").style.display = "none";
        }, 1800);
    })
}
rerun.addEventListener("click", function() {
    location.reload();
})