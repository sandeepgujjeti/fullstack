const person ={
    firstname : 'Some_First_Name',
    lastname :'Some_Second_Name',
    job: 'No Job Yet',
}

    const {firstname , lastname ,job} ={ ...person };
   console.log(person , person.firstname, person.lastname, person.job);
   console.log(firstname);
   console.log(job)