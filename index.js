const c2fWithMessage = (celsius) => {
    const fahrenheit = (celsius * 9/5) + 32;
    if (celsius < 0) {
        return { temperature: fahrenheit, message: "It's cold" };
    } else if (celsius >= 0 && celsius <= 22) {
        return { temperature: fahrenheit, message: "It's warm" };
    } else {
        return { temperature: fahrenheit, message: "It's hot" };
    }
};


const temperature = 50; 
const result = c2fWithMessage(temperature);
console.log(result);