
export const Form = () => {
    return (
        <div className="container">
            <form action="" method="post">
					<label htmlFor="nome">Nome</label>
					<input type="text" id="nome" />
					<input type="submit" value="Submit"></input>
            </form>
        </div>
    )
}

export default Form;