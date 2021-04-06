import React, { useState } from "react";

const Form = ({ onFormSubmit, currentSize }) => {
	const [title, setTitle] = useState("");
	const [txt, setTxt] = useState("");
	const [proof, setProof] = useState("");

	const handleTitleChange = (event) => {
		setTitle(event.target.value);
	};

	const handleTxtChange = (event) => {
		setTxt(event.target.value);
	};

	const handleProofChange = (event) => {
		setProof(event.target.value);
	};

	return (
		<div className="container m-4">
			<div
				autocomplete="on"
				name="newFakeNews"
				className="flex flex-col justify-evenly my-8 mx-auto items-center border-gray-100 border-2 rounded-md"
			>
				<label htmlFor="title" className="my-2">
					Titulo da Fake News
				</label>
				<input
					type="text"
					className="input-text"
					id="title"
					value={title}
					onChange={handleTitleChange}
				/>
				<label htmlFor="txt" className="my-2">
					Link ou Conteudo TXT
				</label>
				<input
					type="text"
					className="input-text"
					id="txt"
					value={txt}
					onChange={handleTxtChange}
				/>
				<label htmlFor="proof" className="my-2">
					Contra-Prova
				</label>
				<input
					type="text"
					className="input-text"
					id="proof"
					value={proof}
					onChange={handleProofChange}
				/>
				<button
					onClick={() => {
						const newFormValue = {
							id: currentSize,
							title: title,
							link: txt,
							proof: proof,
							ups: 0,
							downs: 0,
						};

						console.log("new form: ", newFormValue);
					}}
					name="button"
					className="my-2 w-28 h-8 bg-blue-500 hover:bg-blue-700 text-white"
				>
					Cadastrar
				</button>
			</div>
		</div>
	);
};

export default Form;
