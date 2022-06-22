import React, { useState } from 'react'
import QRCode from 'qrcode'
import './QrGenerator.scss'
import Navbar from '../../components/navbar/Navbar'

const QrGenerator = () => {
  const [url, setUrl] = useState('')
  const [qrcode, setQrcode] = useState('')

  // Generate QR Code
  const GenerateQRCode = () => {
    QRCode.toDataURL(url, {
      width: 300,
      margin: 1.25,
      color: {
        dark: '#004b7d',
        light: '#fff'
      }
    }, (err, url) => {
      if (err) return console.error(err)
      setQrcode(url)
    })
  }

  return (
    <div className="qr-generator df-c">
      <Navbar />
      <div className="qr-generator-wrapper df-c">
        <div className="qr-code-input df-r">
          <input
            className='input'
            type="text"
            placeholder='Your link...'
            value={url}
            onChange={e => setUrl(e.target.value)}
          />
          <button onClick={GenerateQRCode} className='btn qr-generate'> Generate </button>
        </div>
        {qrcode && (
          <div className='qr-code-image df-c'>
            <img src={qrcode} />
            <a href={qrcode} download='qrcode.png' className='btn'>Download</a>
          </div>
        )}
      </div>
    </div>
  )
}

export default QrGenerator