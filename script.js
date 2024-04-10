// Functions

function gotoLink(link){
    console.log(link.value);
    window.open(link.value, null)
};

const profile = document.querySelector(".profilecard")

function createProfile([img,name,email,description,mobile]){
    let code = `
        <article class="profilecard">
            <img src="${img}" class="profile-image">
                <figure class="card-contents">
                    <h3 class="name-Text">${name}</h3>
                    <p class="email-Text">Email: <a href="" class="Email-link">${email}</a></p>
                    <p class="description-Text">${description}</p>
                    <p class="mobile-Text">Phone Number: ${mobile}</p>
                    <button onclick="gotoLink(this)" value="https://www.twitter.com/"><img src="image/twitter.webp" class="Twitter-link"></button>
                    <button onclick="gotoLink(this)" value="https://www.facebook.com/"><img src="image/facebook.webp" class="Facebook-link"></button>
                    <button onclick="gotoLink(this)" value="https://www.instagram.com/"><img src="image/instagram.webp" class="Instagram-link"></button>
                    <br>
                    <button onclick="gotoLink(this)" value="" class="Profile-btn">View Profile Page</button>
                </figure>
        </article>
    `;
    profile.innerHTML += code
}

const information = document.querySelector(".card")

function createCard([images,header,text]){
    let code = `
        <article class="card">
            <img src="${images}" class="korea-image">
                <figure class="card-contents">
                    <h3>${header}</h3>
                    <p>${text}</p>
                    <button onclick="gotoLink(this)" value="" class="Read-btn">Read More</button>
                </figure>
        </article>
    `;
    information.innerHTML += code
}

// Lists of Information

let profile1 = ["image/profilepicture.webp",
    "Ashley Anderson", 
    "AshleyAnderson@email.com",
    "Hello everyone! I specialize in creating monumental moments with the use of my camera! I am a professional photographer that travels different countries to catch photos of special events.",
    "+61 3 1234 5678"
]

let card1 = ["image/koreaphoto.webp",
    "Seoul",
    "Welcome to Seoul, The Capital City of South Korea. <br> To view more information click Read More down below" ,
]

// Call Functions

createProfile(profile1)
createCard(card1)

