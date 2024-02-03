const mainPostContent = document.querySelector('#new-post');
const wc = document.querySelector('#wc');

mainPostContent.addEventListener('change', () => {
    const post = mainPostContent.value;
    const w = Array.from(post);
    wc.innerText = w.length + "/100";
})

const edit = document.querySelectorAll('.edit');

const like = document.querySelectorAll('.like');


like.forEach((button) => {
    button.addEventListener('click', () => {
        like.innerHTMl = `<img src="https://d2beiqkhq929f0.cloudfront.net/public_assets/assets/000/064/029/original/heart.png?1706888679" alt="Like">`
    })
})

