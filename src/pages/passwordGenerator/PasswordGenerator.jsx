import React, { useState } from 'react'
import './PasswordGenerator.scss'
import Navbar from '../../components/navbar/Navbar'
import CopyToClipboard from 'react-copy-to-clipboard';
import { numbersChars, uppercaseLetters, lowercaseLetters, symbolsChars } from "../../utils/characters"

const PasswordGenerator = () => {
  const [password, setPassword] = useState('')
  const [passwordLength, setPasswordLength] = useState(10)
  const [uppercase, setUppercase] = useState(false)
  const [lowercase, setLowercase] = useState(false)
  const [numbers, setNumbers] = useState(false)
  const [symbols, setSymbols] = useState(false)

  const handleGeneratePasswordl = (e) => {
    let charactersList = ''
    if (uppercase) {
      charactersList += uppercaseLetters
    }
    if (lowercase) {
      charactersList += lowercaseLetters
    }
    if (numbers) {
      charactersList += numbersChars
    }
    if (symbols) {
      charactersList += symbolsChars
    }

    setPassword(createPassword(charactersList))
  }

  const createPassword = (charactersList) => {
    let password = ''
    const charactersListLength = charactersList.length

    for (let i = 0; i < passwordLength; i++) {
      const randomCharIndex = Math.round(Math.random() * charactersListLength)
      password += charactersList.charAt(randomCharIndex)
    }
    return password
  }

  return (
    <div className="password df-r">
      <Navbar />
      <div className="password-wrapper df-c">
        <div className="password-output df-c">
          <p> {password} </p>
          {password && (
            <CopyToClipboard
              text={password}
            >
              <button className="btn">Copy to clipboard</button>
            </CopyToClipboard>
          )}
        </div>

        <div className="password-options df-c">
          <div className="form-group">
            <label htmlFor="password-length">Password Length</label>
            <input
              defaultValue={passwordLength}
              type="number"
              id="password-length"
              name='password-length'
              max='20' min='6'
              onChange={e => setPasswordLength(e.target.value)}
            />
          </div>
          <div className="form-group">
            <label htmlFor="uppercase-letters">Uppercase Letters</label>
            <input
              type="checkbox"
              id="uppercase-letters"
              name='uppercase-letters'
              checked={uppercase}
              onChange={e => setUppercase(e.target.checked)}
            />
          </div>
          <div className="form-group">
            <label htmlFor="lowercase-letters">Lowercase Letters</label>
            <input
              type="checkbox"
              id="lowercase-letters"
              name='lowercase-letters'
              checked={lowercase}
              onChange={e => setLowercase(e.target.checked)}
            />
          </div>
          <div className="form-group">
            <label htmlFor="numbers">Numbers</label>
            <input
              type="checkbox"
              id="numbers"
              name='numbers'
              checked={numbers}
              onChange={e => setNumbers(e.target.checked)}
            />
          </div>
          <div className="form-group">
            <label htmlFor="symbols">Symbols</label>
            <input
              type="checkbox"
              id="symbols"
              name='symbols'
              checked={symbols}
              onChange={e => setSymbols(e.target.checked)}
            />
          </div>
        </div>

        <button disabled={(passwordLength > 20) || (passwordLength < 6)} className="btn" onClick={handleGeneratePasswordl}>Generate Password</button>
      </div>
    </div>
  )
}

export default PasswordGenerator 