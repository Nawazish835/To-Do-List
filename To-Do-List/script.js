let button=document.querySelector("button");
let input=document.querySelector("input")
let toDoStore=document.querySelector(".to-do-store")

button.addEventListener("click",()=>{
    let store=document.createElement("p");
    store.innerText=input.value;
    store.classList.add("storePara");
    toDoStore.append(store);

    input.value = "";

    store.addEventListener("click",()=>{
        store.style.textDecoration="line-through"
    })
    store.addEventListener("dblclick",()=>{
        toDoStore.removeChild(store);
    })
})
