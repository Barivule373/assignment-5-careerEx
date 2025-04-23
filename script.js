const drugs = [

  { id: 1, name: "Amoxicillin", category: "Antibiotic", dosageMg: 500, isPrescriptionOnly: true, stock: 120, manufacturer: "Pfizer" },
 
  { id: 2, name: "Paracetamol", category: "Analgesic", dosageMg: 1000, isPrescriptionOnly: false, stock: 200, manufacturer: "GSK" },
 
  { id: 3, name: "Ibuprofen", category: "Analgesic", dosageMg: 400, isPrescriptionOnly: false, stock: 150, manufacturer: "Bayer" },
 
  { id: 4, name: "Chloroquine", category: "Antimalarial", dosageMg: 250, isPrescriptionOnly: true, stock: 80, manufacturer: "Sanofi" },
 
  { id: 5, name: "Ciprofloxacin", category: "Antibiotic", dosageMg: 500, isPrescriptionOnly: true, stock: 70, manufacturer: "Pfizer" },
 
  { id: 6, name: "Loratadine", category: "Antihistamine", dosageMg: 10, isPrescriptionOnly: false, stock: 160, manufacturer: "Novartis" },
 
  { id: 7, name: "Metformin", category: "Antidiabetic", dosageMg: 850, isPrescriptionOnly: true, stock: 140, manufacturer: "Teva" },
 
  { id: 8, name: "Artemether", category: "Antimalarial", dosageMg: 20, isPrescriptionOnly: true, stock: 60, manufacturer: "Roche" },
 
  { id: 9, name: "Aspirin", category: "Analgesic", dosageMg: 300, isPrescriptionOnly: false, stock: 180, manufacturer: "Bayer" },
 
  { id: 10, name: "Omeprazole", category: "Antacid", dosageMg: 20, isPrescriptionOnly: true, stock: 90, manufacturer: "AstraZeneca" },
 
  { id: 11, name: "Azithromycin", category: "Antibiotic", dosageMg: 250, isPrescriptionOnly: true, stock: 50, manufacturer: "Pfizer" },
 
  { id: 12, name: "Cetirizine", category: "Antihistamine", dosageMg: 10, isPrescriptionOnly: false, stock: 110, manufacturer: "Novartis" },
 
  { id: 13, name: "Insulin", category: "Antidiabetic", dosageMg: 100, isPrescriptionOnly: true, stock: 30, manufacturer: "Novo Nordisk" },
 
  { id: 14, name: "Artemisinin", category: "Antimalarial", dosageMg: 100, isPrescriptionOnly: true, stock: 50, manufacturer: "GSK" },
 
  { id: 15, name: "Codeine", category: "Analgesic", dosageMg: 30, isPrescriptionOnly: true, stock: 20, manufacturer: "Teva" },
 
  { id: 16, name: "Vitamin C", category: "Supplement", dosageMg: 500, isPrescriptionOnly: false, stock: 300, manufacturer: "Nature’s Bounty" },
 
  { id: 17, name: "Ranitidine", category: "Antacid", dosageMg: 150, isPrescriptionOnly: false, stock: 90, manufacturer: "Sanofi" },
 
  { id: 18, name: "Doxycycline", category: "Antibiotic", dosageMg: 100, isPrescriptionOnly: true, stock: 40, manufacturer: "Pfizer" },
 
  { id: 19, name: "Tramadol", category: "Analgesic", dosageMg: 50, isPrescriptionOnly: true, stock: 45, manufacturer: "Teva" },
 
  { id: 20, name: "Folic Acid", category: "Supplement", dosageMg: 5, isPrescriptionOnly: false, stock: 250, manufacturer: "Nature’s Bounty" }
 
 ];
 

 //number 1 : get all drugs that are antibiotics
 
 const filteredDrugs = drugs.filter(function(each){

  return each.category =="Antibiotic"

 })
 console.log(filteredDrugs)


 //number 2 : return an array of drug names in lowercase



const drugNameLowercase =drugs.map(drug =>drug.name.toLowerCase());
console.log(drugNameLowercase);

//number 3 : a funtion that accept a categoryy

function getDrugsByCategory(category){
  return drugs.filter(drug =>drug.category ===category);

}
console.log(getDrugsByCategory( "Antibiotic"))

//number 4 log each drugs name and it manufacturer

drugs.forEach((each) =>{
  console.log(each.name, each.manufacturer)
})

//number 5 return all drugs that requires a prescription

const filteredDrug = drugs.filter(function(each){
  return each.isPrescriptionOnly ==true
})
console.log(filteredDrug)

//number 6 return a new array 

const returnnameAndDosage = drugs.map(drug => `drug: ${drug.name} - ${drug.dosageMg}mg`);
console.log(returnnameAndDosage);

//number 7  a function that returns a drugs with a stock less than 50

const lowstock = drugs.filter(function(each){
  return each.stock <  50
})
console.log(filteredDrugs)

//number 8  return all drugs that are not prescription-only


const drugNotprescription = drugs.filter(function(each){
  return each.isPrescriptionOnly ==false
})
console.log(drugNotprescription)

//number 9  a function that takes a manufacturer name and returns how many drugs are from that company

drugs.forEach((each) =>{
  console.log(each.stock, each.manufacturer)
})

// number 10 useforEach() to count how many drugs are Analgesic

let Analgesiccount = 0;
drugs.forEach((drug) =>{
  if ( drug.category === "Analgesic") {
    Analgesiccount++;
  }
});

console.log(Analgesiccount);

 