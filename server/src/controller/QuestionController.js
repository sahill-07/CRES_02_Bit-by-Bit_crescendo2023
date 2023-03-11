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
        const answerKeyAndroid = [1,1,1,1,1,]
        const data = req.body;
        res.status(200).json(data)
    }
}



