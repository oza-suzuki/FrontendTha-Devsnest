const questions = [
    {
        'question' : 'Select the option that suits the Manifesto for Agile Software Development ?',
        'options' : ['Individuals and interactions' , 'Working software' , 'Customer collaboration' , 'All of the mentioned'],
        'answer' : 'All of the mentioned'
    },

    {
        'question' : 'Agile Software Development is based on?',
        'options' : ['Incremental Development' , 'Iterative Development' , 'Linear Development' , 'Both Development'],
        'answer' : 'Both Development'
    },

    {
        'question' : 'Agility is not defined as the ability of a project team to respond rapidly to a change?',
        'options' : ['True' , 'False'],
        'answer' : 'True'
    },
]

// questions.forEach((current) => {
//     console.log(current);
// })

// var score = 0;

function createOption(option, answer = false){
    const optionHolder = document.createElement('div');
    optionHolder.className = "option"

    const button = document.createElement('button');
    button.innerHTML = option;
    button.className = "button"
    button.addEventListener('click',() => {
        console.log(button);
        // if(answer){
        //     console.log(button);
        //     if(!button.classList.contains('correct')){
        //         score++;
        //     }
        //     button.classList.add("correct");
        // }
        // else{
        //     button.classList.add("wrong");
        // }

    })

    optionHolder.append(button);
    return optionHolder;
}

questions.forEach((current, number) => {
    console.log(current, number);

    const container = document.createElement('div');
    container.className = "container"

    const ques = document.createElement('div');
    ques.className = "ques"

    ques.innerHTML = `${number+1}. ${current.question}`
    // console.log(ques);
    container.append(ques)

    const options = document.createElement('div');
    options.className = "options"

    const optionArr = [];

    current.options.forEach((option, number)=>{
        if(number == 0){
            optionArr.push(createOption(option, true))
        }
        else{
            optionArr.push(createOption(option))
        }
    })
    optionArr.forEach((option)=>{
        options.append(option)
    })
    // console.log(options);
    // console.log(container);
    container.append(options)
    // console.log(container);
    document.body.append(container);
})

    /*
    <div class="container">
        <div class="ques">
            1. How owns Internet?
        </div>
        <div class="options">
            <div class="btn"><button class="correct">Ram</button></div>
            <div class="btn"><button class="wrong">Shyam</button></div>
            <div class="btn"><button>Suresh</button></div>
            <div class="btn"><button>Mahesh</button></div>
        </div>
    </div>
    */
