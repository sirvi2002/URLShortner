import './App.css';
import { useEffect, useState } from "react";
import CopyToClipboard from "react-copy-to-clipboard";
import axios from 'axios';
const LinkResult = ({ inputValue }) => {
  const [shortenLink, setShortenLink] = useState('');
  const [copied, setCopied] = useState(false);
  const [error, setError] = useState(false);
  const [loading, setLoading] = useState(false);

  const fetchData = async () => {
    try {
      const config = {
        headers: {
            "Content-Type":"application/json"
        }
    }
      const body = {
      realUrl: inputValue
    }
      await axios.post('http://localhost:5000/shorturl', body, config).then((res) =>
            {
                console.log(res.data);
                alert(res.data.message);
                // navigate('/');
            }).catch((e) => {
                console.log("Error :- ", e);
            })
      // setLoading(true);
      // const response = await axios(`https://api.shrtco.de/v2/shorten?url=${inputValue}`);
      // setShortenLink(response.data.result.full_short_link);
    }
    catch (error) {
      setError(error);
    }
    finally {
      setLoading(false);
    }
  }

  useEffect(() => {
    if (inputValue.length) {
      fetchData();
    }
  }, [inputValue])

  useEffect(() => {
    const timeout = setTimeout(() => {
      setCopied(false);
    }, 1000);
    return () => {
      clearTimeout(timeout);
    }
  }, [copied])

  if (loading) {
    return <p className="noData">Loading...</p>
  }
  if (error) {
    return <p className="noData">Something went wrong :(</p>
  }

  return (
    <>{
      shortenLink && (
        <div className='link-result'>
          <p>{shortenLink}</p>
          <CopyToClipboard
            text={shortenLink}
          >
            <button className={copied ? 'copied' : ''} onClick={() => setCopied(true)}>Copy to clipboard</button>
          </CopyToClipboard>
        </div>
      )
    }
    </>
  )
}


export default LinkResult;