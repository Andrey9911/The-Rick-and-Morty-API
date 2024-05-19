export async function getDataEpisode(data)
{
    let res
    await fetch(data.url, {
        method: data.method,
        
    }).then( (datas) => {
        if(datas.ok) return datas.json();
        else {return datas.status}
    })
    .then((rez) => 
        {   
            res =  rez;
        }
    )
    return res

}
export async function getDataCharacter(dataQ)
{       
    let res
    const params = dataQ.isParams ?
     new URLSearchParams(dataQ.params).toString() : 
     ''
    console.log(dataQ);
    
    await fetch(dataQ.url + `${dataQ.type == 'character' ? 'character' : ''}?${params}`, {
        method: dataQ.method,
        
    }).then( (data) => {
        if(data.ok) return data.json();
        else {return data.status}
    })
    .then(( rez) => 
        {   
            res =  rez.results;
        }
    )
    return res
}