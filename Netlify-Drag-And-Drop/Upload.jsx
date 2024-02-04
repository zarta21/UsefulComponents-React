import React, { useState } from 'react'
import './upload.scss'


const Upload = () => {
   
    const [files, setFiles] = useState(null)
    const [date, setDate] = useState('')
    const [loading, setLoading] = useState(false)

    const HandleChange = (e) => {
        const target = e.target.files
        setDate(new Date().toLocaleTimeString("en-US", { hour: "2-digit", minute: "2-digit"}))
        setLoading(true)
        setTimeout(() => {
            setLoading(false)
            setFiles(target)
        }, 2000)        
    }

  return (
    <div className='upload'>
        <div className="container">
            <div className="header">
                <h2>Deploys</h2>
            </div>
            <div className={`${files ? "text" : "hide"}`}>
                <div className="left">
                    <p className='links'>
                        <a href="#" className='link1 z-idx uploaded'>
                            <span>Production</span>
                        </a>
                        <a href="#" className='link2 z-idx status-uploaded'>
                            <span>Uploaded</span>
                        </a>
                    </p>
                    <p className='message'>
                        <span className='z-idx'>No deploy message</span>
                    </p>
                </div>
                <div className="right">
                    <p className={`${!loading && files ? "message" : "hide"}`}>
                        <span className='z-idx'>{`Today at ${date}`}</span>
                    </p>
                </div>
                <div className="icon">
                    <span title='Go to deploy details'>                        
                            <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24"><path d="M7.293 4.707 14.586 12l-7.293 7.293 1.414 1.414L17.414 12 8.707 3.293 7.293 4.707z"/></svg>
                    </span>
                </div>
            </div>
            <div className="text">
                <div className="left">
                    <p className='links'>
                        <a href="#" className='link1 z-idx'>
                            <span>Production</span>
                        </a>
                        <a href="#" className='link2 z-idx'>
                            <span >Published</span>
                        </a>
                    </p>
                    <p className='message'>
                        <span className='z-idx'>No deploy message</span>
                    </p>
                </div>
                <div className="right">
                    <p className='links'>
                        <a href="#" className='link1 z-idx'>
                            <span>{`${new Date().toLocaleString('default', { month: 'short' })} ${new Date().getDate()}, ${new Date().getFullYear()} at ${new Date().toLocaleTimeString("en-US", { hour: "2-digit", minute: "2-digit"})}`}</span>
                        </a>
                    </p>
                    <p className={`${!loading && files ? "message" : "hide"}`}>
                        <span className='z-idx'>Deployed in 2s</span>
                    </p>
                </div>
                <div className="icon">
                    <span title='Go to deploy details'>                        
                            <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24"><path d="M7.293 4.707 14.586 12l-7.293 7.293 1.414 1.414L17.414 12 8.707 3.293 7.293 4.707z"/></svg>
                    </span>
                </div>
            </div>
            <div className="dropzone">
                <div className="dropzone-content">
                    {files && Array.from(files).map(file => (
                            <div key={file.name} className="dropzone-message">
                                <span >{`File name: ${file.name}`}</span>
                                <br />
                                <span>{`File size: ${file.size} bytes`}</span>
                                <br />
                                <span>{`File type: ${file.type}`}</span>
                                <br />
                            </div>                            
                        ))
                    }
                    {loading 
                        ? <><p>Uploading... <br /> <span className='message'>Please don't refresh!</span></p></>
                        : <>
                            <p className={files ? 'hide' : ""}>
                                Need to update your site?
                                <br />
                                Drag and drop your site output folder here
                            </p>
                            <p className={`dropzone-browse ${files ? 'hide' : " "}`}>
                                Or, 
                                <label htmlFor="dropzone-upload">browse to upload</label>
                                .
                                <input type="file" id='dropzone-upload'  onChange={HandleChange} multiple/>
                            </p>
                            </>
                    }                    
                </div>
            </div>
        </div>
    </div>
  )
}

export default Upload
