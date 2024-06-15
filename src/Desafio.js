let idHeroi = [["Zeca", 2000], ["Johnny", 7000], ["Tenz", 10001]]
let nivel;
let i = 0;

while (i < idHeroi.length) {
    expNumero = idHeroi[i][1]
    switch (true) {
        case (expNumero <= 1000):
            nivel = "Ferro";
            break;
        case (1001 <= expNumero && expNumero <= 2000):
            nivel = "Bronze";
            break;
        case (2001 <= expNumero && expNumero <= 5000):
            nivel = "Prata";
            break;
        case (5001 <= expNumero && expNumero <= 7000):
            nivel = "Ouro";
            break;
        case (7001 <= expNumero && expNumero <= 8000):
            nivel = "Platina";
            break;
        case (8001 <= expNumero && expNumero <= 9000):
            nivel = "Ascendente";
            break;
        case (9001 <= expNumero && expNumero <= 10000):
            nivel = "Imortal";
            break;
        case (expNumero >= 10001):
            nivel = "Radiante";
            break;
        default:
            nivel = "Ferro";
    }
    console.log("O Herói de nome " + idHeroi[i][0] + " está no nível de " + nivel);
    i += 1;
}
