window.addEventListener("load", function() {
    const elHeading = document.querySelectorAll("main > h2");
    let aTops = [];
    elHeading.forEach(function(heading) {
        aTops.push(heading.getBoundingClientRect().top);
    });
    
    let scrollTimer;
    window.addEventListener("scroll", function() {
        clearTimeout(scrollTimer);
        scrollTimer = setTimeout(function() {
            elHeading.forEach(function(heading) {
                heading.style.color = "#000";
            });

            aTops.forEach(function(top,idx) {
                if(top <= window.scrollY) elHeading[idx].style.color = "#FF0000";
            });            
        }, 50);
    });
    
    const elMenus = document.querySelectorAll("header > ol > li");
    elMenus.forEach(function(elMenu) {
        elMenu.addEventListener("click", function() {
            let idx = Array.from(elMenus).indexOf(elMenu);
            let el = document.querySelector(`h2:nth-of-type(${idx + 1})`);
            el.scrollIntoView({
                block: "start", inline: "nearest", behavior: "smooth"
            });
        });
    });
});