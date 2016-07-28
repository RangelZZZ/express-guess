class  GenerateAnswer{

    static generateNumbers(){

        const dights = [1,2,3,4,5,6,7,8,9,0];
        const result = [];

        for(let i = 0 ; i < 4;i++){

            const randomNumber = parseInt(Math.random()*dights.length);

            result.push(dights.splice(randomNumber,1)[0]);
        }

        return result.join('');
    }
}

module.exports = GenerateAnswer;