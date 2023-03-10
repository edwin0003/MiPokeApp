import { useState } from "react";
function App() {
  const [valorInput, setValorInput] = useState("");
  const [gifs, setGifs] = useState([]);
  const onChange = (evento) => {
    const valor = evento.target.value;
    setValorInput(valor);
  };

  const getGifs = async (query) => {
    const url = `https://api.giphy.com/v1/gifs/search?api_key=wiAlbYhmhLyOJLt6JIKRAHFoLtoIYvA1&q=${query}`;
    const response = await fetch(url);
    const data = await response.json();
    console.log(data);
    return data.data;
  };
  const onSubmit = async (evento) => {
    evento.preventDefault();
    const gifs = await getGifs(valorInput);
    setGifs(gifs);
  };
  return (
    <div>
      <form onSubmit={onSubmit}>
        <input type="text" onChange={onChange} />
      </form>
      <div
        style={{
          display: "grid",
          gridTemplateColumns: "repeat(auto-fit,minmax(250px,1fr))",
          gap: "20px",
        }}
      >
        {gifs.map((gif) => (
          <img key={gif.id}
            src={gif.images.original.url}
            alt=""
            style={{ width: "280px", height: "380" }}
          />
        ))}
      </div>
    </div>
  );
}

export default App;
