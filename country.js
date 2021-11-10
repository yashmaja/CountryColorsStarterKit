class Country {
    constructor(name, lang, greeting, colors, flag) {
        this.name = name;
        this.lang = lang;
        this.greeting = greeting;
        this.colors = colors;
        this.flag = flag;
    }
        
    displayColors() {
        let body = document.getElementById("outsideColor");
        body.style.backgroundColor = this.colors[0];
        body.style.color = "white";
        
        let right = document.getElementById("rightPanelColor");
        right.style.backgroundColor = this.colors[1];
        right.style.color = "white";

        let left = document.getElementById("leftPanelColor");
        left.style.backgroundColor = this.colors[2];
    }

    displayFlag() {
        let flagDisplay = document.getElementById("flag");
        flagDisplay.innerHTML = `<img src=${this.flag} height=100 width=150>`;
    }
}

let usa = new Country("USA", "Murican", "Why Hello there world! Have some McDonalds", ["red", "white", "blue"], "https://miro.medium.com/max/1200/0*o0-6o1W1DKmI5LbX.png");
let mexico = new Country("Mexico", "Spanish", "Hola mundo!", ["red", "white", "green"], "https://upload.wikimedia.org/wikipedia/en/2/20/Flag_of_Mexico_1917.png");
let algeria = new Country("Algeria", "Arabic and Berber", "Marhaban Bialealam", ["blue", "yellow", "red"], "https://www.prntr.com/images/algeria-flag-1.jpg")
let france = new Country("France", "French", "Bonjour monde", ["blue", "white", "red"], "https://cdn.pixabay.com/photo/2013/07/13/14/15/france-162295__480.png");
let italy = new Country("Italy", "Italian", "Ciao mondo", ["green", "white", "red"], "https://www.worldatlas.com/r/w768/upload/20/07/2a/shutterstock-152854481.jpg");
let portugal = new Country("Portugal", "Portuguese", "Olá Mundo", ["red", "green", "green"], "https://mdnautical.com/24103/portugal-courtesy-flag.jpg");
let germany = new Country("Germany", "German", "Hallo welt", ["black", "yellow", "red"], "https://starspangledflags.com/wp-content/uploads/germany-flag.jpg")


function SwitchCountry() {
    let input = document.getElementById("CountryList");
    input = input.value;
    let country;

    if (input === "USA") {
        //set country to usa 
        country = usa;
    }
    else if (input === "Mexico") {
        country = mexico;
    }
    else if (input === "Algeria") {
        country = algeria;
    }
    else if (input === "France") {
        country = france;
    }
    else if (input === "Italy") {
        country = italy;
    }
    else if (input === "Portugal") {
        country = portugal;
    }
    else if (input === "Germany") {
        country = germany;
    }

    document.getElementById("CountryName").innerText = `${country.name}`;
    document.getElementById("OfficialLanguage").innerText = `Language: ${country.lang}`;
    document.getElementById("HelloWorld").innerText = `Greeting: ${country.greeting}`;

    country.displayColors();
    country.displayFlag();
}
