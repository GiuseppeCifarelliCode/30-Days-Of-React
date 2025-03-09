  //--------------------1
  const emptyArray = []

  //--------------------2
  const array5 = Array(8)

  //--------------------3
  emptyArray.length
  const count = array5.length

  //--------------------4
  const first = array5[1]
  const middle = array5[(count-1)/2]
  const last = array5[count-1]

  //--------------------5
  const mixedDataTypes = ["ciao",2,4,[2,"hello"],7,"Babbo"]
  mixedDataTypes.length
  
  //--------------------6
  const itCompanies = ["Facebook", "Google", "Microsoft", "Apple", "IBM", "Oracle", "Amazon"]

  //--------------------7
  console.log("Companies", itCompanies);

  //--------------------8
  const nrCompanies = itCompanies.length - 1
  console.log("Nr Companies " + nrCompanies);

  //--------------------9
  console.log("Prima Company", itCompanies[1]);
  console.log("Middle Company", itCompanies[(nrCompanies)/2]);
  console.log("Ultima Company", itCompanies[nrCompanies]);

  //--------------------10
  for(let i = 0; i <= nrCompanies; i++) {
    console.log(itCompanies[i]);
  }

  //--------------------11
  for(let i = 0; i <= nrCompanies; i++) {
    console.log(itCompanies[i].toUpperCase());
  }

  //--------------------12
  let stringToPrint = ""
  for(let i = 0; i <= nrCompanies; i++) {
    if(i === nrCompanies) { 
      stringToPrint += itCompanies[i] 
    } else {
      if(itCompanies[i] === "Oracle") {
        stringToPrint += itCompanies[i] + " and "
    } else {
        stringToPrint += itCompanies[i] + ", "  
    }
    } 
  }
  console.log(stringToPrint + " are big IT companies");

  //13 - Check if a certain company exists in the itCompanies array. If it exist return the company else return a company is not found
  if(itCompanies.includes("Google")) {
    console.log("Google");
  } else {
    console.log("Google not found");
  }

  //14 - Filter out companies which have more than one 'o' without the filter method
  let j = 0
  for(let i = 0; i <= nrCompanies; i++) {
     let stringToAnalyze = itCompanies[i].split('');
     j = 0;
     for(let c = 0; c < stringToAnalyze.length; c++) {
      if(stringToAnalyze[c] === "o") j++
     }
     if(j > 1) console.log(itCompanies[i]);
  }

  //15 - Sort the array using sort() method
  itCompanies.sort()

  //16 - Reverse the array using reverse() method
  itCompanies.reverse()

  //17 - Slice out the first 3 companies from the array
  itCompanies.slice(0,2)

  //18 - Slice out the last 3 companies from the array
  itCompanies.slice(nrCompanies - 3, nrCompanies)

  //19 - Slice out the middle IT company or companies from the array
  itCompanies.slice(nrCompanies/2,(nrCompanies/2)+1)

  //20 - Remove the first IT company from the array
  itCompanies.shift()

  //21 - Remove the middle IT company or companies from the array
  itCompanies.splice(nrCompanies/2,1)

  //22 - Remove the last IT company from the array
  itCompanies.pop()

  //23 - Remove all IT companies
  itCompanies.splice()