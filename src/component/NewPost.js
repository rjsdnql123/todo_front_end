import React, { useState } from 'react';

function NewPost() {

    const [data, setData] = useState({

        photo: null,

        use_id: '6',

        content: '',

        postCategory: '',
    }
    )


    const [imgBase64, setImgBase64] = useState(""); // 파일 base64
    const [imgFile, setImgFile] = useState(null); //파일

    const handleChangeFile = (event) => {
        let reader = new FileReader();

        reader.onloadend = () => {
            // 2. 읽기가 완료되면 아래코드가 실행됩니다.
            const base64 = reader.result;
            if (base64) {
                setImgBase64(base64.toString()); // 파일 base64 상태 업데이트
            }
        };
        if (event.target.files[0]) {
            reader.readAsDataURL(event.target.files[0]); // 1. 파일을 읽어 버퍼에 저장합니다.
            setImgFile(event.target.files[0]); // 파일 상태 업데이트
        }
    };

    const testChange = (e) => {
        const { name, value } = e.target
        setData({
            ...data,
            [name]: value
        })
    }

    console.log(imgBase64)
    const addCustomer = (e) => {

        e.preventDefault()
        const formData = new FormData();

        formData.append("photo", imgFile);

        formData.append('user_id', data.use_id)

        formData.append('content', data.content)

        formData.append('postCategory', data.postCategory)


        fetch(`http://3.37.164.241:8080/post/`, {
            method: 'POST',
            body: formData,



        }).then((res) => {
            console.log(res, 'res')
            return res.json();
        }).then((res) => {
            console.log(res)
        })


    }





    return (
        <div >
            <input onChange={handleChangeFile} name='photo' type='file'></input>
            <input onChange={testChange} name='user_id' ></input>
            <input onChange={testChange} name='content'></input>
            <input onChange={testChange} name='postCategory'></input>
            <button onClick={addCustomer} />
            <img src={imgBase64} />
        </div>
    )
}

export default NewPost;
