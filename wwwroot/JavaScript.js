function inversion()
{
    let texto1 = document.getElementById("texto1").value;
    let texto2 = document.getElementById("texto2").value;
    let texto3 = document.getElementById("texto3");
    texto3.style.display = "block";
    texto3.value = texto2 + " " + texto1;
}