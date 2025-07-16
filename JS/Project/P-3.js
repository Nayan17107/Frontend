function convert() {
    let amount = parseFloat(document.getElementById("amount").value);
    let from = document.getElementById("from").value;
    let to = document.getElementById("to").value;
    let result = document.getElementById("result");
    let rate;

    if (amount == 0) {
        result.innerHtml = "Enter a valid amount.";
        return;
    }

    switch (from + to) {
        case "USDINR": rate = 83.5; break;
        case "USDEUR": rate = 0.92; break;
        case "USDCAD": rate = 1.36; break;

        case "INRUSD": rate = 0.012; break;
        case "INREUR": rate = 0.011; break;
        case "INRCAD": rate = 0.016; break;

        case "EURUSD": rate = 1.08; break;
        case "EURINR": rate = 90.5; break;
        case "EURCAD": rate = 1.47; break;
        
        case "CADUSD": rate = 0.74; break;
        case "CADINR": rate = 61.5; break;
        case "CADEUR": rate = 0.68; break;
        default: rate = 1;
    }

    let converted = amount * rate;
    result.innerHTML = `${amount} ${from} = ${converted} ${to}`;
}