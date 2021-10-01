//Api Github integration

const search = document.querySelectorAll('#btn')
search.forEach((search) => {
    search.addEventListener('click', show)

    function show() {


        const username = document.getElementById('search')
            .value

        //Url Api
        const url = 'https://api.github.com/users/' + username;

        async function api() {
            const api = await fetch(url)
            const data = await api.json()
            if (data.message) {
                document.querySelector('.result').innerHTML = `
              <h3> Profile not a found </h3>
              `
            } else {
                    console.log(data)
                    document.querySelector('.result').innerHTML = `
                <div class="result1">


                <a href="${data.blog}" target="_blank" >
                <img src="${data.avatar_url}" width="100px"/>
                </a>
                <div >
                <h2>${data.name}  </h2> <br>
                ${data.bio}  
                </div>
    
                </div>
                
                <div class="result2">
                <p>
                <h4>Followers:</h4>
                ${data.followers} 
                </p>
                
                <p>
                <h4>following:</h4>
    
                ${data.following}  
                </p>
                
                <p>
                <h4>Repositories:</h4>
                ${data.public_repos}  
                </p>
                </div>
                
                <div class="link"
                <p>
    
                <i class="fas fa-map-marker-alt"></i>
                ${data.location}  </p>
                <p>
                <i class="fab fa-twitter"></i>
                ${data.twitter_username}  </p>
                </div>
                `
               
            }



        }

        api()
    };
})



// Darck  mode
const dark = document.querySelector('#d1')


dark.addEventListener('click', () => {


    document.querySelector('html').classList.toggle('on')
    if (document.querySelector('html').classList.contains("on")) {
        dark.src = "image/icons8-sol.svg";
        document.querySelector('.p').innerHTML = "LIGHT";
    } else {
        dark.src = "image/moon-solid.svg";
        document.querySelector('.p').innerHTML = "DARK";

    }

}); 
