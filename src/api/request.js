const url = 'https://course-api.com/react-tours-project'

export async function placesGetMethod(){
   let response = await fetch(url)
    .then(async (res)=>{
        res = await res.json()
      return res
    })
    .catch((err)=>{
      return {err:err, errorMessage:`fetchTours error: ${err.message ? err.message : ''}`}
    })

    return response;
}