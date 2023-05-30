import { useEffect, useState} from 'react';
import api from '../../services/api';

function Home(){
    const [filmes, setFilmes] = useState([]);
    
    useEffect(()=>{

        async function loadFilmes(){
            const response = await api.get("movie/now_playing", {
                params:{
                    api_key:"f2943cd0a8978a717cc6868e90938397",
                    language: "pt-BR",
                    page: 1,
                }
            })

            console.log(response.data.results);
        }

        loadFilmes();

    }, [])
    return(
        <div>
            <h1>BEM VINDO A HOME</h1>
        </div>
    )
}

export default Home;