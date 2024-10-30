class FormatDate{
  date = new Date();
  year = this.date.getFullYear();
  month = this.date.getMonth() + 1;
  date = this.date.getDate();

  constructor(){
    return `${year}${month}${date}`;
  }
}

