const convertButton = document.querySelector(".convert-button")
const selectMoedaInicial = document.querySelector(".select-moeda-inicial")
const selectMoeda = document.querySelector(".select-moeda-final")



async function convertValues() {
    const valorDoInput = document.querySelector(".input-valores").value
    const valorEmConversao = document.querySelector(".moeda-valor-convertido") // Valor em Real e Outros Valores
    const valorEmConvertido = document.querySelector(".moeda-valor")           // Outros Valores
    const inputPlaceHolder = document.querySelector(".input-valores")

    const data = await fetch("https://economia.awesomeapi.com.br/last/USD-BRL,EUR-BRL,GBP-BRL,BRL-USD,EUR-USD,GBP-USD,USD-EUR,BRL-EUR,GBP-EUR,USD-GBP,EUR-GBP,BRL-GBP").then(response => response.json())

    const dolar = data.USDBRL.high
    const euro = data.EURBRL.high
    const libra = data.GBPBRL.high

    const Dreal = data.BRLUSD.high
    const Deuro = data.EURUSD.high
    const Dlibra = data.GBPUSD.high

    const Edolar = data.USDEUR.high
    const Ereal = data.BRLEUR.high
    const Elibra = data.GBPEUR.high

    const Ldolar = data.USDGBP.high
    const Leuro = data.EURGBP.high
    const Lreal = data.BRLGBP.high

switch (selectMoedaInicial.value) {
    case "real":valorEmConversao.innerHTML = new Intl.NumberFormat("pt-BR", { style: "currency", currency: "BRL" }).format(valorDoInput)
        
        break;
        case "dolar": valorEmConversao.innerHTML = new Intl.NumberFormat("en-US", { style: "currency", currency: "USD" }).format(valorDoInput)
        
        break;
        
        case "euro":valorEmConversao.innerHTML = new Intl.NumberFormat("de-DE", { style: "currency", currency: "EUR" }).format(valorDoInput)
        
        break;
       
        case "libra":valorEmConversao.innerHTML = new Intl.NumberFormat("en-GB", {style: "currency", currency: "GBP"}).format(valorDoInput) 
        
        break;
        
        case "bitcoin":valorEmConversao.innerHTML = new Intl.NumberFormat("en-US", { style: "currency", currency: "BTC" }).format(valorDoInput)
        
    
    default:
        break;
}
if (selectMoedaInicial.value === "real") {

    switch (selectMoeda.value) {
        case "dolar":
            valorEmConvertido.innerHTML = new Intl.NumberFormat("en-US", { style: "currency", currency: "USD" }).format(valorDoInput / dolar)
            break;

        case "euro":
            valorEmConvertido.innerHTML = new Intl.NumberFormat("de-DE", { style: "currency", currency: "EUR" }).format(valorDoInput / euro)
            break;
    
            case "libra":
                valorEmConvertido.innerHTML = new Intl.NumberFormat("en-GB", { style: "currency", currency: "GBP" }).format(valorDoInput / libra)
                break;

        case "real":
                alert(`NÃO PODEMOS CONVERTER O REAL PARA MOEDA REAL.                
                         TROQUE UMA DAS MOEDAS PARA CONVERTER.`)
                break;        
    }
        } else if (selectMoedaInicial.value === "dolar") {

            switch (selectMoeda.value) {
                case "dolar": alert(`NÃO PODEMOS CONVERTER O DOLAR PARA DOLAR.                
                TROQUE UMA DAS MOEDAS PARA CONVERTER.`)
                    
                    break;
            
                case "euro":
                        valorEmConvertido.innerHTML = new Intl.NumberFormat("de-DE", { style: "currency", currency: "EUR" }).format(valorDoInput / Deuro)
                        break;

                case "libra":
                        valorEmConvertido.innerHTML = new Intl.NumberFormat("en-GB", { style: "currency", currency: "GBP" }).format(valorDoInput / Dlibra )
                        break;


                case "real":
                        valorEmConvertido.innerHTML = new Intl.NumberFormat("pt-BR", { style: "currency", currency: "BRL" }).format(valorDoInput / Dreal)
                        break;                           
                default:
                    break;
            } } else if (selectMoedaInicial.value === "euro") {

                switch (selectMoeda.value) {
                    case "dolar":
                        valorEmConvertido.innerHTML = new Intl.NumberFormat("en-US", { style: "currency", currency: "USD" }).format(valorDoInput / Edolar)
                        break;
        
                    case "euro":
                        alert(`NÃO PODEMOS CONVERTER O EURO PARA EURO.                
        TROQUE UMA DAS MOEDAS PARA CONVERTER.`)
                        break;
                
                    case "real":
                        valorEmConvertido.innerHTML = new Intl.NumberFormat("pt-BR", { style: "currency", currency: "BRL" }).format(valorDoInput / Ereal)
                        break;
            
                    case "libra":
                        valorEmConvertido.innerHTML = new Intl.NumberFormat("en-GB", { style: "currency", currency: "GBP" }).format(valorDoInput / Elibra)
                        break;
                     
                 }} else if (selectMoedaInicial.value === "libra") {

                switch (selectMoeda.value) {

                    case "dolar":
                        valorEmConvertido.innerHTML = new Intl.NumberFormat("en-US", { style: "currency", currency: "USD" }).format(valorDoInput / Ldolar)
                        break;
        
                    case "euro":
                        valorEmConvertido.innerHTML = new Intl.NumberFormat("de-DE", { style: "currency", currency: "EUR" }).format(valorDoInput / Leuro)
                        break;
                
                    case "real":
                        valorEmConvertido.innerHTML = new Intl.NumberFormat("pt-BR", { style: "currency", currency: "BRL" }).format(valorDoInput / Lreal)
                        break;
            
                    case "libra":
                        alert(`NÃO PODEMOS CONVERTER A MOEDA LIBRA PARA LIBRA.
                        TROQUE UMA DAS MOEDAS PARA CONVERTER.`)
                        break;


                } }


   //alterar o place Holder do input
   switch (selectMoedaInicial.value) {
    case "dolar":
        inputPlaceHolder.placeholder = "US$ 10,000.00"
        break;

    case "euro":
        inputPlaceHolder.placeholder = "€ 10.000,00 "
        break;

    case "libra":
        inputPlaceHolder.placeholder = "£ 10.000,00 "
        break;

    case "real":
        inputPlaceHolder.placeholder = "R$ 10.000,00"
        break;

        default:
            break;
   }
}

function trocaMoedaInicial() {
    const nomeMoedainicial = document.querySelector(".moeda-inicial")
    const imagemInicial = document.querySelector(".imagem-moeda-inicial")
   
    switch (selectMoedaInicial.value) {
        case "dolar":
            nomeMoedainicial.innerHTML = "Dolar"
            imagemInicial.src = "./assets/img/dolar.png"
            break;

        case "euro":
            nomeMoedainicial.innerHTML = "Euro"
            imagemInicial.src = "./assets/img/euro.png"
            break;

        case "libra":
            nomeMoedainicial.innerHTML = "Libra"
            imagemInicial.src = "./assets/img/libra.png"
            break;

        case "real":
            nomeMoedainicial.innerHTML = "Real"
            imagemInicial.src = "./assets/img/real.png"
            break;
    }

    convertValues()
}


function trocaMoeda() {
    const nomeMoeda = document.getElementById("nome-Moeda")
    const imagemMoeda = document.querySelector(".imagem-moeda-final")
    

    if (selectMoeda.value == "dolar") {
        nomeMoeda.innerHTML = "Dólar americano"
        imagemMoeda.src = "./assets/img/Dolar.png"
    }

    if (selectMoeda.value == "euro") {
        nomeMoeda.innerHTML = "Euro"
        imagemMoeda.src = "./assets/img/Euro.png"
    }

    if (selectMoeda.value == "libra") {
        nomeMoeda.innerHTML = "Libra"
        imagemMoeda.src = "./assets/img/Libra.png"
    }


    if (selectMoeda.value == "real") {
        nomeMoeda.innerHTML = "Real"
        imagemMoeda.src = "./assets/img/Real.png"
    }



    convertValues()

}

selectMoedaInicial.addEventListener("change", trocaMoedaInicial)
selectMoeda.addEventListener("change", trocaMoeda)
convertButton.addEventListener("click", convertValues)