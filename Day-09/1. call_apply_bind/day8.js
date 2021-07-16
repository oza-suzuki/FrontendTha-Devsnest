//call , apply & bind

//CALL
const server1 = {
    serverName: "Devsnest",
    getInvite: function(a,b){
      console.log(this);
      console.log(a * b);
    }
  }
  
const server2 = {
    serverName : "TheDeveloperCommunity"
}
  
server1.getInvite.call(server2,1,2); // ACTUALLY ITS => server1.getInvite.call() behind the scene.

//APPLY
server1.getInvite.apply(server2, [1,2]);

//BIND used to return
const ans = server1.getInvite.bind(server2, 1,2);
//console.log(ans);
ans();