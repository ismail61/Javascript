/* function func1() {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            let err = true;
            if (err) {
                try {
                    console.log("Promise Rejected");
                    reject();
                } catch (error) {
                    console.log("Error Detected");
                }
                //throw new Error('Error Detected')
            } else {
                console.log("Promise Resolved");
                resolve();
            }
        }, 1000);
    });
}
func1()
    .then(() => {
        console.log("Resolved");
    })
    .catch((err) => {
        console.log(err);
    }); */
const user = {
    userName: 'ismail61'
}
const User = async () => {
    /* fetch(`https://api.github.com/users/${user.userName}`)
        .then(result => result.json())
        .then(gitUser => {
            console.log(gitUser.name)
            let img = document.createElement('img');
            img.src = gitUser.avatar_url;
            img.className = "promise-avatar-example";
            document.body.append(img)

            setTimeout(() => {
                img.remove();
            }, 5000);
        }) */
    /* let fetchData = await fetch(`https://api.github.com/users/${user.userName}`);
    let data = fetchData.json();
    data.then((gitUser) => {
        console.log(gitUser)
        let img = document.createElement('img');
        img.src = gitUser.avatar_url;
        img.className = "promise-avatar-example";
        document.body.append(img)

        setTimeout(() => {
            img.remove();
        }, 5000);
    }) */
    let names = ['ismail61', 'BalaDipu', 'arnafi']
    let requests = names.map(async name => {
        //console.log(name)
        let data = await fetch(`https://api.github.com/users/${name}`);
        //console.log(data.json())
        return data.json()
    })
    //console.log(requests)
    /* Promise.all(requests)
        .then((responses => {
            for (let response of responses) {
                console.log(response.name)
            }
        })) */
    //promise.race -> first settled promise and gets its result
    /* Promise.race(requests).then(response => {
        console.log(response.name)
    }); */
   /*  Promise.any(requests).then(response => {
        console.log(response.name)
    }); */
}
//User();
/* let cache = new Map();
const hasUser = (url) => {
    if(cache.has(url)){
        return Promise.resolve(cache.get(url))
    }

    return fetch(url)
        .then(response => response.json())
        .then(user => {
            console.log(user.name)
            cache.set(url,user.name)
            return user;
        })
}
hasUser('https://api.github.com/users/ismail61').then(promise => {
    console.log(cache)
}) */


//async & await

let gitUser1 = async () => {
    /* try {
        let gitUserFetch = await fetch('https://api.github.com/users/ismail61')
        let gitUser = await gitUserFetch.json()
        console.log(gitUser)
    } catch (error) {
        console.log(error)
    }
     */
    try {
        let allRequests = await Promise.all([
            fetch('https://api.github.com/users/ismail61'),
            fetch('https://api.github.com/users/arnafi')
        ])
        allRequests.forEach(async requests => {
            let usr = await requests.json()
            console.log(usr)
        })
    } catch (error) {
        throw new Error('TypeError!')
    }
}

gitUser1()