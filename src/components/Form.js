import React from "react";

const Form = () => {
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
				<input type="text" className="input-text" id="title" />
				<label htmlFor="txt" className="my-2">
					Link ou Conteudo TXT
				</label>
				<input type="text" className="input-text" id="txt" />
				<label htmlFor="proof" className="my-2">
					Contra-Prova
				</label>
				<input type="text" className="input-text" id="proof" />
				<button
					onClick={(e) => {
						console.log(document.getElementById("title").value);
						console.log(document.getElementById("txt").value);
						console.log(document.getElementById("proof").value);
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
