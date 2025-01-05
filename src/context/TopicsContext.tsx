import { useState , useEffect , useContext , createContext } from 'react'

import axios from "axios"


interface Topic {
    id:number ;
    title:string ;
    description:string ;
    level:string;
    branch: string

}

interface TopicsContextType {
    topics:Topic[];
    loading:boolean;
    error:string|null
}

const TopicsContext = createContext<TopicsContextType|undefined>(undefined) ;

export const TopicsProvider:React.FC<{children:React.ReactNode}> = ({children})=>{
const [topics , setTopics] = useState<Topic[]>([])
const [loading,setLoading] = useState<boolean>(true)
const [error , setError] = useState<string|null>(null)

// const listedDescription =(description: string)=> description.split('.').map(item=>item.trim())
useEffect(() => {
    const fetchTopics = async () => {
      try {
        const response = await axios.get(`${import.meta.env.VITE_API_URL_API_BASE_URL}/topics/`);
        setTopics(response.data);
        console.log(response.data)
      } catch (err) {
        setError('Failed to load topics');
      } finally {
        setLoading(false);
      }
    };

    fetchTopics();
  }, []);




return (
<TopicsContext.Provider value={{topics, loading , error}} >
{children}

</TopicsContext.Provider>


)


 }


 export const useTopics = ():TopicsContextType => {
const context = useContext(TopicsContext)
if (!context) {
    throw new Error('useTopics must be used within a TopicsProvider')
}
return context
 }