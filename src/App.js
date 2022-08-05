import QRCode from 'qrcode'
import { useState } from 'react';
import './App.css';

function App() {
  const [url, setUrl] = useState("")
  const [qrcode, setQrcode] = useState("")
  const [fileName, setFileName] = useState("")
  const [isActive,setIsActive] = useState(false)
  const GenerateQRCode = () => {
    QRCode.toDataURL(url, {
      width: 300,
      margin: 2,
      color:{
        dark:'#000000ff',
        light:'#ffffffff'
      }
    }, (err, url) => {
      if (err) return console.log(err);
      console.log(url);
      setQrcode(url)
      setIsActive(true)
    })
  }

  return (
    <>
      <h1>QR Code Generator</h1>
      <div className="App" >
        <div className='flex1'>
          {/* <h1>Step 1: </h1> */}
          <input type="text" id='link-input'
            placeholder='Enter the Link or text....'
            value={url}
            onChange={(e) => setUrl(e.target.value)}
          /> <br />
          <button onClick={GenerateQRCode}>Generate</button> <br />
          <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSXgwlrE_GY7_kEMxyG3A5qfWPJ8RFCi2rUuA&usqp=CAU" alt="scanner img" width={250} height={150}/>
        </div>
        <div className={isActive ? "flex2" : ""}>
    

          {qrcode &&
            <>
              <img src={qrcode} alt="qr code" />
            </>
          }
        </div>
        <div className={isActive ? "flex3" : ""}>
        {qrcode &&
            <>       
            <h3>You can download the QR Code </h3> <br />
              <input type="text" placeholder='Enter name to save QR Code'
                value={fileName} onChange={(e) => setFileName(e.target.value)}
                id="link-input"
              /> <br />
              <a href={qrcode} download={`${fileName}.png`}>Download</a>
            </>
          }
        </div>
      </div>
    </>
  );
}

export default App;
