console.log("IH Ctrl+Enter Activated!");
document.onkeydown = function (e) {
    if ((e.ctrlKey || e.metaKey) && e.key == "Enter") {
        let t = document.activeElement;

        if (t.tagName.toString() === "TEXTAREA") {
            let p = t.parentElement;

            let btnsquery = p.querySelectorAll("button");

            const btns = [...btnsquery];

            if (btns[0]) {
                //@ts-ignore
                btns[0].click();
            }
        }
    }
};
