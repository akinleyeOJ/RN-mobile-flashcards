let localDecks = {
    React: {
      title: 'React',
      questions: [
        {
          question: 'What is React?',
          answer: 'A library for managing user interfaces',
          correctAnswer: "false"
        },
        {
          question: 'Where do you make Ajax requests in React?',
          answer: 'The componentDidMount lifecycle event',
          correctAnswer: "false"
        }
      ]
    },
    JavaScript: {
      title: 'JavaScript',
      questions: [
        {
          question: 'What is a closure?',
          answer:
            'The combination of a function and the lexical environment within which that function was declared.',
            correctAnswer: "false"
        }
      ]
    },
    Redux: {
      title: 'Redux',
      questions: [
        {
          question: 'What is Redux?',
          answer: 'A predictable state container for JavaScript Apps',
          correctAnswer: "false"
        },
        {
          question: 'What is an action creator?',
          answer:
            'It is a function that takes an input and returns an object with a type and data property.',
            correctAnswer: "false"
        },
        {
          question: 'What is a reducer?',
          answer:
            'A reducer is a pure function that takes the current state and action and returns the next state.',
            correctAnswer: "false"
        }
      ]
    }
  };

  export const getData = () => { 
    return localDecks
  }

 
