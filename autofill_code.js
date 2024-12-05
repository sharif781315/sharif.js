
navigator.clipboard.readText() .then(text =>
  {
 var resuls = text; 
 var obj = JSON.parse(resuls);
 
 if (window.location.href.slice(-7) === "Reprint")
 {
 
 if(obj && obj.pan == "") { alert("Apne Jo Copy Kiya oh New Form Ka."); return; }
  
    document.getElementById("category").value = "Individual";
    var sel = document.querySelector('#category');
    sel.dispatchEvent(new Event('change'));
    document.getElementById("pan").value = obj.pan;
    document.getElementById("lastName").value = obj.lastName;
    document.getElementById("firstName").value = obj.firstName;
    document.getElementById("middleName").value = obj.middleName;
    document.getElementById("fatherlastName").value = obj.fatherlastName;
    document.getElementById("fatherfirstName").value = obj.fatherfirstName;
    document.getElementById("fathermiddleName").value = obj.fathermiddleName;
    return;
}


  var url = window.location.href;
  if (url.includes("CRSubmit.html"))
  {

      // Continue with the rest of the code
      if (document.getElementById("add_comm").value == "indian") {
          document.getElementById("nameOnCard").value = obj.nameOnCard;
          document.getElementById("dob").value = obj.dob;
          document.getElementById("isd").value = "91";
          document.getElementById("std").value = obj.tel_num_stdcode;
          document.getElementById("telNum").value = obj.tel_num;
          document.getElementById("emailId").value = obj.email_id ? obj.email_id.toLowerCase() : '';

          if (obj.aadhaar_num.trim() !== "") {
              document.getElementById("check_aadhaar_eid").value = "A";
              var sel = document.querySelector('#check_aadhaar_eid');
              sel.dispatchEvent(new Event('change'));

              document.getElementById("name_aadhaar").value = obj.name_aadhaar || '';
              document.getElementById("aadhaarNo").value = obj.aadhaar_num || '';

              var aadhaarSel = document.querySelector('#aadhaarNo');
              aadhaarSel.dispatchEvent(new Event('change'));
              document.getElementById("gender").value = obj.gender || '';
              var genderSel = document.querySelector('#gender');
              genderSel.dispatchEvent(new Event('change'));
          }

          document.getElementById("user_state").value = obj.user_state || '';
          document.getElementById("poid").value = obj.proof_id || '';
          document.getElementById("por").value = obj.proof_add || '';
          document.getElementById("pod").value = obj.proof_dob || '';
      }
      return;
    }
    
    





if (window.location.href.slice(-12) === "(Form%2049A)")
 {
  
  if(obj && obj.pan !== "") { alert("Apne Jo Copy Kiya oh correction Form Ka."); return; }
 
 
  if (document.getElementById("cat_applicant").value == "Individual")
  {
    document.getElementById("l_name").value = obj.lastName;
    document.getElementById("f_name").value = obj.firstName;
    document.getElementById("m_name").value = obj.middleName;
    document.getElementById("name_card").value = obj.nameOnCard;
    document.getElementById("fal_name").value = obj.fatherlastName;
    document.getElementById("faf_name").value = obj.fatherfirstName;
    document.getElementById("fam_name").value = obj.fathermiddleName;
    document.getElementById("opaMotherLastName").value = obj.opaMotherLastName;
    document.getElementById("opaMotherFirstName").value = obj.opaMotherFirstName;
    document.getElementById("opaMotherMiddleName").value = obj.opaMotherMiddleName;
    document.getElementById("dob").value = obj.dob;
    document.getElementById("tel_num_isdcode").value = "91";
    document.getElementById("tel_num_stdcode").value = obj.tel_num_stdcode;
    document.getElementById("tel_num").value = obj.tel_num;
    document.getElementById("email_id").value = obj.email_id ? obj.email_id.toLowerCase() : '';
    
    if (obj.minor === "yes")
    {
      document.getElementById("ra_add").value = "INDIAN";  // Set value to "INDIAN" 
      document.getElementById("ra_add").dispatchEvent(new Event('change'));  // Trigger onchange event 
    }


   // document.getElementById("add_comm").value = obj.add_comm;
    document.getElementById("add_comm").value = "INDIAN";
    var sel = document.querySelector('#add_comm');
    sel.dispatchEvent(new Event('change'));


    document.getElementById("proof_id").value = obj.proof_id ? obj.proof_id.trim() : ''; 
    document.getElementById("proof_add").value = obj.proof_add ? obj.proof_add.trim() : ''; 
    document.getElementById("proof_dob").value = obj.proof_dob ? obj.proof_dob.trim() : ''; 

    document.getElementById("area_code").value = obj.AreaCode;
    document.getElementById("ao_type").value = obj.AoType;
    document.getElementById("range_code").value = obj.RangeCode;
    document.getElementById("ao_num").value = obj.AoNo;
    
    if(obj.aadhaar_num.trim() !== "")
    {
      if (obj.aadhaar_num && obj.aadhaar_num.length !== 12)
      { alert("Aadhaar number Wrong"); }

    document.getElementById("name_aadhaar").value = obj.name_aadhaar;
    document.getElementById("aadhaarNo").value = obj.aadhaar_num;
    var sel = document.querySelector('#aadhaarNo');

   
     sel.dispatchEvent(new Event('change'));
    document.getElementById("gender").value = obj.gender;
sel = document.querySelector('#gender');
sel.dispatchEvent(new Event('change'));



    document.getElementById("check_aadhaar_eid").value = "A";
    var sel = document.querySelector('#check_aadhaar_eid');
    sel.dispatchEvent(new Event('change'));
    }

  document.getElementById("user_state").value = obj.user_state;
 }
 
  }
  return;

 });