const list = document.querySelector("#faq-list");
const answers = list.getElementsByTagName("p");

list.addEventListener("click", (e)=>{
    let li;
    if(e.target.tagName==="DIV")
    li = e.target.parentElement;
    else if(e.target.tagName==="H3")
        li = e.target.parentElement.parentElement;

    let p = li.getElementsByTagName("p")


    for (let key=0; key<6;key++) {
        if(answers[key]!=p[0])
        answers[key].classList.add("hide");
    }
    p[0].classList.toggle("hide");
})

