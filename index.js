
var alphabet=['a','b','c','d','e','f','g','h','i','j','k','l','m','n','o','p',
              'q','r','s','t','u','v','w','x','y','z'];

function encode1() {

    var message1 = document.getElementById("input1").value;
    var grid = [];
    var grid2 = [];
    
    for (var xx = 0; xx<message1.length; xx+=5){
        if (message1.length > xx+4){
          grid.push(message1[xx] + message1[xx+1] + message1[xx+2] + message1[xx+3] + message1[xx+4]);
        }
        else{
            
        }
    }
    document.getElementById('output1').innerHTML =  grid[2].length;
    for (var yy=grid.length-1; yy>0; yy--){
        for (var zz=4; zz >= 0; zz--){
        }
    }

}

function encode2(){
    
    var message2 = document.getElementById("input2").value;
    var line1 = [];
    var line2 = [];
    var line3 = [];
    var message2_nospaces = [];
    
    for (var x=0; x<message2.length; x++){
        if (message2[x] != ' '){
            message2_nospaces.push(message2[x]);
        }
    }
    message2_nospaces = message2_nospaces.join("");
    
    for (var y=0; y<message2_nospaces.length; y++){
        if (y % 2 !== 0){
            line2.push(message2_nospaces[y]);
        }
        else if (y % 4 === 0){
            line1.push(message2_nospaces[y]);
        }
        else{
            line3.push(message2_nospaces[y]);
        }
    }
    
    document.getElementById('output2').innerHTML =  line1.join("") + line2.join("") + line3.join("");
    
    
}