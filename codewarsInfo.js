let url = "https://www.codewars.com/api/v1/users/Dutz145";

async function getInfo() {
    return await fetch(url, {
        method:"GET",
    });
}

getInfo().then((response) =>{
    if (response.ok === true) {return response.json()}
    throw  new Error("response failed")
}, netError => {
    console.log(netError)
})
.then(user => {
    const codewars = document.getElementById('codewars');
    const ul = document.createElement('ul');

    let info = [`Username: ${user.username}`, `Rank: ${user.ranks.overall.name}`, `Completed Kata: ${user.codeChallenges.totalCompleted}`];

    for (i=0; i<info.length; i++) {
        let li = document.createElement('li')
        li.appendChild(document.createTextNode(info[i]))
        li.style.listStyleType = "none";
        ul.appendChild(li)
    }
    codewars.appendChild(ul)
    let stats = document.createElement('img')
    stats.setAttribute('src', 'https://www.codewars.com/users/Dutz145/badges/large?logo=false')
    codewars.appendChild(stats)
})