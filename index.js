const changeTab = (tabID)=>{
    tabContent = document.getElementById("tab-content");
    var children = tabContent.children;
    for (var i=0; i<children.length; i++){
        if (children[i].id === tabID){
            children[i].classList.remove('hide');
        }else{
            children[i].classList.add('hide');
        }
    }

    header = document.getElementById("header");
    children = header.children;
    for (var i=0; i<children.length; i++){
        if (children[i].id === tabID){
            children[i].classList.remove('inactive');
            children[i].classList.add('active');
        }else{
            children[i].classList.add('inactive');
        }
    }
} 

var tableData = [
    {
        name:"Rahul",
        contact:"12345789",
        country:"India",
        id:"1"
    },
    {
        name:"Raj",
        contact:"987654321",
        country:"USA",
        id:"2"
    },
    {
        name:"Rohan",
        contact:"222222222",
        country:"Japan",
        id:"3"
    },
    {
        name:"Kapil",
        contact:"000000000",
        country:"China",
        id:"4"
    },
    {
        name:"Ram",
        contact:"456456456",
        country:"India",
        id:"5"
    }
]


const populateTable = ()=>{
    const table = document.getElementById("table");
    table.innerHTML="";
    var head = table.createTHead().insertRow(0);
    head.innerHTML="<th>Select</th><th>Name</th><th>Contact</th><th>Country</th><th>Update</th>"
    for(var i=0; i<tableData.length;i++){
        var user = tableData[i]
        var row = table.insertRow(i+1);
        var temp = row.insertCell(0);
        temp.innerHTML = "<input id='"+i+"-checkbox' type='checkbox'>";
        var temp = row.insertCell(1);
        temp.innerHTML = user.name;
        var temp = row.insertCell(2);
        temp.innerHTML = user.contact;
        var temp = row.insertCell(3);
        temp.innerHTML = user.country;
        var temp = row.insertCell(4);
        temp.innerHTML = "<button onclick='updateData("+i+")'>Update</button>";
    }
    const list = document.getElementById("list");
    list.innerHTML="";
    for(var i=0; i<tableData.length;i++){
        var temp = document.createElement("li");
        temp.innerHTML = tableData[i].name;
        list.append(temp);
    }
}

insertRow = ()=>{
    showModal();
    populateTable();
}

deleteRow = ()=>{
    if (tableData.length===0){
        alert("no more elements to remove");
        return ;
    }
    for(var i=tableData.length-1; i>-1;i--){
        const temp = document.getElementById(i+"-checkbox");
        if (temp.checked){
            tableData.splice(i,1);
        }
    }

    populateTable();
}

updateData = (key)=>{
    showModal();
    document.getElementById("form-id").value = key;
    document.getElementById("form-name").value = tableData[key].name;
    document.getElementById("form-contact").value = tableData[key].contact;
    document.getElementById("form-country").value = tableData[key].country;
}

submitButton = ()=>{
    var key = document.getElementById("form-id").value;
    if (key==""){
        key = (tableData.length).toString();
        tableData.push({
                name:"Rahul",
                contact:"12345789",
                country:"India",
                id: key
            })
    }
    tableData[key].name = document.getElementById("form-name").value;
    tableData[key].contact = document.getElementById("form-contact").value;
    tableData[key].country = document.getElementById("form-country").value;
    closeModal();
    populateTable();
    document.getElementById("form-id").value = "";
}

showModal = ()=>{
    const modal = document.getElementById("modal-container");
    modal.classList.remove("hide");
}

closeModal = ()=>{
    const modal = document.getElementById("modal-container");
    modal.classList.add("hide");
}