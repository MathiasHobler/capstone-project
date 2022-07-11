import axios from 'axios';
import React, {useState} from 'react';
import styled from 'styled-components';

const ImageUpload = () => {
	const [imageURL, setImageURL] = useState({
		data: null,
		success: null,
		loading: null,
	});
	const imageRef = React.useRef();

	const getImageURL = async () => {
		console.log(imageRef.current.files[0]);
		setImageURL({
			data: imageURL.data,
			error: false,
			loading: true,
		});
		await axios({
			method: 'post',
			url: 'https://api.imgur.com/3/image',
			headers: {
				Authorization: `Client-ID fc88c8f5835b3ec`,
			},
			data: imageRef.current.files[0],
		})
			.then(({data}) => {
				console.log(data);
				setImageURL({
					data: data.data.link,
					error: false,
					loading: false,
				});
				alert('Save Your Changes');
			})
			.catch(err => {
				alert('image not uploaded');
				console.log(err.message);
			});
	};
	return (
		<InputContainer>
			<section>
				<label htmlFor="image">Choose File</label>
				<input type="file" ref={imageRef} id="image" onChange={getImageURL} hidden />
				<span>Upload Eventpicture</span>
				<p>{imageURL.data}</p>
			</section>
		</InputContainer>
	);
};

export default ImageUpload;

const InputContainer = styled.div`
	position: relative;
	width: 16em;

	label {
		margin-top: 1rem;
		padding: 0.5rem;
		transition: 0.5s;
		border-radius: 0.3rem;
		color: rgba(255, 255, 255, 0);
		font-family: sans-serif;
		font-size: 0.8em;
		text-transform: uppercase;
		cursor: pointer;

		&:hover {
			color: white;
		}
	}

	section {
		padding: 0.625em;
		transition: 0.5s;
		border: 1px solid rgba(255, 255, 255, 0.25);
		border-radius: 5px;
		outline: none;
		background-color: transparent;
		color: rgb(255, 255, 255);
		font-size: 1em;
		scrollbar-color: #00dfc4 #6b0b0b;
	}

	span {
		position: absolute;
		z-index: 10;
		left: 7px;
		transition: 0.5s;
		color: rgba(255, 255, 255, 0.25);
		font-size: 1em;
		text-shadow: 2px 2px 4px rgba(0, 0, 0, 0.4);
		text-transform: uppercase;
		pointer-events: none;
	}

	input {
		width: 100%;
		padding: 0.625em;
		transition: 0.5s;
		border: 1px solid rgba(255, 255, 255, 0.25);
		border-radius: 5px;
		outline: none;
		background: transparent;
		color: rgb(255, 255, 255);
		font-size: 1em;
		scrollbar-color: #00dfc4 #6b0b0b;

		&:hover ~ span {
			padding: 0 10px;
			transform: translateX(10px) translateY(-14px);
			border-right: 1px solid #1d2b3a;
			border-left: 1px solid #1d2b3a;
			border-radius: 5px;
			background: #00dfc4;
			color: #1d2b3a;
			font-size: 0.65em;
		}

		&:hover {
			border: 1px solid #00dfc4;
		}
	}
`;
