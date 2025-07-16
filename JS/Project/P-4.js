function generate() {
    let length = document.getElementById("length").value;
    let result = "";
    let chars = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789";

    if (length === "" || length <= 0) {
        document.getElementById("result").textContent = "Enter a valid length!";
        return;
    }

    for (let i = 0; i < length; i++) {
        let randomIndex = Math.floor(Math.random() * chars.length);
        result += chars[randomIndex];
    }

    document.getElementById("result").textContent = result;
}