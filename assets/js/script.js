document.getElementById('heroForm').addEventListener('submit', function(e) {
    e.preventDefault();

    const heroName = document.getElementById('heroName').value;
    let heroXP;
    let validXP = false;
  
    do {
        heroXP = parseInt(document.getElementById('heroXP').value);

        if (heroXP < 0 || isNaN(heroXP)) {
            alert('Por favor, insira um valor válido para XP (positivo).');
            document.getElementById('heroXP').value = '';  
            break;
        } else {
            validXP = true;
        }
    } while (!validXP);

    if (!validXP) return; 

    let heroLevel;

    if (heroXP < 1000) {
        heroLevel = 'Ferro';
    } else if (heroXP >= 1001 && heroXP <= 2000) {
        heroLevel = 'Bronze';
    } else if (heroXP >= 2001 && heroXP <= 5000) {
        heroLevel = 'Prata';
    } else if (heroXP >= 5001 && heroXP <= 7000) {
        heroLevel = 'Ouro';
    } else if (heroXP >= 7001 && heroXP <= 8000) {
        heroLevel = 'Platina';
    } else if (heroXP >= 8001 && heroXP <= 9000) {
        heroLevel = 'Ascendente';
    } else if (heroXP >= 9001 && heroXP <= 10000) {
        heroLevel = 'Imortal';
    } else if (heroXP >= 10001) {
        heroLevel = 'Radiante';
    }

    const resultDiv = document.getElementById('result');
    resultDiv.innerHTML = `O Herói de nome <strong>${heroName}</strong> está no nível de <strong>${heroLevel}</strong>`;
});
