export default function btnRestore(event) {
    let target = event.target;
    // console.log("123:", event);
    if (target.nodeName == "I" || target.nodeName == "SPAN") {
        target = event.target.parentNode;
    }
    target.blur();
}