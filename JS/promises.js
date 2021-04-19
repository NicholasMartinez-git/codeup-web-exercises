// let lastCommit = (username) => fetch(`https://api.github.com/users/${username}/events`, {headers: {"Authorization": `token ${gitAccessToken}`}})
//     .then(resp => resp.json())
//     .then(gitEventData => {
//         for (let gitEvent of gitEventData) {
//             if (gitEvent.type === "PushEvent") {
//                 return new Date(gitEvent.created_at);
//             }
//         }
//     })
//
// lastCommit("NicholasMartinez-git")
//     .then(date => console.log(date));

function lastCommit(gitUsername) {
    let url = `https://api.github.com/users/${gitUsername}/events`;
    let gitResponse = fetch(url, {headers: {'Authorization': `token ${gitAccessToken}`}});
    return gitResponse
        .then(resp => resp.json())
        .then(gitEventData => {
            for (let gitEvent of gitEventData) {
                if (gitEvent.type === "PushEvent") {
                    return new Date(gitEvent.created_at)
                }
            }
        })
}

lastCommit("NicholasMartinez-git")
    .then(date => console.log(date));