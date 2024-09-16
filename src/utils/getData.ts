import axios from "axios";

async function getData(
  url: string,
  setState: React.Dispatch<React.SetStateAction<any>>
) {
  try {
    const response = await axios.get(url);
    const data = await response.data;
    setState(data);
  } catch (error) {
    console.log(error);
  }
}

export default getData;
