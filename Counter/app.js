let items = document.querySelectorAll('.number');

const updateCount = (ITEM) => {
    let values = +(ITEM.dataset.value);

    let increment = Math.ceil(values / 500);

    let initialValue = 0;

    const increaseCount = setInterval(() => {
        initialValue += increment;

        if (initialValue > values) {
            ITEM.textContent = `${values}+`
            clearInterval(increaseCount);
            return;
        }

        ITEM.textContent = `${initialValue}+`;
    }, 10);

};

items.forEach((item) => {
    updateCount(item);
});