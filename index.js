function scuberGreetingForFeet(){
if (feet <= 400)
return 'This one is on me!';
}else if (1800 < feet && feet < 25000){
return "I will pay five hundred shillings.";
} else {
  return "Yes,that is reasonable"
}
}

function ternaryCheckCity(){
  return city === 'Ruaka'? 'yeah,okay';
}

function switchOnCharmFromTip (tip) {
switch (tip){
  case 'generous':
    return 'Thank you!';
    case 'not as generous':
      return 'Thanks'
      default:
        return 'Bye.';
}
}