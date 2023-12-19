/* You are in a hurry to go to your school on time. But when you are crossing the road, the traffic signal is red coloured. 
In this situation, if you try to cross the road, you may be in danger.
If you notice a yellow coloured traffic signal, you should stop. 
If you notice a green coloured traffic signal, you should cross the road. 
So write a JS code, where there is a variable called signal. 
Its value can be green, yellow or red & we will get different activities as output depending on the variable. So, hurry up */


let signal = "Yellow";

if(signal == "Red"){
    console.log("💀⚡💀Don't move it's Dangerous!! Please wait for Green.")
}else if(signal == "Green"){
    console.log("🟢🟢Now it's safe . You can go now.")
}else if(signal == "Yellow"){
    console.log("⚠️⚠️ Don't Crass the road it's not safe!! Wait for Green.")
}

// Solving the problem with switch

switch(signal){
    case "Red":
        console.log("💀⚡💀Don't move it's Dangerous!! Please wait for Green.");
        break;
    case "Yellow":
        console.log("⚠️⚠️ Don't Crass the road it's not safe!! Wait for Green.");
        break;
    default :
         console.log("🟢🟢Now it's safe . You can go now.");
        
};