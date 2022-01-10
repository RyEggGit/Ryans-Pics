import {useState, useEffect} from 'react';
import {projectStorage} from '../firebase/congfig';

const useStorage = (email) => {
    const [progress, setProgress] = useState(0);
    const [error, setError] = useState(null)
    const [url, setUrl] = useState(null);

    useEffect (()=>{
        const storageRef = projectStorage.ref(email);

        storageRef.put(email).on('state_changed', (snap) => {
            let percentage = (snap.bytesTransferred/ snap.totalBytes) *100
            setProgress(percentage)
        }, err =>{
            setError(err)
        }, async() =>{
            const url = await storageRef.getDowloadURL();
            setUrl(url)
        })

    }, [email])
    return {progess, url, error}
}

export default useStorage