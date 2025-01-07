function greet(greeting, age) {
    console.log(`${greeting}, my name is ${this.name}. I am ${age} years old and work as a ${this.job}.`);
  }
  
  const user1 = {
    name: 'Adel',
    job: 'Software Developer',
  };
  
  const user2 = {
    name: 'Chai',
    job: 'Data Scientist',
  };
  
  const user3 = {
    name: 'Abel',
    job: 'UI/UX Designer',
  };
  
  
  greet.call(user1, 'Hello', 24);    
  greet.call(user2, 'Hi', 28);  
  
  greet.apply(user3, ['Hey', 30]);  
  
  const copyUser1 = greet.bind(user1, 'Greetings');
  console.log(copyUser1);
  copyUser1(26);  
  