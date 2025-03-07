// Referências aos elementos
const startScreen = document.getElementById("startScreen");
const commandsScreen = document.getElementById("commandsScreen");
const commandsButton = document.getElementById("commandsButton");
const backButton = document.getElementById("backButton");

// Quando clicar no botão "Comandos", mostra a tela de comandos
commandsButton.addEventListener("click", function() {
    startScreen.style.display = "none";
    commandsScreen.style.display = "block";
});

// Quando clicar no botão "Voltar", volta para a tela inicial
backButton.addEventListener("click", function() {
    commandsScreen.style.display = "none";
    startScreen.style.display = "block";
});
