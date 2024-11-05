
console.log("A222");
window.addEventListener("load",()=>{

})

console.log("A22");
if (document.getElementById('convini-li')) {
    let convinili:HTMLElement=document.getElementById('convini-li')!;
    if(convinili.parentElement){
        let li_root=convinili.parentElement;
        if(li_root.parentElement){
            let ul_root=li_root.parentElement;
            let li2_node=document.createElement("li");
            let new_A_node=document.createElement("a");
            new_A_node.id="credit-li";
            new_A_node.classList.add("o-btn","black");
            new_A_node.href="javascript:fnCreditCardPayment();";
            let new_span_node=document.createElement("span");
            new_span_node.className="btn-next";
            new_span_node.textContent="クレジット払い";
            new_A_node.appendChild(new_span_node);
            li2_node.appendChild(new_A_node);
            ul_root.appendChild(li2_node);
        }
    }
}