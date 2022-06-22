import React, { useEffect, useState } from 'react'
import './UrlShortener.scss'
import Navbar from '../../components/navbar/Navbar'
import CopyToClipboard from 'react-copy-to-clipboard';
import axios from 'axios';

const UrlShortener = () => {
  const [shortenLink, setShortenLink] = useState('');
  const [copied, setCopied] = useState(false);
  const [value, setValue] = useState('');
  const [loading, setLoading] = useState('');

  // link shorten using API
  const fetchData = async () => {
    try {
      setLoading(true);
      const res = await axios(`https://api.shrtco.de/v2/shorten?url=${value}`)
      setShortenLink(res.data.result.full_short_link);
    } catch (error) {
      console.log(error);
    } finally {
      setLoading(false)
    }
  }

  // click to short the link
  const handleClick = () => {
    if (value.length) {
      fetchData();
    }
    setValue('');
  }

  return (
    <div className="url df-c">
      <Navbar />
      <div className="url-wrapper df-c">
        <div className="url-input df-r">
          <input
            type="text"
            className="input"
            placeholder='Your link...'
            value={value}
            onChange={e => setValue(e.target.value)}
          />
          <button className="btn" onClick={handleClick}>Shorten</button>
        </div>
        <div className='url-short-link'>
          {loading && (
            <p>Loading...</p>
          )}
          {shortenLink && (
            <div className='df-c'>
              <p>{shortenLink}</p>
              <CopyToClipboard
                text={shortenLink}
                onCopy={() => setCopied(true)}
              >
                <button className="btn">Copy to clipboard</button>
              </CopyToClipboard>
            </div>
          )}
        </div>
      </div>
    </div>
  )
}

export default UrlShortener 