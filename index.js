
window.onload = function() {
    document.getElementById("github-username").value = "";
   

}

const SearchError = document.getElementById('search-error');
const EmptyField = document.getElementById('empty-field')
function sum(event){
    event.preventDefault();
    //  alert("hii")
    // console.log('hi')
   const username= document.getElementById('github-username');
//    console.log('username: ', username.innerText)
   SearchError.classList.add('hidden');
   EmptyField.classList.add('hidden');
   
   if(!username.value){
    EmptyField.classList.remove('hidden');
    
   }
   else{
    fetchDetails(username.value);
   }
   
   
}



function fetchDetails(user){
    SearchError.classList.add('hidden');
  fetch(
      "https://api.github.com/users/"+user
  )
  .then((response)=>{
     if(!response.ok){
        return SearchError.classList.remove('hidden');
        throw new Error("No user found.");
     }
     return response.json();
  })
  .then((data)=>this.displayUser(data));
}
function displayUser(data){
    const joinedAt = data.created_at.split('T')[0];
    const parsedJoinedAt = joinedAt.split('-');
    const year = parsedJoinedAt[0];
    const month = parsedJoinedAt[1];
    const day = parsedJoinedAt[2];
    const date = new Date(year, month, day);
    date.setMonth(month - 1);
    const monthname=date.toLocaleString('en', { month: 'short' });

    const userJoined = document.getElementById('user-joined');
    userJoined.innerHTML= "Joined "+day+ " "+monthname + " "+year;
    
    const user_name=data.name;
    const userName = document.getElementById( "user-name");
    if(!user_name){
        userName.innerHTML=data.login;
    }
    else{
        userName.innerHTML=user_name;
    }
  
    // const user_username=data.name;
    // user_username.href = data.html_url;
    const user__Name = document.getElementById( "user-username");
    user__Name.innerHTML="@"+data.login;
    user__Name.href=data.html_url;
    const user_bio=data.bio;
    const user__bio=document.getElementById( "user-bio");
    if(!user_bio || user_bio.length < 1){
         user__bio.style.opacity="0.5";
        user__bio.innerHTML= 'This profile has no bio';
    }else{
        user__bio.style.opacity="1";
        
        user__bio.innerHTML=user_bio;
    }
    
    
    const user_repos=document.getElementById( "repos");
    user_repos.innerHTML=data.public_repos;

    const user_followers=document.getElementById( "followers");
    user_followers.innerHTML=data.followers;
 
    const user_following=document.getElementById( "following");
    user_following.innerHTML=data.following;
   
    const user_location=document.getElementById( "location");
    if(!data.location || data.location.length < 1){
        user_location.style.opacity="0.5";
        user_location.innerHTML='Not Available';
    }
    else{
        user_location.style.opacity="1";
       
        user_location.innerHTML=data.location;
    }
    

    const user_Img = document.getElementById('user-img');
    user_Img.src = data.avatar_url;
    // const user___username=document.getElementById
    const user_twitter=document.getElementById('twitter');
    if(!data.twitter_username || data.twitter_username.length < 1){
        user_twitter.style.opacity="0.5";
        user_twitter.innerHTML="Not Available";
        user_twitter.removeAttribute("href");
        
    }
    else{
        user_twitter.style.opacity="1";
        user_twitter.innerHTML="@"+data.twitter_username;
        user_twitter.href = `https://twitter.com/${data.twitter_username}`;
    }

    const user_website=document.getElementById('website');
    if(!data.blog || data.blog.length< 1){
        user_website.style.opacity="0.5";
        user_website.innerHTML="Not Available";
         user_website.removeAttribute('href')
    }
    else{
        user_website.style.opacity="1";
       
        user_website.innerHTML="@"+data.blog.split('/')[2];
        user_website.href=data.blog;
    }
  

    const user_organization=document.getElementById('organization');
    if(!data.company){
        user_organization.style.opacity="0.5";
        user_organization.innerHTML="Not Available";
        user_organization.removeAttribute('href')
    }
    else{
        user_organization.style.opacity="1";
        
        user_organization.innerHTML=data.company;

    }
   
}  
// {/* <script src="https://kit.fontawesome.com/10653ca0bd.js" crossorigin="anonymous"></script> */}
var bool_dark=true;
document.querySelector(".theme").addEventListener("click",function(){
    document.querySelector(".theme").style.hover="black";
    bool_dark=!bool_dark
    if(bool_dark===false){
        document.querySelector(".theme").style.backgroundColor="rgb(255, 253, 236)";
        document.querySelector(".theme").style.color="hsl(220, 40.3%, 13.1%)";
        document.querySelector(".m").innerHTML="DARK🌙";
        //  document.querySelector("#mmm").src="assets/moon-solid.svg"
        //  document.getElementById("dark").classList.add("dark");
        
    
        document.querySelector(".search").style.boxShadow="rgba(100, 100, 111, 0.2) 0px 7px 29px 0px"
        document.querySelector(".user-stats").style.boxShadow="rgba(100, 100, 111, 0.2) 0px 7px 29px 0px"
        
        document.querySelector("body").style.backgroundColor="rgb(255, 253, 236)";
        document.querySelector(".container").style.backgroundColor="rgb(255, 253, 236)";
        document.querySelector(".topic").style.color="hsl(220, 40.3%, 13.1%)";
        // document.querySelector(".theme").style.color="hsl(220, 40.3%, 13.1%)";
        document.querySelector(".search").style.backgroundColor="white";
        document.querySelector(".search-box").style.backgroundColor="white";
     
        document.querySelector(".content").style.backgroundColor="white";
        document.querySelector(".user-name").style.color="hsl(220, 40.3%, 13.1%)";
        document.querySelector(".user-joined").style.color="hsl(220, 40.3%, 13.1%)";
        document.querySelector(".user-bio").style.color="grey";
        document.querySelector(".user-stats").style.backgroundColor="rgb(255, 253, 236)";
    
        document.querySelector(".content").style.boxShadow="rgba(100, 100, 111, 0.2) 0px 7px 29px 0px"
    
        document.querySelectorAll(".user-stat-title")[0].style.color="grey";
        document.querySelectorAll(".user-stat-title")[1].style.color="grey";
        document.querySelectorAll(".user-stat-title")[2].style.color="grey";
       
         document.querySelector(".contact").style.color="grey";
         document.querySelectorAll(".user-link")[0].style.color="grey";
         document.querySelectorAll(".user-link")[1].style.color="grey";
         document.querySelectorAll(".user-link")[2].style.color="grey";
         document.querySelectorAll(".user-link")[3].style.color="grey";
         //fetchDetails("primetanm")
    }
   else{
     document.querySelector(".theme").style.backgroundColor="hsl(220, 40.3%, 13.1%)";
     document.querySelector(".theme").style.color="aliceblue";
    document.querySelector(".m").innerHTML="LIGHT ☀︎";
    // //  document.querySelector("#mmm").src="assets/moon-solid.svg"
    

     document.querySelector(".search").style.boxShadow="none"
     document.querySelector(".user-stats").style.boxShadow="none"
    
     document.querySelector("body").style.backgroundColor="hsl(220, 40.3%, 13.1%)";
     document.querySelector(".container").style.backgroundColor="hsl(220, 40.3%, 13.1%)";
     document.querySelector(".topic").style.color="rgb(255, 255, 255)";
     // document.querySelector(".theme").style.color="hsl(220, 40.3%, 13.1%)";
     document.querySelector(".search").style.backgroundColor=" #1e2a47";
     document.querySelector(".search-box").style.backgroundColor=" #1e2a47";
 
     document.querySelector(".content").style.backgroundColor=" #1e2a47";
     document.querySelector(".user-name").style.color="aliceblue";
    document.querySelector(".user-joined").style.color="aliceblue";
     document.querySelector(".user-bio").style.color="white";
     document.querySelector(".user-stats").style.backgroundColor="hsl(220, 40.3%, 13.1%)";

     document.querySelector(".content").style.boxShadow="none";

     document.querySelectorAll(".user-stat-title")[0].style.color="rgb(205, 200, 200)";
     document.querySelectorAll(".user-stat-title")[1].style.color="rgb(205, 200, 200)";
     document.querySelectorAll(".user-stat-title")[2].style.color="rgb(205, 200, 200)";
   
     document.querySelector(".contact").style.color="white";
     document.querySelectorAll(".user-link")[0].style.color="white";
     document.querySelectorAll(".user-link")[1].style.color="white";
     document.querySelectorAll(".user-link")[2].style.color="white";
     document.querySelectorAll(".user-link")[3].style.color="white";
     

   }
 
})


fetchDetails("medmish")