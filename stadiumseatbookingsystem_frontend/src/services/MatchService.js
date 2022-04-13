import axios from 'axios';

const USER_API_BASE_URL="http://localhost:8000/matchs";
class MatchService{

    
    matchAdd(match){
        return axios.post(USER_API_BASE_URL+'/add',match,{
        headers:{
            'Content-Type':'application/json'
        }
        });
    }
    getAllMatchs(){
        return axios.get(USER_API_BASE_URL+'/findall')
    }
    getByMatchId(id){
        return axios.get(USER_API_BASE_URL+'/viewMatch/'+id)
    }

    getByMatchId(id){
        return axios.get(USER_API_BASE_URL+'/viewMatch/'+id)
    }
    
    editMatch(Match){
        return axios.put(USER_API_BASE_URL+'/update',Match)
    }
    deleteMatch(matchId){
        return axios.delete(USER_API_BASE_URL+'/delete/'+matchId)
    }
    
    
}
export default new MatchService();