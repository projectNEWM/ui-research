import React, {useEffect, useState} from 'react';
import {useDropzone} from 'react-dropzone'
import RootRef from '@material-ui/core/RootRef'
import Paper from '@mui/material/Paper';
import MediaUploadShell from './media-upload-shell';
import upload from "./upload.jpg";




const thumbsContainer = {
  display: 'flex',
  flexDirection: 'row',
  flexWrap: 'wrap',
  marginTop: 16
};

const thumb = {
  display: 'inline-flex',
  borderRadius: 2,
  border: '1px solid #eaeaea',
  marginBottom: 8,
  marginRight: 8,
  width: 100,
  height: 100,
  padding: 4,
  boxSizing: 'border-box'
};

const thumbInner = {
  display: 'flex',
  minWidth: 0,
  overflow: 'hidden'
};

const img = {
  display: 'block',
  width: 'auto',
  height: '100%'
};

let src = upload;


function MediaUpload(props) {
  const [files, setFiles] = useState([]);
  const {getRootProps, getInputProps} = useDropzone({
    accept: 'image/*',
    onDrop: acceptedFiles => {
      setFiles(acceptedFiles.map(file => 
        src = URL.createObjectURL(file)
        // Object.assign(file, {preview: URL.createObjectURL(file)
        )
        );
        
    }
  });
  
  const thumbs = files.map(file => (
    <div style={thumb} key={file.name}>
      <div style={thumbInner}>
        <img
          src={file.preview}
          style={img}
        />
      </div>
    </div>
  ));

  useEffect(() => () => {
    // Make sure to revoke the data uris to avoid memory leaks
    files.forEach(file => URL.revokeObjectURL(file.preview));
  }, [files]);

  return (
    <section className="container">
    <div {...getRootProps({className: 'dropzone'})}>
      <input {...getInputProps()} />
      <MediaUploadShell src={src} />
    </div>
    </section>
  );
}

// function MediaUpload(props) {
//     const {acceptedFiles, getRootProps, getInputProps} = useDropzone();
    
//     const files = acceptedFiles.map(file => (
//       <li key={file.path}>
//         {file.path} - {file.size} bytes
//       </li>
//     ));
  
//     return (
//       <section className="container">
//         <div {...getRootProps({className: 'dropzone'})} sx={{backgroundColor:"white"}}>
//           <input {...getInputProps()} />
//           <MediaUploadShell />
//         </div>
//         <aside>
//         </aside>
//       </section>
//     );
//   }

export default MediaUpload
