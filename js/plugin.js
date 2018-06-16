(function () {
    const questions = [
        {
            question: "Зимой и летом одним цветом",
            answers: ['яблоко', "ёлка", "сосед Петрович"],
            rightAnswer: 1
        },
        {
            question: "Висит груша, нельзя скушать",
            answers: ['яблоко', "соседская груша", "лампочка"],
            rightAnswer: 2
        },
        {
            question: "1 + '1'?",
            answers: ["строка 11", 2],
            rightAnswer: 0
        }
    ];

    let counter = 0;


    function startGame() {

        questions.forEach(function (question) {
            console.log(question.question);
            for (let i = 0; i < question.answers.length; i++) {
                console.log(i + ': ' + question.answers[i]);

            }
            let answer = prompt('Введите номер ответа', '');
            getAnswer(answer);
        });

    }

    function getAnswer(answer) {
        if (answer === 'stop') throw 'stop';
        if (questions[counter].rightAnswer === +answer) {
            counter++;
            console.log('Правильно');
            console.log('Ваш результат: ' + counter);
            console.log('---------------------');
        } else {
            counter = 0;
            console.log('Вы проиграли, начинаем заново!');
            console.log('---------------------');
            startGame();
        }
        if (counter === questions.length) {
            console.log('Поздравляем, Вы прошли игру!')
        }
    }

}());






