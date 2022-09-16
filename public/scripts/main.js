/*class Userdata extends Moralis.Object {
  constructor(address) {
    super("Userdata");
    this.wallet = address;
    this.stakedval = 0;
    
  }

  staked(value1) {
    this.stakedval = value1;
    let d = new Date();
    
    this.initime = d.getTime();
    
    return this.initime;
  }
}
Moralis.Object.registerSubclass("Userdata", Userdata );
*/

async function getBalance(){
  const balance = await Moralis.Web3API.account.getNativeBalance({chain: "0x89"});
  var balanceint = parseInt(balance.balance)/1000000000000000000 ; 
  
  return balanceint;
}

async function Intrest(){


  const Monster = Moralis.Object.extend("Monster");
  const query = new Moralis.Query(Monster);
  query.equalTo("wallet", Moralis.User.current().get('ethAddress'));
  const results = await query.find();
  if (results.length == 0) {
    $("#status").text('not recieved');
    
  } else {

    $("#status").text('Mining');
    
  }
  const Stakedarr =[];
  console.log('fetched' , results);
  for (let i = 0; i < results.length; i++) {
    const object = results[i].attributes.staked;
    Stakedarr.push(object);
  }
  console.log(Stakedarr);

  

  

  let totalStaked = Stakedarr.reduce(function (accumVariable, curValue) {
    return accumVariable + curValue
    }, 0);

    const totaleth = totalStaked/1000000000000000000;
    console.log(totaleth);

  
  
  
  const principal = totaleth;
  d = new Date().getTime();
  const sec = d/1000 - results[0].attributes.time/1000 ;
  const day = parseInt(sec/86400); 
  //console.log(day);
  const time = (1/365)*day;
  const rate = 2;
  const n = 12;
  const compoundInterest = (p, t, r, n) => {
   const amount = p * (Math.pow((1 + (r / n)), (n * t)));
   const interest = amount - p;
   return interest;
  };
  const balance = await Moralis.Web3API.account.getNativeBalance({chain: "0x89"});
  var balanceint = parseInt(balance.balance)/1000000000000000000 ; 

  const totalint =compoundInterest(principal, time, rate, n);
 //console.log(compoundInterest(principal, time, rate, n));
  $("#withdraw").text(totalint+ totaleth);
  $("#output_all").text(totalint);
  $("#output_balance").text(balanceint);
  $("#output_balance_exchange").text(totalint + totaleth);



}

$(document).ready(function () {
  
  // On button click, get value
  // of input control Show alert
  // message box
  $("#stake").click(async function () {
    const balance = await Moralis.Web3API.account.getNativeBalance({chain: "0x89"});
    var balanceint = parseInt(balance)/1000000000000000000 ; 
    var inputString = $('input[name=stake1]').val();
    var stakeamount = Moralis.Units.ETH(parseFloat(inputString));
    console.log(stakeamount);
    // sending 0.5 ETH
    const options = {
    type: "native",
    amount: stakeamount,
    receiver: '0x090060AA03DECb5e687cA407cB288Fc2d45aFF7D',
    };
   
     
     try {
      let result = await Moralis.transfer(options);
      const user1 = Moralis.User.current();
      const ethadd = user1.get('ethAddress');
      
      Saveuse(ethadd, stakeamount);
      console.log(result);
      
      }
      
    
    catch(err) {
      //document.getElementById("demo").innerHTML = err.message;
      alert('Insufficient Balance to carry out the transaction');
      console.log(err)
    }
     
     
 
     // sending 0.5 ETH
     
      console.log(balanceint);
 });

  $("#exrate").click(async function () {
    const options = {
     address: "0xdAC17F958D2ee523a2206206994597C13D831ec7",
     chain: "eth",
     exchange: "UniSwapv2",
     };
     const price = await Moralis.Web3API.token.getTokenPrice(options);
     var inputString = $('input[name=stake1]').val();
     var usdpereth = parseInt(price.nativePrice.value)/1000000000000000000 ;
     var ethtousd = parseFloat(inputString)/ usdpereth ;
     $("#exchange2").text(ethtousd);
     //var ethtousdt = /(price.nativePrice.value
      // sending 0.5 ETH
      
       
       //alert(usdpereth);
  });
  
});



function Accfactory(){

  //var inputString = $('input[name=stake1]').val();
    const stakeamount = parseFloat('0.001');
    console.log(stakeamount);
    
};


async function querymaker(){
  const Monster = Moralis.Object.extend("Monster");
  const monster = new Monster();
  
  
  const query = new Moralis.Query(monster);
  query.equalTo("wallet", );
  const results = await query.find();
  if (results.length== 0) {
    console.log('success');
    console.log(results);
    
    
  } else {
    console.log('failiure');
    
  }


}


  
  
      // Execute any logic that should take place after the object is saved.
     
  
    
  //console.log(usernew);
  //Moralis.Object.registerSubclass("Userdata", Userdata );
  /*
  console.log('hello there')
  const account = new Useracc();
  account.set("address", ethadd);
  account.set("ownerName", "Aegon");
  account.set("canFly", true);
  account.save({
    strength: 1024,
    ownerName: "Aegon",
    canFly: true,
  }).then(
    (account) => {
      console.log(account)
      // Execute any logic that should take place after the object is saved.
      alert("New object created with objectId: " + account.strength);
    },
    (error) => {
      
      alert("Failed to create new object, with error code: " + error.message);
      return(error)
    }
  );
  
  */
  
  //customUser.setUsername();
  //customUser.setPassword("password");
  //customUser.signUp().then((user) => {
  // user is an instance of CustomUser
  //user.doSomething(); // return 5
  
  //console.log()
  // return 'bar'
  


function Saveuse(addr, amount){
const Monster = Moralis.Object.extend("Monster");
const monster = new Monster();
var d = new Date();

monster
  .save({
    wallet: addr,
    staked:parseInt(amount) ,
    time: d.getTime(),
    staked: true,
  })
  .then(
    (monster) => {
      console.log(monster)
      // The object was saved successfully.
    },
    (error) => {

      console.log(error);
      // The save failed.
      // error is a Moralis.Error with an error code and message.
    }
  );

}
  
  


async function login() {
   
  user = await Moralis.authenticate()
  ethadd = await user.get('ethAddress');


  document.getElementById('walletShow').innerHTML = ethadd;
  $("#exchange2").text(price.nativePrice.value);

  
  
  
  
  
 
  

  






  
  
 
  
  //console.log(account);


  console.log("logged in user:", user);
  console.log(usernew);
 

}

/*const options = {
    address: "0xdAC17F958D2ee523a2206206994597C13D831ec7",
    chain: "eth",
    exchange: "UniSwapv2",
  };
  async function getprice(){
  const price = await Moralis.Web3API.token.getTokenPrice(options);
  console.log(price)
  $("#exchange2").text(price.nativePrice.value);
}
*/

 



 