const nextButton = document.getElementById('next');
const backButton = document.getElementById('back');
const textBox=document.getElementById('textBox');
const imageBox=document.getElementById('imageBox');
const titleOfBox=document.getElementById('titleOfBox');


var page=1;
if(nextButton){
  nextButton.addEventListener("click", () => {
  changePage('add');
  });
  back.addEventListener("click",() => {
  changePage('sub');
  });
}
//^ checks when next or back button are clicked and changes the slide accordingly
function changePage(type){
  if(type==='add' && page<3 ){//max number of pages
    page++;
  }else if(type==='sub' && page>1){//least number of pages
    page--;
  }else{//empty since no need to do anything in this case
  }
  
  if(page===3){//checks if their is an extra page before or after and removes a button if their isnt
    nextButton.style.visibility='hidden';
  }else if(page===1){
    backButton.style.visibility='hidden';
  }else{
    nextButton.style.visibility='visible';
    backButton.style.visibility='visible';
  }

  switch(page){//depending on page number, the slide changes to show content
    case 1:
      titleOfBox.innerHTML='What is Mission Bit?'
      textBox.innerHTML= '<a href="https://www.missionbit.org/" target="_blank" style="color: #c5d8db;">Mission Bit</a> is a coding program, offering free coding classes, coding bootcamps, workshops and many other opportunities that let people learn new coding skills.';
      imageBox.src="https://res.cloudinary.com/crunchbase-production/image/upload/c_lpad,f_auto,q_auto:eco,dpr_1/v1397184914/4568a09af10b49551ed51378146a44df.png"; // change image source'
      break;
    case 2:
      titleOfBox.innerHTML='What are Mission Bits Values?'
      textBox.innerHTML="Mission Bit's values consist of Community, Accountability, Social Justice, Love, and taking Smart Risks. This combination of values allows for an environment that encourages creativity, but also maintains a level of realism that is needed for setting goals. These values also make an environment where people are closer to one another than they would be in a usual work or study environment and allows for people to be more open and ask questions frequently.";     
imageBox.src="https://lh3.googleusercontent.com/6P70CW4uuXHN9H8EvTqLv9k4pTzoABAy-i3kdMNNnD3o6dLSvq7n9KNH6IV1TNm8rLlJCqZ1X8C3sNaqVZLQzy2_OUDw7RVUkAAXsGQDjOgI-jccWsEkDkNo1OY0g8NAfO7GpcO9bu4QBmb6LHTISI72qh0_RYnlXI_k-M4T47A6x2Spk_SjLje2vbSRY-xoaw4twPXSONfPj9QtadVHtklfJbwLhy_JOGMYfEb5zCpFeSypeFtsmv5i6ToFFMvrokb_lnIexJiG7AWGRU9R2J4FnKNqYU7f764rU9wWtmpBoi3uz53Cxm1EkiY7XCpfvThzMfXYUPRjGuhvNEPZjwYEM1Dmy-MzKU0o9_8S8TkyfoR82lSo_dad6cXFafM9E5FZXvhCLqqoTm2dR8Rvux1_68mp3NY9EIVTZ8EWfR0WFJo7mY_3w9YlSJqCMmYvNP9XAOFTi_zZpBtp8VxvqBzqgYg9lOOmz-DLCrk7RVn-1jcQC6PyEbXQAXv_JR8N5uPr2tQu5JVVqedLLdrJ7Ma0HphouBKf7IB8eGaWlYH6PADmM5YwxpOyN3Ja4c_nADSIqn33B_E60B-QPJLxsFgA0LdHxWSGai4RgIJ5oIDYqKMKtMQ6hZ4JK9ujxuHCFLcjPcnNVxJRLxiaBiLmFGPEKu21wI8VR5JvQwwboFsuDMW4m-_Q7mNQtHdBfbLIjs3pnEhZrq5iQHGbIbXZ6VjApV70xguIzxhKVngAYzQTV7wn-PymOfR9Nnk=w887-h810-no?authuser=0";
      break;
    case 3:
      titleOfBox.innerHTML='Why choose Mission Bit?'
      textBox.innerHTML='Mission Bit has many courses, varying in style, they have student led hackathons, workshops that allow for hands on building experience, and many more courses that are made accessible to almost anyone. They even have coding events that can be done from home! All of these factors make it easy to see, if you want to learn how to code or just want a fun coding activity you can do with other people, it might be worth checking out Mission Bit.';
      break;
    default:
      break;
  }
}