class CompareNumbers {
    static caculate(input, answer) {
        const inputArray = input.toString().split('');
        const answerArray = answer.split('');

        const rightNumbers = inputArray.filter(c => answerArray.includes(c)).length;

        const x = inputArray.filter(c => answerArray.indexOf(c) === inputArray.indexOf(c) ).length;
        const y = rightNumbers -x;

        return `${x}A${y}B`;
    }
}

module.exports = CompareNumbers;
