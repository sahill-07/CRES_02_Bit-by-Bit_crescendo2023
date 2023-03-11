exports.question = {
    get : (req, res) => {
        const questions = [
            {
                QUESTION: 'do you like from server',
                OPTION: ['yes', 'no']
            },
            {
                QUESTION: 'do you like ',
                OPTION: ['yes', 'no']
            },
            {
                QUESTION: 'do you like ',
                OPTION: ['yes', 'no']
            },
            {
                QUESTION: 'do you like ',
                OPTION: ['yes', 'no']
            },
            {
                QUESTION: 'do you like ',
                OPTION: ['yes', 'no']
            },
            {
                QUESTION: 'do you like ',
                OPTION: ['yes', 'no']
            },
            {
                QUESTION: 'do you like ',
                OPTION: ['yes', 'no']
            },
            {
                QUESTION: 'do you like ',
                OPTION: ['yes', 'no']
            },
            {
                QUESTION: 'do you like ',
                OPTION: ['yes', 'no']
            },
            {
                QUESTION: 'do you like ',
                OPTION: ['yes', 'no']
            },
        ]
        res.status(200).json(questions);
    },

    resultPost: (req, res) =>{
        const answerKeyWeb = [0,0,0,0,0,0,0,0,0,0]
        const answerKeyAndroid = [1,1,1,1,1,1,1,1,1,1];
        let webScore = 0;
        let androidScore = 0;
        let userResponse = req.body.answer;
        for(let i=0; i<10; i++){
            if(answerKeyAndroid[i] === userResponse[i]) androidScore++;
            if(answerKeyWeb[i] === userResponse[i]) webScore++;
        }
        res.status(200).json({
            WebScore: webScore,
            androidScore: androidScore,
            androidInterestPercentage: androidScore*10,
            webInterestPercentage: webScore*10
        })
    }
}



