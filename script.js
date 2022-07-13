

function init() {
    // run whatever we need
   
    if (document.querySelector("#codewars")) {
        async function getInfo() {
            let url = "https://www.codewars.com/api/v1/users/Dutz145";

            return await fetch(url, {
                method:"GET"
            });
        }

        getInfo().then((response) =>{
            if (response.ok === true) {return response.json()}
            throw  new Error("response failed")
        }, netError => {
            console.log(netError)
        })
        .then(user => {
            let content = [`Username: ${user.username}`, `Rank: ${user.ranks.overall.name}`, `Completed Kata: ${user.codeChallenges.totalCompleted}`];

            const div = document.getElementById("codewars")
            const ul = document.createElement("ul")
            ul.setAttribute('class', 'nobullets')

            for (let i in content) {
                let li = document.createElement("li")
                li.textContent = content[i]
                ul.append(li)
            }

            let img = document.createElement('img')
            img.setAttribute('src', 'https://www.codewars.com/users/Dutz145/badges/large?logo=false')
            
            div.append(ul)
            div.append(img)

        })
    }
};

const swup = new Swup();

init()

swup.on('contentReplaced', init);