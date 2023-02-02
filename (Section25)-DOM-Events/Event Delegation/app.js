const userName = document.querySelector('#username')
const userTweet = document.querySelector('#tweet')
const postButton = document.querySelector('#postTweet')
const tweetList = document.querySelector('#tweetList')
const lis = document.querySelectorAll('li')

postButton.addEventListener('click', function() {
    const newTweet = document.createElement('li')
    const user = userName.value
    newTweet.innerText = `${user}: ${userTweet.value}`
    userTweet.value = ''
    userName.value = ''
    tweetList.appendChild(newTweet)
    
})

// for(let x of lis){
//     x.addEventListener('click', function() {
//         x.remove()
//     })
// }

tweetList.addEventListener('click', function(e) {
    e.target.nodeName === 'LI' && e.target.remove()
})