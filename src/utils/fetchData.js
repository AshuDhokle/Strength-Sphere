
export const options = {
    method: 'GET',
    
    params: {limit: '10'},
    headers: {
      'X-RapidAPI-Key': '7ea5666828msh635cee42200214cp13a6eajsn03bd8a940d7d',
    'X-RapidAPI-Host': 'exercisedb.p.rapidapi.com'
    }
  };

  export const youtubeSearchoptions = {
    method: 'GET',
    headers: {
      'X-RapidAPI-Key': '8ea1a407edmsh5c3f3d05ce766c0p1be033jsnc7bebdb4818d',
    'X-RapidAPI-Host': 'youtube-search-and-download.p.rapidapi.com'
    }
  };
  
//const = url: 'https://exercisedb.p.rapidapi.com/exercises/bodyPart/back',

export const fetchData = async (url,options) => {
    const response = await fetch(url,options);

    const data = await response.json();

    return data;
}