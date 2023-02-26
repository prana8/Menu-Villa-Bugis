function sendMaill() {
  let parameter = {
    name: document.getElementById("GuestName").value,
    email: document.getElementById("GuestEmail").value,
    DateTime: document.getElementById("DateTime").value,
    villaname: document.getElementById("VillaName").value,
    totalguest: document.getElementById("guest-input").value,

    //bugis Breakfast
    BugisBreakfast: document.getElementById("BugisBreakfast").value,
    totalguest: document.getElementById("guest-input").value,
    Scrambled_eggs: document.getElementById("Scrambled_eggs").value,
    Boiled_eggs: document.getElementById("Boiled_eggs").value,
    Omelette: document.getElementById("Omelette").value,
    Fried_eggs: document.getElementById("Fried_eggs").value,
    Poached_eggs: document.getElementById("Poached_eggs").value,
    Bacon: document.getElementById("Bacon").value,
    Ham: document.getElementById("Ham").value,
    Sausages: document.getElementById("Sausages").value,
    Potatoes: document.getElementById("Potatoes").value,
    Tomatoes: document.getElementById("Tomatoes").value,
    Plain_Pancakes: document.getElementById("Plain_Pancakes").value,
    Banana_Pancakes: document.getElementById("Banana_Pancakes").value,
  };
  const serviceID = "service_ogfnxg8";
  const templateID = "template_42rki6q";

  emailjs
    .send(serviceID, templateID, parameter)
    .then((res) => {
      //Bugisbreakfast
      //Eggs code
      document.getElementById("GuestName").value = "";
      document.getElementById("GuestEmail").value = "";
      document.getElementById("DateTime").value = "";
      document.getElementById("VillaName").value = "";
      document.getElementById("guest-input").value = "";
      document.getElementById("BugisBreakfast").value = "";
      document.getElementById("Scrambled_eggs").value = "";
      document.getElementById("Boiled_eggs").value = "";
      document.getElementById("Omelette").value = "";
      document.getElementById("Fried_eggs").value = "";
      document.getElementById("Poached_eggs").value = "";

      //Optional Dishes
      document.getElementById("Bacon").value = "";
      document.getElementById("Ham").value = "";
      document.getElementById("Sausages").value = "";
      document.getElementById("Potatoes").value = "";
      document.getElementById("Tomatoes").value = "";
      document.getElementById("Plain_Pancakes").value = "";
      document.getElementById("Banana_Pancakes").value = "";

      console.log(res);
      alert("Your Order Sent Succesfully");
    })
    .catch((err) => console.log(err));
}
