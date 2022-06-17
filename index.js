function scuberGreetingForFeet (ride){
if (ride < 400) {
return 'This one is on me!';
} 
else if (ride > 2000 && ride <= 2500){
  return "I will gladly take your thirty bucks."
}
  else if(ride > 2500){
    return  'No can do.'
  }
}  

function ternaryCheckCity (city) {
  let message;
  city === "NYC" ? message = 'Ok, sounds good.' : message = 'No go.'
  return message
}

function switchOnCharmFromTip (tip) {
  let mess;
  switch (tip) {
    case 'generous':
      mess = 'Thank you so much.';
      break;
      case 'not as generous':
        mess =  'Thank you.';
        break;
      default:
        mess = "Bye.";
        break;
  }
  return mess
}
