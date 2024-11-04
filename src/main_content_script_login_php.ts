window.addEventListener("load",()=>{
    console.log("A");
    if (document.getElementById('log')) {
        let log_el:HTMLElement=document.getElementById('log')!;
        if (log_el.style) {
            if (log_el.style?.display) {
                log_el.style.display ="";
            }
        }
        log_el.id="log_XXX"
    }
    if (document.getElementById('log_lbl')) {
        let log_lbl_el:HTMLElement=document.getElementById('log_lbl')!;
        if (log_lbl_el.style) {
            log_lbl_el.style.display ="none";
        }
        log_lbl_el.id="log_lbl_XXX"
    }
    
})