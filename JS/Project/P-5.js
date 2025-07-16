function countVowels() {
      let str = document.getElementById("str").value;
      let ansElement = document.getElementById("ans");
      let ans = 0;

      console.log("Input string:", str);

      for (let i = 0; i < str.length; i++) {
        let j = str[i].toLowerCase();
        if (j == 'a' || j == 'e' || j == 'i' || j == 'o' || j == 'u') {
          ans++;
        }
      }

      console.log("Vowel count:", ans);
      ansElement.textContent = ans; 
    }