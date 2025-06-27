const YOUR_API_KEY = "6397c8348f7a15b7d8170a746ec2bb6c";
const fetchMovieDetails = async () => {
  try {
    const MOVIE_NAME = await document.getElementById("movie-id").value;
    const response = await fetch(
      `https://api.themoviedb.org/3/search/movie?api_key=${YOUR_API_KEY}&query=${MOVIE_NAME}`
    );
    if (!response.ok) {
      throw new Error(Error);
    }
    const data = await response.json();
    const poster_id = data.results[0].poster_path;
    const srcData = `https://image.tmdb.org/t/p/w500/${poster_id}`;
    const img = document.createElement("img");
    img.src = srcData;
    document.getElementById("posterId").textContent = "";
    document.getElementById("posterId").appendChild(img);
    console.log(data);
    document.getElementById("desc-id").innerText = data.results[0].overview;
    document.getElementById("movie-id").value = "";
  } catch (error) {
    console.log(error);
  }
};

const createStarRating=async()=>{
  const star= document.createElement('span')
  
}
