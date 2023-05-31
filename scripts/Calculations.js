function tweakdates() {
    var date_salonique=new Date('2021','02','01'); //months are minus 1 because range is from 0 to 11 
    var date_metron=new Date('2022','10','27'); //months are minus 1 because range is from 0 to 11 
    var datenow = new Date();
    var month_now = datenow.getMonth();
    document.getElementById("datecalc1").innerHTML+=calculate(datenow,date_salonique);
    document.getElementById("datecalc2").innerHTML+=calculate(datenow,date_metron);
    getAge();
  }

  function calculate(now,since){
    var text="";
    var years = now.getFullYear() - since.getFullYear();
    var months = now.getMonth() - since.getMonth();
    //below if years=0 but year changes
    if(years==1){
      if(months<0){
        months=now.getMonth() + 11 - since.getMonth() + 2;  //+2 because we add the month we started and the current month
        if(months==0){
          text = " Started this month.";
        }else if(months==1){
          text = " 1 month.";
        }else{
          text = " " + months + " months."
        }
        return text;
      }
    }
    //below runs if years>=1
    if(months<0){
      months += 12; //+11 because month range is from 0 to 11 and +1 because we want to count the current month
      years--;    //because its a year change (+1 year) but not whole year (12 months did not passed) so we give 11 months and take 1 year to find the difference in months
    }
    if(years>0){
      if(years==1){
        text=" 1 year ";
      }else{
        text=" "+ years + " years ";
      }
    }
    if(months==0){
      return text;
    }
    if(years==0){
        if(months==1){
          text+= " 1 month.";
        }else{
          text+= " "+ months +" months.";
        }
      }
    else if(years>0){
      if(months==1){
        text+="and 1 month.";
      }else{
        text+="and "+ months +" months.";
      }
    }
    return text;
  }

  function getAge(){
    var dateNow = new Date();
    var bornDate = new Date("1997-10-12");
    var age=dateNow.getFullYear()-bornDate.getFullYear();
    if(dateNow.getMonth()<bornDate.getMonth()){
        age--;
    }
    if(dateNow.getMonth()==bornDate.getMonth() && datenow.getDate()<bornDate.getDate()){
        age--;
    }
    document.getElementById("age").innerHTML=age;
  }