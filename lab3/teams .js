let teams = [
    {id : 1,
    tname:"rusty", 
    tl:'Aashish',
    email:"ashi.raj@gmail.com",
    members:6,},
    {id : 1,
    tname:"CodeCrafters", 
    tl:'Manisha Singh',
    email:"mani.singh@gmail.com",
    members:5,},
    ];
let nextID=3;
export const getALLTeams =()=> teams;
export const getTeamById =(id)=> teams.find((teams)=> teams.id===id);
export const addTeam = (newTeam)=>{
    const team ={id : nestId++,newTeam};
    teams.push(team);
    return team;
    
}
export const updateTeamById =(id,updateTeam)=>{
    const team =getTeamById(id);
    if(!team)return null;
    Object.assign(team,updateTeam);
    return team;
}
export const deleteTeam =(id) =>{
    const index = teams.findIndex((team)=team.id===id);
    if(index==-1)return false;
    team.splice(index,1);
    return true;
}