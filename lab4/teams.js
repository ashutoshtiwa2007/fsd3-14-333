let teams = [
    {id : 1,
    tname:"rusty", 
    tl:'Aashish',
    email:"ashi.raj@gmail.com",
    members:6,},
    {id : 2,
    tname:"CodeCrafters", 
    tl:'Manisha Singh',
    email:"mani.singh@gmail.com",
    members:5,},
    ];
let nextID=3;
export const getAllTeams =()=> teams;
export const getTeamById =(id)=> teams.find((teams)=> teams.id===id);
export const addTeam = (newTeam)=>{
    const team = { id: nextID++, ...newTeam };
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
    const index = teams.findIndex((teams)=>teams.id===id);
    if(index==-1)return false;
    teams.splice(index,1);
    return true;
}