const request = require('request');

const answerOption = {
    baseUrl: 'http://localhost:3000',
    url: '/answer',
    method: 'GET',
    json: true
};


request(answerOption, (err, res, body)=> {

    console.log("Welcome!\n");
    console.log("please input your number(6):");

    let chance = 6;
    const answer = body;

    process.stdin.resume();
    process.stdin.setEncoding('utf-8');


    process.stdin.on("data", (input)=> {
        if (!invalided(input)) {
            console.log("Can not input duplicate numbers!");

        }
        else {
            const resultOption = {
                baseUrl: "http://localhost:3000",
                url: "/result",
                method: "POST",
                json: true,
                body: {
                    answer: answer,
                    input: input
                }
            };
            request.post(resultOption, (err, res, body)=> {
                const result = body;
                if (result === "4A0B") {
                    console.log('Congratulations');
                    process.exit();
                }
                else {
                    console.log(result +'\n');
                    chance--;
                    if (isGameOver(chance)) {
                        console.log("Game Over!");
                        process.exit();
                    }
                    else {
                        ask(chance);
                    }
                }
            });
        }


    });
});

const invalided = (input)=> {

    return input.split('').every((item, index, array)=> {

        return array.lastIndexOf(item) === index;

    });
};

const ask = (chance)=> {

    console.log(`please input your number:(${chance})`);
};

const isGameOver = ()=> {
    return this.chances === 0;
};


