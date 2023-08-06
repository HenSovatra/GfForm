const firebaseConfig = {

    apiKey: "AIzaSyB2T-wKQQAcFIUF2kErChEmyFhaUpIp_SY",
  
    authDomain: "gfform-52c4b.firebaseapp.com",
  
    databaseURL: "https://gfform-52c4b-default-rtdb.firebaseio.com",
  
    projectId: "gfform-52c4b",
  
    storageBucket: "gfform-52c4b.appspot.com",
  
    messagingSenderId: "343288939763",
  
    appId: "1:343288939763:web:acdb911750f8f94ecee386"
  
  };

  firebase.initializeApp(firebaseConfig);

  var GfFormdb =firebase.database().ref("GfForm");

  document.getElementById("GfForm").addEventListener("submit", submitForm);

  function submitForm(e){
    e.preventDefault();
    
    var name = getElementVal("name");
    var age = getElementVal("age");
    var iam = getElementVal("iam");

    saveMessages(name,age,iam,selectedCuteness);

    document.querySelector(".alert").style.display="block";

    setTimeout(() => {
        document.querySelector(".alert").style.display="none";
    }, 3000);

    document.getElementById("GfForm").reset();
  }
  const saveMessages = (name,age,iam,selectedCuteness) => {
    var newGfForm = GfFormdb.push();
    newGfForm.set({
        name: name,
        age: age,
        iam: iam,
        selectedCuteness: selectedCuteness,
    });
  };

  const getElementVal =(id)=>{
    return document.getElementById(id).value;
  };


  var selectedCuteness;
document.getElementsByName("cuteness").forEach(function(elm) {
  if (elm.checked) {
    selectedCuteness = elm.value;
  }
})
res.set('Cache-Control', 'public, max-age=300, s-maxage=600');
