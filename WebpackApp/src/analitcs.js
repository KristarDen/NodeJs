function createAnalitics(){
    let counter = 0;

    const listener = () => {
        counter++;
        console.log(counter);
    }

    document.addEventListener('click', listener)
}

createAnalitics();